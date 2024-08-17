import{_ as E,c as l,o as B,a7 as a}from"./chunks/framework.Cd2q4gtS.js";const t="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/%E6%8C%87%E4%BB%A4%E7%B3%BB%E7%BB%9F.png",i="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/%E6%8C%87%E4%BB%A4%E6%B5%81%E6%B0%B4%E4%B8%B2%E8%A1%8C.png",s="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/%E6%8C%87%E4%BB%A4%E6%B5%81%E6%B0%B4%E9%87%8D%E5%8F%A0.png",o="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/%E6%8C%87%E4%BB%A4%E6%B5%81%E6%B0%B4.png",e="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/%E5%90%9E%E5%90%90%E7%8E%87.png",S=JSON.parse('{"title":"指令系统","description":"","frontmatter":{"title":"指令系统","date":"2024-08-15 20:07"},"headers":[],"relativePath":"系统架构师/01-计算机基础/01-计算机体系结构/02-指令系统.md","filePath":"系统架构师/01-计算机基础/01-计算机体系结构/02-指令系统.md","lastUpdated":1723887129000}'),r={name:"系统架构师/01-计算机基础/01-计算机体系结构/02-指令系统.md"},n=a('<h1 id="指令系统" tabindex="-1">指令系统 <a class="header-anchor" href="#指令系统" aria-label="Permalink to &quot;指令系统&quot;">​</a></h1><p>指令系统是计算机硬件的语言系统，是机器所具有的全部指令的集合，反映了计算机所拥有的基本功能。 <img src="'+t+'" alt=""></p><h2 id="_1-复杂指令系统" tabindex="-1">1.复杂指令系统 <a class="header-anchor" href="#_1-复杂指令系统" aria-label="Permalink to &quot;1.复杂指令系统&quot;">​</a></h2><ul><li><p>复杂指令系统（Complex Instruction Set Computer, CISC）的基本思想是进一步增强原有指令的功能，用更为复杂的新指令取代原先有软件子程序完成的功能，实现软件功能的硬化，导致机器的指令系统越来越庞大、复杂。目前使用的绝大多数计算机都属于CISC类型。</p></li><li><p>CISC的特点：</p><ol><li><span style="color:red;">指令数量众多。</span>指令系统拥有大量的指令，通常有1000~250条。</li><li><span style="color:red;">指令使用频率相差悬殊。</span>最常使用的是一下比较简单的指令，仅占指令总数的20%，但在程序中出现的频率却占80%。而大部分复杂指令却很少使用。</li><li><span style="color:red;">支持很多种寻址方式。</span>支持的寻址方式通常为5~20种。</li><li><span style="color:red;">变长的指令。</span>指令长度不是固定的，变长的指令增加指令译码电路的复杂性。</li><li><span style="color:red;">指令可以对主存单元中的数据直接进行处理。</span>典型的 CISC 通常都有指令能够直接对主存单元中的数据直接进行处理，其执行速度较慢。</li><li><span style="color:red;">以微程序控制为主。</span>CISC 的指令系统很复杂，难以用硬布线逻辑（组合逻辑）电路实现控制器，通常采用微程序控制。</li></ol></li></ul><h2 id="_2-精简指令系统" tabindex="-1">2.精简指令系统 <a class="header-anchor" href="#_2-精简指令系统" aria-label="Permalink to &quot;2.精简指令系统&quot;">​</a></h2><ul><li>精简指令系统（Reduced Instruction Computing, RISC）的基本思想是通过减少指令总数和简化指令功能降低硬件设计的复杂度，使指令能单周期执行，并通过优化编译提高指令的执行速度，采用硬布线控制逻辑优化编译程序。</li><li>RISC 的特点： <ol><li><span style="color:red;">指令数量少。</span>邮箱选取使用频率最高的一些简单指令和一些常用指令，避免使用复杂指令。</li><li><span style="color:red;">指令的寻址方式少。</span></li><li><span style="color:red;">指令长度固定，指令格式种类少。</span></li><li><span style="color:red;">以硬布线逻辑控制为主。</span>为了提高操作的执行速度，通常采用硬布线逻辑（组合逻辑）来构建控制器</li><li><span style="color:red;">单周期指令执行，采用流水线技术。</span>因为简化了指令系统，很容易利用流水线技术，使得大部分指令都能在一个机器周期内完成。</li><li><span style="color:red;">优化的编译器。</span>RISC 的精简指令集是编译工作简单化。因为指令长度固定、格式少、寻址方式少，编译时不必再具有相似功能的许多指令中进行选择，也不必为寻址方式的选择而费心，同时易于实现优化，从而可以生成高效率执行的机器代码。</li><li><span style="color:red;">CPU 中的通用寄存器数量多，一般在32个以上，有点可达上千个。</span></li></ol></li></ul><h2 id="_3-指令的流水" tabindex="-1">3.指令的流水 <a class="header-anchor" href="#_3-指令的流水" aria-label="Permalink to &quot;3.指令的流水&quot;">​</a></h2><ul><li>指令流水技术：指令步骤的并行、提高处理器执行指令的效率。假设使用流水线将指令流的处理过程划分为取值、分析、执行三个并行处理的过程段。在这个流水线中，处理器有三个操作部件，同时对这三条指令进行加工，加快了程序的执行速度。几乎所有的高性能计算机都采用了指令流水线。 <ol><li>顺序方式。各条机器指令之间顺序串行地执行，执行完一条指令后取下一条指令。缺点是速度慢，机器各部件利用率低。 <img src="'+i+'" alt=""></li><li>重叠方式。在解释第 K 条指令的操作完成之前就可以开始解释第 K+1 条指令。 <img src="'+s+'" alt=""></li><li>流水方式 <img src="'+o+'" alt=""><ul><li>流水线周期：执行时间最长的一段</li><li>流水线执行时间 (t1+t2+...+tk) + (n-1) * △t <ul><li>例如：若流水线把一条指令分为取指、分析和执行三个部分，三部分的时间分别是取指2ns，分析2ns，执行1ns，那边流水线周期是多少？100条指令全部执行完毕需要的时间是多少？ <ul><li>解析：1理论公式：(t1+t2+...+tk) + (n-1) * △t = (2+2+1) + (100-1) * 2 = 203</li></ul></li></ul></li><li>流水线的吞吐率和最大吞吐率：吞吐率是指单位内流水线处理机流程的结果数。对指令而言，就是单位时间内执行的指令数。 <img src="'+e+'" alt=""></li></ul></li></ol></li></ul>',8),A=[n];function c(p,_,d,C,u,h){return B(),l("div",null,A)}const y=E(r,[["render",c]]);export{S as __pageData,y as default};
