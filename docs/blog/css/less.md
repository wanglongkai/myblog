# less记录-常用的知识点

## 变量

```less
@color:#333;
.header{
    color:@color;
}

//编译成
.header{
    color:#333;
}
```

--------

## 嵌套

```less
.header{
    font-size:16px;
    &::after{
        content:"";
    }
    .nav{
        color:red;
    }
}

//编译成
.header{
    font-size:16px;
}
.header::after{
    content:"";
}
.header .nav{
    font-size:16px;
    color:red;
}
```

## 混合

混合就是批量复用css属性而已。

```less
//定义一个Mixins：它本身就是个class，当然也可以是其他选择器
.mix{
    font-size:16px;
    color:red;
}

//使用Minxins
.use{
    .mix();
    border:1px solid #232323;
}

/*编程成：*/
.mix{
    font-size:16px;
    color:red;
}
.use{
    font-size:16px;
    color:red;
    border:1px solid #232323;
}

```

## 带参混合

就是混合时可以传入参数。

```less
//定义一个带参Mixins
.mix(@var,@font){
    font-size:@font;
    color:@var;
}

//使用带参Mixins
.use{
    .mix(#ccc,16px);
}

/*编译成：*/
.use{
    font-size:16px;
    color:#ccc;
}
```

# less的缺点：

- less的运算不实用，只适合同类型单位数据运算，比如`10vh-5px`的结果是5vh,很明显不是我们想要的结果==>**less的运算结果的单位跟随被减数**。

  <span style="color:red;">解决办法:</span>使用less的转义字符“~”。`font-size: calc(~"20vh - 4px");`

  

