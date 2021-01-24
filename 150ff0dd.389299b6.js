(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{118:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),h=o,d=b["".concat(p,".").concat(h)]||b[h]||s[h]||a;return r?n.a.createElement(d,c(c({ref:t},l),{},{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(118)),p={title:"Deploying a Python App",sidebar_label:"Python App"},c={unversionedId:"herokudeployment/pythonapp",id:"herokudeployment/pythonapp",isDocsHomePage:!1,title:"Deploying a Python App",description:"In this simple tutorial, let's go through how we can deploy a Python application on Heroku with use of Heroku's Procfile",source:"@site/docs\\herokudeployment\\pythonapp.mdx",slug:"/herokudeployment/pythonapp",permalink:"/docs/herokudeployment/pythonapp",version:"current",sidebar_label:"Python App",sidebar:"docs",previous:{title:"Deploying a React App",permalink:"/docs/herokudeployment/react"},next:{title:"Session Two Presentation Slides",permalink:"/docs/sessiontwo/slides"}},i=[{value:"Set up Python App",id:"set-up-python-app",children:[]},{value:"Create Procfile",id:"create-procfile",children:[]},{value:"Adding Heroku",id:"adding-heroku",children:[]},{value:"Test Heroku App",id:"test-heroku-app",children:[]},{value:"Deploying code",id:"deploying-code",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this simple tutorial, let's go through how we can deploy a Python application on Heroku with use of Heroku's ",Object(a.b)("strong",{parentName:"p"},"Procfile")),Object(a.b)("h3",{id:"set-up-python-app"},"Set up Python App"),Object(a.b)("p",null,"For this tutorial, I will use a sample python streamlit application - a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/realtime-apps-iap/mushroom-classifier-app"}),"mushroom classifier application")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Streamlit is a popular python application for data science enthusiasts to host their datascience projects!")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"git clone https://github.com/realtime-apps-iap/mushroom-classifier-app\ncd mushroom-classifier-app\n")),Object(a.b)("p",null,"This git repository is already initialised and tracked, so we don't have to ",Object(a.b)("inlineCode",{parentName:"p"},"git init")," it"),Object(a.b)("h3",{id:"create-procfile"},"Create Procfile"),Object(a.b)("p",null,"Define a worker process - to start the website",Object(a.b)("br",{parentName:"p"}),"\n","Create a ",Object(a.b)("inlineCode",{parentName:"p"},"Procfile")," at the root of the repository (already created in the git repo)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"web: sh setup.sh && streamlit run app.py\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Over here, I ran sh setup.sh before running the streamlit application, for some configurations purpose.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can add more worker processes if you want with ",Object(a.b)("inlineCode",{parentName:"p"},"nameOfProcess: commands"))),Object(a.b)("h3",{id:"adding-heroku"},"Adding Heroku"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create Heroku application")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku create\n")),Object(a.b)("p",null,"To check if heroku is added to your git repository (you should see heroku)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"git remote -v\n")),Object(a.b)("p",null,"To check the heroku apps you currently have"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku apps\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Rename the created heroku application")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku apps:rename <newname> --app <oldname>\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When you first create the heroku app, a random name will be given, you will have to rename it yourself")),Object(a.b)("p",null,"OR if you already created a heroku application on the heroku website, you can link it directly"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku git:remote -a <nameofherokuapp>\n")),Object(a.b)("h3",{id:"test-heroku-app"},"Test Heroku App"),Object(a.b)("p",null,"Test the heroku application locally before we push it to heroku remote"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku local web\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This runs the web process (that was defined in Procfile) and checks it locally\nYou can test and run multiple processes too")),Object(a.b)("p",null,"Open your localhost at specified port. This will be how it will behave on heroku web."),Object(a.b)("h3",{id:"deploying-code"},"Deploying code"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Push code to heroku")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"git push heroku main\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"main or master branch")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Open Heroku website!")),Object(a.b)("p",null,"Open the heroku website at < app name >.heroku.com!"))}u.isMDXComponent=!0}}]);