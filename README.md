# vue-side-catalog
一个基于vue的侧边目录组件,支持滚动监听，点击定位，dom节点变化监听，指定容器生成目录。
![image](http://p0.qhimg.com/t01bf25e62a31fa762a.png)

## Install
```
npm install vue-side-catalog -S
```
## Start
```
<template>
 <div id="app">
   <div class="demo">
      <h1>JavaScript</h1>
      <h2 ref="t1">历史</h2>
      <h3 ref="t1-1">肇始于网景</h3>
      <h3 ref="t1-2">微软采纳</h3>
      <h3 ref="t1-3">标准化</h3>
      <h2 ref="t2">概论</h2>
      <h2 ref="t3">特性</h2>
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
    data(){
    return {
      catalogProps:{
        list:[
          {
            title: '历史',
            ref: 't1'
          },
          {
            title: '肇始于网景',
            ref: 't1-1',
            level: 2
          },
          {
            title: '微软采纳',
            ref: 't1-2',
            level: 2
          },
          {
            title: '标准化',
            ref: 't1-3',
            level: 2
          },
          {
            title: '概论',
            ref: 't2'
          },
          {
            title: '特性',
            ref: 't3'
          },     
        ]
      },
    };
  },
}
```
效果如下图：
![image](http://p2.qhimg.com/t0182cb51aeaebaace0.png)

也可以使用`scrollElementSelector`对固定Dome的内容生成目录，效果如下图：

```
 data(){
    return {
      catalogProps:{
        scrollElementSelector: '.demo',
      },
    };
  },
```
![image](http://p9.qhimg.com/t01a99edbab87553234.png)

当然vue组件也可以生成目录
```
// template
<version ref="t6"/> 
// script
data(){
   return {
      catalogProps:{
        list[
            {
              title: '版本',
              ref: 't6'
            }
        ]
      },
    };
  },
```
## Example
[点击这里](https://codesandbox.io/s/vue-side-catalog-5kdfc)

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | `String` | '' | 目录的title |
| isFixed | `Boolean` | true | 目录是否为固定定位 |
| right | `String` | 100px | 只在`isFixed`为`true`时有效，对固定定位的right值 |
| top | `String` | 100px | 只在`isFixed`为`true`时有效，对固定定位的top值 |
| left | `String` | 100px | 只在`isFixed`为`true`时有效，对固定定位的left值 |
| bottom | `String` | 100px | 只在`isFixed`为`true`时有效，对固定定位的bottom值 |
| list | `Array` | - | 数组每项为对象,包含三个属性<ul><li>`title`(必需)该行目录题目</li><li>`ref`(必需)该行目录对象的refName</li><li>`level`(默认为1)该行目录级别</li></ul> |
| scrollElementSelector | `String` | `Window` | 需要添加scroll事件的css选择器，默认监听`window`的scroll事件 |
| openDomWatch | `Boolean` | false | 是否开启dom监听，如果dom有变化会重新计算每个ref的offsetTop |

## Event

| Name | Parameters | Description |
| --- | --- | --- |
| title-click | refName | 点击目录title触发 |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| initActive | - | 使目录第一行处于active状态 |
| setRefList | - | 计算各个ref的offsetTop |