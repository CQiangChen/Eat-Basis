##CSS 空格处理
直接查看源码：CSS空格处理.html

##移入父级块子级变动
相关 CSS：hover
解释：利用hover判断鼠标是否移入父级，在对应级操作
源码位置：移入父级块子级显示.html
```
  //css
    .box{
      width: 200px;
      height: 200px;
      background: red;
    }
    .child{
      width: 50px;
      height: 50px;
      background: black;
      transition:all .3s;
    }
    .box:hover .child{
      background: yellow;
    }
  //body
   <div class="box">
    <div class="child"></div>
   </div>
```
