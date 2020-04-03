(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{263:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-model"}},[t._v("#")]),t._v(" 使用 model")]),t._v(" "),s("h2",{attrs:{id:"软件分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件分层"}},[t._v("#")]),t._v(" 软件分层")]),t._v(" "),s("p",[t._v("首先，我们需要简单了解一下软件架构的「分层」理念。")]),t._v(" "),s("blockquote",[s("p",[t._v("一个完整的软件，往往会被拆分成多个不同的层次，每一个层次聚焦于完成特定的功能。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gw.alipayobjects.com/zos/rmsportal/trbRYJugHYeODogmIgwi.png",alt:"arch"}})]),t._v(" "),s("p",[t._v("上图中，左侧是服务端代码的层次结构，由 Controller、Service、Data Access 三层组成服务端系统：")]),t._v(" "),s("ol",[s("li",[t._v("Controller 层负责与用户直接打交道，渲染页面、提供接口等，侧重于"),s("code",[t._v("展示型逻辑")]),t._v("。")]),t._v(" "),s("li",[t._v("Service 层负责处理业务逻辑，供 Controller 层调用。")]),t._v(" "),s("li",[t._v("Data Access 层顾名思义，负责与数据源对接，进行纯粹的数据读写，供 Service 层调用。")])]),t._v(" "),s("p",[t._v("上图的右侧是前端代码的结构，同样需要进行必要的分层：")]),t._v(" "),s("ol",[s("li",[t._v("Page 负责与用户直接打交道：渲染页面、接受用户的操作输入，侧重于"),s("code",[t._v("展示型交互性逻辑")]),t._v("。")]),t._v(" "),s("li",[t._v("Model 负责处理业务逻辑，为 Page 做数据、状态的读写、变换、暂存等。")]),t._v(" "),s("li",[t._v("Service 负责与 HTTP 接口对接，进行纯粹的数据读写。")])]),t._v(" "),s("h2",{attrs:{id:"引入-dva"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入-dva"}},[t._v("#")]),t._v(" 引入 DVA")]),t._v(" "),s("p",[t._v("在 umi 中，你可以通过在插件集 umi-plugin-react 中配置 dva 打开 dva 插件。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umi-plugin-react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      antd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      dva"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Model 是前端分层中的腰部力量，承上启下，负责管理数据（状态）。业界主流的状态管理类库有 "),s("a",{attrs:{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("redux"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://mobx.js.org/intro/concepts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mobx"),s("OutboundLink")],1),t._v("，等。在我们的教程中，则使用 "),s("a",{attrs:{href:"https://github.com/dvajs/dva",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVA"),s("OutboundLink")],1),t._v(" 框架承担这一角色。")]),t._v(" "),s("p",[t._v("DVA 是基于 redux、redux-saga 和 react-router 的轻量级前端框架及最佳实践沉淀。其中，"),s("a",{attrs:{href:"https://dvajs.com/api/#model",target:"_blank",rel:"noopener noreferrer"}},[t._v("model"),s("OutboundLink")],1),t._v(" 是 DVA 中最重要的概念，一个简单的 model 示例如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todoList'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  effects"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" put"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" call "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rsp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queryTodoListFromServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" todoList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rsp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'save'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" todoList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  reducers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" payload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" todoList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" todoList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("DVA 的 model 对象有几个基本的属性，需要大家了解。")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("namespace")]),t._v("：model 的命名空间，只能用字符串。一个大型应用可能包含多个 model，通过"),s("code",[t._v("namespace")]),t._v("区分。")]),t._v(" "),s("li",[s("code",[t._v("state")]),t._v("：当前 model 状态的初始值，表示当前状态。")]),t._v(" "),s("li",[s("code",[t._v("reducers")]),t._v("：用于处理同步操作，可以修改 "),s("code",[t._v("state")]),t._v("，由 "),s("code",[t._v("action")]),t._v(" 触发。reducer 是一个纯函数，它接受当前的 state 及一个 action 对象。action 对象里面可以包含数据体（payload）作为入参，需要返回一个新的 state。")]),t._v(" "),s("li",[s("code",[t._v("effects")]),t._v("：用于处理异步操作（例如：与服务端交互）和业务逻辑，也是由 action 触发。但是，它不可以修改 state，要通过触发 action 调用 reducer 实现对 state 的间接操作。")]),t._v(" "),s("li",[s("code",[t._v("action")]),t._v("：是 reducers 及 effects 的触发器，一般是一个对象，形如"),s("code",[t._v("{ type: 'add', payload: todo }")]),t._v("，通过 type 属性可以匹配到具体某个 reducer 或者 effect，payload 属性则是数据体，用于传送给 reducer 或 effect。")])]),t._v(" "),s("p",[t._v("上面这些概念，初学者会觉得比较抽象，这是正常的。大家可以通过后面的例子，慢慢体会。DVA 的文档非常优秀，建议大家直接学习，参考链接：")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://dvajs.com/guide/concepts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dva 概念"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://dvajs.com/guide/fig-show.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dva 图解"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);