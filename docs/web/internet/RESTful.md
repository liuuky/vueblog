# RESTful

REST (Representational State Transfer)，中文意思是：表述性状态转移。 一组架构约束条件和原则，如果一个架构符合 REST 的约束条件和原则，我们就称它为 RESTful 架构。

RESTful基本概念
 - 在 REST 中，一切的内容都被认为是一种资源
 - 每个资源都由 URI 唯一标识
 - 使用统一的接口处理资源请求（POST/GET/PUT/DELETE/HEAD）
 - 无状态（每次请求之前是无关联，没有 session ）

## 理解RESTful
下面我们结合REST原则，围绕资源展开讨论，从资源的定义、获取、表述、关联、状态变迁等角度，列举一些关键概念并加以解释。

 - 资源与URI
 - 统一资源接口
 - 资源的表述
 - 资源的链接
 - 状态的转移


### 资源和URI
 - 使用 `/` 来表示资源的层级关系
 - 使用 `?` 用来过滤资源
 - 使用 `_` 或者 `-` 让URI的可读性更好
 - `,` 或 `;` 可以用来表示同级资源的关系



### 统一资源接口

| 请求方法 | 描述                                                             |
| -------- | ---------------------------------------------------------------- |
| GET      | 获取某个资源。 幂等（取多少次结果都没有变化）                    |
| POST     | 创建一个新的资源                                                 |
| PUT      | 替换某个已有的资源（更新操作） ， 幂等（更新多次只保存一个结果） |
| DELETE   | 删除某个资源                                                     |
| HEAD     | 主要用于确认 URL 的有效性以及资源更新的日期时间等                |
| PATCH    | 新引入的，对PUT方法的补充，用来对已知资源进行局部更新            |



### 资源表述
客户端获取的只是资源的表述而已。资源在外界的具体呈现，可以有多种表述(或成为表现、表示)形式，在客户端和服务端之间传送的也是资源的表述，而不是资源本身。文本资源可以采用 html、xml、json 等格式，图片可以使用 PNG 或 JPG 展现出来。

资源的表述包括数据和描述数据的元数据，例如，HTTP 头 “Content-Type” 就是这样一个元数据属性。

那么客户端如何知道服务端提供哪种表述形式呢？

答案是可以通过 HTTP 内容协商，客户端可以通过 Accept 头请求一种特定格式的表述，服务端则通过 Content-Type 告诉客户端资源的表述形式。

MIME 类型

accept: text/xml html文件

Content-Type告诉客户端资源的表述形式



### 资源的链接
超媒体即应用状态引擎（可以做多层链接）

https://api.github.com/repos/github
```
{
  "message": "Not Found",
  "documentation_url": "https://developer.github.com/v3"
}
```



### 状态转移

服务器端不应该保存客户端状态。

应用状态 -> 服务器端不保存应用状态

访问订单 根据接口去查询

访问商品 查询