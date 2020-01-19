# vue-side-catalog
![image](doc/gif/all.gif)

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
![image](http://p2.qhimg.com/t0182cb51aeaebaace0.png)
