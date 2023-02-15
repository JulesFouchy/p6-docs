"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[1878],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,s=u["".concat(p,".").concat(c)]||u[c]||k[c]||i;return n?a.createElement(s,o(o({ref:t},d),{},{components:n})):a.createElement(s,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"Random",summary:"Pick random numbers, points, directions, etc.",sidebar_position:1},p="Random",m={unversionedId:"reference/random",id:"reference/random",isDocsHomePage:!1,title:"Random",description:"Pick random numbers, points, directions, etc.",source:"@site/docs/reference/random.md",sourceDirName:"reference",slug:"/reference/random",permalink:"/p6-docs/reference/random",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Random",summary:"Pick random numbers, points, directions, etc.",sidebar_position:1},sidebar:"reference",previous:{title:"Math",permalink:"/p6-docs/reference/math"},next:{title:"Text",permalink:"/p6-docs/reference/text"}},d=[{value:"Summary",id:"summary",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"number()",id:"number",children:[]},{value:"number()",id:"number-1",children:[]},{value:"number()",id:"number-2",children:[]},{value:"integer()",id:"integer",children:[]},{value:"integer()",id:"integer-1",children:[]},{value:"size_type()",id:"size_type",children:[]},{value:"size_type()",id:"size_type-1",children:[]},{value:"among()",id:"among",children:[]},{value:"point()",id:"point",children:[]},{value:"point()",id:"point-1",children:[]},{value:"point()",id:"point-2",children:[]},{value:"point()",id:"point-3",children:[]},{value:"point()",id:"point-4",children:[]},{value:"direction()",id:"direction",children:[]},{value:"angle()",id:"angle",children:[]}]}],k={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"random"},"Random"),(0,i.kt)("p",null,"Pick random numbers, points, directions, etc. "),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"()",(0,i.kt)("br",null),"Returns a random number between 0 and 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"float")," max)",(0,i.kt)("br",null),"Returns a random number between 0 and ",(0,i.kt)("inlineCode",{parentName:"td"},"max"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"float")," min, ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," max)",(0,i.kt)("br",null),"Returns a random number between ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"max"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"int")," max)",(0,i.kt)("br",null),"Returns a random integer between 0 (included) and ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"int")," min, ",(0,i.kt)("inlineCode",{parentName:"td"},"int")," max)",(0,i.kt)("br",null),"Returns a random integer between ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," (included) and ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size_t"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"size_t")," max)",(0,i.kt)("br",null),"Returns a random size_t between 0 (included) and ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size_t"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"size_t")," min, ",(0,i.kt)("inlineCode",{parentName:"td"},"size_t")," max)",(0,i.kt)("br",null),"Returns a random size_t between ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," (included) and ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," (excluded).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"template <typename T ",">"," ",(0,i.kt)("br",null),"const T &"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#among"},"among")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"const std::vector< T > &")," collection)",(0,i.kt)("br",null),"Randomly returns one of the elements of the ",(0,i.kt)("inlineCode",{parentName:"td"},"collection"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"const [p6::Context](/reference/Types/context) &")," ctx)",(0,i.kt)("br",null),"Returns a point inside the main canvas of the context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"const [p6::Canvas](/reference/Types/canvas) &")," canvas)",(0,i.kt)("br",null),"Returns a point inside the given canvas.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"()",(0,i.kt)("br",null),"Returns a random point in a square between (-1, -1) and (1, 1).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"glm::vec2")," min, ",(0,i.kt)("inlineCode",{parentName:"td"},"glm::vec2")," max)",(0,i.kt)("br",null),"Returns a random point in a rectangle between ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"max"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"float")," aspect_ratio)",(0,i.kt)("br",null),"Returns a random point in a rectangle between (-aspect_ratio, -1) and (aspect_ratio, 1).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#direction"},"direction")),"()",(0,i.kt)("br",null),"Returns a random direction (vector of length 1).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Angle"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#angle"},"angle")),"()",(0,i.kt)("br",null),"Returns a random angle.")))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"number"},"number()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"float")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"();")),(0,i.kt)("p",null,"Returns a random number between 0 and 1. "),(0,i.kt)("h3",{id:"number-1"},"number()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"float")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"float")," max);")),(0,i.kt)("p",null,"Returns a random number between 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),". "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,i.kt)("inlineCode",{parentName:"p"},"max < 0"),". "),(0,i.kt)("h3",{id:"number-2"},"number()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"float")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#number"},"number")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"float")," min, ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," max);")),(0,i.kt)("p",null,"Returns a random number between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),". "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,i.kt)("inlineCode",{parentName:"p"},"min > max"),". "),(0,i.kt)("h3",{id:"integer"},"integer()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"int")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"int")," max);")),(0,i.kt)("p",null,"Returns a random integer between 0 (included) and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,i.kt)("inlineCode",{parentName:"p"},"max <= 0"),". "),(0,i.kt)("h3",{id:"integer-1"},"integer()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"int")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#integer"},"integer")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"int")," min, ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," max);")),(0,i.kt)("p",null,"Returns a random integer between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," (included) and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,i.kt)("inlineCode",{parentName:"p"},"min >= max"),". "),(0,i.kt)("h3",{id:"size_type"},"size_type()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"size_t")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"size_t")," max);")),(0,i.kt)("p",null,"Returns a random size_t between 0 (included) and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,i.kt)("h3",{id:"size_type-1"},"size_type()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"size_t")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#size_type"},"size_type")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"size_t")," min, ",(0,i.kt)("inlineCode",{parentName:"p"},"size_t")," max);")),(0,i.kt)("p",null,"Returns a random size_t between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," (included) and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," (excluded). "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,i.kt)("inlineCode",{parentName:"p"},"min >= max"),". "),(0,i.kt)("h3",{id:"among"},"among()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"const T &")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#among"},"among")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"const std::vector< T > &")," collection);")),(0,i.kt)("p",null,"Randomly returns one of the elements of the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection"),". "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," is empty. "),(0,i.kt)("h3",{id:"point"},"point()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"const [p6::Context](/reference/Types/context) &")," ctx);")),(0,i.kt)("p",null,"Returns a point inside the main canvas of the context. "),(0,i.kt)("h3",{id:"point-1"},"point()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"const [p6::Canvas](/reference/Types/canvas) &")," canvas);")),(0,i.kt)("p",null,"Returns a point inside the given canvas. "),(0,i.kt)("h3",{id:"point-2"},"point()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"();")),(0,i.kt)("p",null,"Returns a random point in a square between (-1, -1) and (1, 1). "),(0,i.kt)("h3",{id:"point-3"},"point()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," min, ",(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," max);")),(0,i.kt)("p",null,"Returns a random point in a rectangle between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),". "),(0,i.kt)("p",null,"Throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::invalid_argument")," exception if ",(0,i.kt)("inlineCode",{parentName:"p"},"min.x > max.x || min.y > max.y"),". "),(0,i.kt)("h3",{id:"point-4"},"point()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#point"},"point")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"float")," aspect_ratio);")),(0,i.kt)("p",null,"Returns a random point in a rectangle between (-aspect_ratio, -1) and (aspect_ratio, 1). "),(0,i.kt)("h3",{id:"direction"},"direction()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#direction"},"direction")),"();")),(0,i.kt)("p",null,"Returns a random direction (vector of length 1). "),(0,i.kt)("h3",{id:"angle"},"angle()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"Angle")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/random#angle"},"angle")),"();")),(0,i.kt)("p",null,"Returns a random angle. "),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on 2023 February 15"))}u.isMDXComponent=!0}}]);