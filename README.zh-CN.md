
# vue-side-catalog

[v1.0](https://github.com/yaowei9363/vue-side-catalog/blob/v1.0/README.zh-CN.md)

一个基于Vue的目录组件。
![intro](http://ww1.sinaimg.cn/large/e8107c14ly1gg4udp1prhg20yp0lfe82.gif)

[在线示例](https://codesandbox.io/s/vue-side-catalogv2-0xu99?file=/src/App.vue)

## 安装
```
npm install vue-side-catalog -S
```
## 开始
```js
<template>
 <div id="app">
   <div id="demo">
      <h1>JavaScript</h1>
      <h2>History</h2>
      <h3>Creation at Netscape</h3>
      <p>
        The Mosaic web browser was released in 1993. 
        As the first browser with a graphical user interface accessible to non-technical people, 
        it played a prominent role in the rapid growth of the nascent World Wide Web
      </p>
      <h3>Adoption by Microsoft</h3>
      <h3>The rise of JScript</h3>
      <h2>Trademark</h2>
      <h2>Website client-side usage</h2>
   </div>
  <side-catalog 
    class="catalog"
    v-bind="catalogProps"
  ></side-catalog>
  </div>
</template>
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'
export default {
  components: {
    SideCatalog,
  },
  data() {
    return {
      catalogProps:{
         container: '#demo',
      },
    };
  },
}
<style>
  .catalog {
    position: fixed;
    top: 50px;
    right: 50px;
  }
</style>
```
> 注意： **`container`** 属性是必需的，指定文章的容器。

效果如下图：

![start.png](http://ww1.sinaimg.cn/large/e8107c14ly1gg4v6a6jiij21yi17wgwl.jpg)


## 自定义目录标签
组件默认会把`container`元素的直接子集的`<h>`标签作为目录内容,
对应规则为：
* `h2` => `一级目录`
* `h3` => `二级目录`
* `h4` => `三级目录`
* `h5` => `四级目录`

要修改这一规则可以使用 **`levelList`** 属性，这个属性的默认值为`["h2", "h3", "h4", "h5"]`对应上述规则
> 注意：自定义题目标签目前只支持`container`元素的直接子元素的html标签
```js
 data(){
    return {
      catalogProps:{
        container: '#demo',
        levelList: ["h1", "h2", "h3", "h4", "h5"], // 使h1作为一级目录
        // levelList: ["h3", "h1", "p", "span"], // 指定不同的标签为目录
      },
    };
  },
```
`h1`作为一级目录：

![levelList.png](http://ww1.sinaimg.cn/large/e8107c14ly1gg4vmsa86sj21z218etk9.jpg)


## container内部滚动
可以使用 **`innerScroll`** 属性指定scroll事件监听`container`，如果不指定该属性则默认监听`Window`

```js
 data(){
    return {
      catalogProps:{
        container: '#demo',
        innerScroll: true,
        height: 'calc(100% - 20px)'
      },
    };
  },
```
> 注意：如果目录过长，需要为目录设定固定高度才能自动滚动。可以使用`height`参数，或者外部直接添加css

效果如下图：
![innerScroll.gif](http://ww1.sinaimg.cn/large/e8107c14ly1gg5j10weung20z30lx4qr.gif)

[在线示例](https://codesandbox.io/s/vue-side-catalogv2innerscroll-t8j1o?file=/src/App.vue:31817-31860)


## 自定义目录样式
通过`slot`可以自定义每行目录或者图标

### 自定义图标 
这里使用了Iconfont的字体图标
```js
  <side-catalog 
    class="catalog"
    v-bind="catalogProps"
  >
    <template #default="{level, isActive}">
      <i :class="['iconfont', isActive ? 'icon-smile' : 'icon-normal']"></i>
    </template>
  </side-catalog>
```

![icon.png](http://ww1.sinaimg.cn/large/e8107c14ly1gg5kemjevsj221018yh5t.jpg)

[在线示例](https://codesandbox.io/s/vue-side-catalogv2slot-imwtq?file=/src/App.vue)

---
使用`iconLeft`参数使所有图标左对齐，`lineLeft`调整左侧线位置
```js
  <side-catalog 
    class="catalog"
    v-bind="catalogProps"
  >
    <template #default="{level, isActive}">
      <i :class="['line-style', isActive ? 'line-style--active' : '']"></i>
    </template>
  </side-catalog>
```
```js
 data(){
    return {
      catalogProps:{
        container: "#demo",
        iconLeft: true,
        lineLeft: 0
      },
    };
  },
```
```css
.line-style {
  display: inline-block;
  height: 20px;
  width: 3px;
  background: transparent;
}
.line-style--active {
  background: currentColor;
}
```
![leftIcon.gif](http://ww1.sinaimg.cn/large/e8107c14ly1gg5rk4r2l6g20y50lvb2a.gif)

[在线示例](https://codesandbox.io/s/vue-side-catalogv2lefticon-mbge4?file=/src/App.vue)

### 自定义每行目录样式 
```js
  <side-catalog 
    class="catalog"
    v-bind="catalogProps"
  >
    <template #row="{level, isActive, title}">
      // ...
    </template>
  </side-catalog>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| container | `String` | - | (**必要**)指定文章的容器 |
| innerScroll | `Boolean` | `false` | 是否在容器内滚动 |
| activeColor | `String` | `#006bff` | 处于当前目录时的颜色 |
| levelGap | `Number` | 20 | 不同级别目录的偏移量 |
| iconLeft | `Boolean` | `false` | 每级目录的图标是否左对齐，不跟随偏移量移动 |
| lineLeft | `Number` | 22 | 目录左侧线的left值 |
| lineShow | `Boolean` | `true` | 是否展示目录左侧线 |
| title | `String` | - | 目录顶部标题 |
| height | `String` | - | 目录的高，可设为css中height的值。当目录过长超出高度，会自动滚动到当前目录。当然也可使在父组件中直接设置height |
| watch | `Boolean` | false | 是否开启dom监听，如果`container`中有dom变化会重新计算每级目录的offsetTop。例如使用`v-html`动态渲染，或者折叠面板展开和收起等情况需要重新计算 |
| levelList | `Array` | `["h2", "h3", "h4", "h5"]` | 为每级目录指定标签 |
| only-child | `Boolean` | `false` | 是否只有子元素才会被 levelList 选中 |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| initActive | - | 使目录第一行处于active状态 |
| setTopList | - | 计算每级目录的offsetTop，当文章和目录出现偏差不对应时，可以调用此方法重新计算 |

## Slot
| Name | Description |
| --- | --- |
| default | 自定义每行目录的图标，参数为`{level, isActive}` |
| row | 自定义每行目录，参数为`{level, isActive, title}` |