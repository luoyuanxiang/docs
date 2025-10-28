---
# SSE 日志监控
sidebar: false
outline: [2,3]
---

<div class="sse-monitor">
  <div class="toolbar">
    <div class="left">
      <label class="field">
        <span>MAC：</span>
        <input v-model="mac" class="input" placeholder="请输入设备 MAC" />
      </label>
      <label class="field radio">
        <input type="radio" value="prod" v-model="env" />
        <span>正式环境</span>
      </label>
      <label class="field radio">
        <input type="radio" value="test" v-model="env" />
        <span>测试环境</span>
      </label>
      <button class="btn primary" @click="onConnect" :disabled="!mac || connecting">
        {{ isConnected ? '已连接' : (connecting ? '连接中…' : '连接 MQTT') }}
      </button>
      <button class="btn" @click="toggleSse" :disabled="!canToggleSse">
        {{ sseActive ? '断开 SSE' : '开启 SSE' }}
      </button>
      <span class="status" :class="{ on: sseActive }">SSE：{{ sseActive ? '已开启' : '未开启' }}</span>
    </div>
    <div class="right">
      <button class="btn ghost" @click="pauseReceiving" :disabled="paused">暂停接收</button>
      <button class="btn ghost" @click="resumeReceiving" :disabled="!paused">恢复接收</button>
      <button class="btn warning" @click="clearAll">清除全部日志</button>
    </div>
  </div>

  <div class="actions">
    <button class="chip" @click="callAction('updateDeviceCache')">更新设备缓存数据</button>
    <button class="chip" @click="callAction('updateLineCache')">更新线路缓存数据</button>
    <button class="chip" @click="callAction('pushAllStaticLines')">推送全部静态线路数据</button>
    <button class="chip" @click="callAction('repushProgramList')">重新推送节目清单</button>
    <button class="chip" @click="callAction('getCurrentDeviceStaticLine')">获取当前设备静态线路数据</button>
    <button class="chip" @click="callAction('getTianfuFlights')">获取天府机场航班数据</button>
    <button class="chip" @click="callAction('getBusLaneOccupancy')">获取公交车道占道信息</button>
    <button class="chip danger" @click="callAction('closeAllMqtt')">关闭所有MQTT连接</button>
    <button class="chip danger" @click="callAction('clearWillMessages')">清除遗嘱消息</button>
  </div>

  <div class="grid">
    <div
      class="panel"
      v-for="item in dataTypes"
      :key="item.type"
      :style="{ '--accent': colorMap[item.color] }"
    >
      <div class="panel__header">
        <div class="panel__title">
          <span class="dot" :style="{ background: colorMap[item.color] }"></span>
          <span class="name">{{ item.name }}</span>
          <span v-if="item.topic" class="topic">Topic: {{ item.topic }}</span>
        </div>
        <div class="panel__tools">
          <span class="count" :title="'日志条数'">{{ logsByType[item.type]?.length || 0 }}</span>
          <button class="icon-btn" title="放大" @click="maximize(item.type)">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm12 5h-5v-2h3v-3h2v5zM7 5h3V3H5v5h2V5zm14 0V3h-5v2h3v3h2V5z"/></svg>
          </button>
          <button class="icon-btn" title="清空该窗口" @click="clearType(item.type)">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </div>
      </div>
      <div class="panel__body" :data-empty="(logsByType[item.type]?.length||0)===0">
        <template v-if="(logsByType[item.type]?.length || 0) > 0">
          <div class="log" v-for="log in logsByType[item.type]" :key="log.id">
            <div class="log__meta">
              <span class="ts">{{ log.time }}</span>
              <button class="mini" @click="copyLog(log)">复制</button>
            </div>
            <pre class="log__content" v-html="log.prettyHtml" @click="copyLog(log)" title="点击复制 JSON"></pre>
          </div>
        </template>
        <template v-else>
          <div class="empty">暂无数据</div>
        </template>
      </div>
    </div>
  </div>

  <transition name="fade">
    <div v-if="maximizedType !== null" class="overlay">
      <div class="overlay__inner">
        <div class="overlay__header">
          <div class="left">
            <strong>放大视图：</strong>
            <span>{{ typeName(maximizedType) }}</span>
          </div>
          <div class="right">
            <button class="btn ghost" @click="downloadLogs(maximizedType)">导出 JSON</button>
            <button class="btn" @click="maximizedType = null">关闭</button>
          </div>
        </div>
        <div class="overlay__body">
          <div class="log" v-for="log in logsByType[maximizedType]" :key="'max-'+log.id">
            <div class="log__meta">
              <span class="ts">{{ log.time }}</span>
              <button class="mini" @click="copyLog(log)">复制</button>
            </div>
            <pre class="log__content" v-html="log.prettyHtml" @click="copyLog(log)" title="点击复制 JSON"></pre>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition name="toast">
    <div v-if="toast.visible" class="toast" :class="toast.type">{{ toast.message }}</div>
  </transition>
