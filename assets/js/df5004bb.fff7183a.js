"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[4172],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,f=d["".concat(m,".").concat(s)]||d[s]||u[s]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7028:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"Math",summary:"Mathematical functions and numerical constants.",sidebar_position:1},m="Math",p={unversionedId:"reference/math",id:"reference/math",isDocsHomePage:!1,title:"Math",description:"Mathematical functions and numerical constants.",source:"@site/docs/reference/math.md",sourceDirName:"reference",slug:"/reference/math",permalink:"/p6-docs/reference/math",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Math",summary:"Mathematical functions and numerical constants.",sidebar_position:1},sidebar:"reference",previous:{title:"Input",permalink:"/p6-docs/reference/input"},next:{title:"Time",permalink:"/p6-docs/reference/time"}},c=[{value:"Summary",id:"summary",children:[{value:"Functions",id:"functions",children:[]},{value:"Attributes",id:"attributes",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"map()",id:"map",children:[]},{value:"rotated_by()",id:"rotated_by",children:[]}]},{value:"Attributes",id:"attributes-1",children:[{value:"TAU",id:"tau",children:[]},{value:"PI",id:"pi",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"math"},"Math"),(0,i.kt)("p",null,"Mathematical functions and numerical constants. "),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"template <typename T ",">"," ",(0,i.kt)("br",null),"T"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/math#map"},"map")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"T")," x, ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," from_min, ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," from_max, ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," to_min, ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," to_max)",(0,i.kt)("br",null),"Maps x, which is in the range ",(0,i.kt)("inlineCode",{parentName:"td"},"[from_mix, from_max]")," to the range ",(0,i.kt)("inlineCode",{parentName:"td"},"[to_min, to_max]"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"glm::vec2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/math#rotated_by"},"rotated_by")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"Angle")," angle, ",(0,i.kt)("inlineCode",{parentName:"td"},"glm::vec2")," vector)",(0,i.kt)("br",null),"Returns a new vector equal to ",(0,i.kt)("inlineCode",{parentName:"td"},"vector")," rotated by ",(0,i.kt)("inlineCode",{parentName:"td"},"angle"))))),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"constexpr float"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/math#tau"},"TAU")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"constexpr float"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/math#pi"},"PI")))))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"map"},"map()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"T")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/math#map"},"map")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"T")," x, ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," from_min, ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," from_max, ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," to_min, ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," to_max);")),(0,i.kt)("p",null,"Maps x, which is in the range ",(0,i.kt)("inlineCode",{parentName:"p"},"[from_mix, from_max]")," to the range ",(0,i.kt)("inlineCode",{parentName:"p"},"[to_min, to_max]"),". "),(0,i.kt)("p",null,"For example if ",(0,i.kt)("inlineCode",{parentName:"p"},"x == from_min")," then the function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"to_min"),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"x == (from_min + from_max) / 2")," then the function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"(to_min + to_max) / 2"),"."),(0,i.kt)("p",null,"If x is outside of the range ",(0,i.kt)("inlineCode",{parentName:"p"},"[from_min, from_max]")," the result will be outside of ",(0,i.kt)("inlineCode",{parentName:"p"},"[to_min, to_max]"),", the same linear behaviour still applies. "),(0,i.kt)("h3",{id:"rotated_by"},"rotated_by()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/math#rotated_by"},"rotated_by")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"Angle")," angle, ",(0,i.kt)("inlineCode",{parentName:"p"},"glm::vec2")," vector);")),(0,i.kt)("p",null,"Returns a new vector equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"vector")," rotated by ",(0,i.kt)("inlineCode",{parentName:"p"},"angle")),(0,i.kt)("h2",{id:"attributes-1"},"Attributes"),(0,i.kt)("h3",{id:"tau"},"TAU"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"static constexpr float TAU = 6.2831853f;\n")),(0,i.kt)("h3",{id:"pi"},"PI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"static constexpr float PI = TAU / 2.f;\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on 2022 March 06"))}d.isMDXComponent=!0}}]);