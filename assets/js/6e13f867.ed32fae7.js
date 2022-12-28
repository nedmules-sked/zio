"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[45087],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),N=r,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},86626:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"concurrentmap",title:"ConcurrentMap"},i=void 0,p={unversionedId:"datatypes/sync/concurrentmap",id:"version-1.x/datatypes/sync/concurrentmap",title:"ConcurrentMap",description:"A ConcurrentMap is a wrapper over java.util.concurrent.ConcurrentHashMap.",source:"@site/versioned_docs/version-1.x/datatypes/sync/concurrentmap.md",sourceDirName:"datatypes/sync",slug:"/datatypes/sync/concurrentmap",permalink:"/version-1.x/datatypes/sync/concurrentmap",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/sync/concurrentmap.md",tags:[],version:"1.x",frontMatter:{id:"concurrentmap",title:"ConcurrentMap"}},o={},d=[{value:"Operations",id:"operations",level:2},{value:"Creation",id:"creation",level:3},{value:"Use",id:"use",level:3},{value:"Example Usage",id:"example-usage",level:2}],m={toc:d};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap")," is a wrapper over ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.ConcurrentHashMap"),"."),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("h3",{id:"creation"},"Creation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty[K, V]: UIO[ConcurrentMap[K, V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes an empty ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentMap"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fromIterable[K, V](pairs: Iterable[(K, V)]): UIO[ConcurrentMap[K, V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentMap")," initialized with the provided collection of key-value pairs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"make[K, V](pairs: (K, V)*): UIO[ConcurrentMap[K, V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentMap")," initialized with the provided key-value pairs")))),(0,r.kt)("h3",{id:"use"},"Use"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collectFirst[B](pf: PartialFunction[(K, V), B]): UIO[Option[B]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the first element of a map for which the partial function is defined and applies the function to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compute(key: K, remap: (K, V) => V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Attempts to compute a mapping for the given key and its current mapped value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"def computeIfAbsent(key: K, map: K => V): UIO[V]")),(0,r.kt)("td",{parentName:"tr",align:null},"Computes a value of a non-existing key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"computeIfPresent(key: K, remap: (K, V) => V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Attempts to compute a new mapping of an existing key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exists(p: (K, V) => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether a given predicate holds true for at least one element in a map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fold[S](zero: S)(f: (S, (K, V)) => S): UIO[S]")),(0,r.kt)("td",{parentName:"tr",align:null},"Folds the elements of a map using the given binary operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forall(p: (K, V) => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether a predicate is satisfied by all elements of a map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get(key: K): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves the value associated with the given key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"put(key: K, value: V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a new key-value pair and optionally returns previously bound value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"putAll(keyValues: (K, V)*): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds all new key-value pairs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"putIfAbsent(key: K, value: V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a new key-value pair, unless the key is already bound to some other value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remove(key: K): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the entry for the given key, optionally returning value associated with it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remove(key: K, value: V): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the entry for the given key if it is mapped to a given value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"removeIf(p: (K, V) => Boolean): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements which do not satisfy the given predicate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retainIf(p: (K, V) => Boolean): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements which do not satisfy the given predicate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace(key: K, value: V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the entry for the given key only if it is mapped to some value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace(key: K, oldValue: V, newValue: V): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the entry for the given key only if it was previously mapped to a given value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toChunk: UIO[Chunk[(K, V)]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Collects all entries into a chunk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toList: UIO[List[(K, V)]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Collects all entries into a list.")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,"Given:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.concurrent.ConcurrentMap\nimport zio.{Chunk, UIO}\n\nfor {\n  emptyMap <- ConcurrentMap.empty[Int, String]\n  data     <- UIO(Chunk(1 -> "A", 2 -> "B", 3 -> "C"))\n  mapA     <- ConcurrentMap.fromIterable(data)\n  map100   <- ConcurrentMap.make(1 -> 100)\n  mapB     <- ConcurrentMap.make(("A", 1), ("B", 2), ("C", 3))\n} yield ()\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.collectFirst { case (3, _) => "Three" }')),(0,r.kt)("td",{parentName:"tr",align:null},'"Three"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.collectFirst { case (4, _) => "Four" }')),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map100.compute(1, _+_).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'emptyMap.computeIfAbsent("abc", _.length).get("abc")')),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map100.computeIfPresent(1, _+_).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.exists((k, _) => k % 2 == 0)")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.exists((k, _) => k == 4)")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapB.fold(0) { case (acc, (_, value)) => acc + value }")),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapB.forall((_, v) => v < 4)")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emptyMap.get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'emptyMap.put(1, "b").get(1)')),(0,r.kt)("td",{parentName:"tr",align:null},'"b"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.putIfAbsent(2, "b").get(2)')),(0,r.kt)("td",{parentName:"tr",align:null},'"B"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'emptyMap.putAll((1, "A"), (2, "B"), (3, "C")).get(1)')),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.remove(1).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.remove(1,"b").get(1)')),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.removeIf((k, _) => k != 1).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.removeIf((k, _) => k != 1).get(2)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.retainIf((k, _) => k == 1).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.retainIf((k, _) => k == 1).get(2)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")))))}k.isMDXComponent=!0}}]);