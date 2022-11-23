"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,g=f["".concat(p,".").concat(d)]||f[d]||u[d]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={id:"configurable-zio-application",title:"Tutorial: How to Make a ZIO Application Configurable?",sidebar_label:"Making a ZIO application configurable"},a=void 0,l={unversionedId:"guides/tutorials/configurable-zio-application",id:"guides/tutorials/configurable-zio-application",title:"Tutorial: How to Make a ZIO Application Configurable?",description:"Introduction",source:"@site/docs/guides/tutorials/make-a-zio-application-configurable.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/configurable-zio-application",permalink:"/guides/tutorials/configurable-zio-application",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/make-a-zio-application-configurable.md",tags:[],version:"current",frontMatter:{id:"configurable-zio-application",title:"Tutorial: How to Make a ZIO Application Configurable?",sidebar_label:"Making a ZIO application configurable"},sidebar:"guides-sidebar",previous:{title:"GraphQL Web Service",permalink:"/guides/quickstarts/graphql-webservice"},next:{title:"Encoding and Decoding JSON Data",permalink:"/guides/tutorials/encode-and-decode-json-data"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Step 1: Define the Configuration Data Types (ADTs)",id:"step-1-define-the-configuration-data-types-adts",level:2},{value:"Step 2: Accessing The Configuration from the Environment",id:"step-2-accessing-the-configuration-from-the-environment",level:2},{value:"Step 3: Defining a Layer for Configuration Data Type",id:"step-3-defining-a-layer-for-configuration-data-type",level:2},{value:"Adding ZIO Config Dependencies",id:"adding-zio-config-dependencies",level:3},{value:"Defining the HOCON Configuration File",id:"defining-the-hocon-configuration-file",level:3},{value:"Defining the Layer",id:"defining-the-layer",level:3},{value:"Step 4: Providing the Layer",id:"step-4-providing-the-layer",level:2},{value:"Step 5: Running the Application",id:"step-5-running-the-application",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"One of the most common requirements for writing an application is to be able to configure it, especially when we are writing cloud-native applications."),(0,i.kt)("p",null,"In this tutorial, we will start with a simple ZIO application and then try to make it configurable using the ZIO Config library."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("a",{parentName:"p",href:"/guides/quickstarts/restful-webservice"},"ZIO Quickstart: Restful Web Service")," as our ground project. So make sure you have downloaded and tested it before you start this tutorial."),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"We have a web service that does not allow us to configure the host and port of the service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:khajavi/zio-quickstart-restful-webservice.git\ncd zio-quickstart-restful-webservice\nsbt run\n")),(0,i.kt)("p",null,"The output is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Server started on http://localhost:8080\n")),(0,i.kt)("p",null,"We want to be able to configure the host and port of the service so that before running the application, we specify the host and port of the service."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"When developing a ZIO application, we can use the ZIO environment for accessing two types of contextual information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accessing Services"),": we can access service interfaces from the environment, and they are supposed to be implemented\nand provided to the whole application at the end of the world (Service Pattern)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accessing Configuration"),": we can access the configuration that is part of the application.")),(0,i.kt)("p",null,"In this tutorial, we will focus on the second case to configure the host and port of the service. Let's see what steps we need to take to make this happen."),(0,i.kt)("h2",{id:"step-1-define-the-configuration-data-types-adts"},"Step 1: Define the Configuration Data Types (ADTs)"),(0,i.kt)("p",null,"In this example our configuration data type is a case class that contains two fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class HttpServerConfig(host: String, port: Int)\n")),(0,i.kt)("h2",{id:"step-2-accessing-the-configuration-from-the-environment"},"Step 2: Accessing The Configuration from the Environment"),(0,i.kt)("p",null,"Now that we have defined our configuration data type, we can start developing our application and access the\nconfiguration from the environment."),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.service[HttpServerConfig]")," method to access the configuration from the environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nZIO.service[HttpServerConfig].flatMap { config =>\n  ??? // Do something with the configuration\n}\n")),(0,i.kt)("p",null,"The above code is a ZIO workflow that will access the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerConfig")," configuration from the environment and then by using flatMap, we can do something with it, for example, we can print it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nval workflow: ZIO[HttpServerConfig, IOException, Unit] =\n  ZIO.service[HttpServerConfig].flatMap { config =>\n    Console.printLine(\n      "Application started with following configuration:\\n" +\n        s"\\thost: ${config.host}\\n" +\n        s"\\tport: ${config.port}"\n    )\n  }\n')),(0,i.kt)("p",null,"Let's run the above workflow and see the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\ncase class HttpServerConfig(host: String, port: Int)\n\nobject MainApp extends ZIOAppDefault {\n\n  val workflow: ZIO[HttpServerConfig, IOException, Unit] =\n    ZIO.service[HttpServerConfig].flatMap { config =>\n      Console.printLine(\n        "Application started with following configuration:\\n" +\n          s"\\thost: ${config.host}\\n" +\n          s"\\tport: ${config.port}"\n      )\n    }\n\n  def run = workflow\n}\n// error:\n// \n// \x1b[31m\u2500\u2500\u2500\u2500 ZIO APP ERROR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m\n// \n//  \x1b[1mYour effect requires a service that is not in the environment.\n//  \x1b[0mPlease provide a layer for the following type:\n// \n// \n//    \x1b[2m1.\x1b[0m \x1b[1m\x1b[35mApp0.this.HttpServerConfig\x1b[0m\x1b[0m\n// \n// \n//  Call your effect\'s \x1b[1m\x1b[32mprovide\x1b[0m\x1b[0m method with the layers you need.\n//  You can read more about layers and providing services here:\n//  \n//    https://zio.dev/reference/contextual/\n// \n// \x1b[31m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m\n// \n// \n//   def run = workflow.provide(ZLayer.succeed(HttpServerConfig("localhost", 8080)))\n//             ^^^^^^^^\n')),(0,i.kt)("p",null,"When try to compile the above code, you will see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2500\u2500\u2500\u2500 ZIO APP ERROR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n Your effect requires a service that is not in the environment.\n Please provide a layer for the following type:\n\n   1. HttpServerConfig\n\n Call your effect's provide method with the layers you need.\n You can read more about layers and providing services here:\n \n   https://zio.dev/next/references/contextual/\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  def run = workflow\n")),(0,i.kt)("p",null,"So what happened here? Well, the above error is because we are trying to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerConfig")," configuration from the environment, but we have not provided a layer for it."),(0,i.kt)("p",null,"There are two steps that we need to take to make this happen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defining a layer for ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpServerConfig")," configuration data type."),(0,i.kt)("li",{parentName:"ul"},"Providing the layer to our ZIO workflow.")),(0,i.kt)("p",null,"To provide the configuration layer, we need to define a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZLayer")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerConfig")," and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," method."),(0,i.kt)("p",null,"Before diving into the next steps, let's define a simple layer and provide it to our workflow, and see what happens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\ncase class HttpServerConfig(host: String, port: Int)\n\nobject MainApp extends ZIOAppDefault {\n\n  val workflow: ZIO[HttpServerConfig, IOException, Unit] =\n    ZIO.service[HttpServerConfig].flatMap { config =>\n      Console.printLine(\n        "Application started with following configuration:\\n" +\n          s"\\thost: ${config.host}\\n" +\n          s"\\tport: ${config.port}"\n      )\n    }\n\n  def run = workflow.provide(ZLayer.succeed(HttpServerConfig("localhost", 8080)))\n}\n')),(0,i.kt)("p",null,"Know we can run the above workflow and see this output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Application started with following configuration:\n    host: localhost\n    port: 8080\n")),(0,i.kt)("p",null,"Great! Now we have ZIO workflow that can access the configuration layer, and finally we can provide a configuration layer to our application. It works! Now, let's apply the same approach to our RESTful Web Service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zhttp.http._\n\nobject GreetingApp {\n  def apply() = Http.empty\n}\n\nobject DownloadApp {\n  def apply() = Http.empty\n}\n\nobject CounterApp {\n  def apply() = Http.empty\n}\n\nobject UserApp {\n  def apply() = Http.empty\n}\n\nobject InmemoryUserRepo {\n  val layer = ZLayer.empty\n}\n\ncase class HttpServerConfig(host: String, port: Int)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zhttp.service.Server\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    ZIO.service[HttpServerConfig].flatMap { config =>\n      Server.start(\n        port = config.port,\n        http = GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()\n      )\n    }.provide(\n      // A layer responsible for storing the state of the `counterApp`\n      ZLayer.fromZIO(Ref.make(0)),\n\n      // To use the persistence layer, provide the `PersistentUserRepo.layer` layer instead\n      InmemoryUserRepo.layer,\n     \n      // A layer containing the configuration of the http server\n      ZLayer.succeed(HttpServerConfig("localhost", 8080))\n    )\n}\n')),(0,i.kt)("p",null,"Until know, we made our RESTful web service configurable to be able to use its config from the ZIO environment with a simple configuration layer."),(0,i.kt)("p",null,"Now let's move on to the next step: defining a real layer for our configuration data type."),(0,i.kt)("h2",{id:"step-3-defining-a-layer-for-configuration-data-type"},"Step 3: Defining a Layer for Configuration Data Type"),(0,i.kt)("p",null,"This step involves defining our layer by using the ZIO Config library. This library provides various ways read configuration data from different sources, e.g. from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java properties files"),(0,i.kt)("li",{parentName:"ul"},"System environment variables"),(0,i.kt)("li",{parentName:"ul"},"HOCON files"),(0,i.kt)("li",{parentName:"ul"},"JSON files"),(0,i.kt)("li",{parentName:"ul"},"Command-line arguments")),(0,i.kt)("p",null,"In this tutorial, we will use the HOCON files. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"HOCON")," is config format which is superset of JSON developed by Lightbend."),(0,i.kt)("h3",{id:"adding-zio-config-dependencies"},"Adding ZIO Config Dependencies"),(0,i.kt)("p",null,"We should add the following dependencies to our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sb")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config"          % "3.0.1"\nlibraryDependencies += "dev.zio" %% "zio-config-typesafe" % "3.0.1"\nlibraryDependencies += "dev.zio" %% "zio-config-magnolia" % "3.0.1"\n')),(0,i.kt)("h3",{id:"defining-the-hocon-configuration-file"},"Defining the HOCON Configuration File"),(0,i.kt)("p",null,"We can define our configuration inside ",(0,i.kt)("inlineCode",{parentName:"p"},"application.conf")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'# application.conf\n\nHttpServerConfig {\n  # The port to listen on.\n  port = 8080\n  port = ${?PORT}\n\n  # The hostname to listen on.\n  host = "localhost"\n  host = ${?HOST}\n}\n')),(0,i.kt)("p",null,"HOCON supports substitutions, so in the above configuration, we can use the environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"?PORT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"?HOST")," to substitute the values. We also provide a default value for the port and host."),(0,i.kt)("h3",{id:"defining-the-layer"},"Defining the Layer"),(0,i.kt)("p",null,"Now let's define configuration layer inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerConfig"),"'s companion object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.config._\nimport zio.config.magnolia.descriptor\nimport zio.config.typesafe.TypesafeConfigSource\n\ncase class HttpServerConfig(host: String, port: Int)\n\nobject HttpServerConfig {\n  val layer: ZLayer[Any, ReadError[String], HttpServerConfig] =\n    ZLayer {\n      read {\n        descriptor[HttpServerConfig].from(\n          TypesafeConfigSource.fromResourcePath\n            .at(PropertyTreePath.$("HttpServerConfig"))\n        )\n      }\n    }\n}\n')),(0,i.kt)("p",null,"The ZIO Config has automatic derivation mechanism to parse the HOCON configuration file to our configuration data type ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerConfig"),"."),(0,i.kt)("h2",{id:"step-4-providing-the-layer"},"Step 4: Providing the Layer"),(0,i.kt)("p",null,"We are ready to provide the configuration layer to our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zhttp.service.Server\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    ZIO.service[HttpServerConfig].flatMap { config =>\n      Server.start(\n        port = config.port,\n        http = GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()\n      )\n    }.provide(\n      // A layer responsible for storing the state of the `counterApp`\n      ZLayer.fromZIO(Ref.make(0)),\n\n      // To use the persistence layer, provide the `PersistentUserRepo.layer` layer instead\n      InmemoryUserRepo.layer,\n     \n      // A layer containing the configuration of the http server\n      HttpServerConfig.layer\n    )\n}\n")),(0,i.kt)("h2",{id:"step-5-running-the-application"},"Step 5: Running the Application"),(0,i.kt)("p",null,"Now, if we run the application, it will start the server using the configuration defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.conf")," file with its default values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sbt run\nServer started on port: 8080\n")),(0,i.kt)("p",null,"We set the ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT")," environment variables to override the default values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"$ HOST=localhost PORT=8081 sbt run\nServer started on port: 8081\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This tutorial covered how to use ZIO Config to read configuration data from HOCON files and configure our application. We haven't covered all the features of the ZIO Config library. To learn more about this library please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-config/"},"ZIO Config documentation"),"."),(0,i.kt)("p",null,"The complete working example of this tutorial is available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"configurable-app")," branch of our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstart-restful-webservice/tree/configurable-app"},"ZIO Quickstart: Building RESTful Web Service")," quickstart on GitHub."))}u.isMDXComponent=!0}}]);