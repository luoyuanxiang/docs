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

    },
};
