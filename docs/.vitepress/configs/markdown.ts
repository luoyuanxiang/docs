import type {MarkdownOptions, MarkdownRenderer} from 'vitepress'

export const markdown: MarkdownOptions = {
    // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
    theme: {
        light: 'github-light',
        dark: 'github-dark-dimmed'
    },
    image: {
        // 开启图片懒加载
        lazyLoading: true,
    },
    // 行号
    lineNumbers: true,
    config: (md: MarkdownRenderer) => {
        // 保存原有的 fence 函数
        const fence = md.renderer.rules.fence?.bind(md.renderer.rules)
        // 定义我们自己的 fence 函数
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
            // 通过tokens上的 info 获取代码块的语言
            const token = tokens[idx]
            const language = token.info.trim()

            if (language.startsWith('mermaid')) {
                // 将代码块渲染成 html，这里替换成我们自己定义的vue组件
                return `<Mermaid id="mermaid-${idx}" code="${encodeURIComponent(token.content)}"></Mermaid>`
            }
            // 对不是我们需要的代码块的直接调用原有的函数
            return fence(tokens, idx, options, env, self)
        }
    },
};
