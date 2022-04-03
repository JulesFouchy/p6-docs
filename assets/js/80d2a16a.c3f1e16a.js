"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[1914],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3338:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"Read Pixel"},p=void 0,c={unversionedId:"tutorials/read-pixel",id:"tutorials/read-pixel",isDocsHomePage:!1,title:"Read Pixel",description:"Brief",source:"@site/docs/tutorials/10-read-pixel.md",sourceDirName:"tutorials",slug:"/tutorials/read-pixel",permalink:"/p6-docs/tutorials/read-pixel",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Read Pixel"},sidebar:"tutorials",previous:{title:"Custom Shaders",permalink:"/p6-docs/tutorials/custom-shaders"},next:{title:"angles",permalink:"/p6-docs/tutorials/angles"}},u=[{value:"Brief",id:"brief",children:[]},{value:"Example",id:"example",children:[]},{value:"Nota Bene",id:"nota-bene",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"You can ask for the color of a pixel with ",(0,a.kt)("a",{parentName:"p",href:"../reference/window#read_pixel"},(0,a.kt)("inlineCode",{parentName:"a"},"ctx.read_pixel(position)")),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <p6/p6.h>\n\nint main()\n{\n    auto ctx   = p6::Context{};\n    ctx.update = [&]() {\n        ctx.background(p6::Color{1, 0, 0});\n    };\n    ctx.mouse_pressed = [&](p6::MouseButton button) {\n        const p6::Color color = ctx.read_pixel(button.position);\n        assert(color == p6::Color{1, 0, 0});\n    };\n    ctx.start();\n}\n")),(0,a.kt)("h2",{id:"nota-bene"},"Nota Bene"),(0,a.kt)("p",null,"This function is meant to be used to read one single pixel from time to time, for example in ",(0,a.kt)("inlineCode",{parentName:"p"},"mouse_pressed()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mouse_moved()"),". If you want to loop and read the color of all the pixels, using ",(0,a.kt)("inlineCode",{parentName:"p"},"read_pixel()")," will be pretty slow. A much better alternative (but arguably more complex to setup) would be to use a ",(0,a.kt)("a",{parentName:"p",href:"/p6-docs/tutorials/custom-shaders"},"shader"),"."))}d.isMDXComponent=!0}}]);