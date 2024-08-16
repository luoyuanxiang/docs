import type {DefaultTheme} from 'vitepress'
import {nav} from "./nav";
import {sidebar} from "./sidebar";
import {socialLinks} from "./socialLinks";
import {search} from "./search";

export const themeConfig: DefaultTheme.Config = {
    logo: '/logo.png',
    // 导航
    nav,
    // 侧边栏
    sidebar,
    // 社交链接
    socialLinks,
    // 本地搜索
    search,
    lastUpdated: {
        text: '上次修改时间'
    },
    editLink: {
        pattern: 'https://github.com/luoyuanxiang/docs/edit/main/docs/:path',
        text: '不妥之处，敬请雅正'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言切换',
    // 页脚
    footer: {
        message: '基于 MIT 许可发布',
        // 自动更新时间
        copyright: `版权所有 © ${new Date().getFullYear()} 罗远祥的知识库`,
    },
    outline: {
        level: "deep", // 显示2-4级标题
        label: '目录' // 文字显示
    },
    //自定义上下页名
    docFooter: {
        prev: '上一页',
        next: '下一页',
    },
}
