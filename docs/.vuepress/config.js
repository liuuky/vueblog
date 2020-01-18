const pluginConf = require('../../config/pluginConf')
const navConf = require('../../config/navConf')
const sidebarConf = require('../../config/sidebarConf')

module.exports = {
    title: '技术路漫漫且修远，吾将上下而求索.',
    //description 为了更好的SEO
    description: 'Nayek的博客，Vuepress文档',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        },
      },
    // dest: './dist',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }],   // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }],  
    ],
    // 插件配置
    plugins: pluginConf,
    themeConfig: {
        sidebarDepth: 2,    // 侧边栏显示2级
        lastUpdated: '上次更新时间', // string | boolean
        // repo 连接此项目github仓库
        repo: 'liuuky/vueblog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑文档！',
        // 导航栏配置
        nav: navConf,
        // 侧边栏配置
        sidebar: sidebarConf,
    },
};