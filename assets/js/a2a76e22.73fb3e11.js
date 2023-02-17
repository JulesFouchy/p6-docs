"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[2877],{3905:(A,e,t)=>{t.d(e,{Zo:()=>k,kt:()=>l});var n=t(7294);function D(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){D(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function w(A,e){if(null==A)return{};var t,n,D=function(A,e){if(null==A)return{};var t,n,D={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(D[t]=A[t]);return D}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(D[t]=A[t])}return D}var a=n.createContext({}),E=function(A){var e=n.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},k=function(A){var e=E(A.components);return n.createElement(a.Provider,{value:e},A.children)},i="mdxType",Q={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(A,e){var t=A.components,D=A.mdxType,o=A.originalType,a=A.parentName,k=w(A,["components","mdxType","originalType","parentName"]),i=E(t),p=D,l=i["".concat(a,".").concat(p)]||i[p]||Q[p]||o;return t?n.createElement(l,r(r({ref:e},k),{},{components:t})):n.createElement(l,r({ref:e},k))}));function l(A,e){var t=arguments,D=e&&e.mdxType;if("string"==typeof A||D){var o=t.length,r=new Array(o);r[0]=p;var w={};for(var a in e)hasOwnProperty.call(e,a)&&(w[a]=e[a]);w.originalType=A,w[i]="string"==typeof A?A:D,r[1]=w;for(var E=2;E<o;E++)r[E]=t[E];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4722:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>Q,frontMatter:()=>o,metadata:()=>w,toc:()=>E});var n=t(7462),D=(t(7294),t(3905));const o={title:"Drawing"},r=void 0,w={unversionedId:"tutorials/drawing",id:"tutorials/drawing",title:"Drawing",description:"You can use these functions on the Context at any time, even outside of the update function.",source:"@site/docs/tutorials/04-drawing.md",sourceDirName:"tutorials",slug:"/tutorials/drawing",permalink:"/p6-docs/tutorials/drawing",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Drawing"},sidebar:"tutorials",previous:{title:"The coordinate system",permalink:"/p6-docs/tutorials/the-coordinate-system"},next:{title:"Mouse and Keyboard",permalink:"/p6-docs/tutorials/events"}},a={},E=[{value:"<code>background()</code>",id:"background",level:2},{value:"Shapes",id:"shapes",level:2},{value:"Colors",id:"colors",level:2},{value:"Line",id:"line",level:2}],k={toc:E},i="wrapper";function Q(A){let{components:e,...o}=A;return(0,D.kt)(i,(0,n.Z)({},k,o,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("p",null,"You can use these functions on the ",(0,D.kt)("inlineCode",{parentName:"p"},"Context")," at any time, even outside of the ",(0,D.kt)("inlineCode",{parentName:"p"},"update")," function."),(0,D.kt)("h2",{id:"background"},(0,D.kt)("inlineCode",{parentName:"h2"},"background()")),(0,D.kt)("p",null,(0,D.kt)("inlineCode",{parentName:"p"},"background()")," clears the whole canvas with one solid color. It is very useful if you want to do animations and don't want the drawings of the previous frames to remain on your canvas.",(0,D.kt)("br",null),"\nOn the other hand not using ",(0,D.kt)("inlineCode",{parentName:"p"},"background()")," can give you very cool effects."),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.update = [&]() {\n    ctx.background({0.2f, 0.1f, 0.3f}); // Comment out this line for an interesting effect\n    ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});\n};\n")),(0,D.kt)("p",null,"And if you want your drawings to slowly fade away, draw a partially transparent rectangle instead of using ",(0,D.kt)("inlineCode",{parentName:"p"},"background()"),":"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-cpp"},"ctx.update = [&]() {\n    // Clear the background with a fading effect\n    ctx.use_stroke = false;\n    ctx.fill       = {0.2f, 0.1f, 0.3f, 0.1f};\n    ctx.rectangle(p6::FullScreen{});\n    // Draw something\n    ctx.fill = {1.f, 0.7f, 0.2f};\n    ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});\n};\n")),(0,D.kt)("h2",{id:"shapes"},"Shapes"),(0,D.kt)("p",null,(0,D.kt)("inlineCode",{parentName:"p"},"circle()"),", ",(0,D.kt)("inlineCode",{parentName:"p"},"ellipse()"),", ",(0,D.kt)("inlineCode",{parentName:"p"},"square()"),", ",(0,D.kt)("inlineCode",{parentName:"p"},"rectangle()")," and ",(0,D.kt)("inlineCode",{parentName:"p"},"triangle()")," have many overloads. Go to ",(0,D.kt)("a",{parentName:"p",href:"../reference/drawing"},"the reference")," to learn all about them."),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <p6/p6.h>\n\nint main()\n{\n    auto      ctx      = p6::Context{};\n    p6::Angle rotation = 0.011_turn;\n    ctx.mouse_scrolled = [&](p6::MouseScroll e) {\n        rotation += e.dy * 0.025_turn;\n    };\n    ctx.update = [&]() {\n        ctx.background({});\n        ctx.stroke = {1, 1, 1, 1};\n        // White square positioned by Center\n        ctx.square(p6::Center{ctx.mouse()},\n                   p6::Radius{0.3f},\n                   p6::Rotation{rotation});\n        // Red square positioned by Top Left Corner\n        ctx.fill = {1, 0, 0, 0.5};\n        ctx.square(p6::TopLeftCorner{ctx.mouse()},\n                   p6::Radius{0.3f},\n                   p6::Rotation{rotation});\n        // Green square positioned by Top Right Corner\n        ctx.fill = {0, 1, 0, 0.5};\n        ctx.square(p6::TopRightCorner{ctx.mouse()},\n                   p6::Radius{0.3f},\n                   p6::Rotation{rotation});\n        // Blue square positioned by Bottom Left Corner\n        ctx.fill = {0, 0, 1, 0.5};\n        ctx.square(p6::BottomLeftCorner{ctx.mouse()},\n                   p6::Radius{0.3f},\n                   p6::Rotation{rotation});\n        // Cyan square positioned by Bottom Right Corner\n        ctx.fill = {0, 1, 1, 0.5};\n        ctx.square(p6::BottomRightCorner{ctx.mouse()},\n                   p6::Radius{0.3f},\n                   p6::Rotation{rotation});\n    };\n    ctx.start();\n}\n")),(0,D.kt)("h2",{id:"colors"},"Colors"),(0,D.kt)("p",null,"Colors are expressed as RGBA, with each value going from 0.0 to 1.0:"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-cpp"},"p6::Color color{1.f, 0.7f, 0.2f}; // A nice orange.\n                                  // If you don't specify the fourth value (alpha, the opacity) it will be defaulted to 1.0\n")),(0,D.kt)("p",null,"Shapes have two colors: the ",(0,D.kt)("inlineCode",{parentName:"p"},"fill")," and the ",(0,D.kt)("inlineCode",{parentName:"p"},"stroke"),"."),(0,D.kt)("ul",null,(0,D.kt)("li",{parentName:"ul"},"The ",(0,D.kt)("inlineCode",{parentName:"li"},"fill"),' controls the "main" color of the shape'),(0,D.kt)("li",{parentName:"ul"},"The ",(0,D.kt)("inlineCode",{parentName:"li"},"stroke")," adds a second color on the edges of the shape. The size of that edge is controlled by ",(0,D.kt)("inlineCode",{parentName:"li"},"stroke_weight"),".")),(0,D.kt)("p",null,"Both the fill and the stroke can be disabled with ",(0,D.kt)("inlineCode",{parentName:"p"},"ctx.use_fill = false;")," and ",(0,D.kt)("inlineCode",{parentName:"p"},"ctx.use_stroke = false;"),"."),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <p6/p6.h>\n\nint main()\n{\n    auto ctx          = p6::Context{};\n    ctx.fill          = {1, 1, 1}; // White\n    ctx.stroke        = {0, 0, 0}; // Black\n    ctx.stroke_weight = 0.1f;\n    ctx.background({0, 1, 1}); // Cyan\n\n    ctx.use_fill   = true;\n    ctx.use_stroke = true;\n    ctx.circle(p6::Center{-0.5f, 0.5f}, p6::Radius{0.5f});\n    ctx.use_fill   = false;\n    ctx.use_stroke = true;\n    ctx.circle(p6::Center{0.5f, 0.5f}, p6::Radius{0.5f});\n    ctx.use_fill   = true;\n    ctx.use_stroke = false;\n    ctx.circle(p6::Center{-0.5f, -0.5f}, p6::Radius{0.5f});\n\n    ctx.start();\n}\n")),(0,D.kt)("h2",{id:"line"},"Line"),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"../reference/drawing#line"},(0,D.kt)("inlineCode",{parentName:"a"},"ctx.line()"))," is a bit of a special shape: it has only one color which is the ",(0,D.kt)("inlineCode",{parentName:"p"},"stroke")," color, and its thickness is controlled by ",(0,D.kt)("inlineCode",{parentName:"p"},"stroke_weight"),":"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <p6/p6.h>\n\nint main()\n{\n    auto ctx   = p6::Context{};\n    ctx.update = [&]() {\n        ctx.background({});\n        ctx.stroke        = p6::Color{1.f, 1.f, 1.f, 0.75f};\n        ctx.stroke_weight = 0.1f;\n        ctx.line(glm::vec2{0.f}, ctx.mouse());\n    };\n    ctx.start();\n}\n")),(0,D.kt)("p",null,(0,D.kt)("img",{src:t(7615).Z,width:"1281",height:"759"})))}Q.isMDXComponent=!0},7615:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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LvcDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkEIDAwAAkGFm5v8BmY/ywv8XdKUAAAAASUVORK5CYII="}}]);