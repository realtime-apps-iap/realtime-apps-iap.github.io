(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(117)),a={title:"Introduction to Browser APIs",sidebar_label:"Introduction to Browser APIs"},c={unversionedId:"browserapi/intro",id:"browserapi/intro",isDocsHomePage:!1,title:"Introduction to Browser APIs",description:"But first, what is an API?",source:"@site/docs\\browserapi\\intro.mdx",slug:"/browserapi/intro",permalink:"/docs/browserapi/intro",version:"current",sidebar_label:"Introduction to Browser APIs",sidebar:"docs",previous:{title:"Session One Presentation Slides",permalink:"/docs/sessionone/slides"},next:{title:"Instructions - Exploring Browser-side APIs",permalink:"/docs/browserapi/main"}},l=[{value:"But first, what is an API?",id:"but-first-what-is-an-api",children:[]},{value:"APIs in Client-Side JavaScript",id:"apis-in-client-side-javascript",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"but-first-what-is-an-api"},"But first, what is an API?"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place."),Object(i.b)("p",{parentName:"blockquote"},"-MDN, Client-Side Web APIs - Introduction")),Object(i.b)("h3",{id:"apis-in-client-side-javascript"},"APIs in Client-Side JavaScript"),Object(i.b)("p",null,"When we deal with client-side JavaScript, there are many powerful APIs available on it, which aren't part of the JavaScript language itself, but built on top of it. They are broadly categorised into:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Third-Party APIs, which are not built into the browser by default, and require you to interface with them through the internet (i.e. through a REST API over HTTP, or WebSockets!)"),Object(i.b)("li",{parentName:"ul"},"Browser APIs are built into the web browser and are able to expose data and functionality from the browser and the computer. We will primarily be concerning ourselves with Browser APIs for this section.")),Object(i.b)("p",null,"Examples of Browser APIs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DOM - allows you to manipulate the DOM"),Object(i.b)("li",{parentName:"ul"},"WebSockets, WebRTC - to help you build real-time web applications!"),Object(i.b)("li",{parentName:"ul"},"Notifications - allows you to show notifications on the desktop / mobile device"),Object(i.b)("li",{parentName:"ul"},"Canvas - allows you to manipulate graphics in a HTML ",Object(i.b)("inlineCode",{parentName:"li"},"<canvas>")," element"),Object(i.b)("li",{parentName:"ul"},"GeoLocation - allows you to get the geolocation information of the device"),Object(i.b)("li",{parentName:"ul"},"Vibration - allows you to cause the device to vibrate")),Object(i.b)("p",null,"Again, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API"}),"MDN")," is the most definitive resource regarding these APIs"))}u.isMDXComponent=!0}}]);