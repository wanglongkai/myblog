# 在这儿练习vuepress

1. 绝对定位元素的**百分比宽高**是相对于临近的position不为static的祖先元素的padding-box来计算的。

2. 非绝对定位元素的百分比宽高是相对于父元素的content-box来计算的。

3. 创建BFC：

   > 根元素
   >
   > float:不为none
   >
   > position:absolute/fixed
   >
   > display:flex/inline-block/table
   >
   > overflow:不为visible

4. 元素竖向的百分比设定：

   > height是相对于父元素的高度
   >
   > margin和padding是相对于父元素的宽度(padding-box)
                   
                   
 
 
 ![Test](../img/test.jpg)
 
 :100: :tada:
 
 ::: tip
 我是提示`code`
 :::
 
 ::: warning
 我是警告
 > test一下
 :::

::: danger
危险
:::

::: details
详情模块
:::

::: v-pre
{{因为vuepress内置了支持，想要显示这两个符号，就必须这样写}}
:::

<Test>插值位置的数据</Test>

## test Badge <Badge text="默认主题"/> <Badge text="warning" type="warning" vertical="middle"/>
