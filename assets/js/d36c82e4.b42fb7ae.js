(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4104],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||o;return r?n.createElement(f,l(l({ref:e},m),{},{components:r})):n.createElement(f,l({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1928:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={},u={unversionedId:"How to guides/Computes/Yarn",id:"How to guides/Computes/Yarn",isDocsHomePage:!1,title:"Yarn",description:"This article provides information about Yarn support in Guzzle.",source:"@site/docs/How to guides/Computes/Yarn.md",sourceDirName:"How to guides/Computes",slug:"/How to guides/Computes/Yarn",permalink:"/docs/docs/How to guides/Computes/Yarn",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Computes/Yarn.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Local Spark",permalink:"/docs/docs/How to guides/Computes/Local Spark"},next:{title:"Amazon S3",permalink:"/docs/docs/How to guides/Datastores/Amazon S3"}},p=[],m={toc:p};function c(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article provides information about Yarn support in Guzzle."),(0,o.kt)("p",null,"Yarn does not support various features like : "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ADLS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DBFS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DELTA")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HIVE"))),(0,o.kt)("p",null,"Guzzle provides below parameter and configs for Yarn"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of executors"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the number of Yarn executor on you want to run job"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Driver memory"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the allocated driver memory for running jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"512m"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Executor memory"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the allocated executor memory for running jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"512m"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Driver classpath"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the driver classpath of jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Executor classpath"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the executor classpath"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Jars"),(0,o.kt)("td",{parentName:"tr",align:null},"Put the jar path with comma seperated"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Additional arguments"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the Yarn arguments ",(0,o.kt)("br",null),"Ex: --conf spark.development=true"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))))}c.isMDXComponent=!0}}]);