"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[9459],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={title:"Canvases"},s=void 0,p={unversionedId:"tutorials/canvases",id:"tutorials/canvases",isDocsHomePage:!1,title:"Canvases",description:"Drawing on a Canvas",source:"@site/docs/tutorials/06-canvases.md",sourceDirName:"tutorials",slug:"/tutorials/canvases",permalink:"/p6-docs/tutorials/canvases",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Canvases"},sidebar:"tutorials",previous:{title:"Images",permalink:"/p6-docs/tutorials/images"},next:{title:"Custom Shaders",permalink:"/p6-docs/tutorials/custom-shaders"}},l=[{value:"Drawing on a Canvas",id:"drawing-on-a-canvas",children:[]},{value:"Displaying a canvas",id:"displaying-a-canvas",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"drawing-on-a-canvas"},"Drawing on a Canvas"),(0,o.kt)("p",null,"You can draw onto a canvas just as you would with the screen. All drawings between the calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.render_to_canvas(canvas)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.render_to_screen()")," will apply to the canvas, not to the screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <p6/p6.h>\n\nint main()\n{\n    auto ctx    = p6::Context{};\n    auto canvas = p6::Canvas{ctx.framebuffer_size()}; // Create an empty canvas with the same size as the window's framebuffer\n    ctx.render_to_canvas(canvas);\n        ctx.background({0.3f, 0.5f, 0.9f, 0.5f}); // background() applies to canvas, not to the screen\n        ctx.circle();                             // circle() applies to canvas, not to the screen\n    ctx.render_to_screen();\n    ctx.window_resized = [&]() {\n        canvas.resize(ctx.framebuffer_size()); // Make sure that the canvas still has the same size as the window's framebuffer even after it resizes\n    };\n    ctx.update = [&]() {\n        ctx.background({});\n        ctx.image(canvas);\n    };\n    ctx.start();\n}\n")),(0,o.kt)("p",null,"For a more detailed example, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6-docs/blob/main/tests/render_to_canvas.cpp"},"this one out"),"."),(0,o.kt)("h2",{id:"displaying-a-canvas"},"Displaying a canvas"),(0,o.kt)("p",null,"You can show a canvas with the ",(0,o.kt)("inlineCode",{parentName:"p"},"image()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.image(canvas, p6::Center{},\n          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the canvas\n")),(0,o.kt)("p",null,"Since a canvas has an aspect ratio that we want to try and preserve it is recommended to use either ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::RadiusX"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::RadiusY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::FitX")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::FitY")," to describe the size of the canvas. If you are ok with getting a distorted image then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::Radii")," to specify both the width and the height, or ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::FullScreen"),"."))}d.isMDXComponent=!0}}]);