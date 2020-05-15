# Vue小技巧

## 工程化
1. 全局安装vue-cli:`npm install -g @vue-cli`
2. 初始化一个vue-cli工程：`vue create vueProjectNmae`
3. 开始工程
<br/>

##  组件化
1. 定义组件
2. 导入组件
3. 注册组件
4. 使用组件
template中只能有一个根组件。一般如下：
```html
<template>
	<div>
	</div>	
</template>
```
<br/>

## 状态管理
只能用mutations改变状态    
事件提交mutations，mutations改变state，state驱动视图变化。    
Vue.component("name",{})形式注册全局组件时，必须在Vue实例化之前执行。
<br/>

## @click.native.stop
**Vue**,组件上绑定事件需要加`.native`事件修饰符，可以用`@click.stop`阻止没有事件处理函数的事件冒泡。
<br/>

## `sync`修饰符使用
对一个 prop 进行“双向绑定”。[官方文档](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)
<br/>

## 通过$listeners实现隔代组件通信
子组件中的`$listeners`属性包含了父组件传入子组件的**事件监听**(不包含.native修饰的)，子组件可通过`v-on="$listeners"`传入孙子组件，孙子组件通过`this.$emit(事件名，参数)`触发父组件或爷爷组件中的事件。
<br/>

## 隔代组件通信方法汇总
1. vuex-状态管理
2. props-代代传
3. provide/inject-依赖注入
4. bus-中央事件总线
<br/>

## 离线安装npm包
1. 在有线环境下下载npm包:

   >  npm install vue-scroller --global-style
   >
   > 会把vue-scroller和它依赖的到打包到vue-scroller一个包中。

2. 离线环境下导入npm包：

   >拷贝第一步打包好的npm包
   >
   >放入需要包项目的node-modules文件夹即可。
   >
   >不用修改package.json文件

<br/>

## vue深度作用域样式
在当前组件中<span style="color:red;">强制</span>修改子组件样式
```javascript
# css中使用>>>
.box >>> .title{
    color:red;
}

# less/scss中使用 /deep/
.box{
    /deep/ .title{
        color:red;
    }
}
```
<br/>

## 监听组件的生命周期
**普通做法：**

```javascript
//Parent.vue
<Child @mounted='dosomething' />

//Child.vue
mounted(){
	this.$emit("mounted");
}
```

**简单做法：**

```javascript
//Parent.vue
<Child @hook:mounted='doSomething' />
```
<br/>

## 路由参数解耦

一般在组件内使用路由参数，大多数人会这么做：

```javascript
export default{
    methods:{
        getParamsId(){
            return this.$route.params.id
        }
    }
}
```

这样做的缺点：高度耦合，使得该组件只能在某些特定的url上使用。

**推荐的做法：**

```javascript
const router = new VueRouter({
    routes:[{
        path:'/user/:id',
        component:User,
        props:true, //核心
    }]
})
```

将路由的props属性设置为true后，组件内可通过props接收params参数

```javascript
export default{
    props:['id'],
    methods:{
        getParamsId(){
            return this.id;
        }
    }
}
```
<br/>

## 函数式组件

函数式组件是无状态，无任何生命周期和方法的组件，无法实例化。创建函数式组件很简单，只需在`template`上添加`functional`声明即可。渲染性能更高。

函数式组件需要的一些都通过context参数传递。 具体参阅 [Vue函数式组件]([https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6](https://cn.vuejs.org/v2/guide/render-function.html#函数式组件))
