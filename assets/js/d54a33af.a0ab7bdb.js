"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[341],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},R=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),R=p(t),f=o,m=R["".concat(u,".").concat(f)]||R[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=R;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}R.displayName="MDXCreateElement"},4011:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="Errors",p={unversionedId:"sinks/errors",id:"sinks/errors",title:"Errors",description:"These errors are returned by sinks. One can configure to which errors should be processed by which decorator. The error",source:"@site/docs/sinks/errors.md",sourceDirName:"sinks",slug:"/sinks/errors",permalink:"/firehose/sinks/errors",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/sinks/errors.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<code>ERROR_TYPES_FOR_FAILING</code>",id:"error_types_for_failing",level:2},{value:"<code>ERROR_TYPES_FOR_DLQ</code>",id:"error_types_for_dlq",level:2},{value:"<code>ERROR_TYPES_FOR_RETRY</code>",id:"error_types_for_retry",level:2}],R={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},R,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors"},"Errors"),(0,a.kt)("p",null,"These errors are returned by sinks. One can configure to which errors should be processed by which decorator. The error\ntype are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DESERIALIZATION_ERROR"),(0,a.kt)("li",{parentName:"ul"},"INVALID_MESSAGE_ERROR"),(0,a.kt)("li",{parentName:"ul"},"UNKNOWN_FIELDS_ERROR"),(0,a.kt)("li",{parentName:"ul"},"SINK_4XX_ERROR"),(0,a.kt)("li",{parentName:"ul"},"SINK_5XX_ERROR"),(0,a.kt)("li",{parentName:"ul"},"SINK_UNKNOWN_ERROR"),(0,a.kt)("li",{parentName:"ul"},"DEFAULT_ERROR ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If no error is specified")))),(0,a.kt)("h2",{id:"error_types_for_failing"},(0,a.kt)("inlineCode",{parentName:"h2"},"ERROR_TYPES_FOR_FAILING")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR,SINK_UNKNOWN_ERROR")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},"Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"DESERIALIZATION_ERROR,INVALID_MESSAGE_ERROR,UNKNOWN_FIELDS_ERROR"))),(0,a.kt)("h2",{id:"error_types_for_dlq"},(0,a.kt)("inlineCode",{parentName:"h2"},"ERROR_TYPES_FOR_DLQ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR,SINK_UNKNOWN_ERROR")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},"Default value: ``")),(0,a.kt)("h2",{id:"error_types_for_retry"},(0,a.kt)("inlineCode",{parentName:"h2"},"ERROR_TYPES_FOR_RETRY")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},"Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR"))))}f.isMDXComponent=!0}}]);