import {HeadConfig} from "vitepress";

export const head: HeadConfig[] = [
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['meta', {name: 'msapplication-TileImage', content: '/favicon.ico'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
    ['meta', {name: 'author', content: 'Charles7c'}],
    ['meta', {name: 'keywords', content: '罗远祥的知识库, 知识库, 罗远祥'}],

    ['meta', {name: 'HandheldFriendly', content: 'True'}],
    ['meta', {name: 'MobileOptimized', content: '320'}],
    ['meta', {name: 'theme-color', content: '#3c8772'}],

    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {property: 'og:locale', content: 'zh_CN'}],
    ['meta', {property: 'og:title', content: '罗远祥的知识库'}],
    ['meta', {property: 'og:description', content: '个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。'}],
    ['meta', {property: 'og:site', content: 'https://luoyuanxiang.top/docs'}],
    ['meta', {property: 'og:site_name', content: '罗远祥的知识库'}],
    ['meta', {property: 'og:image', content: 'https://luoyuanxiang.top/docs/logo.png'}],

    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'apple-touch-icon', href: '/favicon.ico'}],
    ['link', {rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c'}],
]
