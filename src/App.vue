<template>
  <div id="app">
    <div class="box" style="height:500px;overflow-y:auto;border:1px solid;">
      <h2 ref="h1">h1</h2>
      <h2 ref="h2">h2</h2>
      <h2 ref="h3">h3-1</h2>
      <h2 ref="h3-sub1">h3-sub</h2>
      <h2 ref="h3-sub2">h3-sub</h2>
      <h3 ref="h3-sub3">h3-sub</h3>
      <h4 ref="h3-sub-sub">h3-sub-sub</h4>
      <HelloWorld ref="h4" msg="Welcome to Your Vue.js App" style=""/>
    </div>
    <side-catalog 
      v-bind="catalogProps"
      @title-click="titleClick"
    ></side-catalog>
  </div>
</template>

<script>
import SideCatalog from './components/side-catalog/main.vue';
import HelloWorld from './components/HelloWorld';
export default {
  name: 'app',
  components: {
    SideCatalog,
    HelloWorld
  },
  data(){
    return {
      catalogProps:{
        // right: '100px',
        // top: '100px',
        scrollElementSelector: '.box',
        list:[
          {
            title: '标题1标题1标题1标题1标题1标题1标题1标题1',
            ref: 'h1'
          },
          {
            title: 'h2',
            ref: 'h2'
          },
          {
            title: 'h3',
            ref: 'h3'
          },
          {
            title: 'h3-sub1',
            ref: 'h3-sub1',
            level: 2
          },
          {
            title: 'h3-sub2',
            ref: 'h3-sub2',
            level: 2
          },
          {
            title: 'h3-sub3',
            ref: 'h3-sub3',
            level: 2
          },
          {
            title: 'h3-sub-sub',
            ref: 'h3-sub-sub',
            level: 3
          },
          {
            title: 'h4',
            ref: 'h4'
          }
        ]

      },
    };
  },
  methods:{
    titleClick(ref){
      console.log('click', ref);
      
    }
  }
};
</script>

<style>
h2{
  height: 1000px;
}
</style>
