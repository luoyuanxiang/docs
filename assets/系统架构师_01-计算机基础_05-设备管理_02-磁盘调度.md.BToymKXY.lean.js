import{_ as r,D as _,c as s,j as c,a as e,I as t,w as o,a7 as n,o as l}from"./chunks/framework.CdooE4P4.js";const d="/docs/%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E5%B8%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/%E7%A3%81%E7%9B%98%E8%B0%83%E5%BA%A6.png",x=JSON.parse('{"title":"磁盘调度","description":"","frontmatter":{"title":"磁盘调度","date":"2024-08-21T00:00:00.000Z"},"headers":[],"relativePath":"系统架构师/01-计算机基础/05-设备管理/02-磁盘调度.md","filePath":"系统架构师/01-计算机基础/05-设备管理/02-磁盘调度.md","lastUpdated":1724246094000}'),E={name:"系统架构师/01-计算机基础/05-设备管理/02-磁盘调度.md"},f=n("",3);function i(p,h,A,B,m,u){const a=_("font");return l(),s("div",null,[f,c("p",null,[e("磁盘是可被多个进程共享的设备。当有多个进程请求访问磁盘时，为了保证信息的安全，系统在每一时刻只允许一个进程启动磁盘进行 I/O 操作，其余的进程只能等待。因此，操作系统应采用一种适当的调度算法，使各进程对磁盘的平均访问（主要是寻道）时间最小。磁盘调度分为"),t(a,{color:"#ff0000"},{default:o(()=>[e("移臂调度")]),_:1}),e("和"),t(a,{color:"#ff0000"},{default:o(()=>[e("旋转调度")]),_:1}),e("两类，并且是"),t(a,{color:"#ff0000"},{default:o(()=>[e("先进行移臂调度")]),_:1}),e("，"),t(a,{color:"#ff0000"},{default:o(()=>[e("然后进行旋转调度")]),_:1}),e("。由于访问磁盘量耗时的是寻道时间，因此，磁盘调度的目标是使磁盘的平均寻道时间最少。")])])}const N=r(E,[["render",i]]);export{x as __pageData,N as default};
