(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6583:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l=["components"],o={},s={unversionedId:"How to guides/Ingest data/Working with Delimited Files",id:"How to guides/Ingest data/Working with Delimited Files",isDocsHomePage:!1,title:"Working with Delimited Files",description:"A Delimited Text File is a method of representing a Table of Data in a text file using characters to indicate a Structure of Columns and Rows. Common types of Delimited Text Files include Comma Separated Values (CSV) and Tab Separated Values (TSV).",source:"@site/docs/How to guides/Ingest data/Working with Delimited Files.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Working with Delimited Files",permalink:"/docs/docs/How to guides/Ingest data/Working with Delimited Files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Working with Delimited Files.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Working with Databases- JDBC",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- JDBC"},next:{title:"Working with Excel",permalink:"/docs/docs/How to guides/Ingest data/Working with Excel"}},u=[{value:"Delimited Text File Properties in Guzzle",id:"delimited-text-file-properties-in-guzzle",children:[]},{value:"Column Mapping in Delimited Files",id:"column-mapping-in-delimited-files",children:[]},{value:"Before Column Mapping:",id:"before-column-mapping",children:[]},{value:"After Column Mapping:",id:"after-column-mapping",children:[]}],d={toc:u};function p(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Delimited Text File is a method of representing a Table of Data in a text file using characters to indicate a Structure of Columns and Rows. Common types of Delimited Text Files include Comma Separated Values (CSV) and Tab Separated Values (TSV)."),(0,r.kt)("p",null,"Delimited file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with Delimited files for source and target in Ingestion activity.  "),(0,r.kt)("h2",{id:"delimited-text-file-properties-in-guzzle"},"Delimited Text File Properties in Guzzle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,r.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,r.kt)("td",{parentName:"tr",align:null},"UTF-8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Column Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"The Characters used to separate columns in a file."),(0,r.kt)("td",{parentName:"tr",align:null},",")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Quote Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"The single character to quote column values if it contains column delimiter or new line (or row delimiter)"),(0,r.kt)("td",{parentName:"tr",align:null},'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Escape Character"),(0,r.kt)("td",{parentName:"tr",align:null},'The single character to escape quotes inside a quoted value. Essentially if the \u201cQuote Delimiter" is also part of column value the same can be escaped using this'),(0,r.kt)("td",{parentName:"tr",align:null},"\\")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim Whitespace"),(0,r.kt)("td",{parentName:"tr",align:null},"You may choose to Trim whitespaces on any one end or both ends of the Characters. This will be applied to all the columns irrespective of their values or data type.",(0,r.kt)("br",null),"It includes four options like",(0,r.kt)("br",null)," 1. none -> no trimming whitespace.",(0,r.kt)("br",null),"2. both -> remove whitespace on both side.",(0,r.kt)("br",null),"3. leading -> remove whitespace on front of the data.",(0,r.kt)("br",null),"4. trailing -> remove whitespace at the end of data."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether or not to include headings for columns."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Infer Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether or not to apply a schema."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"The Interface for the Delimited File Format can be seen in the figure below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:n(1060).Z})),(0,r.kt)("h2",{id:"column-mapping-in-delimited-files"},"Column Mapping in Delimited Files"),(0,r.kt)("p",null,"We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. The functionality is meant to achieve either or both of the following item:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reduce the number of columns to be read")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Map the columns to a new field name"))),(0,r.kt)("p",null,'All we need to do is add the Column Name and the Index we would like to Map the Column to.\n< Example :  In example "first_name" is indexed with 4th column which is "gender" and "age" is indexed with 1st column which is "id". >'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:n(7001).Z})),(0,r.kt)("h2",{id:"before-column-mapping"},"Before Column Mapping:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:n(438).Z})),(0,r.kt)("h2",{id:"after-column-mapping"},"After Column Mapping:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:n(2883).Z})),(0,r.kt)("p",null,"In target :\nProperties on target is same as mentioned for source but two more properties are added which is "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate Single file : this option is selected when you want to generate single file in target path."),(0,r.kt)("li",{parentName:"ol"},"Preserve Hierarchy  : this option is selected when you have to maintain same hierarchy as source file has.")))}p.isMDXComponent=!0},1060:function(e,t,n){"use strict";t.Z=n.p+"assets/images/delimited1-07c0be3ba6ae177f4415916e3ffe8495.png"},7001:function(e,t,n){"use strict";t.Z=n.p+"assets/images/delimited2-d24d87657de9ad5e103fa86113cd9083.png"},438:function(e,t,n){"use strict";t.Z=n.p+"assets/images/delimited3-8c5e9d9dae5be53bb8404a781b377c5a.png"},2883:function(e,t,n){"use strict";t.Z=n.p+"assets/images/delimited4-f53fd4041ac179d4fd694ade2bd39325.png"}}]);