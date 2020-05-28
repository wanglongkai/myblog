<!--随笔目录文章尾部的切换文章组件-->
<!--使用举例：
        <BottomNav pre="/wanglk/blog/1" next="/wanglk/blog/2"></BottomNav>
-->
<template>
    <div class="bottomNav">
        <a :href="pre" v-if="pre">← 上一篇</a>
        <a href="/wanglk/blog/daily/">回目录</a>
        <a :href="next" v-if="next">下一篇 →</a>
    </div>
</template>

<script>
    export default {
        name: "BottomNav",
        props:['pre','next']
    }
</script>

<style scoped>
    .bottomNav{
        border-top: 1px solid #dddddd;
        line-height: 55px;
        display: flex;
        justify-content: space-between;
        margin-bottom: -60px;
        margin-top: 80px;
        font-weight: 500;
        text-decoration: none;
    }
</style>
