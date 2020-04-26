<template>
    <div>
        <h2>我是vue组件</h2>
        <p class="ph">居然可以在Markdown中用Vue组件，vuepress是真的牛逼啊！</p>
        <label>
            试试数据双向绑定：
            <input type="text" v-model="text">
        </label>
        {{text}}
        <p><slot/></p>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data(){
            return{
                text:"test"
            }
        }
    }
</script>

<style scoped>
    h2{
        color:pink;
    }
    .ph{
        background-color: antiquewhite;
    }
</style>
