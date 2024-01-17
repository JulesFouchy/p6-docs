"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[1878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=m(n),c=r,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return n?a.createElement(s,o(o({ref:t},d),{},{components:n})):a.createElement(s,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"Random",summary:"Pick random numbers, points, directions, etc.",sidebar_position:1},o="Random",l={unversionedId:"reference/random",id:"reference/random",title:"Random",description:"Pick random numbers, points, directions, etc.",source:"@site/docs/reference/random.md",sourceDirName:"reference",slug:"/reference/random",permalink:"/p6-docs/reference/random",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Random",summary:"Pick random numbers, points, directions, etc.",sidebar_position:1},sidebar:"reference",previous:{title:"Math",permalink:"/p6-docs/reference/math"},next:{title:"Text",permalink:"/p6-docs/reference/text"}},p={},m=[{value:"Summary",id:"summary",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"number()",id:"number",level:3},{value:"number()",id:"number-1",level:3},{value:"number()",id:"number-2",level:3},{value:"integer()",id:"integer",level:3},{value:"integer()",id:"integer-1",level:3},{value:"size_type()",id:"size_type",level:3},{value:"size_type()",id:"size_type-1",level:3},{value:"among()",id:"among",level:3},{value:"point()",id:"point",level:3},{value:"point()",id:"point-1",level:3},{value:"point()",id:"point-2",level:3},{value:"point()",id:"point-3",level:3},{value:"point()",id:"point-4",level:3},{value:"direction()",id:"direction",level:3},{value:"angle()",id:"angle",level:3}],d={toc:m},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"random"},"Random"),(0,r.kt)("p",null,"Pick random numbers, points, directions, etc. "),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"()",(0,r.kt)("br",null),"Returns a random number between 0 and 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"float")," max)",(0,r.kt)("br",null),"Returns a random number between 0 and ",(0,r.kt)("inlineCode",{parentName:"td"},"max"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"float")," min, ",(0,r.kt)("inlineCode",{parentName:"td"},"float")," max)",(0,r.kt)("br",null),"Returns a random number between ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"max"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," max)",(0,r.kt)("br",null),"Returns a random integer between 0 (included) and ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," min, ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," max)",(0,r.kt)("br",null),"Returns a random integer between ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," (included) and ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size_t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"size_t")," max)",(0,r.kt)("br",null),"Returns a random size_t between 0 (included) and ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size_t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"size_t")," min, ",(0,r.kt)("inlineCode",{parentName:"td"},"size_t")," max)",(0,r.kt)("br",null),"Returns a random size_t between ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," (included) and ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template <typename T ",">"," ",(0,r.kt)("br",null),"const T &"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#among"},"among")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"const std::vector< T > &")," collection)",(0,r.kt)("br",null),"Randomly returns one of the elements of the ",(0,r.kt)("inlineCode",{parentName:"td"},"collection"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"const [p6::Context](/reference/Types/context) &")," ctx)",(0,r.kt)("br",null),"Returns a point inside the main canvas of the context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"const [p6::Canvas](/reference/Types/canvas) &")," canvas)",(0,r.kt)("br",null),"Returns a point inside the given canvas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"()",(0,r.kt)("br",null),"Returns a random point in a square between (-1, -1) and (1, 1).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"glm::vec2")," min, ",(0,r.kt)("inlineCode",{parentName:"td"},"glm::vec2")," max)",(0,r.kt)("br",null),"Returns a random point in a rectangle between ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"max"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"td"},"float")," aspect_ratio)",(0,r.kt)("br",null),"Returns a random point in a rectangle between (-aspect_ratio, -1) and (aspect_ratio, 1).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#direction"},"direction")),"()",(0,r.kt)("br",null),"Returns a random direction (vector of length 1).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#angle"},"angle")),"()",(0,r.kt)("br",null),"Returns a random angle.")))),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"number"},"number()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"float")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"();")),(0,r.kt)("p",null,"Returns a random number between 0 and 1. "),(0,r.kt)("h3",{id:"number-1"},"number()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"float")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"float")," max);")),(0,r.kt)("p",null,"Returns a random number between 0 and ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),". "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,r.kt)("inlineCode",{parentName:"p"},"max < 0"),". "),(0,r.kt)("h3",{id:"number-2"},"number()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"float")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"float")," min, ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," max);")),(0,r.kt)("p",null,"Returns a random number between ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),". "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,r.kt)("inlineCode",{parentName:"p"},"min > max"),". "),(0,r.kt)("h3",{id:"integer"},"integer()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"int")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"int")," max);")),(0,r.kt)("p",null,"Returns a random integer between 0 (included) and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,r.kt)("inlineCode",{parentName:"p"},"max <= 0"),". "),(0,r.kt)("h3",{id:"integer-1"},"integer()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"int")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"int")," min, ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," max);")),(0,r.kt)("p",null,"Returns a random integer between ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," (included) and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,r.kt)("inlineCode",{parentName:"p"},"min >= max"),". "),(0,r.kt)("h3",{id:"size_type"},"size_type()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"size_t")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"size_t")," max);")),(0,r.kt)("p",null,"Returns a random size_t between 0 (included) and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,r.kt)("h3",{id:"size_type-1"},"size_type()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"size_t")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"size_t")," min, ",(0,r.kt)("inlineCode",{parentName:"p"},"size_t")," max);")),(0,r.kt)("p",null,"Returns a random size_t between ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," (included) and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,r.kt)("inlineCode",{parentName:"p"},"min >= max"),". "),(0,r.kt)("h3",{id:"among"},"among()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"const T &")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#among"},"among")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"const std::vector< T > &")," collection);")),(0,r.kt)("p",null,"Randomly returns one of the elements of the ",(0,r.kt)("inlineCode",{parentName:"p"},"collection"),". "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if the ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," is empty. "),(0,r.kt)("h3",{id:"point"},"point()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"const [p6::Context](/reference/Types/context) &")," ctx);")),(0,r.kt)("p",null,"Returns a point inside the main canvas of the context. "),(0,r.kt)("h3",{id:"point-1"},"point()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"const [p6::Canvas](/reference/Types/canvas) &")," canvas);")),(0,r.kt)("p",null,"Returns a point inside the given canvas. "),(0,r.kt)("h3",{id:"point-2"},"point()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"();")),(0,r.kt)("p",null,"Returns a random point in a square between (-1, -1) and (1, 1). "),(0,r.kt)("h3",{id:"point-3"},"point()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," min, ",(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," max);")),(0,r.kt)("p",null,"Returns a random point in a rectangle between ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),". "),(0,r.kt)("p",null,"Throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,r.kt)("inlineCode",{parentName:"p"},"min.x > max.x || min.y > max.y"),". "),(0,r.kt)("h3",{id:"point-4"},"point()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,r.kt)("inlineCode",{parentName:"p"},"float")," aspect_ratio);")),(0,r.kt)("p",null,"Returns a random point in a rectangle between (-aspect_ratio, -1) and (aspect_ratio, 1). "),(0,r.kt)("h3",{id:"direction"},"direction()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#direction"},"direction")),"();")),(0,r.kt)("p",null,"Returns a random direction (vector of length 1). "),(0,r.kt)("h3",{id:"angle"},"angle()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Angle")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/random#angle"},"angle")),"();")),(0,r.kt)("p",null,"Returns a random angle. "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Updated on 2023 September 03"))}u.isMDXComponent=!0}}]);