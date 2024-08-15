<template>
  <transition>
    <button v-if="backToTopShow" type="button" class="vp-back-to-top-button" aria-label="返回顶部"
            @click="scrollToTop">
      <span class="vp-scroll-progress" role="progressbar" aria-labelledby="loadinglabel"
            :aria-valuenow="currentHeight">
        <svg><circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" stroke-width="4" :stroke-dasharray="`${
                                                Math.PI * (progress || 0) * 0.48
                                            } ${Math.PI * (100 - (progress || 0)) * 0.48}`"></circle>
        </svg></span>
      <div class="back-to-top-icon"></div>
    </button>
  </transition>
</template>

<script setup>
import './styles/vars.css'
import './styles/back-to-top.scss'
import {computed, onMounted, ref} from "vue";
import {useData} from "vitepress";

const {frontmatter} = useData()

const currentHeight = ref(0)

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const backToTopShow = ref(false)
const bodyHeight = ref(0)
const windowHeight = ref(0)

onMounted(() => {
  // 页面滚动窗口监听事件
  window.onscroll = function () {
    bodyHeight.value = document.body.clientHeight
    windowHeight.value = window.innerHeight
    // 获取浏览器卷去的高度
    currentHeight.value = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    backToTopShow.value = frontmatter.value.backToTop !== false && currentHeight.value > 400
  }
})

const progress = computed(
    () => (currentHeight.value / (bodyHeight.value - windowHeight.value)) * 100,
)
</script>
