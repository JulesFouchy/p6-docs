"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[2613],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=d(n),u=a,c=m["".concat(p,".").concat(u)]||m[u]||k[u]||o;return n?r.createElement(c,i(i({ref:e},s),{},{components:n})):r.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2834:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"Text",summary:"Write text to the screen.",sidebar_position:1},i="Text",l={unversionedId:"reference/text",id:"reference/text",title:"Text",description:"Write text to the screen.",source:"@site/docs/reference/text.md",sourceDirName:"reference",slug:"/reference/text",permalink:"/p6-docs/reference/text",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Text",summary:"Write text to the screen.",sidebar_position:1},sidebar:"reference",previous:{title:"Random",permalink:"/p6-docs/reference/random"},next:{title:"Time",permalink:"/p6-docs/reference/time"}},p={},d=[{value:"Summary",id:"summary",level:2},{value:"Functions",id:"functions",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Functions",id:"functions-1",level:2},{value:"text()",id:"text-1",level:3},{value:"text()",id:"text-2",level:3},{value:"text()",id:"text-3",level:3},{value:"text()",id:"text-4",level:3},{value:"text()",id:"text-5",level:3},{value:"Attributes",id:"attributes-1",level:2},{value:"text_size",id:"text_size",level:3},{value:"text_inflating",id:"text_inflating",level:3}],s={toc:d},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text"},"Text"),(0,a.kt)("p",null,"Write text to the screen. "),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"td"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"td"},"Center")," center, ",(0,a.kt)("inlineCode",{parentName:"td"},"Rotation")," rotation = {})")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"td"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"td"},"TopLeftCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"td"},"Rotation")," rotation = {})")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"td"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"td"},"TopRightCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"td"},"Rotation")," rotation = {})")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"td"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"td"},"BottomLeftCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"td"},"Rotation")," rotation = {})")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"void"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"td"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"td"},"BottomRightCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"td"},"Rotation")," rotation = {})")))),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text_size"},"text_size"))," ",(0,a.kt)("br",null),"Height of the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text_inflating"},"text_inflating"))," ",(0,a.kt)("br",null),'Gives some "boldness" to the text.')))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"text-1"},"text()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"void")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"p"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"p"},"Center")," center, ",(0,a.kt)("inlineCode",{parentName:"p"},"Rotation")," rotation ={});")),(0,a.kt)("h3",{id:"text-2"},"text()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"void")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"p"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"p"},"TopLeftCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"p"},"Rotation")," rotation ={});")),(0,a.kt)("h3",{id:"text-3"},"text()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"void")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"p"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"p"},"TopRightCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"p"},"Rotation")," rotation ={});")),(0,a.kt)("h3",{id:"text-4"},"text()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"void")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"p"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomLeftCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"p"},"Rotation")," rotation ={});")),(0,a.kt)("h3",{id:"text-5"},"text()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"void")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/text#text"},"text")),"(",(0,a.kt)("inlineCode",{parentName:"p"},"const std::u16string &")," str, ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomRightCorner")," corner, ",(0,a.kt)("inlineCode",{parentName:"p"},"Rotation")," rotation ={});")),(0,a.kt)("h2",{id:"attributes-1"},"Attributes"),(0,a.kt)("h3",{id:"text_size"},"text_size"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"float text_size = 0.03f;\n")),(0,a.kt)("p",null,"Height of the text. "),(0,a.kt)("h3",{id:"text_inflating"},"text_inflating"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"float text_inflating = 0.01f;\n")),(0,a.kt)("p",null,'Gives some "boldness" to the text. '),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Updated on 2024 January 17"))}k.isMDXComponent=!0}}]);