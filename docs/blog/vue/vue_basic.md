









## Vue基础学习记录



[TOC]

模板语法里是JavaScript表达式，所以可以写一些运算。

v-html指令：

```html
<div v-html="template"></div>
# 这里的template是一个变量，它的值为HTML结构
```

绑定属性用v-bind:属性

绑定方法用v-on(缩写@):事件

watch侦听器：侦听一个属性，一般用于异步场景

computed计算属性：根据一个或多个属性计算出新属性，一般用于数据联动

v-if,v-else-if,v-else,v-show

v-for,



## 工程化

1.全局安装vue-cli:`npm install -g @vue-cli`

2.初始化一个vue-cli工程：`vue create vueProjectNmae`

3.开始工程





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



## 状态管理

只能用mutations改变状态

事件提交mutations，mutations改变state，state驱动视图变化。

Vue.component("name",{})形式注册全局组件时，必须在Vue实例化之前执行。





## vue-router使用

**使用步骤：**核心就是这几步

```javascript
1.引入router
import Router from "vue-router"

2.Vue添加Router拦截
Vue.use(Router)

3.定义路由
const routes = [
    {path:"/",component:组件名}
]

4.实例化路由
const router = new VueRouter(routes)

5.注入路由
new Vue({
    router
})
```

在组件内，通过`this.$router`访问路由器，通过`this.$route`访问当前路由。



计算属性可以操作`props`和`data`。



## 插槽

```javascript
<slot>默认内容</slot>                /*默认插槽*/
<slot name="header">默认内容</slot>  /具名插槽*/

/*作用域插槽*/
<slot :user="user">默认内容</slot>  /*可以在父组件中访问到子组件中的数据*/
<template v-slot:default="obj">{{obj.user.name}}</template>	
```

### 插槽举例

```java
/*子组件*/
<template>
  <div>
    <slot/>
    <slot name="header" :user="user"/>
  </div>
</template>

<script>
  export default {
    name: "comA",
    data() {
      return {
        user: {
          name: "wlk",
          age: 25
        }
      }
    }
  }
</script>
    
    
/*父组件*/
<A>
    default
    <template v-slot:header="obj">
        header---{{obj.user.name}}--{{obj.user.age}}
	</template>
</A>
```



## @click.native.stop

**Vue**,组件上绑定事件需要加`.native`事件修饰符，可以用`@click.stop`阻止没有事件处理函数的事件冒泡。





## Vue中`sync`修饰符使用技巧

```javascript
//父组件
<template>
  <div>
    <SyncTest :name.sync="name"/>  /*关键代码*/
  </div>
</template>

<script>
  import SyncTest from "../components/common/syncTest"
  export default {
    name: "practicePage",
    components:{
      SyncTest
    },
  }
</script>

    
//子组件
<template>
  <div @click="changeFather">.sync==={{name}}</div>
</template>
<script>
  export default {
    name: "syncTest",
    props: {
      name: String,
    },
    methods: {
      changeFather() {
        this.$emit("update:name", "www");  /*关键代码*/
      }
    }
  }
</script>
```





## 通过$listeners实现隔代组件通信

子组件中的`$listeners`属性包含了父组件传入子组件的**事件监听**(不包含.native修饰的)，子组件可通过`v-on="$listeners"`传入孙子组件，孙子组件通过`this.$emit(事件名，参数)`触发父组件或爷爷组件中的事件。





## 隔代组件通信方法汇总

1. vuex-状态管理
2. props-代代传
3. provide/inject-依赖注入
4. bus-中央事件总线





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



## vue深度作用域样式

在当前组件中==强制==修改子组件样式

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

