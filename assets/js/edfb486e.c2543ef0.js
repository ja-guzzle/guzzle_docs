(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2534],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,i(i({ref:e},p),{},{components:a})):n.createElement(f,i({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7350:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={},s={unversionedId:"How to guides/Datastores/Amazon S3",id:"How to guides/Datastores/Amazon S3",isDocsHomePage:!1,title:"Amazon S3",description:"Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Guzzle",source:"@site/docs/How to guides/Datastores/Amazon S3.md",sourceDirName:"How to guides/Datastores",slug:"/How to guides/Datastores/Amazon S3",permalink:"/docs/docs/How to guides/Datastores/Amazon S3",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Datastores/Amazon S3.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Yarn",permalink:"/docs/docs/How to guides/Computes/Yarn"},next:{title:"Azure Data Factory",permalink:"/docs/docs/How to guides/Datastores/Azure Data Factory"}},c=[{value:"Steps to create Datastore  for S3",id:"steps-to-create-datastore--for-s3",children:[]},{value:"Known Limitation",id:"known-limitation",children:[]}],p={toc:c};function u(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon Simple Storage Service (Amazon S3)")," is an object storage service that offers industry-leading scalability, data availability, security, and performance. Guzzle "),(0,o.kt)("p",null,"We can use this datastore for reading data from amazon (aws) and do validation and transformations on that data and write that data on csv, json, xml, excel, etc files."),(0,o.kt)("p",null,"This datastore is use for both source and target tabs."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Only Ingestion activity supports File based connectors. "),(0,o.kt)("li",{parentName:"ol"},"Guzzle only supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#ConstructingTheAuthenticationHeader"},"Access Key "),"based authentication for S3")))),(0,o.kt)("h2",{id:"steps-to-create-datastore--for-s3"},"Steps to create Datastore  for S3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:a(5745).Z})," from the ",(0,o.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select ",(0,o.kt)("strong",{parentName:"p"},"Amazon S3 "),"connector. Alternatively user can launch from ",(0,o.kt)("strong",{parentName:"p"},"Create New Datastore "),"link in Activity authoring UI or Copy Data tool")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"http://http"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the additional properties for the storage account as described below:"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access Key ID"),(0,o.kt)("td",{parentName:"tr",align:null},"AWS access key ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,o.kt)("td",{parentName:"tr",align:null},"AWS secret access key"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Region"),(0,o.kt)("td",{parentName:"tr",align:null},"Region of the S3 bucket"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,o.kt)("td",{parentName:"tr",align:null},"S3 Bucket name"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Path"),(0,o.kt)("td",{parentName:"tr",align:null},"This is the folder path within the S3 bucket. You can specify  / (root path) to point to entire container"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:a(7505).Z})),(0,o.kt)("h2",{id:"known-limitation"},"Known Limitation"))}u.isMDXComponent=!0},5745:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAA3NCSVQICAjb4U/gAAAA5UlEQVRIiWNMXXOHgfZgVrAyAwMD49tPX+lgmRAvFwMDA0vqnAN0sGxtoRcDAwMTHWyCg1HLRi0btWyYWcaCR85KTdJMWVxdSnD/tSerjt8Os1TVkRFmYGC48uQthOuoJXPz2ftTd18eu/WcGMvw+cxIUdRWQ0qMjzPcQpWBgcFKVVJbRkhbRshKVZKBgSHcQlWMj9NWQ8pIUZRInw2aYDx3/zULExMkGBkYGI7dfq7zHRqMDAwMK0/chgTjufuvibSMMahvK8UuJgxGq5hRy0YtG7VsSFlG37Z+xS6i6j0KAaQXAwBAp0CiDoMpLQAAAABJRU5ErkJggg=="},7505:function(t,e,a){"use strict";e.Z=a.p+"assets/images/amazon_s3_1-1baafde01f11b4c26e3a69d9b37b76ef.gif"}}]);