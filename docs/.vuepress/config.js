module.exports = {
    title: '技术路漫漫且修远，吾将上下而求索.',
    //description 为了更好的SEO
    description: 'Nayek的博客，Vuepress文档',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // dest: './dist',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: '上次更新时间', // string | boolean
        repo: 'liuuky/vueblog',
        editLinkText: '编辑文档！',
        nav: [
            { text: 'Home', link: '/' },
            { text: '前端·修炼', link: '/web/'},
            { text: '学习·笔记', link: '/note/'},
            { text: '博客园', link: 'https://www.cnblogs.com/nayek/' },
            // { text: 'GitHub', link: 'https://github.com/liuuky' }
          ],
        sidebar: {
            '/web/': [
                {
                    title: 'HTML',
                    collapsable: true,
                    children: [
                        '/web/html/行内元素'
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        '/web/css/清除浮动'
                    ]
                },
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: [
                        '/web/javascript/',
                        '/web/javascript/闭包的概念',
                        '/web/javascript/测试'
                    ]
                }
            ],
            '/note/': [
                {
                    title: 'note'
                }
            ]
        },
        // sidebarDepth: 2,
        // lastUpdated: 'Last Updated', // string | boolean
    
            // sidebar: 'auto', // 侧边栏配置
            // sidebarDepth: 2, // 侧边栏显示2级
    }
};