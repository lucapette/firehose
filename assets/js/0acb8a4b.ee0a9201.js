"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[367],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return k}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=f(t),k=i,m=p["".concat(l,".").concat(k)]||p[k]||u[k]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function k(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var f=2;f<o;f++)a[f]=t[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9614:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return u}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={},l="Configuration",f={unversionedId:"sinks/overview",id:"sinks/overview",title:"Configuration",description:"This page contains reference for all the application configurations for Firehose.",source:"@site/docs/sinks/overview.md",sourceDirName:"sinks",slug:"/sinks/overview",permalink:"/firehose/sinks/overview",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/sinks/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Monitoring",permalink:"/firehose/concepts/monitoring"},next:{title:"Filters",permalink:"/firehose/sinks/filters"}},c={},u=[{value:"Table of Contents",id:"table-of-contents",level:2}],p={toc:u};function k(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This page contains reference for all the application configurations for Firehose."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/retries"},"Retries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/dlq"},"DLQ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/errors"},"Errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/filters"},"Filters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/http-sink"},"HTTP Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/jdbc-sink"},"JDBC Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/influxdb-sink"},"Influx Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/mongo-sink"},"MongoDB Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/elasticsearch-sink"},"Elasticsearch Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/grpc-sink"},"GRPC Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/prometheus-sink"},"Prometheus Sink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firehose/sinks/redis-sink"},"Redis Sink"))))}k.isMDXComponent=!0}}]);