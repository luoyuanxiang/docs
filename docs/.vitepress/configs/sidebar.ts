import {DefaultTheme} from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/md/系统架构师': [
        {
            text: '计算机基础',
            collapsed: true,
            items: [
                {
                    text: '1.计算机硬件组成',
                    link: '/md/系统架构师/计算机基础/1.计算机硬件组成',
                },
                {
                    text: '2.指令系统',
                    link: '/md/系统架构师/计算机基础/2.指令系统',
                },
                {
                    text: '3.指令系统',
                    link: '/md/系统架构师/计算机基础/3.储存系统',
                },
            ]
        },
    ]
}
