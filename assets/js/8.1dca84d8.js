(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(t,a,v){"use strict";v.r(a);var r=v(45),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"异步编程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[t._v("#")]),t._v(" 异步编程")]),t._v(" "),v("p",[t._v("众所周知JavaScript是单线程的语言，也就意味着在JavaScript顺序执行的时候如果出现了假死代码（无限循环或者某些长耗时的任务）是会将后续代码阻塞的，JavaScript便提供了同步和异步两种代码执行方式；")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("如何理解同步与异步")]),t._v(" "),v("blockquote",[v("p",[t._v("同步可以理解为排队，只有前面的人完成了，队伍才会往前移动")]),t._v(" "),v("p",[t._v("异步可以理解为一个场景：厨师在做菜，突然发现没有酱油了，便让辅厨出去买，自己进而去做其他不需要酱油的菜品，等到辅厨将酱油买回来后，再继续去做之前没法完成的菜品")])]),t._v(" "),v("p",[t._v("这两个例子很直观的展现了同步与异步的区别，显而易见的是异步的执行模型是不会阻塞的，厨师可以转而做其他事情并不影响到主流程。其实在浏览器中单线程的概念是针对JavaScript执行引擎的，浏览器本身的实现是多线程的，所以在浏览器中可以通过Event Loop来实现JavaScript执行线程的异步，在JavaScript遇到异步任务时可以将任务交出给浏览器调度，浏览器在合适的时机将异步任务的结果返还给JavaScript执行线程来继续执行，这样就实现了不阻塞JavaScript主线程的效果。")])]),t._v(" "),v("li",[v("p",[t._v("JavaScript异步编程模型")]),t._v(" "),v("ol",[v("li",[t._v("回调函数")]),t._v(" "),v("li",[t._v("promise")]),t._v(" "),v("li",[t._v("asnyc/await")])])])])])}),[],!1,null,null,null);a.default=i.exports}}]);