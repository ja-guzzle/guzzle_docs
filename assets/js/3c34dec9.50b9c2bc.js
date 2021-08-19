(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[5659],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"How to guides/Ingest data/Working with XML files",id:"How to guides/Ingest data/Working with XML files",isDocsHomePage:!1,title:"Working with XML files",description:"Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",source:"@site/docs/How to guides/Ingest data/Working with XML files.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Working with XML files",permalink:"/docs/How to guides/Ingest data/Working with XML files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Working with XML files.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Working with JSON Files",permalink:"/docs/How to guides/Ingest data/Working with JSON Files"},next:{title:"Working with Text and Log Files",permalink:"/docs/How to guides/Ingest data/Working with Text and Log Files"}},u=[{value:"XML File Properties in Guzzle",id:"xml-file-properties-in-guzzle",children:[]},{value:"The Interface for XML in Guzzle is :",id:"the-interface-for-xml-in-guzzle-is-",children:[]}],p={toc:u};function c(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Extensible Markup Language (",(0,o.kt)("strong",{parentName:"p"},"XML"),") is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable."),(0,o.kt)("p",null,"XML file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with XML files for source and target in Ingestion activity.  "),(0,o.kt)("h2",{id:"xml-file-properties-in-guzzle"},"XML File Properties in Guzzle"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Available in Source Section"),(0,o.kt)("th",{parentName:"tr",align:null},"Available in Target Section"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,o.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,o.kt)("td",{parentName:"tr",align:null},"UTF-8"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"XML Row Tag"),(0,o.kt)("td",{parentName:"tr",align:null},"The row tag of your xml files to treat as a row.",(0,o.kt)("br",null),"For example, in this xml ","<","books",">"," ","<","books",">","<","/books",">"," ...","<","/books",">",", the appropriate value would be book."),(0,o.kt)("td",{parentName:"tr",align:null},"Row"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"XML Root Tag"),(0,o.kt)("td",{parentName:"tr",align:null},"The Root tag of your xml files to treat as a root.",(0,o.kt)("br",null),"It encloses all the other elements and is therefore the sole parent element to all the other elements.For example, in the XML  ","<","books",">"," ","<","books",">"," ","<","books",">"," ...","<","/books",">",", the appropriate value would be books."),(0,o.kt)("td",{parentName:"tr",align:null},"Rows"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")))),(0,o.kt)("h2",{id:"the-interface-for-xml-in-guzzle-is-"},"The Interface for XML in Guzzle is :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:n(5508).Z})))}c.isMDXComponent=!0},5508:function(e,t,n){"use strict";t.Z=n.p+"assets/images/xml-cbedcb6cb67c612a37d02ef11803e7c5.png"}}]);