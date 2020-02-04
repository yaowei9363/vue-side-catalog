# vue-side-catalog
一个基于vue的侧边目录组件。
![image](http://p0.qhimg.com/t01bf25e62a31fa762a.png)

## 安装
```
npm install vue-side-catalog -S
```
## 开始
```
<template>
 <div id="app">
   <div class="demo">
      <h1>JavaScript</h1>
      <h2>历史</h2>
      <h3>肇始于网景</h3>
      <h3>微软采纳</h3>
      <h3>标准化</h3>
      <h2>概论</h2>
      <h2>特性</h2>
   </div>
  <side-catalog 
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
         containerElementSelector: '.demo',
      },
    };
  },
}
```
> 注意： **`containerElementSelector`** 属性是必需的，指定文章的容器。

效果如下图：
![image](http://p2.qhimg.com/t0182cb51aeaebaace0.png)

## 示例

### 自定义目录标签
组件默认会把`containerElementSelector`元素的直接子集的`header`标签作为目录内容,
对应规则为：
`h2` => `一级目录`
`h3` => `二级目录`
`h4` => `三级目录`
`h5` => `四级目录`
要修改这一规则可以使用 **`headList`** 属性，这个属性的默认值为`["h2", "h3", "h4", "h5"]`对应上述规则
> 注意：自定义题目标签目前只支持`containerElementSelector`元素的直接子集的html标签
```javascript
 data(){
    return {
      catalogProps:{
        headList: ["h1", "h2", "h3", "h4", "h5"], // 使h1作为一级目录
        // headList: ["h3", "h1", "p", "span"], // 指定不同的标签为目录
      },
    };
  },
```
![h1为一级目录](http://p6.qhimg.com/t0158179ba213107601.png)


### 自定义目录元素
跟上面的自定义目录标签不同，自定义目录元素可以支持`任意层级`的`含有ref属性的元素`，也可以支持组件
需要用到 **`refList`** 属性

```
<template>
    <h1>JavaScript</h1>
    <h2 ref="t1">历史</h2>
    <h3 ref="t1-1">肇始于网景</h3>
    <h3 ref="t1-2">微软采纳</h3>
    <h3 ref="t1-3">标准化</h3>
    <h2 ref="t2">概论</h2>
    <h2 ref="t3">特性</h2>
    <version ref="t4"/>
    <!-- ... -->
</template>
```
```javascript
//...
import Version from './components/Version';
export default {
  components: {
    // ...
    Version,
  },
  data() {
    return {
      catalogProps:{
         containerElementSelector: '.demo',
         refList:[
          {
            ref: 't1'
          },
          {
            ref: 't1-1',
            level: 2 // 指定为二级目录
          },
          {
            ref: 't1-2',
            level: 2
          },
          {
            ref: 't1-3',
            level: 2
          },
          {
            ref: 't2'
          },
          {
            ref: 't3'
          },
          {
            ref: 't4',
            title: '版本' // 组件需要单独设置title(默认取innerText)
          },
        ]
      },
    };
  },
}
```

效果如下图： 
![image](http://p9.qhimg.com/t01108c4316caf3f010.png)

> 注意：**`headList`** 和 **`refList`** 同时设置的话，会忽视**`headList`**
### 指定元素滚动
也可以使用 **`scrollElementSelector`** 对固定元素的内容生成目录，如果不指定该属性则默认监听`Window`的scroll事件

```javascript
 data(){
    return {
      catalogProps:{
        scrollElementSelector: '.demo',
      },
    };
  },
```
```
.demo {
  height: 400px;
  overflow: auto;
}
```
效果如下图：
![image](http://p9.qhimg.com/t01a99edbab87553234.png)

## 在线示例
[点击这里](https://codesandbox.io/s/vue-side-catalog-ynw1i)
## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| headList | `Array` | `["h2", "h3", "h4", "h5"]` | 为每级目录指定标签 |
| refList | `Array` | - | 为每级目录指定ref元素，数组每项为对象,包含两个属性<ul><li>`ref`（**必需**）该行目录对象的refName</li><li>`title`该行目录的名称（默认取innerText）</li><li>`level`(默认为1)该行目录级别</li></ul> |
| containerElementSelector | `String` | - | **（必需）**指定文章的容器 |
| scrollElementSelector | `String` | `Window` | 需要添加scroll事件的css选择器，默认监听`window`的scroll事件 |
| openDomWatch | `Boolean` | false | 是否开启dom监听，如果`containerElementSelector`中有dom变化会重新计算每个ref的offsetTop |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| initActive | - | 使目录第一行处于active状态 |
| setRefList | - | 计算目录各行的offsetTop |

## Slot
| Name | Description |
| --- | --- |
| - | 目录的题目 |