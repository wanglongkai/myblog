# css易错点

1. 绝对定位元素的**百分比宽高**是相对于邻近的position不为static的祖先元素的padding-box来计算的。

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
                   
