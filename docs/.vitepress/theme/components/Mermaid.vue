<template>
  <div v-html="svgRef"></div>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import mermaid from "mermaid";

const props = defineProps({
  id: String,
  code: String,
})

const render = async (id: string, code: string) => {
  // mermaid 初始化
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default'
  })
  const {svg} = await mermaid.render(id, code)
  return svg
}
// 在组件挂载后进行mermaid渲染
onMounted(async () => {
  svgRef.value = await render(props.id, decodeURIComponent(props.code))
})

const svgRef = ref('')
</script>
