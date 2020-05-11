(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{244:function(v,_,t){v.exports=t.p+"assets/img/URL.b9892b23.png"},343:function(v,_,t){"use strict";t.r(_);var n=t(2),o=Object(n.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h3",{attrs:{id:"从输入url到页面加载完成的过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面加载完成的过程"}},[v._v("#")]),v._v(" 从输入URL到页面加载完成的过程")]),v._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000006879700",target:"_blank",rel:"noopener noreferrer"}},[v._v("参考链接"),n("OutboundLink")],1)]),v._v(" "),n("p",[n("img",{attrs:{src:t(244),alt:"URL"}})]),v._v(" "),n("ul",[n("li",[v._v("判断是否需要跳转(301)")]),v._v(" "),n("li",[v._v("从浏览器中读取缓存")]),v._v(" "),n("li",[v._v("DNS解析")]),v._v(" "),n("li",[v._v("TCP连接")]),v._v(" "),n("li",[v._v("HTTP请求发出")]),v._v(" "),n("li",[v._v("服务端处理请求，HTTP响应返回")]),v._v(" "),n("li",[v._v("浏览器拿到响应数据，解析响应内内容，把解析结果展示给用户")])]),v._v(" "),n("ol",[n("li",[v._v("在浏览器地址栏输入URL")]),v._v(" "),n("li",[v._v("判断是否有永久重定向(301)\n"),n("ol",[n("li",[v._v("如果有，直接跳转到对应URL")])])]),v._v(" "),n("li",[v._v("浏览器查看资源是否有"),n("strong",[v._v("强缓存")]),v._v("，有则直接使用，如果是"),n("strong",[v._v("协商缓存")]),v._v("则需要到服务器进行校验资源是否可用\n"),n("ol",[n("li",[v._v("检验新鲜通常有两个HTTP头进行控制"),n("code",[v._v("Expires")]),v._v("和"),n("code",[v._v("Cache-Control")]),v._v("：\n"),n("ul",[n("li",[v._v("HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期")]),v._v(" "),n("li",[v._v("HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间")])])])])]),v._v(" "),n("li",[v._v("浏览器"),n("strong",[v._v("解析URL")]),v._v("获取协议，主机，端口，path")]),v._v(" "),n("li",[v._v("浏览器"),n("strong",[v._v("组装一个HTTP（GET）请求报文")])]),v._v(" "),n("li",[n("strong",[v._v("DNS解析")]),v._v("，查找过程如下：\n"),n("ol",[n("li",[v._v("浏览器缓存")]),v._v(" "),n("li",[v._v("本机缓存")]),v._v(" "),n("li",[v._v("hosts文件")]),v._v(" "),n("li",[v._v("路由器缓存")]),v._v(" "),n("li",[v._v("ISP DNS缓存")]),v._v(" "),n("li",[v._v("DNS查询（递归查询 / 迭代查询）")])])]),v._v(" "),n("li",[n("strong",[v._v("端口建立TCP链接")]),v._v("，三次握手如下：\n"),n("ol",[n("li",[v._v("客户端发送一个TCP的"),n("strong",[v._v("SYN=1，Seq=X")]),v._v("的包到服务器端口")]),v._v(" "),n("li",[v._v("服务器发回"),n("strong",[v._v("SYN=1， ACK=X+1， Seq=Y")]),v._v("的响应包")]),v._v(" "),n("li",[v._v("客户端发送"),n("strong",[v._v("ACK=Y+1， Seq=Z")])])])]),v._v(" "),n("li",[v._v("TCP链接建立后"),n("strong",[v._v("发送HTTP请求")])]),v._v(" "),n("li",[v._v("服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序")]),v._v(" "),n("li",[v._v("服务器检查"),n("strong",[v._v("HTTP请求头是否包含缓存验证信息")]),v._v("如果验证缓存新鲜，返回"),n("strong",[v._v("304")]),v._v("等对应状态码")]),v._v(" "),n("li",[v._v("处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作")]),v._v(" "),n("li",[v._v("服务器将"),n("strong",[v._v("响应报文通过TCP连接发送回浏览器")])]),v._v(" "),n("li",[v._v("浏览器接收HTTP响应，然后根据情况选择"),n("strong",[v._v("关闭TCP连接或者保留重用，关闭TCP连接的四次挥手如下")]),v._v("：\n"),n("ol",[n("li",[v._v("主动方发送"),n("strong",[v._v("Fin=1， Ack=Z， Seq= X")]),v._v("报文")]),v._v(" "),n("li",[v._v("被动方发送"),n("strong",[v._v("ACK=X+1， Seq=Z")]),v._v("报文")]),v._v(" "),n("li",[v._v("被动方发送"),n("strong",[v._v("Fin=1， ACK=X， Seq=Y")]),v._v("报文")]),v._v(" "),n("li",[v._v("主动方发送"),n("strong",[v._v("ACK=Y， Seq=X")]),v._v("报文")])])]),v._v(" "),n("li",[v._v("浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同")]),v._v(" "),n("li",[v._v("如果资源可缓存，"),n("strong",[v._v("进行缓存")])]),v._v(" "),n("li",[v._v("对响应进行"),n("strong",[v._v("解码")]),v._v("（例如gzip压缩）")]),v._v(" "),n("li",[v._v("根据资源类型决定如何处理（假设资源为HTML文档）")]),v._v(" "),n("li",[n("strong",[v._v("解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本")]),v._v("，这些操作没有严格的先后顺序，以下分别解释")]),v._v(" "),n("li",[n("strong",[v._v("构建DOM树")]),v._v("：\n"),n("ol",[n("li",[n("strong",[v._v("Tokenizing")]),v._v("：根据HTML规范将字符流解析为标记")]),v._v(" "),n("li",[n("strong",[v._v("Lexing")]),v._v("：词法分析将标记转换为对象并定义属性和规则")]),v._v(" "),n("li",[n("strong",[v._v("DOM construction")]),v._v("：根据HTML标记关系将对象组成DOM树")])])]),v._v(" "),n("li",[v._v("解析过程中遇到图片、样式表、js文件，"),n("strong",[v._v("启动下载")])]),v._v(" "),n("li",[v._v("构建"),n("strong",[v._v("CSSOM树")]),v._v("：\n"),n("ol",[n("li",[n("strong",[v._v("Tokenizing")]),v._v("：字符流转换为标记流")]),v._v(" "),n("li",[n("strong",[v._v("Node")]),v._v("：根据标记创建节点")]),v._v(" "),n("li",[n("strong",[v._v("CSSOM")]),v._v("：节点创建CSSOM树")])])]),v._v(" "),n("li",[n("strong",[n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction",target:"_blank",rel:"noopener noreferrer"}},[v._v("根据DOM树和CSSOM树构建渲染树"),n("OutboundLink")],1)]),v._v(":\n"),n("ol",[n("li",[v._v("从DOM树的根节点遍历所有"),n("strong",[v._v("可见节点")]),v._v("，不可见节点包括：1）"),n("code",[v._v("script")]),v._v(","),n("code",[v._v("meta")]),v._v("这样本身不可见的标签。2)被css隐藏的节点，如"),n("code",[v._v("display: none")])]),v._v(" "),n("li",[v._v("对每一个可见节点，找到恰当的CSSOM规则并应用")]),v._v(" "),n("li",[v._v("发布可视节点的内容和计算样式")])])]),v._v(" "),n("li",[n("strong",[v._v("js解析如下")]),v._v("：\n"),n("ol",[n("li",[v._v("浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时"),n("strong",[v._v("document.readystate为loading")])]),v._v(" "),n("li",[v._v("HTML解析器遇到"),n("strong",[v._v("没有async和defer的script时")]),v._v("，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。"),n("strong",[v._v("同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容")])]),v._v(" "),n("li",[v._v("当解析器遇到设置了"),n("strong",[v._v("async")]),v._v("属性的script时，开始下载脚本并继续解析文档。脚本会在它"),n("strong",[v._v("下载完成后尽快执行")]),v._v("，但是"),n("strong",[v._v("解析器不会停下来等它下载")]),v._v("。异步脚本"),n("strong",[v._v("禁止使用document.write()")]),v._v("，它们可以访问自己script和之前的文档元素")]),v._v(" "),n("li",[v._v("当文档完成解析，document.readState变成interactive")]),v._v(" "),n("li",[v._v("所有"),n("strong",[v._v("defer")]),v._v("脚本会"),n("strong",[v._v("按照在文档出现的顺序执行")]),v._v("，延迟脚本"),n("strong",[v._v("能访问完整文档树")]),v._v("，禁止使用document.write()")]),v._v(" "),n("li",[v._v("浏览器"),n("strong",[v._v("在Document对象上触发DOMContentLoaded事件")])]),v._v(" "),n("li",[v._v("此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些"),n("strong",[v._v("内容完成载入并且所有异步脚本完成载入和执行")]),v._v("，document.readState变为complete,window触发load事件")])])]),v._v(" "),n("li",[n("strong",[v._v("显示页面")]),v._v("（HTML解析过程中会逐步显示页面）")])])])}),[],!1,null,null,null);_.default=o.exports}}]);