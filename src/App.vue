<template>
  <div id="app">
    <div class="demo">
      <h1>JavaScript</h1>
      <p>
        JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言[5]。JavaScript是一门基于原型、函数先行的语言[6]，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化[5]。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持。
        虽然JavaScript与Java这门语言不管是在名字上，或是在语法上都有很多相似性，但这两门编程语言从设计之初就有很大的不同，JavaScript的语言设计主要受到了Self（一种基于原型的编程语言）和Scheme（一门函数式编程语言）的影响[6]。在语法结构上它又与C语言有很多相似（例如if条件语句、switch语句、while循环、do-while循环等）[7]。
        在客户端，JavaScript在传统意义上被实现为一种解释语言，但在最近，它已经可以被即时编译（JIT）执行。随着最新的HTML5和CSS3语言标准的推行它还可用于游戏、桌面和移动应用程序的开发和在服务器端网络环境运行，如Node.js。
      </p>
      <h2 ref="t1">历史</h2>
        <p>
        1993年，伊利诺伊大学厄巴纳-尚佩恩分校的国家超级电脑应用中心（NCSA）发表了NCSA Mosaic，这是最早流行的图形接口网页浏览器，它在万维网的普及上发挥了重要作用。1994年，一家名为Mosaic Communications的公司在加州芒廷维尤成立了，并雇用了许多原来的NCSA Mosaic开发者用来开发Mosaic Netscape，该公司的目标是取代NCSA Mosaic成为世界第一的网页浏览器。第一个版本的网页浏览器Mosaic Netscape 0.9于1994年底发布。在四个月内，已经占据了四分之三的浏览器市场，并成为1990年代互联网的主要浏览器。为避免NCSA的商标所有权问题，该浏览器于同年更名为Netscape Navigator，该公司命名为Netscape Communications。网景预见到网络需要变得更动态。公司的创始人马克·安德森认为HTML需要一种胶水语言，让网页设计师和兼职程序员可以很容易地使用它来组装图片和插件之类的组件，且代码可以直接编写在网页标记中。
        1995年，网景招募了布兰登·艾克，目标是把Scheme语言嵌入到Netscape Navigator浏览器当中[8]。但更早之前，网景已经跟昇阳合作在Netscape Navigator中支持Java，这时网景内部产生激烈的争论[9]。后来网景决定发明一种与Java搭配使用的辅助脚本语言并且语法上有些类似[10]，这个决策导致排除了采用现有的语言，例如Perl、Python、Tcl或Scheme。为了在其他竞争提案中捍卫JavaScript这个想法，公司需要有一个可以运作的原型。艾克在1995年5月仅花了十天时间就把原型设计出来了。
        最初命名为Mocha，1995年9月在Netscape Navigator 2.0的Beta版中改名为LiveScript，同年12月，Netscape Navigator 2.0 Beta 3中部署时被重命名为JavaScript[1][11]，当时网景公司与昇阳电脑公司组成的开发联盟为了让这门语言搭上Java这个编程语言“热词”，因此将其临时改名为JavaScript，日后这成为大众对这门语言有诸多误解的原因之一[12]
      </p>
      <h3 ref="t1-1">肇始于网景</h3>
      <p>
        1993年，伊利诺伊大学厄巴纳-尚佩恩分校的国家超级电脑应用中心（NCSA）发表了NCSA Mosaic，这是最早流行的图形接口网页浏览器，它在万维网的普及上发挥了重要作用。1994年，一家名为Mosaic Communications的公司在加州芒廷维尤成立了，并雇用了许多原来的NCSA Mosaic开发者用来开发Mosaic Netscape，该公司的目标是取代NCSA Mosaic成为世界第一的网页浏览器。第一个版本的网页浏览器Mosaic Netscape 0.9于1994年底发布。在四个月内，已经占据了四分之三的浏览器市场，并成为1990年代互联网的主要浏览器。为避免NCSA的商标所有权问题，该浏览器于同年更名为Netscape Navigator，该公司命名为Netscape Communications。网景预见到网络需要变得更动态。公司的创始人马克·安德森认为HTML需要一种胶水语言，让网页设计师和兼职程序员可以很容易地使用它来组装图片和插件之类的组件，且代码可以直接编写在网页标记中。
        1995年，网景招募了布兰登·艾克，目标是把Scheme语言嵌入到Netscape Navigator浏览器当中[8]。但更早之前，网景已经跟昇阳合作在Netscape Navigator中支持Java，这时网景内部产生激烈的争论[9]。后来网景决定发明一种与Java搭配使用的辅助脚本语言并且语法上有些类似[10]，这个决策导致排除了采用现有的语言，例如Perl、Python、Tcl或Scheme。为了在其他竞争提案中捍卫JavaScript这个想法，公司需要有一个可以运作的原型。艾克在1995年5月仅花了十天时间就把原型设计出来了。
        最初命名为Mocha，1995年9月在Netscape Navigator 2.0的Beta版中改名为LiveScript，同年12月，Netscape Navigator 2.0 Beta 3中部署时被重命名为JavaScript[1][11]，当时网景公司与昇阳电脑公司组成的开发联盟为了让这门语言搭上Java这个编程语言“热词”，因此将其临时改名为JavaScript，日后这成为大众对这门语言有诸多误解的原因之一[12]
      </p>
      <h3 ref="t1-2">微软采纳</h3>
      <p>
        JavaScript推出后在浏览器上大获成功，微软公司在不久后就为Internet Explorer 3浏览器推出了JScript，以与处于市场领导地位的网景产品同台竞争。JScript也是一种JavaScript实现，这两个JavaScript语言版本在浏览器端共存意味着语言标准化的缺失，发展初期，JavaScript的标准并未确定，同期有网景的JavaScript，微软的JScript双峰并峙。除此之外，微软也在网页技术上加入了不少专属对象，使不少网页使用非微软平台及浏览器无法正常显示[13][14]，导致在浏览器大战期间网页设计者通常会把“用Netscape可达到最佳效果”或“用IE可达到最佳效果”的标志放在主页[15]。随着Internet Explorer 4的发布，微软引入了动态HTML的概念，但语言实现和不同专有化的文档对象模型的差异仍然存在，成为网络上普及使用JavaScript的阻碍[13]。
      </p>
      <h3 ref="t1-3">标准化</h3>
      <p>
        1996年11月，网景正式向ECMA（欧洲计算机制造商协会）提交语言标准。1997年6月，ECMA以JavaScript语言为基础制定了ECMAScript标准规范ECMA-262。JavaScript成为了ECMAScript最著名的实现之一[16]。除此之外，ActionScript和JScript也都是ECMAScript规范的实现语言。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。
      </p>
      <h2 ref="t2">概论</h2>
      <p>
        不同于服务器端脚本语言，例如PHP与ASP，JavaScript主要被作为客户端脚本语言在用户的浏览器上运行，不需要服务器的支持。所以在早期程序员比较青睐于JavaScript以减少对服务器的负担，而与此同时也带来另一个问题：安全性。而随着服务器变得强大，现在的程序员更喜欢运行于服务端的脚本以保证安全，但JavaScript仍然以其跨平台、容易上手等优势大行其道。同时，有些特殊功能（如AJAX）必须依赖JavaScript在客户端进行支持。随着引擎如V8和框架如Node.js的发展，及其事件驱动及异步IO等特性，JavaScript逐渐被用来编写服务器端程序。且在近几年中，Node.js的出世，让JavaScript也具有了一定的服务器功能，且在某些方面比PHP的效果更为显著[来源请求]。
      </p>
      <h2 ref="t3">特性</h2>
      <p>
        不同于服务器端脚本语言，例如PHP与ASP，JavaScript主要被作为客户端脚本语言在用户的浏览器上运行，不需要服务器的支持。所以在早期程序员比较青睐于JavaScript以减少对服务器的负担，而与此同时也带来另一个问题：安全性。而随着服务器变得强大，现在的程序员更喜欢运行于服务端的脚本以保证安全，但JavaScript仍然以其跨平台、容易上手等优势大行其道。同时，有些特殊功能（如AJAX）必须依赖JavaScript在客户端进行支持。随着引擎如V8和框架如Node.js的发展，及其事件驱动及异步IO等特性，JavaScript逐渐被用来编写服务器端程序。且在近几年中，Node.js的出世，让JavaScript也具有了一定的服务器功能，且在某些方面比PHP的效果更为显著[来源请求]。
      </p>
      <h3 ref="t3-1">指令式与结构化</h3>
      <p>
        JavaScript从支持许多C语言的结构化编程语法（例如if条件语句、while循环、switch语句、do-while循环等）。但作用域是一个例外：JavaScript只支持使用var关键字来定义变量的函数作用域。ECMAScript加入了let关键字来支持块级作用域，意味着JavaScript现在既支持函数作用域又支持块级作用域。正如C语言一样，JavaScript中的表达式和语句是不同的。与C不同，JavaScript支持自动在语句末添加分号。
      </p>
      <h3 ref="t3-2">动态化</h3>
      <p>
        正如大部分脚本语言，类型与值而不是与变量关联。例如x变量可以为数值，随后又可被赋值为字符串。JavaScript提供了包括鸭子类型在内的方法来检测变量类型。
      </p>
      <h4 ref="t3-2-1">Eval()</h4>
      <p>
        Eval() 函数可以直接运行一个JavaScript函数。例如：eval("alert(\"Message\")");
      </p>
      <h2 ref="t4">编程</h2>
      <p>
        JavaScript是一种脚本语言，其源代码在发往客户端运行之前不需经过编译，而是将文本格式的字符代码发送给浏览器由浏览器解释运行。解释型语言的弱点是安全性较差，而且在JavaScript中，如果一条运行不了，那么下面的语言也无法运行。而其解决办法就是于使用异常处理try{}catch(){}︰
      </p>
      <pre>
        console.log("a");    //這是正确的
        console.log("b");    //這是正确的
        console.logg("c");   //这是错误的，并且到这里会停下来
        console.log("d");    //這是正确的
        console.log("e");    //這是正确的

        /*解決辦法*/
        try{console.log("a");}catch(e){}    //這是正确的
        try{console.log("b");}catch(e){}    //這是正确的
        try{console.logg("c");}catch(e){}   //这是错误的，但是到这里不会停下来，而是跳过
        try{console.log("d");}catch(e){}    //這是正确的
        try{console.log("e");}catch(e){}    //這是正确的
      </pre>
      <p>
        JavaScript被归类为解释型语言，因为当前主流的引擎都是每次运行时加载代码并解译。V8是将所有代码解译后再开始运行，其他引擎则是逐行解译（SpiderMonkey会将解译过的指令暂存，以提高性能，称为即时编译），但由于V8的核心部分多数用JavaScript撰写（而SpiderMonkey是用C++），因此在不同的测试上，两者性能互有优劣。与其相对应的是编译语言，例如C语言，以编译语言编写的程序在运行之前，必须经过编译，将代码编译为机器代码，再加以运行。
      </p>
      <h2 ref="t5">实例</h2>
      <p>
        以下是一个简单的JavaScript Hello World︰
      </p>
      <pre>
        &lt;!DOCTYPE HTML&gt;
        &lt;html&gt;
            &lt;head&gt;
            &lt;title&gt;简单的JavaScript Hello World&lt;/title&gt;
                &lt;script type="text/javascript"&gt;
                    document.write("Hello, world!");   // 在浏览器视窗内直接显示
                    alert("Hello, world!");            // 弹窗显示
                    console.log("Hello, world!");      
                    // 在控制台（console）里显示，需要先开启开发工具控制台
                &lt;/script&gt;
            &lt;/head&gt;
            &lt;body&gt;
              HTML内容……
            &lt;/body&gt;
        &lt;/html&gt;
      </pre>
      <version ref="t6"/> 
    </div>
    <side-catalog 
      v-bind="catalogProps"
      @title-click="titleClick"
    >
    </side-catalog>
  </div>
</template>

<script>
import SideCatalog from './components/side-catalog/main.vue';
import Version from './components/Version';
export default {
  name: 'app',
  components: {
    SideCatalog,
    Version,
  },
  data(){
    return {
      catalogProps:{
        // right: '100px',
        // top: '100px',
        // scrollElementSelector: '.demo',
        // isFixed: false,
        title: '目录',
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
          {
            title: '指令式与结构化',
            ref: 't3-1',
            level: 2
          },
          {
            title: '动态化',
            ref: 't3-2',
            level: 2
          },
          {
            title: 'Eval()',
            ref: 't3-2-1',
            level: 3
          },
          {
            title: '编程',
            ref: 't4'
          },
          {
            title: '实例',
            ref: 't5'
          },
          {
            title: '版本',
            ref: 't6'
          },
          
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
.demo{
  width: 700px;
  padding: 20px;
  line-height: 1.5;
  border:1px solid;
}
p{
  text-indent: 2em;
}
/* h2{
  height: 1000px;
} */
</style>
