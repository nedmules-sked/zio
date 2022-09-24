"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={id:"generating-accessor-methods-using-macros",title:"Generating Accessor Methods Using Macros",sidebar_label:"Generating Accessor Methods"},o=void 0,s={unversionedId:"reference/service-pattern/generating-accessor-methods-using-macros",id:"reference/service-pattern/generating-accessor-methods-using-macros",title:"Generating Accessor Methods Using Macros",description:"Writing accessor methods is a repetitive task and would be cumbersome in services with many methods. We can automate the generation of accessor methods using zio-macro module.",source:"@site/docs/reference/service-pattern/generating-accessor-methods-using-macros.md",sourceDirName:"reference/service-pattern",slug:"/reference/service-pattern/generating-accessor-methods-using-macros",permalink:"/reference/service-pattern/generating-accessor-methods-using-macros",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/service-pattern/generating-accessor-methods-using-macros.md",tags:[],version:"current",frontMatter:{id:"generating-accessor-methods-using-macros",title:"Generating Accessor Methods Using Macros",sidebar_label:"Generating Accessor Methods"},sidebar:"reference-sidebar",previous:{title:"Polymorphic Services",permalink:"/reference/service-pattern/defining-polymorphic-services-in-zio"},next:{title:"Three Laws of ZIO Environment",permalink:"/reference/service-pattern/the-three-laws-of-zio-environment"}},l={},p=[{value:"Monomorphic Services",id:"monomorphic-services",level:2},{value:"Writing Polymorphic Services",id:"writing-polymorphic-services",level:2},{value:"With Proper Type Parameters",id:"with-proper-type-parameters",level:3},{value:"With Higher-Kinded Type Parameters (<code>F[_]</code>)",id:"with-higher-kinded-type-parameters-f_",level:3},{value:"With Higher-Kinded Type Parameters (<code>F[_, _]</code>)",id:"with-higher-kinded-type-parameters-f_-_",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Writing accessor methods is a repetitive task and would be cumbersome in services with many methods. We can automate the generation of accessor methods using ",(0,a.kt)("inlineCode",{parentName:"p"},"zio-macro")," module."),(0,a.kt)("p",null,"To install the ",(0,a.kt)("inlineCode",{parentName:"p"},"zio-macro")," we should add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-macros" % "<zio-version>"\n')),(0,a.kt)("p",null,"Also, to enable macro expansion we need to setup our project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"for Scala ",(0,a.kt)("inlineCode",{parentName:"p"},">= 2.13")," add compiler option:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'scalacOptions += "-Ymacro-annotations"\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"for Scala ",(0,a.kt)("inlineCode",{parentName:"p"},"< 2.13")," add macro paradise compiler plugin:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'compilerPlugin(("org.scalamacros" % "paradise"  % "2.1.1") cross CrossVersion.full)\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"At the moment these are only available for Scala versions ",(0,a.kt)("inlineCode",{parentName:"p"},"2.x"),", however their equivalents for Scala 3 are on our roadmap.")),(0,a.kt)("h2",{id:"monomorphic-services"},"Monomorphic Services"),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@accessible")," macro to generate ",(0,a.kt)("em",{parentName:"p"},"service member accessors"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.macros.accessible\n\n@accessible\ntrait ServiceA {\n  def method(input: Something): UIO[Unit]\n}\n\n// below will be autogenerated\nobject ServiceA {\n  def method(input: Something) =\n    ZIO.serviceWithZIO[ServiceA](_.method(input))\n}\n")),(0,a.kt)("p",null,"For normal values, a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," on error channel is generated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.macros.accessible\n\n@accessible\ntrait ServiceB {\n  def pureMethod(input: Something): SomethingElse\n}\n\n// below will be autogenerated\nobject ServiceB {\n  def pureMethod(input: Something): ZIO[ServiceB, Nothing, SomethingElse] =\n    ZIO.serviceWith[ServiceB](_.pureMethod(input))\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@throwing")," annotation will mark impure methods. Using this annotation will request ZIO to push the error on the error channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.macros.accessible\nimport zio.macros.throwing\n\n@accessible\ntrait ServiceC {\n  @throwing\n  def impureMethod(input: Something): SomethingElse\n}\n\n// below will be autogenerated\nobject ServiceC {\n  def impureMethod(input: Something): ZIO[ServiceC, Throwable, SomethingElse] =\n    ZIO.serviceWithZIO[ServiceC](s => ZIO(s.impureMethod(input)))\n}\n")),(0,a.kt)("p",null,"Below is a fully working example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.macros.accessible\n\n@accessible\ntrait KeyValueStore {\n  def set(key: String, value: Int): Task[Int]\n\n  def get(key: String): Task[Int]\n}\n\n\ncase class InmemoryKeyValueStore(map: Ref[Map[String, Int]])\n  extends KeyValueStore {\n  override def set(key: String, value: Int): Task[Int] =\n    map.update(_.updated(key, value)).map(_ => value)\n\n  override def get(key: String): Task[Int] =\n    map.get.map(_.get(key)).someOrFailException\n}\n\nobject InmemoryKeyValueStore {\n  val layer: ULayer[KeyValueStore] =\n    ZLayer {\n      for {\n        map <- Ref.make(Map[String, Int]())\n      } yield InmemoryKeyValueStore(map)\n    }\n}\n\nobject MainApp extends ZIOAppDefault {\n  val myApp =\n    for {\n      _   <- KeyValueStore.set("key", 5)\n      key <- KeyValueStore.get("key")\n    } yield key\n    \n  def run = myApp.provide(InmemoryKeyValueStore.layer).debug\n}\n')),(0,a.kt)("h2",{id:"writing-polymorphic-services"},"Writing Polymorphic Services"),(0,a.kt)("h3",{id:"with-proper-type-parameters"},"With Proper Type Parameters"),(0,a.kt)("p",null,"If the service is polymorphic for some proper types, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@accessible")," macro like previous examples."),(0,a.kt)("p",null,"Assume we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," like below, as we will see using ",(0,a.kt)("inlineCode",{parentName:"p"},"@accessible")," will generate us the accessor methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.macros.accessible\n\n\n@accessible\ntrait KeyValueStore[K, V] {\n  def set(key: K, value: V): Task[V]\n\n  def get(key: K): Task[V]\n}\n\n\ncase class InmemoryKeyValueStore(map: Ref[Map[String, Int]])\n  extends KeyValueStore[String, Int] {\n  override def set(key: String, value: Int): Task[Int] =\n    map.update(_.updated(key, value)).map(_ => value)\n\n  override def get(key: String): Task[Int] =\n    map.get.map(_.get(key)).someOrFailException\n}\n\nobject InmemoryKeyValueStore {\n  val layer: ULayer[KeyValueStore[String, Int]] =\n    ZLayer {\n      for {\n        map <- Ref.make(Map[String, Int]())\n      } yield InmemoryKeyValueStore(map)\n    }\n}\n\nobject MainApp extends ZIOAppDefault {\n  val myApp =\n    for {\n      _ <- KeyValueStore.set("key", 5)\n      key <- KeyValueStore.get[String, Int]("key")\n    } yield key\n\n  def run = myApp.provide(InmemoryKeyValueStore.layer).debug\n}\n')),(0,a.kt)("h3",{id:"with-higher-kinded-type-parameters-f_"},"With Higher-Kinded Type Parameters (",(0,a.kt)("inlineCode",{parentName:"h3"},"F[_]"),")"),(0,a.kt)("p",null,"If a service has a higher-kinded type parameter like ",(0,a.kt)("inlineCode",{parentName:"p"},"F[_]")," we should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessibleM")," macro. Here is an example of such a service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.macros.accessibleM\n\n@accessibleM[Task]\ntrait KeyValueStore[K, V, F[_]] {\n  def set(key: K, value: V): F[V]\n\n  def get(key: K): F[V]\n}\n\ncase class InmemoryKeyValueStore(map: Ref[Map[String, Int]])\n  extends KeyValueStore[String, Int, Task] {\n  override def set(key: String, value: Int): Task[Int] =\n    map.update(_.updated(key, value)).map(_ => value)\n\n  override def get(key: String): Task[Int] =\n    map.get.map(_.get(key)).someOrFailException\n\n}\n\nobject InmemoryKeyValueStore {\n  val layer: ULayer[KeyValueStore[String, Int, Task]] =\n    ZLayer {\n      for {\n        map <- Ref.make(Map[String, Int]())\n      } yield InmemoryKeyValueStore(map)\n    }\n}\n\n\nobject MainApp extends ZIOAppDefault {\n  val myApp =\n    for {\n      key <- KeyValueStore.set[String, Int]("key", 5)\n      _   <- KeyValueStore.get[String, Int]("key")\n    } yield key\n\n  def run = myApp.provide(InmemoryKeyValueStore.layer).debug\n}\n\n')),(0,a.kt)("h3",{id:"with-higher-kinded-type-parameters-f_-_"},"With Higher-Kinded Type Parameters (",(0,a.kt)("inlineCode",{parentName:"h3"},"F[_, _]"),")"),(0,a.kt)("p",null,"If the service has a higher-kinded type parameter like ",(0,a.kt)("inlineCode",{parentName:"p"},"F[_, _]")," we should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessibleMM")," macro. Let's see an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.macros.accessibleMM\n\n@accessibleMM[IO]\ntrait KeyValueStore[K, V, E, F[_, _]] {\n  def set(key: K, value: V): F[E, V]\n\n  def get(key: K): F[E, V]\n}\n\ncase class InmemoryKeyValueStore(map: Ref[Map[String, Int]])\n  extends KeyValueStore[String, Int, String, IO] {\n  override def set(key: String, value: Int): IO[String, Int] =\n    map.update(_.updated(key, value)).map(_ => value)\n\n  override def get(key: String): IO[String, Int] =\n    map.get.map(_.get(key)).someOrFail(s"key not found: $key")\n}\n\nobject InmemoryKeyValueStore {\n  val layer: ULayer[KeyValueStore[String, Int, String, IO]] =\n    ZLayer {\n      for {\n        map <- Ref.make(Map[String, Int]())\n      } yield InmemoryKeyValueStore(map)\n    }\n}\n\nobject MainApp extends ZIOAppDefault {\n  val myApp =\n    for {\n      _   <- KeyValueStore.set[String, Int, String]("key", 5)\n      key <- KeyValueStore.get[String, Int, String]("key")\n    } yield key\n\n  def run = myApp.provide(InmemoryKeyValueStore.layer).debug\n\n}\n')))}m.isMDXComponent=!0}}]);