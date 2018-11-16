## CSS 空格处理

直接查看源码：CSS 空格处理.html

## 移入父级块子级变动

级别：简单
相关 CSS：hover
解释：利用 hover 判断鼠标是否移入父级，在对应级操作

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

## 侧边栏随右边内容增长

级别：超简单
相关 CSS：calc(),min-height
解释： calc()和 min-height 对此次布局没有也别影响，calc()动态计算，min-height 最小高度 100vh 不让其在右边内容较少时更小

```
  //css
  .box{
    width: 100%;
    display: flex;
  }
  .sidebar{
    width: 200px;
    min-height: 100vh;
    background: rgba(143, 39, 143,.3);
  }
  .content{
    width: calc(100vw - 200px);
  }
  //body
  <div class="box">
    <div class="sidebar">

    </div>
    <div class="content">
      <ul>
        <li>1</li> //*n个
      </ul>
    </div>
  </div>
```
