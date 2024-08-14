import {h, nextTick, onMounted, watch} from 'vue'
import {useData, EnhanceAppContext, Theme, useRoute} from 'vitepress'
import DefaultTheme from 'vitepress/theme'


import MLayout from './components/MLayout.vue'


import mediumZoom from 'medium-zoom'

import './style/index.scss'

import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'vitepress-plugin-codeblocks-fold/style/index.css'


let homePageStyle: HTMLStyleElement | undefined

// 只需添加以下一行代码，引入时间线样式
import 'vitepress-markdown-timeline/dist/theme/index.css'

import Confetti from './components/Confetti.vue'

export const layout: Theme = {
    extends: DefaultTheme,
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const {frontmatter} = useData()
        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }
        return h(MLayout, props)
    },
    enhanceApp({app, router}: EnhanceAppContext) {
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () =>
                    updateHomePageStyle(
                        location.pathname === '/' || location.pathname === '/docs/',
                    ),
                {immediate: true},
            )
        }
    },
    setup() {
        // get frontmatter and route
        const {frontmatter} = useData();
        const route = useRoute()
        // basic use
        codeblocksFold({route, frontmatter}, true, 400)
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    }
}

if (typeof window !== 'undefined') {
    // detect browser, add to class for conditional styling
    const browser = navigator.userAgent.toLowerCase()
    if (browser.includes('chrome')) {
        document.documentElement.classList.add('browser-chrome')
    } else if (browser.includes('firefox')) {
        document.documentElement.classList.add('browser-firefox')
    } else if (browser.includes('safari')) {
        document.documentElement.classList.add('browser-safari')
    }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}

export default layout
