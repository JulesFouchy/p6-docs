"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[9966],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"The coordinate system"},c=void 0,l={unversionedId:"tutorials/the-coordinate-system",id:"tutorials/the-coordinate-system",isDocsHomePage:!1,title:"The coordinate system",description:"p6 uses a relative coordinate system. This means that if you double the size of your window, all of your drawings will be scaled too and they will appear to fit the same space in the window.",source:"@site/docs/tutorials/03-the-coordinate-system.md",sourceDirName:"tutorials",slug:"/tutorials/the-coordinate-system",permalink:"/p6-docs/tutorials/the-coordinate-system",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The coordinate system"},sidebar:"tutorials",previous:{title:"The Context",permalink:"/p6-docs/tutorials/the-context"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"p6")," uses a relative coordinate system. This means that if you double the size of your window, all of your drawings will be scaled too and they will appear to fit the same space in the window."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(0, 0)")," is the center of the window. "),(0,a.kt)("li",{parentName:"ul"},"The y axis always goes from ",(0,a.kt)("inlineCode",{parentName:"li"},"-1")," at the bottom to ",(0,a.kt)("inlineCode",{parentName:"li"},"+1")," at the top (no matter the size of the window)."),(0,a.kt)("li",{parentName:"ul"},"The x axis goes from ",(0,a.kt)("inlineCode",{parentName:"li"},"-ctx.aspect_ratio()")," at the left to ",(0,a.kt)("inlineCode",{parentName:"li"},"+ctx.aspect_ratio()")," at the right. For example if your window is 2000 by 1000 pixels then its aspect ratio is 2 (2000 / 1000) and the x axis will go from -2 to 2. This is done so that both axes use the same units (A distance of 0.5 means the same for x as it does for y)."),(0,a.kt)("li",{parentName:"ul"},"You can access the aspect ratio of the window (a.k.a. ",(0,a.kt)("inlineCode",{parentName:"li"},"width / height"),") through the ",(0,a.kt)("a",{parentName:"li",href:"../reference/window#aspect_ratio"},(0,a.kt)("inlineCode",{parentName:"a"},"ctx.aspect_ratio()"))," function.")),(0,a.kt)("p",null,"If you need to you can access the size of the window through the ",(0,a.kt)("a",{parentName:"p",href:"../reference/window#window_size"},(0,a.kt)("inlineCode",{parentName:"a"},"ctx.window_size()")),", ",(0,a.kt)("a",{parentName:"p",href:"../reference/window#window_width"},(0,a.kt)("inlineCode",{parentName:"a"},"ctx.window_width()"))," and ",(0,a.kt)("a",{parentName:"p",href:"../reference/window#window_height"},(0,a.kt)("inlineCode",{parentName:"a"},"ctx.window_height()"))," functions. But I would not recommend to do so because in most cases you will be better off using relative coordinates. These functions are mainly here to allow you to create an ",(0,a.kt)("a",{parentName:"p",href:"../reference/Types/Image"},(0,a.kt)("inlineCode",{parentName:"a"},"Image"))," that has the same size as the window, but this is an advanced use case."))}d.isMDXComponent=!0}}]);