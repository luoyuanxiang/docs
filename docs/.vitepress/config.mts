import {defineConfig} from 'vitepress'
import {themeConfig, head, markdown} from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "罗远祥的知识库",
    description: "个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。",
    base: '/docs/',
    // 站点地图
    sitemap: {
        hostname: 'https://luoyuanxiang.top/docs',
    },
    head,
    // markdown配置
    markdown,
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: themeConfig
})
