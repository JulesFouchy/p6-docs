"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[8803],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"Text"},l=void 0,p={unversionedId:"tutorials/text",id:"tutorials/text",isDocsHomePage:!1,title:"Text",description:"Rendering text",source:"@site/docs/tutorials/08-text.md",sourceDirName:"tutorials",slug:"/tutorials/text",permalink:"/p6-docs/tutorials/text",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Text"},sidebar:"tutorials",previous:{title:"Dear ImGui",permalink:"/p6-docs/tutorials/dear-imgui"},next:{title:"Images",permalink:"/p6-docs/tutorials/images"}},u=[{value:"Rendering text",id:"rendering-text",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rendering-text"},"Rendering text"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.text()")," function.",(0,a.kt)("br",null),"\nThe color of the text is controlled by ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.fill"),".",(0,a.kt)("br",null),"\nThe size of the text is controlled by ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.text_size"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <p6/p6.h>\n\nint main()\n{\n    auto ctx   = p6::Context{};\n    ctx.update = [&]() {\n        ctx.background(p6::NamedColor::Black);\n        ctx.fill = p6::NamedColor::Red;\n        ctx.text_size = 0.04f;\n        ctx.text(u"Some unicode text: \xe9\xe7", p6::Center{});\n    };\n    ctx.start();\n}\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We support unicode characters (a.k.a. every character you could possibly ever want), but the default C++ strings only support ASCII. This is why ",(0,a.kt)("inlineCode",{parentName:"p"},"text()")," takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"std::u16string"),", that you can create by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"u")," prefix to your strings: ",(0,a.kt)("inlineCode",{parentName:"p"},'u"Some unicode text: \xe9\xe7"'),"."))))}d.isMDXComponent=!0}}]);