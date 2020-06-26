# vue-side-catalog

[中文文档](https://github.com/yaowei9363/vue-side-catalog/blob/v2.0/README.zh-CN.md)

[v1.0](https://github.com/yaowei9363/vue-side-catalog/blob/v1.0/README.md)

A vue-based side catalog component.
![intro](http://ww1.sinaimg.cn/large/e8107c14ly1gg4udp1prhg20yp0lfe82.gif)

[online example](https://codesandbox.io/s/vue-side-catalogv2-0xu99?file=/src/App.vue)

## Install
```
npm install vue-side-catalog -S
```
## Start
```javascript
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
> Note： The **`container`** attribute is required and specifies the container of the article.

The effect is as follows：

![start.png](http://ww1.sinaimg.cn/large/e8107c14ly1gg4v6a6jiij21yi17wgwl.jpg)


## Custom catalog labels
By default, the component will use the `<h>` tag of a direct subset of the` container` element as the catalog content.,
The corresponding rule is:

* `h2` => `First level catalog`

* `h3` => `Secondary catalog`

* `h4` => `Tertiary catalog`

* `h5` => `Fourth level catalog`

To modify this rule, you can use the **`levelList`** attribute. The default value of this attribute is` ["h2", "h3", "h4", "h5"] `corresponding to the above rule
> Note: Custom title tags currently only support html tags that are a direct subset of the `container` element
```javascript
 data(){
    return {
      catalogProps:{
        levelList: ["h1", "h2", "h3", "h4", "h5"], // make h1 a first-level catalog
        // levelList: ["h3", "h1", "p", "span"], // specifying different tags as directories
      },
    };
  },
```
h1 as first-level catalog:

![levelList.png](http://ww1.sinaimg.cn/large/e8107c14ly1gg4vmsa86sj21z218etk9.jpg)

## Scrolling inside the container
You can use the **`innerScroll`** attribute to specify the scroll event to listen for `container`, if you do not specify this attribute, the default is to listen for `Window`
```javascript
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
> Note：If the catalog is too long, you need to set a fixed height for the catalog to automatically scroll.You can use the `height` parameter, or add css directly from the outside

The effect is as follows:：

![innerScroll.gif](http://ww1.sinaimg.cn/large/e8107c14ly1gg5j10weung20z30lx4qr.gif)

[online example](https://codesandbox.io/s/vue-side-catalogv2innerscroll-t8j1o?file=/src/App.vue:31817-31860)

## Customize catalog style

You can customize each row of catalog or icon through `slot`

### Custom icon
 
`Iconfont` is used here

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

[online example](https://codesandbox.io/s/vue-side-catalogv2slot-imwtq?file=/src/App.vue)

---
Use the `iconLeft` parameter to align all icons to the left, and `lineLeft` to adjust the left line position

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
[online example](https://codesandbox.io/s/vue-side-catalogv2lefticon-mbge4?file=/src/App.vue)

### Customize each line of catalog 
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
| container | `String` | - | (**necessary**)Specify the article's container |
| innerScroll | `Boolean` | `false` | Whether to scroll inside the container |
| activeColor | `String` | `#006bff` | Color when in current catalog |
| levelGap | `Number` | 20 | Offsets of different levels of directories |
| iconLeft | `Boolean` | `false` | Whether the icon of each level of catalog is left aligned and does not follow the offset |
| lineLeft | `Number` | 22 | The left value of the left line of the catalog |
| lineShow | `Boolean` | `true` | Whether to show the left line of the catalog |
| title | `String` | - | Title at the top of the table of contents |
| height | `String` | - | The height of the catalog can be set to the value of height in css.When the catalog is too long and exceeds the height, it will automatically scroll to the current catalog.Of course, you can also set the height directly in the parent component |
| watch | `Boolean` | false | Whether to enable dom monitoring, if there is a dom change in `container`, it will recalculate the offsetTop of each level of catalog.For example, the expansion and collapse of the folded panel need to be recalculated |
| levelList | `Array` | `["h2", "h3", "h4", "h5"]` | Assign tags to each level of catalog |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| initActive | - | Make the first line of the catalog active |
| setTopList | - | Calculate the offsetTop of each level of the catalog. When the deviation between the article and the catalog does not correspond, you can call this method to recalculate |

## Slot
| Name | Description |
| --- | --- |
| default | Customize the icon of each line of catalog, the parameter is `{level, isActive}` |
| row | Customize each line of catalog, the parameter is `{level, isActive, title}` |
