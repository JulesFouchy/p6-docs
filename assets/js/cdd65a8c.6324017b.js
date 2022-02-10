"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[6021],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,k=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7450:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),s=["components"],l={title:"Events",summary:"You can set those functions as you wish to react to various events.",sidebar_position:1},i="Events",d={unversionedId:"reference/events",id:"reference/events",isDocsHomePage:!1,title:"Events",description:"You can set those functions as you wish to react to various events.  More...",source:"@site/docs/reference/events.md",sourceDirName:"reference",slug:"/reference/events",permalink:"/p6-docs/reference/events",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Events",summary:"You can set those functions as you wish to react to various events.",sidebar_position:1},sidebar:"reference",previous:{title:"Drawing",permalink:"/p6-docs/reference/drawing"},next:{title:"Image",permalink:"/p6-docs/reference/image"}},u=[{value:"Summary",id:"summary",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Attributes",id:"attributes-1",children:[{value:"update",id:"update",children:[]},{value:"mouse_moved",id:"mouse_moved",children:[]},{value:"mouse_dragged",id:"mouse_dragged",children:[]},{value:"mouse_pressed",id:"mouse_pressed",children:[]},{value:"mouse_released",id:"mouse_released",children:[]},{value:"mouse_scrolled",id:"mouse_scrolled",children:[]},{value:"key_pressed",id:"key_pressed",children:[]},{value:"key_released",id:"key_released",children:[]},{value:"key_repeated",id:"key_repeated",children:[]},{value:"on_error",id:"on_error",children:[]}]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,"You can set those functions as you wish to react to various events.  ",(0,o.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void()>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#update"},"update"))," ",(0,o.kt)("br",null),"This function is called repeatedly. The framerate will be capped at your monitors refresh rate (60 frames per second on a typical monitor).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseMove)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_moved"},"mouse_moved"))," ",(0,o.kt)("br",null),"This function is called whenever the mouse is moved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseDrag)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_dragged"},"mouse_dragged"))," ",(0,o.kt)("br",null),"This function is called whenever the mouse is dragged.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseButton)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_pressed"},"mouse_pressed"))," ",(0,o.kt)("br",null),"This function is called whenever a mouse button is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseButton)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_released"},"mouse_released"))," ",(0,o.kt)("br",null),"This function is called whenever a mouse button is released.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseScroll)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_scrolled"},"mouse_scrolled"))," ",(0,o.kt)("br",null),"This function is called whenever the mouse wheel is scrolled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Key)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#key_pressed"},"key_pressed"))," ",(0,o.kt)("br",null),"This function is called whenever a keyboard key is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Key)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#key_released"},"key_released"))," ",(0,o.kt)("br",null),"This function is called whenever a keyboard key is released.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Key)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#key_repeated"},"key_repeated"))," ",(0,o.kt)("br",null),"This function is called repeatedly whenever a keyboard key is held.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(std::string &&)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#on_error"},"on_error"))," ",(0,o.kt)("br",null),"This function is called whenever an error occurs.")))),(0,o.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,o.kt)("p",null,"You can set those functions as you wish to react to various events. "),(0,o.kt)("p",null,"The simplest way is to use a lambda:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto ctx = p6::Context{};\nctx.mouse_pressed = [](p6::MouseButton) {\n    std::cout << "Hello World\\n";\n};\n')),(0,o.kt)("h2",{id:"attributes-1"},"Attributes"),(0,o.kt)("h3",{id:"update"},"update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void()> update = []() {};\n")),(0,o.kt)("p",null,"This function is called repeatedly. The framerate will be capped at your monitors refresh rate (60 frames per second on a typical monitor). "),(0,o.kt)("h3",{id:"mouse_moved"},"mouse_moved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseMove)> mouse_moved = [](MouseMove) {};\n")),(0,o.kt)("p",null,"This function is called whenever the mouse is moved. "),(0,o.kt)("h3",{id:"mouse_dragged"},"mouse_dragged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseDrag)> mouse_dragged = [](MouseDrag) {};\n")),(0,o.kt)("p",null,"This function is called whenever the mouse is dragged. "),(0,o.kt)("h3",{id:"mouse_pressed"},"mouse_pressed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseButton)> mouse_pressed = [](MouseButton) {};\n")),(0,o.kt)("p",null,"This function is called whenever a mouse button is pressed. "),(0,o.kt)("h3",{id:"mouse_released"},"mouse_released"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseButton)> mouse_released = [](MouseButton) {};\n")),(0,o.kt)("p",null,"This function is called whenever a mouse button is released. "),(0,o.kt)("h3",{id:"mouse_scrolled"},"mouse_scrolled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseScroll)> mouse_scrolled = [](MouseScroll) {};\n")),(0,o.kt)("p",null,"This function is called whenever the mouse wheel is scrolled. "),(0,o.kt)("h3",{id:"key_pressed"},"key_pressed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Key)> key_pressed = [](Key) {};\n")),(0,o.kt)("p",null,"This function is called whenever a keyboard key is pressed. "),(0,o.kt)("h3",{id:"key_released"},"key_released"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Key)> key_released = [](Key) {};\n")),(0,o.kt)("p",null,"This function is called whenever a keyboard key is released. "),(0,o.kt)("h3",{id:"key_repeated"},"key_repeated"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Key)> key_repeated = [](Key) {};\n")),(0,o.kt)("p",null,"This function is called repeatedly whenever a keyboard key is held. "),(0,o.kt)("p",null,"(NB: this only starts after holding the key for a little while. The axact behaviour is OS-specific)"),(0,o.kt)("p",null,"\u26a0\ufe0f This is less than ideal to do things like handling the movement of a character. You should rather do, in your update function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"if (p6.is_held(PhysicalKey::W)) { // TODO implement is_held and PhysicalKey and LogicalKey\n    character.move_forward(p6.delta_time());\n}\n")),(0,o.kt)("h3",{id:"on_error"},"on_error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(std::string &&)> on_error = [](std::string&& error_message) {\n        throw std::runtime_error{error_message};\n    };\n")),(0,o.kt)("p",null,"This function is called whenever an error occurs. "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 2022 February 10"))}p.isMDXComponent=!0}}]);