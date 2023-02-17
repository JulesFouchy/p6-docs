"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[1545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(r),g=n,d=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return r?a.createElement(d,p(p({ref:t},m),{},{components:r})):a.createElement(d,p({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={title:"p6::Image",sidebar_position:1},p="p6::Image",o={unversionedId:"reference/Types/image",id:"reference/Types/image",title:"p6::Image",description:"Section: Image",source:"@site/docs/reference/Types/image.md",sourceDirName:"reference/Types",slug:"/reference/Types/image",permalink:"/p6-docs/reference/Types/image",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"p6::Image",sidebar_position:1},sidebar:"reference",previous:{title:"p6::FullScreen",permalink:"/p6-docs/reference/Types/full_screen"},next:{title:"p6::ImageOrCanvas",permalink:"/p6-docs/reference/Types/image_or_canvas"}},l={},s=[{value:"Summary",id:"summary",level:2},{value:"Details",id:"details",level:2},{value:"Image()",id:"image",level:3},{value:"size()",id:"size",level:3},{value:"aspect_ratio()",id:"aspect_ratio",level:3},{value:"inverse_aspect_ratio()",id:"inverse_aspect_ratio",level:3},{value:"texture()",id:"texture",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"p6image"},"p6::Image"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Section:")," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/reference/image"},"Image"))),(0,n.kt)("p",null,"Inherits from ",(0,n.kt)("a",{parentName:"p",href:"/reference/Types/image_or_canvas"},"p6::ImageOrCanvas")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#image"},"Image")),"(",(0,n.kt)("inlineCode",{parentName:"td"},"ImageSize")," size, ",(0,n.kt)("inlineCode",{parentName:"td"},"const uint8_t *")," data, ",(0,n.kt)("inlineCode",{parentName:"td"},"glpp::TextureLayout")," texture_layout = {glpp::InternalFormat::RGBA8, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte})",(0,n.kt)("br",null),"Creates an ",(0,n.kt)("a",{parentName:"td",href:"/reference/Types/image"},"Image")," filled with data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ImageSize"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#size"},"size")),"() const",(0,n.kt)("br",null),"Returns the size in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"virtual float"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#aspect_ratio"},"aspect_ratio")),"() const override",(0,n.kt)("br",null),"Returns the aspect ratio (",(0,n.kt)("inlineCode",{parentName:"td"},"width / height"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#inverse_aspect_ratio"},"inverse_aspect_ratio")),"() const",(0,n.kt)("br",null),"Returns the inverse aspect ratio (",(0,n.kt)("inlineCode",{parentName:"td"},"height / width"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"virtual const glpp::Texture2D &"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#texture"},"texture")),"() const override")))),(0,n.kt)("h2",{id:"details"},"Details"),(0,n.kt)("h3",{id:"image"},"Image()"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#image"},"Image")),"(",(0,n.kt)("inlineCode",{parentName:"p"},"ImageSize")," size, ",(0,n.kt)("inlineCode",{parentName:"p"},"const uint8_t *")," data, ",(0,n.kt)("inlineCode",{parentName:"p"},"glpp::TextureLayout")," texture_layout ={glpp::InternalFormat::RGBA8, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte});")),(0,n.kt)("p",null,"Creates an ",(0,n.kt)("a",{parentName:"p",href:"/reference/Types/image"},"Image")," filled with data. "),(0,n.kt)("p",null,"This is for advanded uses; prefer using ",(0,n.kt)("a",{parentName:"p",href:"/reference/image#load_image"},"p6::load_image()"),". data must be an array of size ",(0,n.kt)("inlineCode",{parentName:"p"},"size.width() * size.height() * 4"),", with R, G, B and A channels, starting with the bottom left pixel, and going row by row. texture_layout is an advanced setting; it controls how the pixels are gonna be stored on the GPU. "),(0,n.kt)("h3",{id:"size"},"size()"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"ImageSize")," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#size"},"size")),"() const;")),(0,n.kt)("p",null,"Returns the size in pixels. "),(0,n.kt)("h3",{id:"aspect_ratio"},"aspect_ratio()"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"float")," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#aspect_ratio"},"aspect_ratio")),"() const override;")),(0,n.kt)("p",null,"Returns the aspect ratio (",(0,n.kt)("inlineCode",{parentName:"p"},"width / height"),") "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)("a",{parentName:"p",href:"/reference/Types/image_or_canvas#aspect_ratio"},"p6::ImageOrCanvas::aspect_ratio")),(0,n.kt)("h3",{id:"inverse_aspect_ratio"},"inverse_aspect_ratio()"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"float")," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#inverse_aspect_ratio"},"inverse_aspect_ratio")),"() const;")),(0,n.kt)("p",null,"Returns the inverse aspect ratio (",(0,n.kt)("inlineCode",{parentName:"p"},"height / width"),") "),(0,n.kt)("h3",{id:"texture"},"texture()"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"const glpp::Texture2D &")," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/reference/Types/image#texture"},"texture")),"() const override;")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)("a",{parentName:"p",href:"/reference/Types/image_or_canvas#texture"},"p6::ImageOrCanvas::texture")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Updated on 2023 February 17"))}u.isMDXComponent=!0}}]);