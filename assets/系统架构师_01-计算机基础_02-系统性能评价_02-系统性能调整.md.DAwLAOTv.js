import{_ as a,c as e,o as t,a7 as _}from"./chunks/framework.CdooE4P4.js";const p=JSON.parse('{"title":"系统性能调整","description":"","frontmatter":{"title":"系统性能调整","date":"2024-08-18 14:53"},"headers":[],"relativePath":"系统架构师/01-计算机基础/02-系统性能评价/02-系统性能调整.md","filePath":"系统架构师/01-计算机基础/02-系统性能评价/02-系统性能调整.md","lastUpdated":1724246094000}'),i={name:"系统架构师/01-计算机基础/02-系统性能评价/02-系统性能调整.md"},l=_('<h1 id="系统性能调整" tabindex="-1">系统性能调整 <a class="header-anchor" href="#系统性能调整" aria-label="Permalink to &quot;系统性能调整&quot;">​</a></h1><h2 id="阿姆达尔解决方案" tabindex="-1">阿姆达尔解决方案 <a class="header-anchor" href="#阿姆达尔解决方案" aria-label="Permalink to &quot;阿姆达尔解决方案&quot;">​</a></h2><ul><li>阿姆达尔定律（Amdahl）是这样的：对系统中某组件采用某种更快的执行方式，所获得的系统性能的改变程度，取决于该组件被使用的频率，或所占总执行时间的比例。</li><li>阿姆达尔定律定义了采用特定组件所取得的加速比。假设使用某种改了的组件，系统性能就会得到提高，则加速比的计算公式如下： $$ \\mathrm{R}=\\frac{T_{p}}{T_{i}} $$ 其中，Tp表示不使用改进组件时完成整个任务的时间，Ti标识使用改进组件时完成整个任务的时间。</li></ul><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><ul><li>对于数据库应用系统，操作性能不好的原因可能有数据库连接方式、系统应用架构、数据库设计、数据库管理、网络通信等，基于这些原因，可以采取修改应用模式、建立历史数据库、利用索引技术和分区技术等优化措施，需要调整的参数主要包括 CPU 和主存使用状况、数据库设计、进程或线程状态、硬盘剩余空间、日志文件大小等。</li><li>对于 Web 应用系统，性能瓶颈可能有客户端程序、网关接口、数据库互连等，可以采取的诱惑措施主要有改善应用程序的性能和数据库连接、进行流量管理与负载均衡、使用 Web 交换机和 Web 缓存等，需要调整的参数主要包括系统的可用性、响应时间、并发用户数，以及特定应该占用的系统资源等。</li></ul>',5),r=[l];function o(s,n,c,d,h,m){return t(),e("div",null,r)}const f=a(i,[["render",o]]);export{p as __pageData,f as default};
