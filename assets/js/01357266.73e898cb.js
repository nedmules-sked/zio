"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[91624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"index",title:"Introduction to ZIO JDBC",sidebar_label:"ZIO JDBC"},a=void 0,s={unversionedId:"zio-jdbc/index",id:"zio-jdbc/index",title:"Introduction to ZIO JDBC",description:"ZIO JDBC is a ZIO library for JDBC access, providing a small, unopinionated, and ergonomic foundation for directly interacting with JDBC.",source:"@site/docs/zio-jdbc/index.md",sourceDirName:"zio-jdbc",slug:"/zio-jdbc/",permalink:"/zio-jdbc/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-jdbc/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO JDBC",sidebar_label:"ZIO JDBC"},sidebar:"ecosystem-sidebar",previous:{title:"izmumi-reflect",permalink:"/izumi-reflect/"},next:{title:"Installation",permalink:"/zio-jdbc/installation"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ZIO JDBC")," is a ZIO library for JDBC access, providing a small, unopinionated, and ergonomic foundation for directly interacting with JDBC."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Research-yellow.svg",alt:"Research"}))," ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-jdbc/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,i.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-jdbc_2.13/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-jdbc_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-jdbc_2.13/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-jdbc_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-jdbc-docs_2.13"},(0,i.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-jdbc-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-jdbc"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-jdbc?style=social",alt:"ZIO JDBC"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Idiomatic ZIO 2.0 interface to JDBC"),(0,i.kt)("li",{parentName:"ul"},"Secure, with protection against SQL-injection"),(0,i.kt)("li",{parentName:"ul"},"Fully integrated with core libraries including ",(0,i.kt)("em",{parentName:"li"},"ZIO Schema"),", ",(0,i.kt)("em",{parentName:"li"},"ZIO Config"),", ",(0,i.kt)("em",{parentName:"li"},"ZIO Logging"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ZIO JDBC")," provides the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A SQL interpolator to prevent SQL injection attacks"),(0,i.kt)("li",{parentName:"ul"},"A connection pool powered by ZIO's async, resource-safe pool"),(0,i.kt)("li",{parentName:"ul"},"Lightweight decoding values from result sets "),(0,i.kt)("li",{parentName:"ul"},"Lightweight encoding values into SQL fragments for ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")),(0,i.kt)("li",{parentName:"ul"},"Integration with ZIO Schema, ZIO Config, and ZIO Logging"),(0,i.kt)("li",{parentName:"ul"},"Built-in metrics")))}m.isMDXComponent=!0}}]);