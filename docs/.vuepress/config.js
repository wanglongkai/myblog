module.exports = {
    base: '/wanglk/',
    title: '狼子笔记',
    description: '个人博客,前端笔记,面试技巧,Vue,javascript,css,html5',
    head: [
        ['link', {rel: 'icon', href: '/facicon.ico'}],
        ['meta', {name: 'keywords', content: '前端,vue,博客'}]
    ],
    smoothScroll: true,
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ],
    themeConfig: {
        logo: '/navlogo.jpg',
        lastUpdated: '最后更新时间',//基于git的commit，所以不一定会生效
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Vue',
                items: [
                    {text: 'vuex使用', link: '/blog/vue/vuex.md'},
                    {text: 'vue-mockjs', link: '/blog/vue/vue_mockjs.md'},
                    {text: 'vue基础知识', link: '/blog/vue/vue_basic.md'}
                ]
            },
            {
                text:'javascript',
                items:[
                    {text:'防抖和节流',link:'/blog/javascript/防抖和节流.md'}
                ]
            },
            {
                text: 'others',
                items: [
                    {text: '正则表达式', link: '/blog/other/regexp.md'},
                    {text: 'markdown语法', link: '/blog/other/markdown_grm.md'},
                    {text: 'js重要知识点', link: '/blog/other/js_important.md'},
                    {text: 'css重要知识点', link: '/blog/other/css_important.md'}
                ]
            },
            {
                text: 'external',
                items: [
                    {text: '阮一峰', link: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$'},
                    {text: '张鑫旭', link: 'https://www.zhangxinxu.com/wordpress/'}
                ]
            }
        ],
        sidebar: {
            '/blog/vue/':[
                'vuex','vue_mockjs','vue_basic'
            ],
            '/blog/javascript/':[
                '防抖和节流'
            ],
            '/blog/other/':[
                'regexp','markdown_grm','js_important','css_important'
            ]
        }
    }
};
