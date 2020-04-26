## grid布局



详见：http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

**<span style="color:red;font-size:20px;">布局理念</span>：**

**1.二维布局;**

**2.划分行和列;**

**3.指定行间距和列间距;**

**4.合并单元格;**

**5.子元素填充单元格**。





**容器和项目**

容器的属性：

**display:grid**  指定是网格布局



**grid-template-rows、grid-template-columns:**  划分行和列，定义每行的高和每列的宽。

这两个属性的属性值可以配置以下几个函数和关键字使用：

repeat()、auto-fill、fr、minmax()、auto



**grid-row-gap、grid-column-gap:**  设置行间距和列间距。

`grid-gap`是上面两个属性的简写形式,

>  根据最新标准，上面三个属性名的`grid-`前缀已经删除，`grid-column-gap`和`grid-row-gap`写成`column-gap`和`row-gap`，`grid-gap`写成`gap`。



**grid-auto-flow**:设置子元素的填充顺序

`row`,（默认）先行后列，人的正常适应顺序

`column`，先列后行。

还有row dense、column dense,紧密排列。



