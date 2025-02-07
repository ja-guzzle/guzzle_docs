(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[542],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5652:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={id:"server_file_system",title:"Server File System"},l={unversionedId:"how_to_guides/datastores/server_file_system",id:"how_to_guides/datastores/server_file_system",isDocsHomePage:!1,title:"Server File System",description:"Server file system represents the local operating file system on the Compute nodes. The operating file system folder itself can in turn be a mounted network file shares or cloud file systems; or attached disk which are visible on all Compute nodes.",source:"@site/docs/how_to_guides/datastores/Server file system.md",sourceDirName:"how_to_guides/datastores",slug:"/how_to_guides/datastores/server_file_system",permalink:"/guzzle_docs/docs/how_to_guides/datastores/server_file_system",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/datastores/Server file system.md",version:"current",frontMatter:{id:"server_file_system",title:"Server File System"},sidebar:"sideBar",previous:{title:"Hive",permalink:"/guzzle_docs/docs/how_to_guides/datastores/hive"},next:{title:"Rest Api",permalink:"/guzzle_docs/docs/how_to_guides/datastores/rest"}},c=[{value:"Steps to create Datastore  for Server file system",id:"steps-to-create-datastore--for-server-file-system",children:[]},{value:"Interface for Local File service",id:"interface-for-local-file-service",children:[]},{value:"Known Limitation",id:"known-limitation",children:[]}],m={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Server file system represents the local operating file system on the ",(0,a.kt)("strong",{parentName:"p"},"Compute "),"nodes. The operating file system folder itself can in turn be a mounted network file shares or cloud file systems; or attached disk which are visible on all ",(0,a.kt)("strong",{parentName:"p"},"Compute "),"nodes. "),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only Ingestion activity supports File based connectors. "))),(0,a.kt)("h2",{id:"steps-to-create-datastore--for-server-file-system"},"Steps to create Datastore  for Server file system"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the action button (",(0,a.kt)("img",{alt:"image alt text",src:r(933).Z}),") from the ",(0,a.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select ",(0,a.kt)("strong",{parentName:"p"},"Server file system (LFS)**")," ",(0,a.kt)("strong",{parentName:"p"},"connector. Alternatively user can launch from "),"Create New Datastore **link in Activity authoring UI or Copy Data tool")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://guzzle.justanalytics.com/docs/how_to_guides/connection_and_environment/connection_and_environment"},"Connection and Environments ")," for more details")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide the root path of the Server file system. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the Datastore config. Optionally you can Test the connection. "))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Ensure the same path is visible on all Driver and Worker nodes for Yarn or Databricks computes you are using. "))),(0,a.kt)("h2",{id:"interface-for-local-file-service"},"Interface for Local File service"),(0,a.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/server_file_system_1.gif",target:"_self"},(0,a.kt)("img",{src:"/img/docs/how-to-guides/datastores/server_file_system_1.gif"})),(0,a.kt)("h2",{id:"known-limitation"},"Known Limitation"),(0,a.kt)("p",null,"--"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This datastore is used to fetch data from local machine only. "),(0,a.kt)("li",{parentName:"ul"},"This datastore is only used in Ingestion activity only.")))}d.isMDXComponent=!0},933:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAqUlEQVR4XmNIXXPn/2DAMMDw9tPX/4MBwx0U1Lf1/2DAow4ihEcdRAiPOogQHnUQITzqIEKYJAf1bDn3/9D1p/9ffvz2f8XxW2AxEH3l8VswRhYDqQGpBelBNwcfJslB+64+hmsAAZDYozef4XwQG9lQEADpQTcHH4aBoemgQRdl9MCjDiKERx1ECI86iBAedRAhPOogQnjwOgi9jz1QGO4g9FGIgcIwAAAAjDQ1GVtclgAAAABJRU5ErkJggg=="}}]);