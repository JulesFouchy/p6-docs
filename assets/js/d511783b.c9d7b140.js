"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[9365],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(h,r(r({ref:a},p),{},{components:t})):n.createElement(h,r({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8655:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),r=["components"],s={title:"Canvases"},c=void 0,l={unversionedId:"tutorials/canvases",id:"tutorials/canvases",isDocsHomePage:!1,title:"Canvases",description:"Changing the aspect ratio or size of the main canvas",source:"@site/docs/tutorials/11-canvases.md",sourceDirName:"tutorials",slug:"/tutorials/canvases",permalink:"/p6-docs/tutorials/canvases",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Canvases"},sidebar:"tutorials",previous:{title:"Saving Images",permalink:"/p6-docs/tutorials/saving-images"},next:{title:"Custom Shaders",permalink:"/p6-docs/tutorials/custom-shaders"}},p=[{value:"Changing the aspect ratio or size of the main canvas",id:"changing-the-aspect-ratio-or-size-of-the-main-canvas",children:[{value:"SameAsWindow",id:"sameaswindow",children:[]},{value:"FixedAspectRatio",id:"fixedaspectratio",children:[]},{value:"FixedSize",id:"fixedsize",children:[]},{value:"RelativeToWindow",id:"relativetowindow",children:[]}]},{value:"Drawing on a custom Canvas",id:"drawing-on-a-custom-canvas",children:[]},{value:"Displaying a custom canvas",id:"displaying-a-custom-canvas",children:[]}],d={toc:p};function u(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"changing-the-aspect-ratio-or-size-of-the-main-canvas"},"Changing the aspect ratio or size of the main canvas"),(0,o.kt)("p",null,"The drawing area of p6, known as the ",(0,o.kt)("em",{parentName:"p"},"main canvas"),", doesn't have to take up the whole window, nor does it have to be limited to the current resolution of the window. You can control how its size behaves with ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.main_canvas_mode(...)"),"."),(0,o.kt)("h3",{id:"sameaswindow"},"SameAsWindow"),(0,o.kt)("p",null,"This is the default mode. The main canvas will have the same size as the window.",(0,o.kt)("br",null),"\nIt is great when you don't care about the aspect ratio or the number of pixels."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.main_canvas_mode(p6::CanvasSizeMode_SameAsWindow{});\n")),(0,o.kt)("h3",{id:"fixedaspectratio"},"FixedAspectRatio"),(0,o.kt)("p",null,"The main canvas will have the given aspect ratio, and a size just big enough to perfectly fit into the window.",(0,o.kt)("br",null),"\nIt is great when you want your artwork to have a specific aspect ratio, like a 16/9 or a square canvas for example, but you don't care about the exact number of pixels because you are not saving it as an image but instead viewing it live as a running program that needs to adapt to whatever the size of the window is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.main_canvas_mode(p6::CanvasSizeMode_FixedAspectRatio{16.f / 9.f});\n")),(0,o.kt)("h3",{id:"fixedsize"},"FixedSize"),(0,o.kt)("p",null,"The main canvas will have the given size in pixels, independently of what the size of the window is.",(0,o.kt)("br",null),"\nIt is great when you want your artwork to have a specific size because you are gonna save it as an image and want to control its resolution."),(0,o.kt)("p",null,"Note that you will still see the main canvas fit in the window because it is scaled down for display. But fear not, all the drawings are done at the size you requested. If you save the main canvas as an image (using ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.save_image()"),") it will have the desired size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.main_canvas_mode(p6::CanvasSizeMode_FixedSize{{3840, 2160}});\n")),(0,o.kt)("h3",{id:"relativetowindow"},"RelativeToWindow"),(0,o.kt)("p",null,"The main canvas will have a size that is a multiple of the window's size.",(0,o.kt)("br",null),"\nIt can be useful if you want to reduce aliasing or noise by rendering at a bigger resolution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.main_canvas_mode(p6::CanvasSizeMode_RelativeToWindow{2.f, 2.f});\n")),(0,o.kt)("h2",{id:"drawing-on-a-custom-canvas"},"Drawing on a custom Canvas"),(0,o.kt)("p",null,"You are not constrained to the main canvas. You can also create your own canvases and draw on them. It can allow you to achieve some advanced and pretty cool effects.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"All drawings between the calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.render_to_canvas(canvas)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.render_to_main_canvas()")," will apply to your custom canvas instead of the main canvas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <p6/p6.h>\n\nint main()\n{\n    auto ctx    = p6::Context{};\n    auto canvas = p6::Canvas{ctx.main_canvas_size()}; // Create an empty canvas with the same size as the window\n    ctx.main_canvas_resized = [&]() {\n        canvas.resize(ctx.main_canvas_size()); // Make sure that the canvas still has the same size as the window even after it resizes\n    };\n    ctx.update = [&]() {\n        ctx.background({}); // Clear the window\n        ctx.image(canvas);  // Show the canvas\n        if (ctx.shift())    // Do some permanent rendering on the canvas\n        {\n            ctx.render_to_canvas(canvas);\n            ctx.circle(p6::Center{ctx.mouse() * ctx.canvas_ratio(canvas)}, // circle() applies to the custom canvas, not to the window's main canvas\n                       p6::Radius{0.3f});\n            ctx.render_to_main_canvas();\n        }\n        ctx.circle(p6::Center{ctx.mouse()}, // Do some temporary rendering on the main canvas\n                   p6::Radius{0.3f / ctx.canvas_ratio(canvas)});\n    };\n    ctx.start();\n}\n")),(0,o.kt)("p",null,"For a more detailed example, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6-docs/blob/main/tests/render_to_canvas.cpp"},"this one out"),"."),(0,o.kt)("h2",{id:"displaying-a-custom-canvas"},"Displaying a custom canvas"),(0,o.kt)("p",null,"Since custom canvases are not displayed in the window automatically, you need to draw them on the main canvas using ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.image()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.image(canvas); // The canvas will fill the window as best it can, while still preserving its aspect ratio\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To convert coordinates and sizes from the window to a custom canvas fitted in that window, you can multiply or divide by ",(0,o.kt)("a",{parentName:"p",href:"/reference/canvas#canvas_ratio"},(0,o.kt)("inlineCode",{parentName:"a"},"ctx.canvas_ratio(canvas)")),". This can help you make it feel like your custom canvas is really part of the window.",(0,o.kt)("br",null),"\n(NB: it will only have an effect if your window is higher than it is wide. In the typical case of an horizontal window, ",(0,o.kt)("inlineCode",{parentName:"p"},"canvas_ratio()")," is not required and everything should work naturally without you having to think about it)."))),(0,o.kt)("p",null,"You can also specify the size and position of the canvas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.image(canvas, p6::Center{},\n          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the canvas\n")),(0,o.kt)("p",null,"Since a canvas has an aspect ratio that we want to try and preserve it is recommended to use either ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::RadiusX"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::RadiusY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::FitX")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::FitY")," to describe the size of the canvas. If you are ok with getting a distorted image then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::Radii")," to specify both the width and the height, or ",(0,o.kt)("inlineCode",{parentName:"p"},"p6::FullScreen"),"."))}u.isMDXComponent=!0}}]);