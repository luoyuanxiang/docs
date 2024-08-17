import {DefaultTheme} from 'vitepress'

// 菜单配置
export const nav: DefaultTheme.Config['nav'] = [
    // {
    //     text: '♥后端笔记',
    //     link: '/pages/rear',
    //     activeMatch: '/pages/rear'
    // },
    // {
    //     text: '✿前端笔记',
    //     link: '/pages/front',
    //     activeMatch: '/pages/front'
    // },
    // {
    //     text: '❁运维笔记',
    //     link: '/pages/O&M',
    //     activeMatch: '/pages/O&M'
    // },
    // {
    //     text: '✿日常生活',
    //     link: '/pages/dailyLife',
    //     activeMatch: '/pages/dailyLife'
    // },
    {
        text: '♥系统架构师',
        activeMatch: '/系统架构师/',
        items: [
            {
                text: '计算机基础',
                link: '/系统架构师/01-计算机基础/index',
                activeMatch: '/系统架构师/01-计算机基础'
            }
        ]
    },
    // {
    //     text: '♥指南',
    //     items: [
    //         {
    //             // 分组标题1
    //             text: '介绍',
    //             items: [
    //                 {text: '前言', link: '/preface'},
    //             ],
    //         },
    //         {
    //             // 分组标题2
    //             text: '基础设置',
    //             items: [
    //                 {text: '快速上手', link: '/getting-started'},
    //                 {text: '配置', link: '/configuration'},
    //                 {text: '页面', link: '/page'},
    //                 {text: 'Frontmatter', link: '/frontmatter'},
    //             ],
    //         },
    //         {
    //             // 分组标题3
    //             text: '进阶玩法',
    //             items: [
    //                 {text: 'Markdown', link: '/Markdown'},
    //                 {text: '静态部署', link: '/assets'},
    //             ],
    //         },
    //     ],
    // },
]
