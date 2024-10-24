"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[3249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),g=r,d=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"Images"},o=void 0,p={unversionedId:"tutorials/images",id:"tutorials/images",title:"Images",description:"Loading an image",source:"@site/docs/tutorials/90-images.md",sourceDirName:"tutorials",slug:"/tutorials/images",permalink:"/p6-docs/tutorials/images",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Images"},sidebar:"tutorials",previous:{title:"Text",permalink:"/p6-docs/tutorials/text"},next:{title:"Saving Images",permalink:"/p6-docs/tutorials/saving-images"}},l={},m=[{value:"Loading an image",id:"loading-an-image",level:2},{value:"Displaying an image",id:"displaying-an-image",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-an-image"},"Loading an image"),(0,r.kt)("p",null,"You can load any image (",(0,r.kt)("em",{parentName:"p"},"png"),", ",(0,r.kt)("em",{parentName:"p"},"jpeg"),", ",(0,r.kt)("em",{parentName:"p"},"etc."),") with ",(0,r.kt)("inlineCode",{parentName:"p"},"load_image()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const p6::Image image = p6::load_image("img/my_file.png");\n')),(0,r.kt)("admonition",{title:"Important",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order for this to work you must have an ",(0,r.kt)("em",{parentName:"p"},"img")," folder ",(0,r.kt)("strong",{parentName:"p"},"at the root of your project"),", with a ",(0,r.kt)("em",{parentName:"p"},"my_file.png")," in it.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"AND you must declare your ",(0,r.kt)("em",{parentName:"strong"},"img")," folder in CMake: ",(0,r.kt)("inlineCode",{parentName:"strong"},"p6_copy_folder(${PROJECT_NAME} img)")),".")),(0,r.kt)("p",null,"For a complete example of this, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6-docs/tree/main/tests/drawing.cpp"},"this example"),"."),(0,r.kt)("h2",{id:"displaying-an-image"},"Displaying an image"),(0,r.kt)("p",null,"You can draw an image with the ",(0,r.kt)("inlineCode",{parentName:"p"},"image()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const auto image = p6::load_image("img/my_file.png");\nctx.image(image, p6::Center{},\n          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the image\n')),(0,r.kt)("p",null,"Since an image has an aspect ratio that we want to try and preserve it is recommended to use either ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::RadiusX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::RadiusY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::FitX")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::FitY")," to describe the size of the image. If you are ok with getting a distorted image then you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::Radii")," to specify both the width and the height, or ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::FullScreen"),"."))}u.isMDXComponent=!0}}]);