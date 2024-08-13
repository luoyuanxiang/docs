---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "技术知识整理"
#  text: "整理所学知识"
  tagline: 整理所学知识
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
  actions:
    - theme: brand
      text: MD 示例
      link: /pages/markdown-examples
    - theme: alt
      text: icon图标
      link: /pages/icon

features:
  - icon: 📖
    title: 物语
    details: 整理常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /
    linkText: 前端常用知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
---


<style>
.VPHome .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.VPHome .details small {
  opacity: 0.8;
}

.VPHome .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>

