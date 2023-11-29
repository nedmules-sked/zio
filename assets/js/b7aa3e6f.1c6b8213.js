"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[55299],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={id:"index",title:"Getting Started with ZIO Bson",sidebar_label:"Getting Started"},i=void 0,s={unversionedId:"zio-bson/index",id:"zio-bson/index",title:"Getting Started with ZIO Bson",description:"ZIO Bson is BSON library with tight ZIO integration.",source:"@site/docs/zio-bson/index.md",sourceDirName:"zio-bson",slug:"/zio-bson/",permalink:"/zio-bson/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-bson/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started with ZIO Bson",sidebar_label:"Getting Started"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"zio-schema support",id:"zio-schema-support",level:2},{value:"Example",id:"example",level:2},{value:"Declaring codecs",id:"declaring-codecs",level:3},{value:"Converting to BsonValue",id:"converting-to-bsonvalue",level:3},{value:"Creating CodecProvider",id:"creating-codecprovider",level:3},{value:"Parsing BsonValue",id:"parsing-bsonvalue",level:3},{value:"Errors",id:"errors",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-bson"},"ZIO Bson")," is BSON library with tight ZIO integration."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))," ",(0,a.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-bson/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,a.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-bson_2.13/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-bson_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-bson_2.13/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-bson_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-bson-docs_2.13"},(0,a.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-bson-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-bson"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-bson?style=social",alt:"ZIO Bson"}))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The goal of this project is to create the best all-round JSON library for Scala:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native BSON support")," to avoid intermediate JSON conversions and support BSON types."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Future-Proof"),", prepared for Scala 3 and next-generation Java."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple")," small codebase, concise documentation that covers everything."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Helpful errors")," are readable by humans and machines."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ZIO Integration")," so nothing more is required.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following lines in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-bson" % "1.0.4"\nlibraryDependencies += "dev.zio" %% "zio-bson-magnolia" % "1.0.4"\n')),(0,a.kt)("h2",{id:"zio-schema-support"},"zio-schema support"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zio-bson-magnolia")," projects provides typeclass derivation only for ",(0,a.kt)("inlineCode",{parentName:"p"},"scala")," ",(0,a.kt)("inlineCode",{parentName:"p"},"2.13"),".\nYou can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-schema/"},"zio-schema-bson")," instead to get typeclass derivation on ",(0,a.kt)("inlineCode",{parentName:"p"},"scala")," ",(0,a.kt)("inlineCode",{parentName:"p"},"2.12"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"2.13")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"3.2"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"All the following code snippets assume that the following imports have been declared"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.bson._\nimport zio.bson.BsonBuilder._\n")),(0,a.kt)("h3",{id:"declaring-codecs"},"Declaring codecs"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveBsonCodec.derive")," to get a codec for your case class or sealed trait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.bson.magnolia._\n\ncase class Banana(curvature: Double)\n\nobject Banana {\n  implicit val codec: BsonCodec[Banana] = DeriveBsonCodec.derive\n}\n")),(0,a.kt)("h3",{id:"converting-to-bsonvalue"},"Converting to BsonValue"),(0,a.kt)("p",null,"To use values in ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," expressions you can convert them to ",(0,a.kt)("inlineCode",{parentName:"p"},"BsonValue")," this way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'"str".toBsonValue\n\nBanana(0.2).toBsonValue\n\nimport org.bson._\n\ndef method[T: BsonEncoder](value: T): BsonDocument = doc("key" -> value.toBsonValue)\n')),(0,a.kt)("h3",{id:"creating-codecprovider"},"Creating CodecProvider"),(0,a.kt)("p",null,"To get ",(0,a.kt)("inlineCode",{parentName:"p"},"CodecProvider")," for your ",(0,a.kt)("inlineCode",{parentName:"p"},"BsonCodec")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"zioBsonCodecProvider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val codecProvider = zioBsonCodecProvider[Banana]\n")),(0,a.kt)("h3",{id:"parsing-bsonvalue"},"Parsing BsonValue"),(0,a.kt)("p",null,"In general ",(0,a.kt)("inlineCode",{parentName:"p"},"CodecProvider")," should parse your case class without intermediate ",(0,a.kt)("inlineCode",{parentName:"p"},"BsonValue")," representation.\nBut you can parse ",(0,a.kt)("inlineCode",{parentName:"p"},"BsonValue")," any way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import BsonBuilder._\n\nval bsonVal: BsonValue = doc("curvature" -> double(0.2))\n\nbsonVal.as[Banana]\n')),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"Bad BSON will produce an error with path and contextual information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'scala> doc("curvature" -> Array[Byte](1, 2, 3).toBsonValue).as[Banana]\nval res: Either[String,Banana] = Left(.curvature: Expected BSON type Double, but got BINARY.)\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can configure typeclass derivation with annotations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.bson._\nimport zio.bson.BsonBuilder._\nimport zio.bson.magnolia._\n\nsealed trait Fruit\n\nobject Fruit {\n  case class Banana(curvature: Double) extends Fruit\n  case class Apple(poison: Boolean) extends Fruit\n  \n  implicit val codec: BsonCodec[Fruit] = DeriveBsonCodec.derive\n}\n\nval jsonFruit = doc( "Banana" -> doc( "curvature" -> double(0.5) ))\n\njsonFruit.as[Fruit]\n//Right(Banana(0.5))\n\n@bsonDiscriminator("$type")\nsealed trait FruitConfigured\n\nobject FruitConfigured {\n  case class Banana(curvature: Double) extends FruitConfigured\n  @bsonHint("custom_type_name")\n  case class Apple(@bsonField("is_poisoned") poison: Boolean) extends FruitConfigured\n\n  implicit val codec: BsonCodec[FruitConfigured] = DeriveBsonCodec.derive\n}\n\nval jsonFruitConfigured = doc(\n  "$type" -> str("custom_type_name"),\n  "is_poisoned" -> bool(true)\n)\n\njsonFruitConfigured.as[FruitConfigured]\n')))}u.isMDXComponent=!0}}]);