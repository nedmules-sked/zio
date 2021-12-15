"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6945],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9126:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"zio-json",title:"ZIO JSON"},l=void 0,c={unversionedId:"resources/ecosystem/officials/zio-json",id:"resources/ecosystem/officials/zio-json",title:"ZIO JSON",description:"ZIO Json is a fast and secure JSON library with tight ZIO integration.",source:"@site/docs/resources/ecosystem/officials/zio-json.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-json",permalink:"/next/resources/ecosystem/officials/zio-json",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-json.md",tags:[],version:"current",frontMatter:{id:"zio-json",title:"ZIO JSON"},sidebar:"resources-sidebar",previous:{title:"ZIO FTP",permalink:"/next/resources/ecosystem/officials/zio-ftp"},next:{title:"ZIO Kafka",permalink:"/next/resources/ecosystem/officials/zio-kafka"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-json"},"ZIO Json")," is a fast and secure JSON library with tight ZIO integration."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The goal of this project is to create the best all-round JSON library for Scala:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance")," to handle more requests per second than the incumbents, i.e. reduced operational costs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security")," to mitigate against adversarial JSON payloads that threaten the capacity of the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fast Compilation")," no shapeless, no type astronautics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Future-Proof"),", prepared for Scala 3 and next-generation Java."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple")," small codebase, concise documentation that covers everything."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Helpful errors")," are readable by humans and machines."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ZIO Integration")," so nothing more is required.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-json" % "0.1.5"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's try a simple example of encoding and decoding JSON using ZIO JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\nsealed trait Fruit                   extends Product with Serializable\ncase class Banana(curvature: Double) extends Fruit\ncase class Apple(poison: Boolean)    extends Fruit\n\nobject Fruit {\n  implicit val decoder: JsonDecoder[Fruit] =\n    DeriveJsonDecoder.gen[Fruit]\n\n  implicit val encoder: JsonEncoder[Fruit] =\n    DeriveJsonEncoder.gen[Fruit]\n}\n\nval json1         = """{ "Banana":{ "curvature":0.5 }}"""\nval json2         = """{ "Apple": { "poison": false }}"""\nval malformedJson = """{ "Banana":{ "curvature": true }}"""\n\njson1.fromJson[Fruit]\njson2.fromJson[Fruit]\nmalformedJson.fromJson[Fruit]\n\nList(Apple(false), Banana(0.4)).toJsonPretty\n')))}f.isMDXComponent=!0}}]);