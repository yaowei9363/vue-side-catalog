<template>
  <div id="app">
    <div id="demo">
      <h1>JavaScript</h1>
      <h2>History</h2>
      <h3>Creation at Netscape</h3>
      <p>The Mosaic web browser was released in 1993. As the first browser with a graphical user interface accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web. The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. Navigator quickly became the most used browser.</p>
      <p>During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.</p>
      <p>Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages. Although the new language and its interpreter implementation were officially called LiveScript when first shipped as part of a Navigator release in September 1995, the name was changed to JavaScript three months late</p>
      <p>The choice of the JavaScript name has caused confusion, sometimes giving the impression that it is a spin-off of Java. Since Java was the hot new programming language at the time, this has been characterized as a marketing ploy by Netscape to give its own new language cachet.</p>
      <h3>Adoption by Microsoft</h3>
      <p>Microsoft debuted Internet Explorer in 1995, leading to a browser war with Netscape. On the JavaScript front, Microsoft reverse-engineered the Navigator interpreter to create its own, called JScript.</p>
      <p>JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator. These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.</p>
      <h3>The rise of JScript</h3>
      <p>In November 1996, Netscape submitted JavaScript to ECMA International, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.</p>
      <p>The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.</p>
      <p>Meanwhile, Microsoft gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%. This meant that JScript became the de facto standard for client-side scripting on the Web.</p>
      <p>Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on ECMA work. Thus ECMAScript 4 was mothballed.</p>
      <h3>Growth and standardization</h3>
      <p>During the period of Internet Explorer dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, Mozilla, released the Firefox browser. Firefox was well-received by many, taking significant market share from Internet Explorer.</p>
      <p>In 2005, Mozilla joined ECMA International, and work started on the ECMAScript for XML (E4X) standard. This led to Mozilla working jointly with Macromedia (later acquired by Adobe Systems), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the Tamarin implementation as an open source project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from Microsoft, ECMAScript 4 never reached fruition.</p>
      <p>Meanwhile, very important developments were occurring in open source communities not affiliated with ECMA work. In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and described a set of technologies, of which JavaScript was the backbone, to create web applications where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open source libraries and the communities that formed around them. Many new libraries were created, including jQuery, Prototype, Dojo Toolkit, and MooTools.</p>
      <p>Google debuted its Chrome browser in 2008, with the V8 JavaScript engine that was the first to use just-in-time compilation, significantly improving execution times. Other browser vendors needed to overhaul their engines to compete.</p>
      <p>In July 2008, these disparate parties came together for a conference in Oslo. This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.</p>
      <h3>Reaching maturity</h3>
      <p>Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of ECMAScript 6 in 2015.</p>
      <p>From 2016 to 2019, a new version of the ECMAScript standard was published each year, but the scope of changes was much smaller than the 5th or 6th editions. Thus JavaScript can now be considered a mature language that has largely settled down.</p>
      <p>The current JavaScript ecosystem has many libraries and frameworks, established programming practices, and increased usage of JavaScript outside of web browsers. Plus, with the rise of single-page applications and other JavaScript-heavy websites, a number of transpilers have been created to aid the development process.</p>
      <h2>Trademark</h2>
      <p>"JavaScript" is a trademark of Oracle Corporation in the United States. It is used under license for technology invented and implemented by Netscape Communications and other parties.</p>
      <h2>Website client-side usage</h2>
      <p>JavaScript is the dominant client-side scripting language of the Web, with 95% of websites using it for this purpose. Scripts are embedded in or included from HTML documents and interact with the DOM. All major web browsers have a built-in JavaScript engine that executes the code on the user's device.</p>
      <h3>Examples of scripted behavior</h3>
      <ul>
        <li>Loading new page content without reloading the page. For example, social media websites use Ajax so that users can post new messages without leaving the page.</li>
        <li>Animation of page elements, such as fading them in and out, resizing, and moving them.</li>
        <li>Interactive content, such as games and video.</li>
        <li>Validating input values of a web form to make sure that they are acceptable before being submitted to the server.</li>
        <li>Transmitting information about the user's behavior for analytics, ad tracking, and personalization.</li>
      </ul>
      <h3>Libraries and frameworks</h3>
      <p>The majority of websites use a third-party JavaScript library or web application framework as part of their client-side page scripting.</p>
      <p>jQuery is the most popular library, used by over 70% of websites.</p>
      <p>The Angular framework was created by Google for its web services; it is now open source and used by other websites. Likewise, Facebook created the React framework for its website and later released it as open source; other sites, including Twitter, now use it. There are other open source frameworks in use, such as Backbone.js and Vue.js.</p>
      <p>In contrast, the term "Vanilla JS" has been coined for websites not using any libraries or frameworks, instead relying entirely on standard JavaScript functionality.</p>
      <h2>Other usage</h2>
      <p>The use of JavaScript has expanded beyond its web browser roots. JavaScript engines are now embedded in a variety of other software systems, both for server-side website deployments and non-browser applications.</p>
      <p>Initial attempts at promoting server-side JavaScript usage were Netscape Enterprise Server and Microsoft's Internet Information Services, but they were small niches. Server-side usage eventually started to grow in the late-2000s, with the creation of Node.js and other approaches.</p>
      <p>Electron, Cordova, and other software frameworks have been used to create many applications with behavior implemented in JavaScript. Other non-browser applications include Adobe Acrobat support for scripting PDF documents and GNOME Shell extensions written in JavaScript.</p>
      <p>JavaScript has recently begun to appear in some embedded systems, usually by leveraging Node.js.</p>
      <h2>Features</h2>
      <p>The following features are common to all conforming ECMAScript implementations, unless explicitly specified otherwise.</p>
      <h3>Imperative and structured</h3>
      <p>JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements, do while loops, etc.). One partial exception is scoping: JavaScript originally had only function scoping with var. ECMAScript 2015 added keywords let and const for block scoping, meaning JavaScript now has both function and block scoping. Like C, JavaScript makes a distinction between expressions and statements. One syntactic difference from C is automatic semicolon insertion, which allows the semicolons that would normally terminate statements to be omitted.</p>
      <h3>Weakly typed</h3>
      <p>JavaScript is weakly typed, which means certain types are implicitly cast depending on the operation used.</p>
      <ul>
        <li>The binary + operator casts both operands to a string unless both operands are numbers. This is because the addition operator doubles as a concatenation operator</li>
        <li>The binary - operator always casts both operands to a number</li>
        <li>Both unary operators (+, -) always cast the operand to a number</li>
      </ul>
      <p>Values are casted to numbers by casting to strings and then casting the strings to numbers. These processes can be modified by defining toString and valueOf functions on the prototype for string and number casting respectively.</p>
      <p>JavaScript has received criticism for the way it implements these conversions as the complexity of the rules can be mistaken for inconsistency. For example, when adding a number to a string, the number will be cast to a string before performing concatenation, but when subtracting a number from a string, the string is cast to a number before performing subtraction.</p>
      <p>Often also mentioned is {} + [] resulting in 0 (number). This is misleading: the {} is interpreted as an empty code block instead of an empty object, and the empty array is cast to a number by the remaining unary + operator. If you wrap the expression in parentheses ({} + []) the curly brackets are interpreted as an empty object and the result of the expression is "[object Object]" as expected.</p>
      <h3>Dynamic</h3>
      <h4>Typing</h4>
      <p>JavaScript is dynamically typed like most other scripting languages. A type is associated with a value rather than an expression. For example, a variable initially bound to a number may be reassigned to a string. JavaScript supports various ways to test the type of objects, including duck typing.</p>
      <h4>Run-time evaluation</h4>
      <p>JavaScript includes an eval function that can execute statements provided as strings at run-time.</p>
      <h3>Object-orientation (prototype-based)</h3>
      <p>In JavaScript, an object is an associative array, augmented with a prototype (see below); each string key provides the name for an object property, and there are two syntactical ways to specify such a name: dot notation (obj.x = 10) and bracket notation (obj['x'] = 10). A property may be added, rebound, or deleted at run-time. Most properties of an object (and any property that belongs to an object's prototype inheritance chain) can be enumerated using a for...in loop.</p>
      <h4>Prototypes</h4>
      <p>JavaScript uses prototypes where many other object-oriented languages use classes for inheritance. It is possible to simulate many class-based features with prototypes in JavaScript.</p>
      <h4>Functions as object constructors</h4>
      <p>Functions double as object constructors, along with their typical role. Prefixing a function call with new will create an instance of a prototype, inheriting properties and methods from the constructor (including properties from the Object prototype). ECMAScript 5 offers the Object.create method, allowing explicit creation of an instance without automatically inheriting from the Object prototype (older environments can assign the prototype to null). The constructor's prototype property determines the object used for the new object's internal prototype. New methods can be added by modifying the prototype of the function used as a constructor. JavaScript's built-in constructors, such as Array or Object, also have prototypes that can be modified. While it is possible to modify the Object prototype, it is generally considered bad practice because most objects in JavaScript will inherit methods and properties from the Object prototype, and they may not expect the prototype to be modified.</p>
      <h4>Functions as methods</h4>
      <p>Unlike many object-oriented languages, there is no distinction between a function definition and a method definition. Rather, the distinction occurs during function calling; when a function is called as a method of an object, the function's local this keyword is bound to that object for that invocation.</p>
      <h3>Functional</h3>
      <p>A function is first-class; a function is considered to be an object. As such, a function may have properties and methods, such as .call() and .bind(). A nested function is a function defined within another function. It is created each time the outer function is invoked. In addition, each nested function forms a lexical closure: The lexical scope of the outer function (including any constant, local variable, or argument value) becomes part of the internal state of each inner function object, even after execution of the outer function concludes. JavaScript also supports anonymous functions.</p>
      <h3>Delegative</h3>
      <p>JavaScript supports implicit and explicit delegation.</p>
      <h4>Functions as roles (Traits and Mixins)</h4>
      <p>JavaScript natively supports various function-based implementations of Role patterns like Traits and Mixins. Such a function defines additional behavior by at least one method bound to the this keyword within its function body. A Role then has to be delegated explicitly via call or apply to objects that need to feature additional behavior that is not shared via the prototype chain.</p>
      <h4>Object composition and inheritance</h4>
      <p>Whereas explicit function-based delegation does cover composition in JavaScript, implicit delegation already happens every time the prototype chain is walked in order to, e.g., find a method that might be related to but is not directly owned by an object. Once the method is found it gets called within this object's context. Thus inheritance in JavaScript is covered by a delegation automatism that is bound to the prototype property of constructor functions.</p>
      <h3>Miscellaneous</h3>
      <h4>Run-time environment</h4>
      <p>JavaScript typically relies on a run-time environment (e.g., a Web browser) to provide objects and methods by which scripts can interact with the environment (e.g., a webpage DOM). It also relies on the run-time environment to provide the ability to include/import scripts (e.g., HTML script elements. This is not a language feature per se, but it is common in most JavaScript implementations. JavaScript processes messages from a queue one at a time. JavaScript calls a function associated with each new message, creating a call stack frame with the function's arguments and local variables. The call stack shrinks and grows based on the function's needs. When the call stack is empty upon function completion, JavaScript proceeds to the next message in the queue. This is called the event loop, described as "run to completion" because each message is fully processed before the next message is considered. However, the language's concurrency model describes the event loop as non-blocking: program input/output is performed using events and callback functions. This means, for instance, that JavaScript can process a mouse click while waiting for a database query to return information.</p>
      <h4>Variadic functions</h4>
      <p>An indefinite number of parameters can be passed to a function. The function can access them through formal parameters and also through the local arguments object. Variadic functions can also be created by using the bind method.</p>
      <h4>Array and object literals</h4>
      <p>Like many scripting languages, arrays and objects (associative arrays in other languages) can each be created with a succinct shortcut syntax. In fact, these literals form the basis of the JSON data format.</p>
      <h4>Regular expressions</h4>
      <p>JavaScript also supports regular expressions in a manner similar to Perl, which provide a concise and powerful syntax for text manipulation that is more sophisticated than the built-in string functions.</p>
      <h4>Promises</h4>
      <p>JavaScript also supports promises, which are a way of handling asynchronous operations. There is a built-in Promise object that gives access to a lot of functionalities for handling promises, and defines how they should be handled. It allows one to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. Recently, combinator methods were introduced in the JavaScript specification, which allows developers to combine multiple JavaScript promises and do operations on the basis of different scenarios. The methods introduced are: Promise.race, Promise.all, Promise.allSettled and Promise.any.</p>
      <h3>Vendor-specific extensions</h3>
      <p>Historically, some JavaScript engines supported these non-standard features:</p>
      <ul>
        <li>conditional catch clauses (like Java)</li>
        <li>array comprehensions and generator expressions (like Python)</li>
        <li>concise function expressions (function(args) expr; this experimental syntax predated arrow functions)</li>
        <li>ECMAScript for XML (E4X), an extension that adds native XML support to ECMAScript (unsupported in Firefox since version 21)</li>
      </ul>
      <h2>Security</h2>
      <p>JavaScript and the DOM provide the potential for malicious authors to deliver scripts to run on a client computer via the Web. Browser authors minimize this risk using two restrictions. First, scripts run in a sandbox in which they can only perform Web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the same-origin policy: scripts from one Web site do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox.</p>
      <h3>Cross-site vulnerabilities</h3>
      <p>A common JavaScript-related security problem is cross-site scripting (XSS), a violation of the same-origin policy. XSS vulnerabilities occur when an attacker is able to cause a target Web site, such as an online banking website, to include a malicious script in the webpage presented to a victim. The script in this example can then access the banking application with the privileges of the victim, potentially disclosing secret information or transferring money without the victim's authorization. A solution to XSS vulnerabilities is to use HTML escaping whenever displaying untrusted data.</p>
      <p>Some browsers include partial protection against reflected XSS attacks, in which the attacker provides a URL including malicious script. However, even users of those browsers are vulnerable to other XSS attacks, such as those where the malicious code is stored in a database. Only correct design of Web applications on the server side can fully prevent XSS.</p>
      <p>Another cross-site vulnerability is cross-site request forgery (CSRF). In CSRF, code on an attacker's site tricks the victim's browser into taking actions the user did not intend at a target site (like transferring money at a bank). When target sites rely solely on cookies for request authentication, requests originating from code on the attacker's site can carry the same valid login credentials of the initiating user. In general, the solution to CSRF is to require an authentication value in a hidden form field, and not only in the cookies, to authenticate any request that might have lasting effects. Checking the HTTP Referrer header can also help.</p>
      <h3>Misplaced trust in the client</h3>
      <p>Developers of client-server applications must recognize that untrusted clients may be under the control of attackers. The application author cannot assume that their JavaScript code will run as intended (or at all) because any secret embedded in the code could be extracted by a determined adversary.</p>
      <h3>Misplaced trust in developers</h3>
      <p>Package management systems such as npm and Bower are popular with JavaScript developers. Such systems allow a developer to easily manage their program's dependencies upon other developer's program libraries. Developers trust that the maintainers of the libraries will keep them secure and up to date, but that is not always the case. A vulnerability has emerged because of this blind trust. Relied-upon libraries can have new releases that cause bugs or vulnerabilities to appear in all programs that rely upon the libraries. Inversely, a library can go unpatched with known vulnerabilities out in the wild. In a study done looking over a sample of 133k websites, researchers found 37% of the websites included a library with at least one known vulnerability. "The median lag between the oldest library version used on each website and the newest available version of that library is 1,177 days in ALEXA, and development of some libraries still in active use ceased years ago." Another possibility is that the maintainer of a library may remove the library entirely. This occurred in March 2016 when Azer Koçulu removed his repository from npm. This caused all tens of thousands of programs and websites depending upon his libraries to break.</p>
      <h3>Browser and plugin coding errors</h3>
      <p>JavaScript provides an interface to a wide range of browser capabilities, some of which may have flaws such as buffer overflows. These flaws can allow attackers to write scripts that would run any code they wish on the user's system. This code is not by any means limited to another JavaScript application. For example, a buffer overrun exploit can allow an attacker to gain access to the operating system's API with superuser privileges.</p>
      <p>Plugins, such as video players, Adobe Flash, and the wide range of ActiveX controls enabled by default in Microsoft Internet Explorer, may also have flaws exploitable via JavaScript (such flaws have been exploited in the past).</p>
      <p>In Windows Vista, Microsoft has attempted to contain the risks of bugs such as buffer overflows by running the Internet Explorer process with limited privileges. Google Chrome similarly confines its page renderers to their own "sandbox".</p>
      <h3>Sandbox implementation errors</h3>
      <p>Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Such privileges are not intended to be granted to code from the Web.</p>
      <p>Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer and Firefox. In Windows XP Service Pack 2, Microsoft demoted JScript's privileges in Internet Explorer.</p>
      <p>Microsoft Windows allows JavaScript source files on a computer's hard drive to be launched as general-purpose, non-sandboxed programs (see: Windows Script Host). This makes JavaScript (like VBScript) a theoretically viable vector for a Trojan horse, although JavaScript Trojan horses are uncommon in practice.[failed verification]</p>
    </div>
    <side-catalog
      class="catalog"
      v-bind="catalogProps"
    >
      <!-- <template #default="{level, isActive}"> -->
      <!-- <i :class="['line-style', isActive ? 'line-style--active' : '']"></i> -->
      <!-- <i :class="['iconfont', level<=2 ? isActive ? 'icon-smile' : 'icon-normal': '']"></i>
      </template> -->
      <!-- <template #row="{level, isActive, title}">
        * <span :style="{'margin-left': level*15+'px'}">{{ title }}</span>
      </template> -->
    </side-catalog>
  </div>
</template>

<script>
import SideCatalog from "./components/main.vue";
export default {
  name: "app",
  components: {
    SideCatalog,
  },
  data() {
    return {
      vhtml: "",
      catalogProps: {
        // 内容容器selector(必需)
        container: "#demo",
        height: "calc(100% - 100px)",
        title:"Contents",
        levelList: ["h1", "h2", "h3", "h4"],
      }
    };
  }
};
</script>

<style scoped>
#app {
  /* display: flex; */
}
#demo {
  width: 700px;
  overflow: auto;
  padding: 20px;
  line-height: 1.5;
  /* height: 300px; */
  border: 1px solid;
  margin-right: 50px;
  /* margin-top: 100px; */
}
p {
  text-indent: 2em;
}
.catalog {
  position: fixed;
  top: 50px;
  right: 50px;
}
.iconfont {
  width: 16px;
}

.line-style {
  display: inline-block;
  height: 20px;
  width: 3px;
  background: transparent;
}
.line-style--active {
  background: currentColor;
  /* color: currentColor; */
}
</style>
