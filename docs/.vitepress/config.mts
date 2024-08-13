import {defineConfig} from 'vitepress'
import {nav, sidebar, socialLinks, search, head} from './configs'
import timeline from "vitepress-markdown-timeline"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "技术知识整理",
    description: "个人所学的技术知识整理",
    base: '/docs/',
    // 站点地图
    sitemap: {
        hostname: 'https://luoyuanxiang.top',
    },
    head,
    // markdown配置
    markdown: {
        image: {
            // 开启图片懒加载
            lazyLoading: true,
        },
        // 行号
        lineNumbers: true,
        // 主题
        // theme: 'slack-ochin',
        //时间线
        config: (md) => {
            md.use(timeline);
        },
    },
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: '/logo.jpg',
        // 导航
        nav,
        // 侧边栏
        sidebar,
        // 社交链接
        socialLinks,
        // 本地搜索
        search,
        lastUpdatedText: '上次修改时间',
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '语言切换',
        // 页脚
        footer: {
            message: '基于 MIT 许可发布',
            // 自动更新时间
            copyright: `版权所有 © 2023-${new Date().getFullYear()} 技术知识整理`,
        },
        outline: {
            level: "deep", // 显示2-4级标题
            // level: 'deep', // 显示2-6级标题
            label: '目录' // 文字显示
        },
        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    }
})