</div>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue'
import dayjs from 'dayjs'

const MAX_LOGS_PER_WINDOW = 200

const dataTypes = [
  {type: 1, name: '新报文计划发班数据', topic: 'bocc', color: 'primary'},
  {type: 2, name: '静态线路数据', topic: 'bocc', color: 'warning'},
  {type: 3, name: '动态车辆数据', topic: 'bocc', color: 'info'},
  {type: 4, name: '天府机场航班数据', topic: '', color: 'success'},
  {type: 5, name: '应急发布', topic: 'emergency', color: 'danger'},
  {type: 6, name: 'APP升级', topic: 'device_app_upgrade', color: 'primary'},
  {type: 7, name: '业务指令', topic: 'action', color: 'warning'},
  {type: 8, name: '指令', topic: 'action', color: 'info'},
  {type: 9, name: '节目撤回', topic: 'message', color: 'success'},
  {type: 10, name: '应急撤回', topic: 'emergency', color: 'danger'},
  {type: 11, name: '老报文计划发班', topic: 'bocc', color: 'primary'},
  {type: 12, name: '节目清单', topic: 'message', color: 'warning'},
  {type: 13, name: '头尾腰牌消息', topic: 'label', color: 'info'},
  {type: 14, name: '头尾腰牌回调', topic: 'label', color: 'success'},
  {type: 15, name: '公交车可占道信息', topic: '', color: 'danger'},
  {type: 99, name: '平台确认信息', topic: 'success', color: 'primary'},
]

const colorMap = {
  primary: 'var(--vp-c-brand-1)',
  warning: '#f6a609',
  info: '#4fb0ff',
  success: '#30c48d',
  danger: '#ff5d73',
}

const mac = ref('')
const env = ref('test')
const connecting = ref(false)
const isConnected = ref(false)
const paused = ref(false)
const sseActive = ref(false)
let es /** @type {EventSource | null} */ = null

const logsByType = reactive(Object.fromEntries(dataTypes.map(dt => [dt.type, []])))

const canToggleSse = computed(() => !!mac.value && isConnected.value)

function typeName(type){
  const item = dataTypes.find(x => x.type === type)
  return item?.name || `类型 ${type}`
}

function clearType(type){
  logsByType[type].splice(0, logsByType[type].length)
}

function clearAll(){
  for(const dt of dataTypes){
    clearType(dt.type)
  }
  toastOk('已清除全部日志')
}

function pauseReceiving(){
  paused.value = true
}

function resumeReceiving(){
  paused.value = false
}

function maximize(type){
  maximizedType.value = type
}

const maximizedType = ref(null)

function copyLog(log){
  const text = log.jsonString
  if(!navigator.clipboard){
    // 退化处理
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand('copy') } catch {}
    document.body.removeChild(ta)
    toastOk('已复制到剪贴板')
    return
  }
  navigator.clipboard.writeText(text).then(() => toastOk('已复制到剪贴板')).catch(() => toastErr('复制失败'))
}

