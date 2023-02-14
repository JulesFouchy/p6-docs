"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[2634],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={title:"Events",summary:"You can set those functions as you wish to react to various events.",sidebar_position:1},l="Events",d={unversionedId:"reference/events",id:"reference/events",isDocsHomePage:!1,title:"Events",description:"You can set those functions as you wish to react to various events.  More...",source:"@site/docs/reference/events.md",sourceDirName:"reference",slug:"/reference/events",permalink:"/p6-docs/reference/events",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Events",summary:"You can set those functions as you wish to react to various events.",sidebar_position:1},sidebar:"reference",previous:{title:"Drawing",permalink:"/p6-docs/reference/drawing"},next:{title:"Image",permalink:"/p6-docs/reference/image"}},u=[{value:"Summary",id:"summary",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Attributes",id:"attributes-1",children:[{value:"update",id:"update",children:[]},{value:"imgui",id:"imgui",children:[]},{value:"mouse_moved",id:"mouse_moved",children:[]},{value:"mouse_dragged",id:"mouse_dragged",children:[]},{value:"mouse_pressed",id:"mouse_pressed",children:[]},{value:"mouse_released",id:"mouse_released",children:[]},{value:"mouse_scrolled",id:"mouse_scrolled",children:[]},{value:"key_pressed",id:"key_pressed",children:[]},{value:"key_released",id:"key_released",children:[]},{value:"key_repeated",id:"key_repeated",children:[]},{value:"on_error",id:"on_error",children:[]},{value:"main_canvas_resized",id:"main_canvas_resized",children:[]},{value:"on_event",id:"on_event",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,"You can set those functions as you wish to react to various events.  ",(0,o.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void()>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#update"},"update"))," ",(0,o.kt)("br",null),"This function is called repeatedly. The framerate is controlled by the framerate_xxx() functions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void()>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#imgui"},"imgui"))," ",(0,o.kt)("br",null),"In this function you can call all the ImGui code you want.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseMove)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_moved"},"mouse_moved"))," ",(0,o.kt)("br",null),"This function is called whenever the mouse is moved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseDrag)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_dragged"},"mouse_dragged"))," ",(0,o.kt)("br",null),"This function is called whenever the mouse is dragged.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseButton)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_pressed"},"mouse_pressed"))," ",(0,o.kt)("br",null),"This function is called whenever a mouse button is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseButton)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_released"},"mouse_released"))," ",(0,o.kt)("br",null),"This function is called whenever a mouse button is released.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(MouseScroll)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#mouse_scrolled"},"mouse_scrolled"))," ",(0,o.kt)("br",null),"This function is called whenever the mouse wheel is scrolled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Key)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#key_pressed"},"key_pressed"))," ",(0,o.kt)("br",null),"This function is called whenever a keyboard key is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Key)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#key_released"},"key_released"))," ",(0,o.kt)("br",null),"This function is called whenever a keyboard key is released.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Key)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#key_repeated"},"key_repeated"))," ",(0,o.kt)("br",null),"This function is called repeatedly whenever a keyboard key is held.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(std::string &&)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#on_error"},"on_error"))," ",(0,o.kt)("br",null),"This function is called whenever an error occurs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void()>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#main_canvas_resized"},"main_canvas_resized"))," ",(0,o.kt)("br",null),"This function is called whenever the main canvas is resized.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"std::function< void(Event)>"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/events#on_event"},"on_event"))," ",(0,o.kt)("br",null),"This function is called whenever any event occurs (key pressed, mouse moved, etc.).")))),(0,o.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,o.kt)("p",null,"You can set those functions as you wish to react to various events. "),(0,o.kt)("p",null,"The simplest way is to use a lambda:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto ctx = p6::Context{};\nctx.mouse_pressed = [](p6::MouseButton) {\n    std::cout << "Hello World\\n";\n};\n')),(0,o.kt)("h2",{id:"attributes-1"},"Attributes"),(0,o.kt)("h3",{id:"update"},"update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void()> update = []() {\n    };\n")),(0,o.kt)("p",null,"This function is called repeatedly. The framerate is controlled by the framerate_xxx() functions. "),(0,o.kt)("h3",{id:"imgui"},"imgui"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void()> imgui = []() {\n    };\n")),(0,o.kt)("p",null,"In this function you can call all the ImGui code you want. "),(0,o.kt)("p",null,"Note that you can also do it during the ",(0,o.kt)("inlineCode",{parentName:"p"},"[update()](/reference/events#update)")," function. This ",(0,o.kt)("inlineCode",{parentName:"p"},"[imgui()](/reference/events#imgui)")," function is just here to help you organize your code if you want to. "),(0,o.kt)("h3",{id:"mouse_moved"},"mouse_moved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseMove)> mouse_moved = [](MouseMove) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever the mouse is moved. "),(0,o.kt)("h3",{id:"mouse_dragged"},"mouse_dragged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseDrag)> mouse_dragged = [](MouseDrag) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever the mouse is dragged. "),(0,o.kt)("h3",{id:"mouse_pressed"},"mouse_pressed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseButton)> mouse_pressed = [](MouseButton) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever a mouse button is pressed. "),(0,o.kt)("h3",{id:"mouse_released"},"mouse_released"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseButton)> mouse_released = [](MouseButton) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever a mouse button is released. "),(0,o.kt)("h3",{id:"mouse_scrolled"},"mouse_scrolled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(MouseScroll)> mouse_scrolled = [](MouseScroll) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever the mouse wheel is scrolled. "),(0,o.kt)("h3",{id:"key_pressed"},"key_pressed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Key)> key_pressed = [](Key) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever a keyboard key is pressed. "),(0,o.kt)("h3",{id:"key_released"},"key_released"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Key)> key_released = [](Key) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever a keyboard key is released. "),(0,o.kt)("h3",{id:"key_repeated"},"key_repeated"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Key)> key_repeated = [](Key) {\n    };\n")),(0,o.kt)("p",null,"This function is called repeatedly whenever a keyboard key is held. "),(0,o.kt)("p",null,"(NB: this only starts after holding the key for a little while. The exact behaviour is OS-specific)"),(0,o.kt)("p",null,"\u26a0\ufe0f This is less than ideal to do things like handling the movement of a character. You should rather do, in your update function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"if (ctx.key_is_held(GLFW_KEY_W)) {\n    character.move_forward(ctx.delta_time());\n}\n")),(0,o.kt)("h3",{id:"on_error"},"on_error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(std::string &&)> on_error = [](std::string&& error_message) {\n        std::cerr << error_message << '\\n';\n        throw std::runtime_error{error_message};\n    };\n")),(0,o.kt)("p",null,"This function is called whenever an error occurs. "),(0,o.kt)("h3",{id:"main_canvas_resized"},"main_canvas_resized"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void()> main_canvas_resized = []() {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever the main canvas is resized. "),(0,o.kt)("p",null,"If you call ",(0,o.kt)("a",{parentName:"p",href:"/reference/canvas#main_canvas_size"},"main_canvas_size()"),", ",(0,o.kt)("a",{parentName:"p",href:"/reference/canvas#main_canvas_width"},"main_canvas_width()"),", ",(0,o.kt)("a",{parentName:"p",href:"/reference/canvas#main_canvas_height"},"main_canvas_height()")," or ",(0,o.kt)("a",{parentName:"p",href:"/reference/canvas#aspect_ratio"},"aspect_ratio()")," inside ",(0,o.kt)("a",{parentName:"p",href:"/reference/events#main_canvas_resized"},"main_canvas_resized()")," they will already be referring to the new size. "),(0,o.kt)("h3",{id:"on_event"},"on_event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"std::function< void(Event)> on_event = [](Event const&) {\n    };\n")),(0,o.kt)("p",null,"This function is called whenever any event occurs (key pressed, mouse moved, etc.). "),(0,o.kt)("p",null,"It can be useful to use this function instead of the more specific ones (key_pressed, mouse_moved, etc.) if for example you want to forward several events to a function that will handle them. For example in order to control a camera you might need to forward the key, mouse and update events to it. Instead of having to put the code inside those three event functions, you can just put it in ",(0,o.kt)("inlineCode",{parentName:"p"},"on_event")," and let the camera handle each event as it so pleases. "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 2023 February 14"))}p.isMDXComponent=!0}}]);