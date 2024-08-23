import{_ as a,c as e,o as t,a7 as o}from"./chunks/framework.CdooE4P4.js";const r="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E7%B3%BB%E7%BB%9F%E6%80%A7%E8%83%BD%E8%AF%84%E4%BB%B7/%E4%B8%BB%E9%A2%91.png",i="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E7%B3%BB%E7%BB%9F%E6%80%A7%E8%83%BD%E8%AF%84%E4%BB%B7/CPU%E6%97%B6%E9%92%9F%E5%91%A8%E6%9C%9F.png",C=JSON.parse('{"title":"性能评价指标","description":"","frontmatter":{"title":"性能评价指标","date":"2024-08-18 14:15"},"headers":[],"relativePath":"系统架构师/01-计算机基础/02-系统性能评价/01-性能评价指标.md","filePath":"系统架构师/01-计算机基础/02-系统性能评价/01-性能评价指标.md","lastUpdated":1724394793000}'),n={name:"系统架构师/01-计算机基础/02-系统性能评价/01-性能评价指标.md"},s=o('<h1 id="性能评价指标" tabindex="-1">性能评价指标 <a class="header-anchor" href="#性能评价指标" aria-label="Permalink to &quot;性能评价指标&quot;">​</a></h1><h2 id="主频" tabindex="-1">主频 <a class="header-anchor" href="#主频" aria-label="Permalink to &quot;主频&quot;">​</a></h2><p>计算机的运算速度与许多因素有关，例如，机器的主频，执行什么样的操作，以及主存的速度等。</p><p>主频又称为时钟频率，在很大程度上决定了计算机的运算速度。CPU 的工作节拍是有主时钟来控制的。主时钟不断产生固定频率的时钟脉冲，这个主时钟的频率就是 CPU 的主频。时钟频率的计算单位已由原来的 MHz 逐步推进到以 GHz 来进行标识。</p><p><img src="'+r+'" alt="主频" loading="lazy"></p><h2 id="cpu-时钟周期" tabindex="-1">CPU 时钟周期 <a class="header-anchor" href="#cpu-时钟周期" aria-label="Permalink to &quot;CPU 时钟周期&quot;">​</a></h2><p>时钟周期是计算机中最基本的单位基准时间，是一个脉冲时钟所需要的时间，也叫振荡周期，其实就是主频的倒数。</p><p><img src="'+i+'" alt="CPU时钟周期" loading="lazy"></p><h2 id="机器周期" tabindex="-1">机器周期 <a class="header-anchor" href="#机器周期" aria-label="Permalink to &quot;机器周期&quot;">​</a></h2><p>CPU 周期也叫机器周期，在计算机中为了便于管理，常把一条指令的执行过程划分为若干阶段，如取指令、分析指令、执行指令等。每个阶段完成一个基本操作，一个基本操作所需要的时间就是一个机器周期。一个机器周期由若干时钟周期组成。一个指令周期又包含若干机器周期。</p><p>例如：2个时钟周期组成1个机器周期，平均3个机器周期可完成1条指令，则执行一条指令需要2x3=6个时钟周期。</p><h2 id="cpi" tabindex="-1">CPI <a class="header-anchor" href="#cpi" aria-label="Permalink to &quot;CPI&quot;">​</a></h2><p>CPI（Cycles Per Instruction, 每条指令执行所用的时钟周期数），由于不同指令的功能不同，造成指令执行时间不同，所以 CPI 是一个平均值。</p><p>在现代高性能计算机中，由于采用各种并行技术，时指令执行高度并行化，尝尝是一个系统时钟周期内可以处理若干条指令。因此，CPI 经常用 IPC（Instructions Per Cycle, 每个时钟周期执行的指令条数）表示。ICP 等于 CPI 的倒数。</p><h2 id="mips" tabindex="-1">MIPS <a class="header-anchor" href="#mips" aria-label="Permalink to &quot;MIPS&quot;">​</a></h2><p>MIPS（Million Instructions Per Second, 每秒百万条指令）的执行速度定义是：MIPS = 指令条数 / (执行时间x10^6) = 主频/CPI = 主频 x IPC</p>',16),E=[s];function c(l,p,B,d,_,h){return t(),e("div",null,E)}const u=a(n,[["render",c]]);export{C as __pageData,u as default};
