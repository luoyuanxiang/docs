type NavData = {
    title: string
    desc: string
    items: NavLink[]
}
type NavLink = {
    /** 站点图标 */
    icon?: string | { svg: string }
    /** 站点名称 */
    title: string
    /** 站点名称 */
    desc?: string
    /** 站点链接 */
    link: string
}

export const NAV_DATA: NavData[] = [
    {
        title: '常用工具',
        desc: '常用工具',
        items: [
            {
                icon: 'https://pdai.tech/apple-touch-icon.png',
                title: 'Java 全栈知识体系',
                desc: '包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL, ElasticSearch, MongoDB, Docker, k8s, CI&CD, Linux, DevOps, 分布式, 中间件, 开发工具, Git, IDE, 源码阅读，读书笔记, 开源项目...',
                link: 'https://pdai.tech/',
            },
            {
                icon: 'https://tinypng.com/images/apple-touch-icon.png',
                title: 'TinyPNG',
                desc: '在线图片压缩工具',
                link: 'https://tinypng.com',
            },
            {
                icon: 'https://tool.lu/favicon.ico',
                title: '在线工具',
                desc: '开发人员的工具箱',
                link: 'https://tool.lu',
            },
            {
                icon: 'https://static.json.cn/r/img/favicon/favicon.ico',
                title: 'Json 中文网',
                desc: 'JSON 在线解析及格式化验证',
                link: 'https://www.json.cn',
            },
            {
                icon: 'https://www.hello-algo.com/assets/images/favicon.png',
                title: 'Hello 算法',
                desc: '',
                link: 'https://www.hello-algo.com/'
            },
            {
                icon: 'https://www.wdbyte.com/static/fav.png',
                title: '未读代码',
                desc: '结构化 Java 系列文档，再来点数据结构与算法！',
                link: 'https://www.wdbyte.com/'
            },
            {
                icon: 'https://bugstack.cn/favicon.ico',
                title: '小傅哥 bugstack 虫洞栈',
                desc: '包含: Java 基础，面经手册，Netty4.x，手写Spring，用Java实现JVM，重学Java设计模式，SpringBoot中间件开发，IDEA插件开发，Lottery抽奖系统，字节码编程...',
                link: 'https://bugstack.cn/'
            },
            {
                icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
                title: 'Qwerty Learner',
                desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
                link: 'https://qwerty.fe-mm.com',
            },
            {
                icon: 'https://dynamictp.cn/favion.ico',
                title: 'dynamic-tp',
                desc: '🔥🔥🔥 基于配置中心的轻量级动态可监控线程池',
                link: 'https://dynamictp.cn/',
            },
            {
                icon: 'https://www.mianshiya.com/_next/image?url=%2Flogo.png&w=32&q=75',
                title: '面试鸭刷题神器',
                desc: '面试题库',
                link: 'https://www.mianshiya.com/',
            },
        ],
    },
    {
        title: '常用文章记录',
        desc: '常用文章记录',
        items: [
            {
                icon: 'https://docs.emqx.com/favicon.ico',
                title: 'EMQX-系统调优',
                desc: 'EMQX 中文文档',
                link: 'https://docs.emqx.com/zh/emqx/latest/performance/tune.html',
            },
            {
                icon: 'https://docs.emqx.com/favicon.ico',
                title: '用 NGINX 负载均衡 EMQX 集群',
                desc: 'EMQX 中文文档',
                link: 'https://docs.emqx.com/zh/emqx/latest/deploy/cluster/lb-nginx.html',
            },
            {
                icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                title: 'CSDN',
                desc: 'MySQL日期集合',
                link: 'https://blog.csdn.net/qierkang/article/details/108244337?spm=1001.2014.3001.5501',
            },
            {
                icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                title: 'CSDN',
                desc: 'JAVA(-Xms,Xmx,Xmn-XX:newSize,-XX:MaxnewSize,-XX:PermSize,-XX:MaxPermSize)区别',
                link: 'https://blog.csdn.net/lovewebeye/article/details/80911838',
            },
            {
                icon: 'https://cdn-kb.worktile.com/kb/wp-content/uploads/2022/02/cropped-200-200.jpg',
                title: 'Worktile社区',
                desc: 'spring怎么重新初始化bean',
                link: 'https://worktile.com/kb/ask/832138.html',
            },
            {
                icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                title: 'CSDN',
                desc: 'SpringBoot项目下实现动态化静态文件路径注册',
                link: 'https://blog.csdn.net/lqzkcx3/article/details/122641111',
            },
            {
                icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                title: 'CSDN',
                desc: 'Mybatis中进行批量更新（updateBatch）',
                link: 'https://blog.csdn.net/m0_37317159/article/details/82986085',
            },
            {
                icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                title: 'CSDN',
                desc: 'ElasticSearch系列（六）springboot中使用QueryBuilders、NativeSearchQuery实现复杂查询',
                link: 'https://blog.csdn.net/csdn_20150804/article/details/105618933',
            },
        ],
    },
    {
        title: 'AI 导航',
        desc: 'AI 导航',
        items: [
            {
                icon: '/icons/chatgpt.png',
                title: 'ChatGPT（最强）',
                link: 'https://chat.openai.com/chat',
            },
            {
                icon: 'https://www.notion.so/images/logo-ios.png',
                title: 'Notion AI（笔记）',
                link: 'https://www.notion.so',
            },
            {
                icon: 'https://www.midjourney.com/apple-touch-icon.png',
                title: 'Midjourney（绘画）',
                link: 'https://www.midjourney.com',
            },
            {
                icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
                title: 'Beautiful.ai（PPT）',
                link: 'https://www.beautiful.ai',
            },
            {
                icon: 'https://inspiration.baidu.com/favion.ico',
                title: '灵感中心',
                desc: '',
                link: 'https://inspiration.baidu.com/app?source=aisearch&isNewPage=0',
            },
        ],
    },
    {
        title: '小程序相关',
        desc: '小程序相关',
        items: [
            {
                icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
                title: '微信小程序文档',
                desc: '微信小程序官方开发者文档',
                link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
            },
            {
                icon: '/icons/taro.svg',
                title: 'Taro',
                desc: '多端统一开发解决方案',
                link: 'https://taro.jd.com',
            },
            {
                icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
                title: 'uni-app',
                desc: '一个使用 Vue.js 开发所有前端应用的框架',
                link: 'https://uniapp.dcloud.net.cn',
            },
            {
                icon: 'https://mpxjs.cn/favicon.ico',
                title: 'Mpx',
                desc: '增强型跨端小程序框架',
                link: 'https://mpxjs.cn',
            },
        ],
    },
    {
        title: '站点生成器',
        desc: '站点生成器',
        items: [
            {
                icon: 'https://astro.build/favicon.svg',
                title: 'Astro',
                desc: '一个现代化的轻量级静态站点生成器',
                link: 'https://astro.build',
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'VitePress',
                desc: '由 Vite 和 Vue 驱动的静态网站生成器',
                link: 'https://vitepress.dev',
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'VuePress',
                desc: 'Vue 驱动的静态网站生成器',
                link: 'https://vuepress.vuejs.org/zh',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
                title: 'dumi',
                desc: '基于 Umi 为组件研发而生的静态站点框架',
                link: 'https://d.umijs.org',
            },
            {
                icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
                title: 'Docusaurus',
                desc: '基于 React 的静态网站生成器',
                link: 'https://docusaurus.io/zh-CN',
            },
        ],
    },
    {
        title: '图标库',
        desc: '图标库',
        items: [
            {
                icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
                title: 'iconfont',
                desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
                link: 'https://www.iconfont.cn',
            },
            {
                icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
                title: 'IconPark 图标库',
                desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
                link: 'https://iconpark.oceanengine.com/official',
            },
            {
                icon: 'https://emoji.muan.co/appicon.png',
                title: 'Emoji searcher',
                desc: 'Emoji 表情大全',
                link: '',
            },
        ],
    },
    {
        title: '社区',
        desc: '社区',
        items: [
            {
                title: 'Github',
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
                },
                desc: '一个面向开源及私有软件项目的托管平台',
                link: 'https://github.com',
            },
            {
                icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
                title: 'Stack Overflow',
                desc: '全球最大的技术问答网站',
                link: 'https://stackoverflow.com',
            },
            {
                title: '稀土掘金',
                icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
                desc: '面向全球中文开发者的技术内容分享与交流平台',
                link: 'https://juejin.cn',
            },
            {
                title: 'V2EX',
                icon: 'https://www.v2ex.com/static/icon-192.png',
                desc: '一个关于分享和探索的地方',
                link: 'https://www.v2ex.com',
            },
            {
                title: 'SegmentFault 思否',
                icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
                desc: '技术问答开发者社区',
                link: 'https://segmentfault.com',
            },
            {
                title: '博客园',
                icon: '/icons/cnblogs.svg',
                desc: '博客园是一个面向开发者的知识分享社区',
                link: 'https://www.cnblogs.com',
            },
            {
                title: '知乎',
                icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
                desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
                link: 'https://juejin.cn',
            },
            {
                icon: 'https://cdn-kb.worktile.com/kb/wp-content/uploads/2022/02/cropped-200-200.jpg',
                title: 'Worktile社区',
                // desc: 'spring怎么重新初始化bean',
                link: 'https://worktile.com',
            },
        ],
    },
    {
        title: '摸鱼专用',
        desc: '摸鱼专用',
        items: [
            {
                icon: 'https://momoyu.cc/icon-192.png',
                title: '摸摸鱼热榜',
                desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
                link: 'https://momoyu.cc',
            },
            {
                icon: 'https://static.hdslb.com/mobile/img/512.png',
                title: '哔哩哔哩',
                // desc: '',
                link: 'https://www.bilibili.com',
            },
        ],
    },
    {
        title: '免费 API 接口',
        desc: '免费 API 接口',
        items: [
            {
                icon: 'https://www.jinrishici.com/img/icon-small.png',
                title: '今日诗词',
                desc: '每次返回一句诗词\n' +
                    '根据时间、地点、天气、事件智能推荐\n' +
                    '支持图片和 JSON 格式调用，一分钟快速部署',
                link: 'https://www.jinrishici.com/',
            },
            {
                icon: 'https://developer.hitokoto.cn/favicon.ico',
                title: '一言',
                desc: '用代码表达言语的魅力，用代码书写山河的壮丽。',
                link: 'https://developer.hitokoto.cn/'
            },
        ]
    },
]
