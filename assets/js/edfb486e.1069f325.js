(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2534],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:e},u),{},{components:n})):a.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7350:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"How to guides/Datastores/Amazon S3",id:"How to guides/Datastores/Amazon S3",isDocsHomePage:!1,title:"Amazon S3",description:"Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Guzzle",source:"@site/docs/How to guides/Datastores/Amazon S3.md",sourceDirName:"How to guides/Datastores",slug:"/How to guides/Datastores/Amazon S3",permalink:"/docs/docs/How to guides/Datastores/Amazon S3",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Datastores/Amazon S3.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Yarn",permalink:"/docs/docs/How to guides/Computes/Yarn"},next:{title:"Azure Data Factory",permalink:"/docs/docs/How to guides/Datastores/Azure Data Factory"}},c=[{value:"Steps to create Datastore  for S3",id:"steps-to-create-datastore--for-s3",children:[]},{value:"Known Limitation",id:"known-limitation",children:[]}],u={toc:c};function p(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon Simple Storage Service (Amazon S3)")," is an object storage service that offers industry-leading scalability, data availability, security, and performance. Guzzle "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Only Ingestion activity supports File based connectors. "),(0,o.kt)("li",{parentName:"ol"},"Guzzle only supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#ConstructingTheAuthenticationHeader"},"Access Key "),"based authentication for S3")))),(0,o.kt)("h2",{id:"steps-to-create-datastore--for-s3"},"Steps to create Datastore  for S3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:n(5745).Z})," from the ",(0,o.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select ",(0,o.kt)("strong",{parentName:"p"},"Amazon S3 "),"connector. Alternatively user can launch from ",(0,o.kt)("strong",{parentName:"p"},"Create New Datastore "),"link in Activity authoring UI or Copy Data tool")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"http://http"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the additional properties for the storage account as described below:"))),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Property "),(0,o.kt)("td",null,"Description"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Access Key ID"),(0,o.kt)("td",null,"AWS access key ID "),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Secret Key"),(0,o.kt)("td",null,"AWS secret access key"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Region"),(0,o.kt)("td",null,"Region of the S3 bucket"),(0,o.kt)("td",null,"No")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Bucket"),(0,o.kt)("td",null,"S3 Bucket name"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Path"),(0,o.kt)("td",null,"This is the folder path within the S3 bucket. You can specify  / (root path) to point to entire container"),(0,o.kt)("td",null,"Yes"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:n(7505).Z})),(0,o.kt)("h2",{id:"known-limitation"},"Known Limitation"))}p.isMDXComponent=!0},5745:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAA3NCSVQICAjb4U/gAAAA5UlEQVRIiWNMXXOHgfZgVrAyAwMD49tPX+lgmRAvFwMDA0vqnAN0sGxtoRcDAwMTHWyCg1HLRi0btWyYWcaCR85KTdJMWVxdSnD/tSerjt8Os1TVkRFmYGC48uQthOuoJXPz2ftTd18eu/WcGMvw+cxIUdRWQ0qMjzPcQpWBgcFKVVJbRkhbRshKVZKBgSHcQlWMj9NWQ8pIUZRInw2aYDx3/zULExMkGBkYGI7dfq7zHRqMDAwMK0/chgTjufuvibSMMahvK8UuJgxGq5hRy0YtG7VsSFlG37Z+xS6i6j0KAaQXAwBAp0CiDoMpLQAAAABJRU5ErkJggg=="},7505:function(t,e,n){"use strict";e.Z=n.p+"assets/images/amazon_s3_1-1baafde01f11b4c26e3a69d9b37b76ef.gif"}}]);