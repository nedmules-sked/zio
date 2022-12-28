"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[96512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<c;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const c={id:"couchbase-connector",title:"Couchbase Connector"},r=void 0,i={unversionedId:"zio-connect/couchbase-connector",id:"zio-connect/couchbase-connector",title:"Couchbase Connector",description:"Setup",source:"@site/docs/zio-connect/couchbase-connector.md",sourceDirName:"zio-connect",slug:"/zio-connect/couchbase-connector",permalink:"/zio-connect/couchbase-connector",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-connect/couchbase-connector.md",tags:[],version:"current",frontMatter:{id:"couchbase-connector",title:"Couchbase Connector"},sidebar:"ecosystem-sidebar",previous:{title:"Introduction",permalink:"/zio-connect/"},next:{title:"DynamoDB Connector",permalink:"/zio-connect/dynamodb-connector"}},l={},s=[{value:"Setup",id:"setup",level:2},{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Operators",id:"operators",level:2},{value:"<code>exists</code>",id:"exists",level:2},{value:"<code>get</code>",id:"get",level:2},{value:"<code>insert</code>",id:"insert",level:2},{value:"<code>remove</code>",id:"remove",level:2},{value:"<code>replace</code>",id:"replace",level:2},{value:"<code>upsert</code>",id:"upsert",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-connect-couchbase" % "0.4.4"\n')),(0,a.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,a.kt)("p",null,"All available CouchbaseConnector combinators and operations are available in the package object ",(0,a.kt)("inlineCode",{parentName:"p"},"zio.connect.couchbase"),", you only\nneed to import ",(0,a.kt)("inlineCode",{parentName:"p"},"zio.connect.couchbase._")," to get started."),(0,a.kt)("p",null,"The couchbase connector presumes you already have a couchbase cluster to connect to, and uses the official java client under the hood.\nYou can provide a cluster connection in the usual way and wrap it in a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLayer"),", typically something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import com.couchbase.client.java.Cluster\nimport zio._\n\n  val cluster = ZLayer.scoped(\n    ZIO.acquireRelease(\n      ZIO.attempt(\n        Cluster\n          .connect("127.0.0.1", "admin", "admin22")\n      )\n    )(c => ZIO.attempt(c.disconnect()).orDie)\n  )\n')),(0,a.kt)("p",null,"The connector provides a number of operations that can be used to interact with the cluster, most of the operations require\na ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryObject")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ContentQueryObject")," which are case classes. The couchbase primitives that are used: ",(0,a.kt)("inlineCode",{parentName:"p"},"BucketName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionName"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"ScopeName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentId")," are all defined as zio-prelude newtypes of ",(0,a.kt)("inlineCode",{parentName:"p"},"String")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.connect.couchbase.CouchbaseConnector._\n\nval bucket     = BucketName("gamesim-sample")\nval collection = CollectionName("_default")\nval scope      = ScopeName("_default")\nval newKey     = DocumentKey("zio-connect-doc")\n\nval queryObject = QueryObject(bucket, scope, collection, newKey)\n')),(0,a.kt)("p",null,"Now let's do something, and by do, we mean let's describe an action, like checking to see that a document exists by key/id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val checkExists: ZIO[CouchbaseConnector, CouchbaseException, Boolean] = ZStream(queryObject) >>> exists\n")),(0,a.kt)("p",null,"Some important points to note here, the ",(0,a.kt)("inlineCode",{parentName:"p"},"exists")," operation is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink")," that expects elements of type ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryObject")," as its streamed input.\nYou can access the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"CouchbaseException")," by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"reason")," property"),(0,a.kt)("p",null,"Here's what inserting a document looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val key                = DocumentKey(UUID.randomUUID().toString)\nval content            = Chunk[Byte](1, 2, 3)\nval contentQueryObject = ContentQueryObject(bucketName, scopeName, collectionName, key, content)\n\nval insertAction: ZIO[CouchbaseConnector, CouchbaseException, Unit] = ZStream(contentQueryObject) >>> insert\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"insert")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink")," that expects elements of type ",(0,a.kt)("inlineCode",{parentName:"p"},"ContentQueryObject"),", which is a query object with an additional\n",(0,a.kt)("inlineCode",{parentName:"p"},"content")," property, as its streamed input and returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Unit")," as its output."),(0,a.kt)("p",null,"To get a document by key/id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val getAction: ZIO[CouchbaseConnector, CouchbaseException, Chunk[Byte]] = get(queryObject).runCollect\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream")," that takes a query object as an argument and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Chunk[Byte]")," as its output. There are\nother ways to process the chunk of bytes which get returned, but of course this depends on your domain."),(0,a.kt)("p",null,"In order to run a program involving the couchbase connector, you need to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"CouchbaseConnector")," layer, and the cluster connection layer we created earlier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def run = getAction.provide(couchbaseConnectorLiveLayer, cluster)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"couchbaseConnectorLiveLayer")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLayer")," that provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveCouchbaseConnector")," service, and is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CouchbaseConnector")," companion object."),(0,a.kt)("h2",{id:"operators"},"Operators"),(0,a.kt)("p",null,"The following operators are available:"),(0,a.kt)("h2",{id:"exists"},(0,a.kt)("inlineCode",{parentName:"h2"},"exists")),(0,a.kt)("p",null,"Checks if a document exists by key/id, if the bucket, collection or scope do not exist you will get an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationFailureException"),"\ncomplaining about privileges."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val existsAction: ZIO[CouchbaseConnector, CouchbaseException, Boolean] = ZStream(queryObject) >>> exists\n")),(0,a.kt)("h2",{id:"get"},(0,a.kt)("inlineCode",{parentName:"h2"},"get")),(0,a.kt)("p",null,"Gets a document by key/id, if the bucket, collection or scope do not exist you will get an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationFailureException"),".\nIf the document does not exist you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentNotFoundException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val getAction: ZIO[CouchbaseConnector, CouchbaseException, Chunk[Byte]] = get(queryObject).runCollect\n")),(0,a.kt)("h2",{id:"insert"},(0,a.kt)("inlineCode",{parentName:"h2"},"insert")),(0,a.kt)("p",null,"Inserts a document by key/id, if the bucket, collection or scope do not exist you will get an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationFailureException"),".\nIf the document already exists you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentExistsException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val insertAction: ZIO[CouchbaseConnector, CouchbaseException, Unit] = ZStream(contentQueryObject) >>> insert\n")),(0,a.kt)("h2",{id:"remove"},(0,a.kt)("inlineCode",{parentName:"h2"},"remove")),(0,a.kt)("p",null,"Removes a document by key/id, if the bucket, collection or scope do not exist you will get an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationFailureException"),".\nIf the document does not exist you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentNotFoundException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val removeAction: ZIO[CouchbaseConnector, CouchbaseException, Unit] = ZStream(queryObject) >>> remove\n")),(0,a.kt)("h2",{id:"replace"},(0,a.kt)("inlineCode",{parentName:"h2"},"replace")),(0,a.kt)("p",null,"Replaces a document by key/id, if the bucket, collection or scope do not exist you will get an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationFailureException"),".\nIf the document does not exist you will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentNotFoundException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val replaceAction: ZIO[CouchbaseConnector, CouchbaseException, Unit] = ZStream(contentQueryObject) >>> replace\n")),(0,a.kt)("h2",{id:"upsert"},(0,a.kt)("inlineCode",{parentName:"h2"},"upsert")),(0,a.kt)("p",null,"Updates or inserts a document by key/id, if the bucket, collection or scope do not exist you will get an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationFailureException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val upsertAction: ZIO[CouchbaseConnector, CouchbaseException, Unit] = ZStream(contentQueryObject) >>> upsert\n")))}u.isMDXComponent=!0}}]);