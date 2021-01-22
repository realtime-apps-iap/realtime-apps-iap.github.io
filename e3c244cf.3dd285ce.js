(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(7),a=(o(0),o(114)),c={id:"deployment-to-heroku",title:"Deployment to Heroku"},i={unversionedId:"introduction/deployment-to-heroku",id:"introduction/deployment-to-heroku",isDocsHomePage:!1,title:"Deployment to Heroku",description:"As React is one of the most popular frontend framework/libraries these days,",source:"@site/docs\\introduction\\heroku.mdx",slug:"/introduction/deployment-to-heroku",permalink:"/docs/introduction/deployment-to-heroku",version:"current",sidebar:"docs",previous:{title:"WebRTC",permalink:"/docs/introduction/webrtc"},next:{title:"Introduction",permalink:"/docs/chatapp/intro"}},p=[{value:"Heroku Dynos",id:"heroku-dynos",children:[]},{value:"Deploying to Heroku",id:"deploying-to-heroku",children:[{value:"1. Create Heroku App",id:"1-create-heroku-app",children:[]},{value:"2. Deploying code",id:"2-deploying-code",children:[]}]},{value:"What does Heroku run?",id:"what-does-heroku-run",children:[]},{value:"Heroku Procfile",id:"heroku-procfile",children:[{value:"Specifying a Dyno process",id:"specifying-a-dyno-process",children:[]},{value:"Multiple Dyno processes",id:"multiple-dyno-processes",children:[]},{value:"Multiple Dyno processes (Separate process types)",id:"multiple-dyno-processes-separate-process-types",children:[]}]},{value:"Running Heroku locally",id:"running-heroku-locally",children:[]},{value:"Useful Heroku CLI commands",id:"useful-heroku-cli-commands",children:[{value:"Check existing heroku apps",id:"check-existing-heroku-apps",children:[]},{value:"Delete an existing heroku app",id:"delete-an-existing-heroku-app",children:[]},{value:"Rename an existing heroku app",id:"rename-an-existing-heroku-app",children:[]}]}],l={toc:p};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As React is one of the most popular frontend framework/libraries these days,\nI will be showing how to deploy a react project on Heroku."),Object(a.b)("h3",{id:"heroku-dynos"},"Heroku Dynos"),Object(a.b)("p",null,'"The Heroku Platform uses the container model to run and scale all Heroku apps. The containers used at Heroku are called \u201cdynos.\u201d Dynos are isolated, virtualized Linux containers that are designed to execute code based on a user-specified command.\nYour app can scale to any specified number of dynos based on its resource demands. Heroku\u2019s container management capabilities provide you with an easy way to scale and manage the number, size, and type of dynos your app may need at any given time."W'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"For free tier, the dyno only wakes up upon activity, and sleeps after 30 minutes of inactivity\nFor paid tier, the dyno will always be awake.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npx create-react-app my-app\n")),Object(a.b)("h2",{id:"deploying-to-heroku"},"Deploying to Heroku"),Object(a.b)("h3",{id:"1-create-heroku-app"},"1. Create Heroku App"),Object(a.b)("p",null,"The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository\nIf you run this command from your app\u2019s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku create\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Check that remote is set")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git remote -v\n")),Object(a.b)("p",null,"Sample results:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku  https://git.heroku.com/react-test-app-1234.git (fetch)\nheroku  https://git.heroku.com/react-test-app-1234.git (push)\norigin  https://github.com/realtime-apps-iap/my-app.git (fetch)\norigin  https://github.com/realtime-apps-iap/my-app.git (push)\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It looks like this for me, because this git repo is also linked to a github remote")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Linking to an existing Heroku App")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku git:remote -a thawing-inlet-61413\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you created an application through Heroku website first, instead of directly through Heroku CLI")),Object(a.b)("h3",{id:"2-deploying-code"},"2. Deploying code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git push heroku master\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Heroku only deploys code that you push to master or main. Pushing code to another branch of the heroku remote has no effect.")),Object(a.b)("p",null,"BUT if you want to deploy from another branch, you can do this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git push heroku anotherBranch:master\n")),Object(a.b)("h2",{id:"what-does-heroku-run"},"What does Heroku run?"),Object(a.b)("p",null,"Heroku will automatically detect what kind of app is this (e.g. Node.js, Python, etc),\nand if possible, try to automatically run the app."),Object(a.b)("p",null,"For instance if this is a create-react-app, Heroku will know (through package.json at the root) that is can run the most typical script which is ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm start")," and create a buildpack for it.\nBuildpacks are scripts that are run when your app is deployed. They are used to install dependencies for your app and configure your environment."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If your project is purely a React project at the root, you can just do this very simply.",Object(a.b)("br",{parentName:"p"}),"\n","Once you ",Object(a.b)("inlineCode",{parentName:"p"},"git push heroku main"),", the code will be uploaded to Heroku remote and automatically start running (if possible) and you can visit your link afterwards ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-test-app-1234.herokuapp.com/"}),"https://react-test-app-1234.herokuapp.com/"))),Object(a.b)("p",null,"Otherwise, if Heroku does not know how and what to run this application, we have to specify it - through the use of the Heroku ",Object(a.b)("inlineCode",{parentName:"p"},"Procfile")," shown below."),Object(a.b)("h2",{id:"heroku-procfile"},"Heroku Procfile"),Object(a.b)("p",null,"If Heroku does not know how to ",Object(a.b)("em",{parentName:"p"},"automatically")," run the application, we need a Procfile saved at the root of the repository.",Object(a.b)("br",{parentName:"p"}),"\n","A Profile is a text file in the root directory of your application, to ",Object(a.b)("strong",{parentName:"p"},"explicitly declare what command should be executed")," to start your app."),Object(a.b)("p",null,"Before we go through what to write for a Procfile, let's check for our app that succeeded without having a Procfile. What did Heroku pick up for this react app and decide what to run? Go into the Heroku website and check it out with me...",Object(a.b)("br",{parentName:"p"}),"\n","Observe under 'Overview' tab for the app project for 'Dyno formation'\nThis is what's there for this react application of ours:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"web npm start\n")),Object(a.b)("p",null,"In fact, this is essentially the Profile command!"),Object(a.b)("h3",{id:"specifying-a-dyno-process"},"Specifying a Dyno process"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<processType> <command & arguments if there is>\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This is essentially it!")),Object(a.b)("p",null,"An example Procfile for a Django app:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"web: python manage.py runserver 0.0.0.0:5000\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In particular for website projects, specifying process type keyword ",Object(a.b)("inlineCode",{parentName:"p"},"web")," for the process that serves the website is important.\nFor Heroku, it declares that this process type will be attached to the HTTP routing stack of Heroku, and receive web traffic when deployed.")),Object(a.b)("h3",{id:"multiple-dyno-processes"},"Multiple Dyno processes"),Object(a.b)("p",null,"What if you want to run more than a single command in a dyno?"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"web: puma -C config/puma.rb & sidekiq & wait -n\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Indicate the different commands separated by ",Object(a.b)("inlineCode",{parentName:"p"},"&"),Object(a.b)("br",{parentName:"p"}),"\n","Note that ",Object(a.b)("inlineCode",{parentName:"p"},"wait -n")," exits when at least one of the commands exits and triggers the dyno to restart - might be a safe catch here because you don't want your dyno to run if one of the commands exits unexpectedly while the rest continues to run.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This method may not be a good practice for production applications as there will be limitations to 'process isolation, scaling and monitoring'. See the section below for a better way to do so - separating worker process types")),Object(a.b)("h3",{id:"multiple-dyno-processes-separate-process-types"},"Multiple Dyno processes (Separate process types)"),Object(a.b)("p",null,"You can have multiple worker process types running, instead of combining them together in one - though possible, it is not recommended.",Object(a.b)("br",{parentName:"p"}),"\n","We just need to have separate process types."),Object(a.b)("p",null,"Sample:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"web: python manage.py runserver 0.0.0.0:5000\nworker1: python project/worker/worker.py\nprocessor1: python project/worker/processor.py\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The name of process types can be anything. Only the name ",Object(a.b)("inlineCode",{parentName:"p"},"web")," is special and reserved, as heroku needs to know to deal with web traffic.")),Object(a.b)("h2",{id:"running-heroku-locally"},"Running Heroku locally"),Object(a.b)("p",null,"One thing that would be helpful in iteration and testing if your application would run correctly on heroku (especially with multiple processes indicated), is to try to run it locally first.",Object(a.b)("br",{parentName:"p"}),"\n","To run it locally,"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku local web\n")),Object(a.b)("p",null,"This serve the website on local host with the heroku development environment"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Check that it runs well locally before you deploy it to heroku - saves time and effort")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useful-heroku-cli-commands"},"Useful Heroku CLI commands"),Object(a.b)("h3",{id:"check-existing-heroku-apps"},"Check existing heroku apps"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku apps\n")),Object(a.b)("h3",{id:"delete-an-existing-heroku-app"},"Delete an existing heroku app"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku apps:destroy <appname> --confirm <appname>\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"For Heroku accounts that are not verified (with input credit card details), you can only create a maximum of 5 apps")),Object(a.b)("h3",{id:"rename-an-existing-heroku-app"},"Rename an existing heroku app"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"heroku apps:rename <newname> --app <oldname>\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When you first create a heroku app through Heroku CLI, a random name will be given.")))}u.isMDXComponent=!0},114:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return h}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(o),d=r,h=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return o?n.a.createElement(h,i(i({ref:t},l),{},{components:o})):n.a.createElement(h,i({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);