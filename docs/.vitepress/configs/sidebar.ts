import {DefaultTheme} from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = [
    {
        text: '示例',
        items: [
            {text: 'Markdown Examples', link: '/pages/markdown-examples'},
        ]
    }
]
