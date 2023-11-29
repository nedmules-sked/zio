"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[34574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"zio-test-gen-derivation",title:"Derivation of ZIO Test Generators",sidebar_label:"ZIO Test Gen Derivation"},o=void 0,s={unversionedId:"zio-schema/derivations/zio-test-gen-derivation",id:"zio-schema/derivations/zio-test-gen-derivation",title:"Derivation of ZIO Test Generators",description:"Introduction",source:"@site/docs/zio-schema/derivations/zio-test-gen-derivation.md",sourceDirName:"zio-schema/derivations",slug:"/zio-schema/derivations/zio-test-gen-derivation",permalink:"/zio-schema/derivations/zio-test-gen-derivation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/zio-test-gen-derivation.md",tags:[],version:"current",frontMatter:{id:"zio-test-gen-derivation",title:"Derivation of ZIO Test Generators",sidebar_label:"ZIO Test Gen Derivation"},sidebar:"ecosystem-sidebar",previous:{title:"Optics Derivation",permalink:"/zio-schema/derivations/optics-derivation"},next:{title:"Codecs",permalink:"/zio-schema/derivations/codecs/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"DriveGen",id:"drivegen",level:2},{value:"Example",id:"example",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"ZIO Test supports property-based testing via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gen")," type. ",(0,i.kt)("inlineCode",{parentName:"p"},"Gen[R, A]")," is a random generator of values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". Such a generator can be used to produce test cases for a property, which can then be checked for validity. The ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-schema-zio-test")," module provides a way to derive a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gen[R, A]")," from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema[A]"),". In this section, we will see how this functionality works."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to derive a generator from a ZIO Schema, we need to add the following dependency to our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema-zio-test" % 0.4.15\n')),(0,i.kt)("h2",{id:"drivegen"},"DriveGen"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DriveGen")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.schema")," package provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"gen")," operator which takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Schmea[A]")," implicitly and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gen[Sized, A]"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object DeriveGen {\n  def gen[A](implicit schema: Schema[A]): Gen[Sized, A] = ???\n}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the following example, we will derive a generator for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeriveGen.gen")," operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.schema.{DeriveGen, DeriveSchema, Schema}\nimport zio.test.{Gen, Sized}\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] = DeriveSchema.gen\n  val gen: Gen[Sized, Person]         = DeriveGen.gen\n}\n\nimport zio.test._\n\nobject ExampleSpec extends ZIOSpecDefault {\n  def spec =\n    test("example test") {\n      check(Person.gen) { p =>\n        assertTrue(???)\n      }\n    }\n}\n')))}m.isMDXComponent=!0}}]);