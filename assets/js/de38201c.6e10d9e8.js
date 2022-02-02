"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[3190],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),w=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=w(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=w(n),s=i,m=p["".concat(l,".").concat(s)]||p[s]||u[s]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var w=2;w<o;w++)a[w]=n[w];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return w},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],d={title:"Window",summary:"Query the state of the window and control it.",sidebar_position:1},l="Window",w={unversionedId:"reference/window",id:"reference/window",isDocsHomePage:!1,title:"Window",description:"Query the state of the window and control it.",source:"@site/docs/reference/window.md",sourceDirName:"reference",slug:"/reference/window",permalink:"/p6-docs/reference/window",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Window",summary:"Query the state of the window and control it.",sidebar_position:1},sidebar:"reference",previous:{title:"Update Flow",permalink:"/p6-docs/reference/update-flow"},next:{title:"p6::Angle",permalink:"/p6-docs/reference/Types/angle"}},c=[{value:"Summary",id:"summary",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"aspect_ratio()",id:"aspect_ratio",children:[]},{value:"window_size()",id:"window_size",children:[]},{value:"window_width()",id:"window_width",children:[]},{value:"window_height()",id:"window_height",children:[]},{value:"window_is_focused()",id:"window_is_focused",children:[]},{value:"maximize_window()",id:"maximize_window",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"window"},"Window"),(0,o.kt)("p",null,"Query the state of the window and control it. "),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#aspect_ratio"},"aspect_ratio")),"() const",(0,o.kt)("br",null),"Returns the aspect ratio of the window (a.k.a. width / height).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ImageSize"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_size"},"window_size")),"() const",(0,o.kt)("br",null),"Returns the size of the window (width and height).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_width"},"window_width")),"() const",(0,o.kt)("br",null),"Returns the width of the window.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_height"},"window_height")),"() const",(0,o.kt)("br",null),"Returns the height of the window.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_is_focused"},"window_is_focused")),"() const",(0,o.kt)("br",null),"Returns true iff the window is currently focused.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"void"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#maximize_window"},"maximize_window")),"()",(0,o.kt)("br",null),"Maximizes the window.")))),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"aspect_ratio"},"aspect_ratio()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"float")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#aspect_ratio"},"aspect_ratio")),"() const;")),(0,o.kt)("p",null,"Returns the aspect ratio of the window (a.k.a. width / height). "),(0,o.kt)("h3",{id:"window_size"},"window_size()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ImageSize")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_size"},"window_size")),"() const;")),(0,o.kt)("p",null,"Returns the size of the window (width and height). "),(0,o.kt)("h3",{id:"window_width"},"window_width()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"int")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_width"},"window_width")),"() const;")),(0,o.kt)("p",null,"Returns the width of the window. "),(0,o.kt)("h3",{id:"window_height"},"window_height()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"int")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_height"},"window_height")),"() const;")),(0,o.kt)("p",null,"Returns the height of the window. "),(0,o.kt)("h3",{id:"window_is_focused"},"window_is_focused()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"bool")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#window_is_focused"},"window_is_focused")),"() const;")),(0,o.kt)("p",null,"Returns true iff the window is currently focused. "),(0,o.kt)("h3",{id:"maximize_window"},"maximize_window()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"void")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/reference/window#maximize_window"},"maximize_window")),"();")),(0,o.kt)("p",null,"Maximizes the window. "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 2022 February 02"))}p.isMDXComponent=!0}}]);