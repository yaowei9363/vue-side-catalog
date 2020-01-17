<template>
  <div
    class="side-catalog"
    :style="{
      'right': right,
      'top': top,
      'left': left,
      'bottom': bottom
    }"
  >
    <div
      v-for="(item) in list"
      :key="item.ref"
      :style="{'padding-left': getTitleMargin(item.level)}"
      class="side-catalog__item"
      @click="anchorActive(item.ref)"
      :class="{
          'side-catalog__item--child': isChildren(item.level)
        }"
    >
      <i
        class="side-catalog__item-icon"
        :class="{
          'side-catalog__item-icon--active': active===item.ref,
          'side-catalog__item-icon--child': isChildren(item.level)
        }"
      />
      <span
        class="side-catalog__item-title"
        :class="[
          {'side-catalog__item-title--active': active===item.ref},
          `side-catalog__item--level${item.level || 1}`
        ]"
        :title="item.title"
      >{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
export default {
  name: 'SideCatalog',
  props: {
    right: {
      type: String,
      default: '100px',
    },
    top: {
      type: String,
      default: '100px',
    },
    left: {
      type: String,
      default: 'initial',
    },
    bottom: {
      type: String,
      default: 'initial',
    },
    list: {
      type: Array,
      default() {
        return [
          // {
          //   title: 'name',
          //   ref: 'refname', //f
          //   level: 1,  //默认为1
          // },
        ];
      },
    },
    // 是否开启dom监听,dom有变化主动更新各个ref的offsetTop值
    openDomWatch: {
      type: Boolean,
      default: false,
    },
    // 绑定scroll事件的dom的class
    // 该元素必须为定位元素或者最近的 table,td,th,body
    scrollElementSelector: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: '',
      refTopMap:{},
      refTopList: [],
      refList: [],
      isBeforeDestroy: false,
      observer: null,
      isClick: false
    };
  },
  computed: {
    scrollElement() {
      return this.scrollElementSelector
        ? document.querySelector(this.scrollElementSelector)
        : window;
    },
    scrollToEle(){
      return this.scrollElementSelector
        ? this.scrollElement
        : document.documentElement;
    }

  },
  mounted() {
    this.initActive();
    this.setOffsetParent();
    this.setRefList();
    this.scrollElement.addEventListener('scroll', throttle(this.scrollHandle, 200));
    this.$nextTick(() => {
      setTimeout(() => {
        if(this.openDomWatch) {
        // 设置dom监听
          this.observer = new MutationObserver(debounce(this.setRefList, 700));
          this.observer.observe(this.scrollElement, {
            childList: true,
            subtree: true,
          });
        }
      }, 500);
    });
  },
  beforeDestroy() {
    if(this.openDomWatch) {
      // beforeDestroy时,解绑dom监听之前,偶尔会触发observer监听的setRefList函数
      // 导致报错,需要用变量控制
      this.isBeforeDestroy = true;
      // 解绑dom监听
      this.observer.disconnect();
    }
    this.scrollElement.removeEventListener('scroll', this.scrollHandle);
  },
  methods: {
    // 点击title
    anchorActive(ref) {
      if(this.active === ref) return;
      // 点击title 会触发scroll事件,在内容高度不够的情况下点击的title和active的title会有出入
      // 所以点击的时候先return掉scroll事件
      this.isClick = true;
      this.scrollToEle.scrollTop = this.refTopMap[ref];
      this.active = ref;
      setTimeout(()=>{
        this.isClick = false;
      },150);
      this.$emit('title-click', ref);
    },
    // 获取ref的dom
    getRefDom(_ref) {
      /**
       * 获取ref的dom元素有以下四种情况
       * 1. ref在循环中, ref是dom元素 => ref[0]
       * 2. ref在循环中, ref是vue实例 => ref[0].$el
       * 3. ref不在循环中, ref是dom元素 => ref
       * 4. ref不在循环中, ref不是vue实例 => ref.$el
       */
      const ref = this.$parent.$refs[_ref];
      if(Array.isArray(ref)) {
        return this.vueOrDom(ref[0]);
      }
      return this.vueOrDom(ref);
    },
    // ref 是vue还是dom
    vueOrDom(ref) {
      if(ref instanceof HTMLElement) return ref;
      if(ref._isVue) return ref.$el;
    },
    // 获取ref offsetTop数组
    setRefList() {
      if(this.isBeforeDestroy) return;
      this.refList = [];
      this.refTopList = [];
      this.list.forEach((item) => {
        const offsetTop = this.getRefDom(item.ref).offsetTop;        
        this.refList.unshift(item.ref);      
        this.refTopList.unshift(offsetTop);
        this.refTopMap[item.ref] = offsetTop;
      });
    },
    // scroll事件
    scrollHandle(e) {
      if(this.isClick) return; 
      const scrollTop = this.scrollElementSelector ? e.target.scrollTop : document.documentElement.scrollTop;
      this.refTopList.some((item, index) => {
        if(scrollTop >= item) {
          this.active = this.refList[index];
          return true;
        }
        return false;
      });
    },
    initActive() {
      this.active = this.list[0].ref;
    },
    getTitleMargin(level) {
      return level ? `${parseInt(level, 10) * 15}px` : '10px';
    },
    // 需要为scrollElement设置相对定位(offsetParent)
    // offsetParent(定位元素或者最近的 table,td,th,body)
    setOffsetParent(){
      if(!this.scrollElementSelector) return;
      const ele = document.querySelector(this.scrollElementSelector);
      if(ele.style.position) return;
      ele.style.position = 'relative';      
    },
    isChildren(level){
      return level && level>1;
    }
  },
};
</script>
<style scoped lang="scss" src="./main.scss"></style>