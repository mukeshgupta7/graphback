/*! For license information please see 4e2c1f0d.d2910ac0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{1309:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=n,f=u["".concat(o,".").concat(p)]||u[p]||m[p]||c;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1310:function(e,t,r){"use strict";e.exports=r(1311)},1311:function(e,t,r){"use strict";var n=r(1312),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,m=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}function v(){}function N(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var w=N.prototype=new v;w.constructor=N,n(w,y.prototype),w.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)_.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var s=Array(l),b=0;b<l;b++)s[b]=arguments[b+2];a.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var F=/\/+/g,P=[];function E(e,t,r,n){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function $(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return r(n,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+T(a=e[l],l);i+=$(a,s,r,n)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=d&&e[d]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),l=0;!(a=e.next()).done;)i+=$(a=a.value,s=t+T(a,l++),r,n);else if("object"===a)throw r=""+e,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function D(e,t,r){return null==e?0:$(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(F,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(F,"$&/")+"/"),D(e,I,t=E(t,c,n,a)),R(t)}var A={current:null};function M(){var e=A.current;if(null===e)throw Error(j(321));return e}var U={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,q,t=E(null,null,t,r)),R(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(j(143));return e}},t.Component=y,t.Fragment=i,t.Profiler=s,t.PureComponent=N,t.StrictMode=l,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(j(267,e));var a=n({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(b in t)_.call(t,b)&&!S.hasOwnProperty(b)&&(a[b]=void 0===t[b]&&void 0!==s?s[b]:t[b])}var b=arguments.length-2;if(1===b)a.children=r;else if(1<b){s=Array(b);for(var u=0;u<b;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:c,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:m,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.13.1"},1312:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,l=o(e),s=1;s<arguments.length;s++){for(var b in r=Object(arguments[s]))a.call(r,b)&&(l[b]=r[b]);if(n){i=n(r);for(var u=0;u<i.length;u++)c.call(r,i[u])&&(l[i[u]]=r[i[u]])}}return l}},447:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),c=(r(1310),r(1309)),o={id:"_writer_schemaformatters_",title:"writer/schemaFormatters",sidebar_label:"writer/schemaFormatters"},i={unversionedId:"api/graphback-codegen-schema/modules/_writer_schemaformatters_",id:"api/graphback-codegen-schema/modules/_writer_schemaformatters_",isDocsHomePage:!1,title:"writer/schemaFormatters",description:"Index",source:"@site/../docs/api/graphback-codegen-schema/modules/_writer_schemaformatters_.md",slug:"/api/graphback-codegen-schema/modules/_writer_schemaformatters_",permalink:"/docs/next/api/graphback-codegen-schema/modules/_writer_schemaformatters_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-schema/modules/_writer_schemaformatters_.md",version:"current",sidebar_label:"writer/schemaFormatters"},l=[{value:"Index",id:"index",children:[{value:"Object literals",id:"object-literals",children:[]}]},{value:"Object literals",id:"object-literals-1",children:[{value:"<code>Const</code> gqlSchemaFormatter",id:"const-gqlschemaformatter",children:[]},{value:"\u25aa <strong>gqlSchemaFormatter</strong>: <em>object</em>",id:"-gqlschemaformatter-object",children:[]},{value:"format",id:"format",children:[]},{value:"<code>Const</code> jsSchemaFormatter",id:"const-jsschemaformatter",children:[]},{value:"\u25aa <strong>jsSchemaFormatter</strong>: <em>object</em>",id:"-jsschemaformatter-object",children:[]},{value:"format",id:"format-1",children:[]},{value:"<code>Const</code> tsSchemaFormatter",id:"const-tsschemaformatter",children:[]},{value:"\u25aa <strong>tsSchemaFormatter</strong>: <em>object</em>",id:"-tsschemaformatter-object",children:[]},{value:"format",id:"format-2",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"object-literals"},"Object literals"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-schema/modules/_writer_schemaformatters_#const-gqlschemaformatter"}),"gqlSchemaFormatter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-schema/modules/_writer_schemaformatters_#const-jsschemaformatter"}),"jsSchemaFormatter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-schema/modules/_writer_schemaformatters_#const-tsschemaformatter"}),"tsSchemaFormatter"))),Object(c.b)("h2",{id:"object-literals-1"},"Object literals"),Object(c.b)("h3",{id:"const-gqlschemaformatter"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," gqlSchemaFormatter"),Object(c.b)("h3",{id:"-gqlschemaformatter-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"gqlSchemaFormatter"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/8023333/packages/graphback-codegen-schema/src/writer/schemaFormatters.ts#L41"}),"graphback-codegen-schema/src/writer/schemaFormatters.ts:41"))),Object(c.b)("p",null,"GQL string template that returns schema in original form"),Object(c.b)("h3",{id:"format"},"format"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"format"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schemaString"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/8023333/packages/graphback-codegen-schema/src/writer/schemaFormatters.ts#L42"}),"graphback-codegen-schema/src/writer/schemaFormatters.ts:42"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaString")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-jsschemaformatter"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," jsSchemaFormatter"),Object(c.b)("h3",{id:"-jsschemaformatter-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"jsSchemaFormatter"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/8023333/packages/graphback-codegen-schema/src/writer/schemaFormatters.ts#L24"}),"graphback-codegen-schema/src/writer/schemaFormatters.ts:24"))),Object(c.b)("p",null,"JS string template that formats schema into common js module that can be imported\neasily in server side application"),Object(c.b)("h3",{id:"format-1"},"format"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"format"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schemaString"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/8023333/packages/graphback-codegen-schema/src/writer/schemaFormatters.ts#L25"}),"graphback-codegen-schema/src/writer/schemaFormatters.ts:25"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaString")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-tsschemaformatter"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," tsSchemaFormatter"),Object(c.b)("h3",{id:"-tsschemaformatter-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"tsSchemaFormatter"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/8023333/packages/graphback-codegen-schema/src/writer/schemaFormatters.ts#L9"}),"graphback-codegen-schema/src/writer/schemaFormatters.ts:9"))),Object(c.b)("p",null,"Typescript string template that formats schema into common js module that can be imported\neasily in server side application"),Object(c.b)("h3",{id:"format-2"},"format"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"format"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schemaString"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/8023333/packages/graphback-codegen-schema/src/writer/schemaFormatters.ts#L10"}),"graphback-codegen-schema/src/writer/schemaFormatters.ts:10"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaString")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")))}b.isMDXComponent=!0}}]);