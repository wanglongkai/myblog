const moment = require('moment');
const nav = require('./config/nav');
const sidebar = require('./config/sidebar');

module.exports = {
    base: '/wanglk/',
    title: '狼子笔记-个人博客',
    description: '个人博客,前端笔记,面试技巧,Vue,javascript,css,html5',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'keywords', content: '前端,vue,博客,javascript,html,css'}]
    ],
    smoothScroll: true,
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        [
            '@vuepress/last-updated'
        ]
    ],
    themeConfig: {
        // logo: '/navlogo.jpg',
        lastUpdated: 'Update Time',//基于git的commit，所以不一定会生效
        nav: nav,
        sidebar:sidebar
    }
};