function downloadLogs(type){
  const arr = logsByType[type].map(l => l.parsed)
  const blob = new Blob([JSON.stringify(arr, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${typeName(type)}-logs-${dayjs().format('YYYYMMDD-HHmmss')}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function ensureArrayLimit(arr){
  if(arr.length > MAX_LOGS_PER_WINDOW){
    arr.splice(MAX_LOGS_PER_WINDOW)
  }
}

function addLogByType(type, payload){
  const list = logsByType[type] || logsByType[99]
  const pretty = prettyHtml(payload)
  const jsonString = JSON.stringify(payload, null, 2)
  list.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    time: dayjs().format('HH:mm:ss.SSS'),
    parsed: payload,
    jsonString,
    prettyHtml: pretty,
  })
  ensureArrayLimit(list)
}

function routeMessage(data){
  const type = data?.dataType ?? data?.type ?? 99
  const targetType = dataTypes.some(dt => dt.type === type) ? type : 99
  addLogByType(targetType, data)
}

function prettyHtml(obj){
  // 安全转义 + 简单高亮（匹配实际双引号，不使用 &quot;）
  const json = JSON.stringify(obj, null, 2)
  const esc = (s)=> s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  let out = esc(json)
  // 高亮键：行首缩进 + "key" + 冒号
  out = out.replace(/^(\s*)(".*?")(\s*:\s*)/gm, '$1<span class="k">$2</span>$3')
  // 高亮字符串值
  out = out.replace(/:\s*"(.*?)"/g, ': <span class="s">"$1"</span>')
  // 高亮数字值（含科学计数）
  out = out.replace(/:\s*(-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?)/g, ': <span class="n">$1</span>')
  // 高亮布尔
  out = out.replace(/:\s*(true|false)/g, ': <span class="b">$1</span>')
  // 高亮 null
  out = out.replace(/:\s*(null)/g, ': <span class="nl">$1</span>')
  return out
}

function buildApi(path){
  // 统一前缀，可按需调整为不同环境域名
  const prefix = '' // 相对路径，反向代理至后端
  return `${prefix}${path}`
}

async function onConnect(){
  if(!mac.value) return
  connecting.value = true
  try{
    const res = await fetch(buildApi('/api/mqtt/connect'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Env': env.value },
      body: JSON.stringify({ mac: mac.value })
    })
    if(!res.ok) throw new Error('连接失败')
    isConnected.value = true
    toastOk('MQTT 已连接')
    // 自动打开 SSE
    await openSse()
  }catch(e){
    console.error(e)
    toastErr('连接失败')
  }finally{
    connecting.value = false
  }
}

function toggleSse(){
  if(sseActive.value){
    closeSse()
  }else{
    openSse()
  }
}

async function openSse(){
  if(!mac.value) { toastErr('请先输入 MAC'); return }
  if(es){ try{ es.close() }catch{} es = null }
  paused.value = false
  try{
    const url = buildApi(`/api/sse/stream?mac=${encodeURIComponent(mac.value)}&env=${env.value}`)
    es = new EventSource(url)
    es.onopen = () => { sseActive.value = true }
    es.onerror = () => { sseActive.value = false }
    es.onmessage = (e) => {
      if(paused.value) return
      try{
        const data = JSON.parse(e.data)
        routeMessage(data)
      }catch(err){
        // 若不是 JSON，则包一层
        routeMessage({ dataType: 99, raw: e.data })
      }
    }
  }catch(err){
    console.error(err)
    toastErr('SSE 打开失败')
  }
}

function closeSse(){
  if(es){ try{ es.close() }catch{}
    es = null
  }
  sseActive.value = false
}

async function callAction(key){
  const endpoints = {
    updateDeviceCache: { path: '/api/cache/device', method: 'POST' },
    updateLineCache: { path: '/api/cache/line', method: 'POST' },
    pushAllStaticLines: { path: '/api/push/static-lines', method: 'POST' },
    repushProgramList: { path: '/api/push/program-list', method: 'POST' },
    getCurrentDeviceStaticLine: { path: `/api/get/static-lines?mac=${encodeURIComponent(mac.value)}`, method: 'GET' },
    getTianfuFlights: { path: '/api/get/tianfu-flights', method: 'GET' },
    getBusLaneOccupancy: { path: '/api/get/bus-lane-occupancy', method: 'GET' },
    closeAllMqtt: { path: '/api/mqtt/close-all', method: 'POST' },
    clearWillMessages: { path: '/api/mqtt/clear-will', method: 'POST' },
  }
  const ep = endpoints[key]
  if(!ep){ return }
  try{
    const res = await fetch(buildApi(ep.path), { method: ep.method, headers: { 'X-Env': env.value } })
    if(!res.ok) throw new Error('调用失败')
    toastOk('执行成功')
  }catch(e){
    console.error(e)
    toastErr('执行失败')
  }
}

onMounted(() => {
  // 从 URL 恢复 mac/env
  try{
    const sp = new URLSearchParams(location.search)
    const m = sp.get('mac')
    const ev = sp.get('env')
    if(m) mac.value = m
    if(ev === 'prod' || ev === 'test') env.value = ev
  }catch{}
})

onBeforeUnmount(() => {
  closeSse()
})

// Toast
const toast = reactive({ visible: false, message: '', type: '' })
let toastTimer = null
function toastShow(message, type='ok'){
  toast.message = message
  toast.type = type
  toast.visible = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toast.visible = false, 1600)
}
function toastOk(msg){ toastShow(msg, 'ok') }
function toastErr(msg){ toastShow(msg, 'err') }
</script>

<style scoped>
:root{
  --bg: var(--vp-c-bg);
  --card: var(--vp-c-bg-soft);
  --text: var(--vp-c-text-1);
  --muted: var(--vp-c-text-2);
  --border: var(--vp-c-divider);
  --radius: 14px;
}

.sse-monitor{ max-width: 1400px; margin: 0 auto; }

.toolbar{ display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px; padding:14px; background:var(--card); border:1px solid var(--border); border-radius:var(--radius); }
.toolbar .left, .toolbar .right{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.field{ display:flex; align-items:center; gap:8px; color:var(--muted); }
.field .input{ height:36px; padding:0 12px; border:1px solid var(--border); border-radius:10px; background:var(--bg); color:var(--text); min-width:260px; }
.field.radio{ gap:6px; padding:6px 10px; border:1px solid var(--border); border-radius:999px; background:var(--bg); }

.btn{ height:36px; padding:0 14px; border-radius:10px; border:1px solid var(--border); background:var(--bg); color:var(--text); cursor:pointer; }
.btn.primary{ background: var(--vp-c-brand-1); color:#fff; border-color: transparent; }
.btn.warning{ background: #f6a609; color:#fff; border-color: transparent; }
.btn.ghost{ background: transparent; }
.btn:disabled{ opacity:0.6; cursor:not-allowed; }
.status{ font-size:12px; color:var(--muted); }
.status.on{ color: var(--vp-c-brand-1); }

.actions{ margin:14px 0 18px; display:flex; flex-wrap:wrap; gap:10px; }
.chip{ padding:8px 12px; border-radius:999px; border:1px solid var(--border); background:var(--card); color:var(--text); cursor:pointer; }
.chip.danger{ border-color:#ff5d73; color:#ff5d73; }

.grid{ display:grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap:14px; }
@media (max-width: 1200px){ .grid{ grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 920px){ .grid{ grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px){ .grid{ grid-template-columns: 1fr; } }

.panel{ background: var(--card); border:1px solid var(--border); border-radius: var(--radius); display:flex; flex-direction:column; min-height: 280px; }
.panel__header{ display:flex; align-items:center; justify-content:space-between; padding:12px; border-bottom:1px solid var(--border); }
.panel__title{ display:flex; align-items:center; gap:8px; font-weight:600; }
.panel__title .dot{ width:10px; height:10px; border-radius:50%; opacity:0.9; }
.panel__title .name{ color: var(--text); }
.panel__title .topic{ color: var(--muted); font-size:12px; background: color-mix(in oklab, var(--accent) 14%, var(--card)); padding:2px 8px; border-radius:999px; border:1px solid color-mix(in oklab, var(--accent) 40%, transparent); }
.panel__tools{ display:flex; align-items:center; gap:8px; }
.panel__tools .count{ font-size:12px; color:var(--muted); padding:2px 8px; border-radius:999px; border:1px solid var(--border); }
.icon-btn{ width:32px; height:32px; display:grid; place-items:center; border-radius:8px; border:1px solid var(--border); background:transparent; color:var(--muted); cursor:pointer; }
.icon-btn:hover{ color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }

.panel__body{ position:relative; padding:8px; overflow:auto; max-height: 380px; }
.panel__body[data-empty="true"]{ display:grid; place-items:center; }
.empty{ color:var(--muted); font-size:13px; }

.log{ background: var(--bg); border:1px solid var(--border); border-radius: 10px; margin:8px; overflow:hidden; box-shadow: 0 0 0 2px color-mix(in oklab, var(--accent) 12%, transparent) inset; }
.log__meta{ display:flex; align-items:center; gap:8px; justify-content:space-between; padding:8px 10px; background: color-mix(in oklab, var(--accent) 10%, var(--card)); border-bottom:1px solid var(--border); }
.log__meta .ts{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size:12px; color:var(--muted); }
.log__meta .mini{ height:24px; padding:0 8px; border-radius:8px; border:1px solid var(--border); background:transparent; color:var(--text); cursor:pointer; }
.log__content{ margin:0; padding:10px 12px; font-size:12px; line-height:1.4; color:var(--text); white-space:pre; cursor:copy; }

/* JSON 高亮 */
.log__content .k{ color:#a371f7; }
.log__content .s{ color:#00b8d9; }
.log__content .n{ color:#f6a609; }
.log__content .b{ color:#30c48d; }
.log__content .nl{ color:#ff5d73; }

/* Overlay */
.overlay{ position:fixed; inset:0; background: color-mix(in oklab, black 45%, transparent); z-index: 50; display:grid; place-items:center; padding:24px; }
.overlay__inner{ width:min(1200px, 96vw); height:min(86vh, 900px); background:var(--card); border:1px solid var(--border); border-radius: var(--radius); display:flex; flex-direction:column; overflow:hidden; }
.overlay__header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid var(--border); }
.overlay__body{ padding:10px; overflow:auto; background:var(--bg); }

/* Transitions */
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease; }
.fade-enter-from,.fade-leave-to{ opacity:0; }
.toast-enter-active,.toast-leave-active{ transition: all .2s ease; }
.toast-enter-from,.toast-leave-to{ transform: translateY(6px); opacity:0; }

.toast{ position:fixed; bottom:20px; left:50%; transform:translateX(-50%); padding:10px 14px; border-radius:999px; color:#fff; background:#1f8a4d; z-index:60; box-shadow:0 8px 30px rgba(0,0,0,.18); }
.toast.err{ background:#c0392b; }
</style>
