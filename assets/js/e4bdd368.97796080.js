"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[5341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Text"},i=void 0,c={unversionedId:"tutorials/text",id:"tutorials/text",title:"Text",description:"Rendering text",source:"@site/docs/tutorials/80-text.md",sourceDirName:"tutorials",slug:"/tutorials/text",permalink:"/p6-docs/tutorials/text",draft:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Text"},sidebar:"tutorials",previous:{title:"Dear ImGui",permalink:"/p6-docs/tutorials/dear-imgui"},next:{title:"Images",permalink:"/p6-docs/tutorials/images"}},l={},p=[{value:"Rendering text",id:"rendering-text",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rendering-text"},"Rendering text"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.text()")," function.",(0,o.kt)("br",null),"\nThe color of the text is controlled by ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.fill"),".",(0,o.kt)("br",null),"\nThe size of the text is controlled by ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.text_size"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <p6/p6.h>\n\nint main()\n{\n    auto ctx   = p6::Context{};\n    ctx.update = [&]() {\n        ctx.background(p6::NamedColor::Black);\n        ctx.fill = p6::NamedColor::Red;\n        ctx.text_size = 0.04f;\n        ctx.text(u"Some unicode text: \xe9\xe7", p6::Center{});\n    };\n    ctx.start();\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We support unicode characters (a.k.a. every character you could possibly ever want), but the default C++ strings only support ASCII. This is why ",(0,o.kt)("inlineCode",{parentName:"p"},"text()")," takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"std::u16string"),", that you can create by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"u")," prefix to your strings: ",(0,o.kt)("inlineCode",{parentName:"p"},'u"Some unicode text: \xe9\xe7"'),".")))}d.isMDXComponent=!0}}]);