/*! For license information please see e8ea1d96.3a104be0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{252:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),i=(r(271),r(270)),c={id:"intro",title:"Subscriptions",sidebar_label:"Subscriptions"},u={id:"subscriptions/intro",isDocsHomePage:!1,title:"Subscriptions",description:"Graphback provides out of the box subscriptions support by providing one of the PubSubEngines",source:"@site/../docs/subscriptions/subscriptions.md",permalink:"/docs/next/subscriptions/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/subscriptions/subscriptions.md",version:"next",sidebar_label:"Subscriptions",sidebar:"docs",previous:{title:"Using SQLite with Graphback",permalink:"/docs/next/databases/sqlite"},next:{title:"Authentication and authorization for Graphback",permalink:"/docs/next/authentication/intro"},latestVersionMainDocPermalink:"/docs/introduction"},a=[{value:"Subscriptions explained",id:"subscriptions-explained",children:[]},{value:"Changing Subscription Topics",id:"changing-subscription-topics",children:[]},{value:"Running example",id:"running-example",children:[]}],s={rightToc:a};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback provides out of the box subscriptions support by providing one of the ",Object(i.b)("inlineCode",{parentName:"p"},"PubSubEngines"),"\nfrom ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-subscriptions"}),"https://github.com/apollographql/graphql-subscriptions")," library.\nDevelopers can connect to any publish subscribe mechanism that is officially supported by graphql-subscriptions\nor even write their own.\nGraphback templates by default using ",Object(i.b)("inlineCode",{parentName:"p"},"InMemoryPubSubEngine")," which is not designed to be used for production\nuse cases."),Object(i.b)("p",null,"We recomend following engines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AMQ (MQTT) using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/aerogear/graphql-mqtt-subscriptions"}),"https://github.com/aerogear/graphql-mqtt-subscriptions")),Object(i.b)("li",{parentName:"ul"},"Redis - using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/davidyaha/graphql-redis-subscriptions"}),"https://github.com/davidyaha/graphql-redis-subscriptions"))),Object(i.b)("h2",{id:"subscriptions-explained"},"Subscriptions explained"),Object(i.b)("p",null,"Graphback provides subscriptions for every type of the operation that is happening on the server.\nThis means that developers can explicitly subscribe to create, update and delete operations for particular resource."),Object(i.b)("p",null,"Subscriptions can be also suppressed by developers by enabling or disabling subscription CRUD flags when initializing Graphback server "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    {\n        ...\n        subCreate: true\n        subUpdate: true\n        subDelete: false\n    }\n")),Object(i.b)("h2",{id:"changing-subscription-topics"},"Changing Subscription Topics"),Object(i.b)("p",null,"Some of the pub sub mechanism will require different format of the topic.\nGraphback CRUD services expose method that can be used to override how topics are build.\nFor example for AMQ we can create extension of the CRUD service as follows"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export class AMQCRUDService extends CrudService {\n    protected subscriptionTopicMapping(triggerType: GraphbackOperationType, objectName: string) {\n        // Support AMQ topic creation format\n        return `graphql/${objectName}_${triggerType}`\n    }\n}\n")),Object(i.b)("h2",{id:"running-example"},"Running example"),Object(i.b)("p",null,"If you wish to use authorization mechanism you can try it on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/datasync-starter"}),"DataSync starter")," project"))}l.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||i;return r?o.a.createElement(d,u({ref:t},s,{components:r})):o.a.createElement(d,u({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},271:function(e,t,r){"use strict";e.exports=r(272)},272:function(e,t,r){"use strict";var n=r(273),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function N(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var a=!1;if(null===t)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case c:a=!0}}if(a)return n(o,t,""===r?"."+q(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var l=r+q(u=t[s],s);a+=e(u,l,n,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=h&&t[h]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),s=0;!(u=t.next()).done;)a+=e(u=u.value,l=r+q(u,s++),n,o);else if("object"===u)throw n=""+t,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return a}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(_,"$&/")+"/"),N(e,M,t=$(t,i,n,o)),T(t)}var U={current:null};function I(){var e=U.current;if(null===e)throw Error(m(321));return e}var G={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,D,t=$(null,null,t,r)),T(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=s,t.PureComponent=w,t.StrictMode=a,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)k.call(t,l)&&!P.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:i,type:e.type,key:c,ref:u,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,r){return I().useReducer(e,t,r)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},273:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,a=c(e),s=1;s<arguments.length;s++){for(var l in r=Object(arguments[s]))o.call(r,l)&&(a[l]=r[l]);if(n){u=n(r);for(var p=0;p<u.length;p++)i.call(r,u[p])&&(a[u[p]]=r[u[p]])}}return a}}}]);