"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[77274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),l=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return n?s.createElement(k,r(r({ref:t},d),{},{components:n})):s.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var s=n(87462),a=(n(67294),n(3905));const o={id:"response",title:"Response"},r=void 0,p={unversionedId:"zio-http/dsl/response",id:"zio-http/dsl/response",title:"Response",description:"ZIO HTTP Response is designed to encode HTTP Response.",source:"@site/docs/zio-http/dsl/response.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/response",permalink:"/zio-http/dsl/response",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/response.md",tags:[],version:"current",frontMatter:{id:"response",title:"Response"},sidebar:"ecosystem-sidebar",previous:{title:"Request",permalink:"/zio-http/dsl/request"},next:{title:"Body",permalink:"/zio-http/dsl/body"}},i={},l=[{value:"Creating a Response",id:"creating-a-response",level:2},{value:"Empty Response",id:"empty-response",level:3},{value:"Specialized Response Constructors",id:"specialized-response-constructors",level:3},{value:"Specialized Response Operators",id:"specialized-response-operators",level:3},{value:"Response from Http Errors",id:"response-from-http-errors",level:3},{value:"Adding Cookie to Response",id:"adding-cookie-to-response",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ZIO HTTP")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," is designed to encode HTTP Response.\nIt supports all HTTP status codes and headers along with custom methods and headers (as defined in ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2616"},"RFC2616")," )"),(0,a.kt)("h2",{id:"creating-a-response"},"Creating a Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Response")," can be created with ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),".  "),(0,a.kt)("p",null,"The below snippet creates a response with default params, ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Status.OK"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Headers.empty")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Body.Empty"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio._\n\nResponse()\n// res0: Response = Response(\n//   status = Ok,\n//   headers = Iterable(),\n//   body = Body.empty\n// )\n")),(0,a.kt)("h3",{id:"empty-response"},"Empty Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ok")," creates an empty response with status code 200"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Response.ok\n// res1: Response = Response(\n//   status = Ok,\n//   headers = Iterable(),\n//   body = Body.empty\n// )\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"status")," creates an empty response with provided status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Response.status(Status.Continue)\n// res2: Response = Response(\n//   status = Continue,\n//   headers = Iterable(),\n//   body = Body.empty\n// )\n")),(0,a.kt)("h3",{id:"specialized-response-constructors"},"Specialized Response Constructors"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"text")," creates a response with data as text, content-type header set to text/plain and status code 200 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'Response.text("hey")\n// res3: Response = Response(\n//   status = Ok,\n//   headers = Iterable(Custom(customName = "content-type", value = "text/plain")),\n//   body = AsciiStringBody(asciiString = hey, mediaType = None, boundary = None)\n// )\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"json")," creates a response with data as json, content-type header set to application/json and status code 200 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'Response.json("""{"greetings": "Hello World!"}""")\n// res4: Response = Response(\n//   status = Ok,\n//   headers = Iterable(\n//     Custom(customName = "content-type", value = "application/json")\n//   ),\n//   body = AsciiStringBody(\n//     asciiString = {"greetings": "Hello World!"},\n//     mediaType = None,\n//     boundary = None\n//   )\n// )\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"html")," creates a response with data as html, content-type header set to text/html and status code 200"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http.template._\n\nResponse.html(Html.fromString("html text"))\n// res5: Response = Response(\n//   status = Ok,\n//   headers = Iterable(Custom(customName = "content-type", value = "text/html")),\n//   body = AsciiStringBody(\n//     asciiString = <!DOCTYPE html>html text,\n//     mediaType = None,\n//     boundary = None\n//   )\n// )\n')),(0,a.kt)("h3",{id:"specialized-response-operators"},"Specialized Response Operators"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"status")," to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scal",metastring:"mdoca",mdoca:!0},'Response.text("Hello World!").status(Status.NOT_FOUND)\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateHeaders")," to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'Response.ok.updateHeaders(_ => Headers("key", "value"))\n// res6: Response = Response(\n//   status = Ok,\n//   headers = Iterable(Custom(customName = "key", value = "value")),\n//   body = Body.empty\n// )\n')),(0,a.kt)("h3",{id:"response-from-http-errors"},"Response from Http Errors"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"error")," creates a response with a provided status code and message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'Response.error(Status.BadRequest, "It\'s not good!")\n// res7: Response = Response(\n//   status = BadRequest,\n//   headers = Iterable(\n//     Warning(\n//       code = 400,\n//       agent = "ZIO HTTP",\n//       text = "It&#x27;s not good!",\n//       date = None\n//     )\n//   ),\n//   body = Body.empty\n// )\n')),(0,a.kt)("h2",{id:"adding-cookie-to-response"},"Adding Cookie to Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addCookie")," adds cookies in the headers of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val cookie = Cookie.Response("key", "value")\n// cookie: Cookie.Response = Response(\n//   name = "key",\n//   content = "value",\n//   domain = None,\n//   path = None,\n//   isSecure = false,\n//   isHttpOnly = false,\n//   maxAge = None,\n//   sameSite = None\n// )\nResponse.ok.addCookie(cookie)\n// res8: Response = Response(\n//   status = Ok,\n//   headers = Iterable(\n//     SetCookie(\n//       value = Response(\n//         name = "key",\n//         content = "value",\n//         domain = None,\n//         path = None,\n//         isSecure = false,\n//         isHttpOnly = false,\n//         maxAge = None,\n//         sameSite = None\n//       )\n//     )\n//   ),\n//   body = Body.empty\n// )\n')))}u.isMDXComponent=!0}}]);