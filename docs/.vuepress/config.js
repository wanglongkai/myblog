const nav = require('./config/nav');
const sidebar = require('./config/sidebar');

module.exports = {
    base: '/wanglk/',
    title: '狼子笔记',
    description: '王龙楷个人博客,王龙楷,狼子笔记,个人博客,前端笔记,面试技巧,Vue,javascript,DBCss,html5',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'keywords', content: '王龙楷个人博客,王龙楷,狼子笔记,个人博客,前端笔记,前端,vue,博客,javascript,html,DBCss'}]
    ],
    smoothScroll: true,
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
        [
            '@vuepress/last-updated'
        ]
    ],
    themeConfig: {
        lastUpdated: '作者：王龙楷； 标签：原创； 提交时间',//基于git的commit，所以不一定会生效
        nav: nav,
        sidebar:sidebar,
        sidebarDepth: 2
    }
};
