"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[2132],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,f=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5082:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return y}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"p6::Key",sidebar_position:1},p="p6::Key",c={unversionedId:"reference/Types/key",id:"reference/Types/key",isDocsHomePage:!1,title:"p6::Key",description:"Summary",source:"@site/docs/reference/Types/key.md",sourceDirName:"reference/Types",slug:"/reference/Types/key",permalink:"/p6-docs/reference/Types/key",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"p6::Key",sidebar_position:1},sidebar:"reference",previous:{title:"p6::ImageOrCanvas",permalink:"/p6-docs/reference/Types/image_or_canvas"},next:{title:"p6::MouseButton",permalink:"/p6-docs/reference/Types/mouse_button"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Details",id:"details",children:[{value:"logical",id:"logical",children:[]},{value:"physical",id:"physical",children:[]}]}],u={toc:s};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"p6key"},"p6::Key"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/Types/key#logical"},"logical"))," ",(0,o.kt)("br",null),"The character that was pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/Types/key#physical"},"physical"))," ",(0,o.kt)("br",null),"The key at a given position on the keyboard. It is independent of the keyboard layout (e.g. GLFW_KEY_Q will correspond to the first key on the first row of your keyboard, no matter if you are using azerty instead of qwerty)")))),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("h3",{id:"logical"},"logical"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::string logical;\n")),(0,o.kt)("p",null,"The character that was pressed. "),(0,o.kt)("p",null,"This depends on the keyboard layout (qwerty vs azerty). If the key pressed was not a character (for example ENTER, SHIFT etc.) then this is an empty string. "),(0,o.kt)("h3",{id:"physical"},"physical"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int physical;\n")),(0,o.kt)("p",null,"The key at a given position on the keyboard. It is independent of the keyboard layout (e.g. GLFW_KEY_Q will correspond to the first key on the first row of your keyboard, no matter if you are using azerty instead of qwerty) "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 2022 April 03"))}y.isMDXComponent=!0}}]);