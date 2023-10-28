"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"index",title:"Introduction to ZIO Schema Codecs",sidebar_label:"Codecs"},i=void 0,c={unversionedId:"zio-schema/derivations/codecs/index",id:"zio-schema/derivations/codecs/index",title:"Introduction to ZIO Schema Codecs",description:"Once we generate a schema for a type, we can derive a codec for that type.",source:"@site/docs/zio-schema/derivations/codecs/index.md",sourceDirName:"zio-schema/derivations/codecs",slug:"/zio-schema/derivations/codecs/",permalink:"/zio-schema/derivations/codecs/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/codecs/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Schema Codecs",sidebar_label:"Codecs"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Test Gen Derivation",permalink:"/zio-schema/derivations/zio-test-gen-derivation"},next:{title:"Apache Avro",permalink:"/zio-schema/derivations/codecs/avro"}},l={},d=[{value:"Codec",id:"codec",level:2},{value:"Binary Codecs",id:"binary-codecs",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once we generate a schema for a type, we can derive a codec for that type."),(0,a.kt)("p",null,"A codec is a utility that can encode/decode a value of some type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," to/from some format (e.g. binary format, JSON, etc.)"),(0,a.kt)("h2",{id:"codec"},"Codec"),(0,a.kt)("p",null,"Unlike codecs in other libraries, a codec in ZIO Schema has no type parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait Codec {\n  def encoder[A](schema: Schema[A]): ZTransducer[Any, Nothing, A, Byte]\n  def decoder[A](schema: Schema[A]): ZTransducer[Any, String, Byte, A]\n\n  def encode[A](schema: Schema[A]): A => Chunk[Byte]\n  def decode[A](schema: Schema[A]): Chunk[Byte] => Either[String, A]\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Codec")," trait has two basic methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"encode[A]"),": Given a ",(0,a.kt)("inlineCode",{parentName:"li"},"Schema[A]")," it is capable of generating an ",(0,a.kt)("inlineCode",{parentName:"li"},"Encoder[A]")," ( ",(0,a.kt)("inlineCode",{parentName:"li"},"A => Chunk[Byte]"),") for any Schema."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"decode[A]"),": Given a ",(0,a.kt)("inlineCode",{parentName:"li"},"Schema[A]")," it is capable of generating a ",(0,a.kt)("inlineCode",{parentName:"li"},"Decoder[A]")," ( ",(0,a.kt)("inlineCode",{parentName:"li"},"Chunk[Byte] => Either[String, A]"),") for any Schema.")),(0,a.kt)("h2",{id:"binary-codecs"},"Binary Codecs"),(0,a.kt)("p",null,"The binary codecs are codecs that can encode/decode a value of some type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," to/from binary format (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Chunk[Byte]"),").  In ZIO Schema, by having a ",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryCodec[A]")," instance, other than being able to encode/decode a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," to/from binary format, we can also encode/decode a stream of values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," to/from a stream of binary format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\nimport zio.stream.ZPipeline\n\ntrait Decoder[Whole, Element, +A] {\n  def decode(whole: Whole): Either[DecodeError, A]\n  def streamDecoder: ZPipeline[Any, DecodeError, Element, A]\n}\n\ntrait Encoder[Whole, Element, -A] {\n  def encode(value: A): Whole\n  def streamEncoder: ZPipeline[Any, Nothing, A, Element]\n}\n\ntrait Codec[Whole, Element, A] extends Encoder[Whole, Element, A] with Decoder[Whole, Element, A]\n\ntrait BinaryCodec[A] extends Codec[Chunk[Byte], Byte, A]\n")),(0,a.kt)("p",null,"To make it simpler, we can think of a ",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryCodec[A]")," as the following trait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\nimport zio.stream.ZPipeline\n\ntrait BinaryCodec[A] {\n  def encode(value: A): Chunk[Byte]\n  def decode(whole: Chunk[Byte]): Either[DecodeError, A]\n\n  def streamEncoder: ZPipeline[Any, Nothing, A, Byte]\n  def streamDecoder: ZPipeline[Any, DecodeError, Byte, A]\n}\n")),(0,a.kt)("p",null,"Example of possible codecs are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CSV Codec"),(0,a.kt)("li",{parentName:"ul"},"JSON Codec (already available)"),(0,a.kt)("li",{parentName:"ul"},"Apache Avro Codec (in progress)"),(0,a.kt)("li",{parentName:"ul"},"Apache Thrift Codec (in progress)"),(0,a.kt)("li",{parentName:"ul"},"XML Codec"),(0,a.kt)("li",{parentName:"ul"},"YAML Codec"),(0,a.kt)("li",{parentName:"ul"},"Protobuf Codec (already available)"),(0,a.kt)("li",{parentName:"ul"},"QueryString Codec"),(0,a.kt)("li",{parentName:"ul"},"etc.")))}m.isMDXComponent=!0}}]);