(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(118)),i={title:"Instructions - Exploring Browser-side APIs","sidebar_label - Instructions":"Exploring Browser-side APIs"},c={unversionedId:"browserapi/main",id:"browserapi/main",isDocsHomePage:!1,title:"Instructions - Exploring Browser-side APIs",description:"Let's explore some browser-side APIs. To do that in a safe environment, create an empty directory, and then empty web page in that directory and call it index.html",source:"@site/docs\\browserapi\\main.mdx",slug:"/browserapi/main",permalink:"/docs/browserapi/main",version:"current",sidebar:"docs",previous:{title:"Introduction to Browser APIs",permalink:"/docs/browserapi/intro"},next:{title:"Introduction",permalink:"/docs/locationapp/intro"}},l=[{value:"Notifications (Desktop)",id:"notifications-desktop",children:[]},{value:"GeoLocation (Desktop / Mobile)",id:"geolocation-desktop--mobile",children:[]},{value:"Vibration (Mobile)",id:"vibration-mobile",children:[]},{value:"Media Capture &amp; Streams API (Desktop / Mobile)",id:"media-capture--streams-api-desktop--mobile",children:[]},{value:"Screen Capture API (Desktop)",id:"screen-capture-api-desktop",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's explore some browser-side APIs. To do that in a safe environment, create an empty directory, and then empty web page in that directory and call it ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),"<html>\n    <body></body>\n</html> \n")),Object(a.b)("p",null,"and serve the page locally (you can use whatever server you like, but we'll use ",Object(a.b)("inlineCode",{parentName:"p"},"serve")," here)"),Object(a.b)("p",null,"navigate to the directory containing ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," and run"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"serve -p 8080\n")),Object(a.b)("p",null,"this serves the static web page on port 8080."),Object(a.b)("p",null,"Now you can crack open your developer tools and try running / modifying these code snippets!"),Object(a.b)("h3",{id:"notifications-desktop"},"Notifications (Desktop)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'Notification.requestPermission()\n.then(() => {\n    new Notification("This is a Notification!")\n})\n.catch((e) => {\n    console.log(e)\n});\n')),Object(a.b)("h3",{id:"geolocation-desktop--mobile"},"GeoLocation (Desktop / Mobile)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"navigator.geolocation.getCurrentPosition((g) => {\n    console.log(`Your current position is latitude: ${g.coords.latitude}, longitude ${g.coords.longitude}`)\n});\n")),Object(a.b)("h3",{id:"vibration-mobile"},"Vibration (Mobile)"),Object(a.b)("p",null,"You will need Chrome on both your Desktop and an Android Device for this to work."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"First, ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/remote-debugging"}),"set up remote debugging on your Android device.")),Object(a.b)("li",{parentName:"ul"},"Then, open chrome on your Android device and go to ",Object(a.b)("inlineCode",{parentName:"li"},"chrome://inspect/#devices")," on your desktop"),Object(a.b)("li",{parentName:"ul"},"Click on the ",Object(a.b)("strong",{parentName:"li"},"Port Forwarding")," button and enable port forwarding. Map port ",Object(a.b)("inlineCode",{parentName:"li"},"8080")," to ",Object(a.b)("inlineCode",{parentName:"li"},"localhost:8080")),Object(a.b)("li",{parentName:"ul"},"In the ",Object(a.b)("strong",{parentName:"li"},"Open tab with url")," text box, enter a URL and then click ",Object(a.b)("strong",{parentName:"li"},"Open"),". The page opens in a new tab on your Android device and click ",Object(a.b)("strong",{parentName:"li"},"Inspect")," next to the URL you just opened.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"window.navigator.vibrate(200);\n")),Object(a.b)("p",null,"This should cause the device to vibrate for 200ms. If not, check the vibration settings!"),Object(a.b)("p",null,"Try this snippet out!"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"window.navigator.vibrate([100,100,100,100,100,100,300,100,300,100,300,100,100,100,100,100,100,100]);\n")),Object(a.b)("p",null,"Sound familiar? That's the morse code for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/SOS"}),"SOS"),"! i.e. the only notable pattern I could come up with."),Object(a.b)("p",null,"Note: Remember to set the site settings back to what they were before after you're done with the exercises!"),Object(a.b)("h3",{id:"media-capture--streams-api-desktop--mobile"},"Media Capture & Streams API (Desktop / Mobile)"),Object(a.b)("p",null,"Now, insert a ",Object(a.b)("inlineCode",{parentName:"p"},"<video>")," element into ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," file with an id of ",Object(a.b)("inlineCode",{parentName:"p"},"video")," so it looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<html>\n    <body>\n        <video id="video"></video>\n         <style>\n             #video {\n                 border: 1px solid black;\n                 max-width: 100vw;\n                 max-height: 100vh;\n             }\n         </style>\n    </body>\n</html>\n')),Object(a.b)("p",null,"Remember to reload your server afterwards!"),Object(a.b)("p",null,"Now we can try this snippet out:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'navigator.mediaDevices.getUserMedia({audio: false, video:true})\n.then((stream) => {\n    const video = document.getElementById("video");\n    video.srcObject = stream;\n    video.play();\n});\n')),Object(a.b)("h3",{id:"screen-capture-api-desktop"},"Screen Capture API (Desktop)"),Object(a.b)("p",null,"This works very similarly to the Media Capture and Streams API. We can use the same setup for ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," as above, but with the following snippet"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'navigator.mediaDevices.getDisplayMedia({audio: false, video:true})\n.then((stream) => {\n    const video = document.getElementById("video");\n    video.srcObject = stream;\n    video.play();\n});\n')))}p.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);