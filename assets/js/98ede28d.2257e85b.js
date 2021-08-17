(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9655],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7818:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={},s={unversionedId:"How to guides/Ingest data/Working with Databases- Azure SQL",id:"How to guides/Ingest data/Working with Databases- Azure SQL",isDocsHomePage:!1,title:"Working with Databases- Azure SQL",description:"Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with.",source:"@site/docs/How to guides/Ingest data/Working with Databases- Azure SQL.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Working with Databases- Azure SQL",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- Azure SQL",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Working with Databases- Azure SQL.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Working with Big Data",permalink:"/docs/docs/How to guides/Ingest data/Working with Big Data"},next:{title:"Working with Databases- Azure Synapse Analytics",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- Azure Synapse Analytics"}},u=[{value:"Azure SQL as a Source",id:"azure-sql-as-a-source",children:[]},{value:"Azure SQL as a Target or Reject",id:"azure-sql-as-a-target-or-reject",children:[]}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with."),(0,l.kt)("h2",{id:"azure-sql-as-a-source"},"Azure SQL as a Source"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table + Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.",(0,l.kt)("br",null),"Example: ",(0,l.kt)("br",null),"customerdb.","[dbo]",".","[customer]",(0,l.kt)("br",null),"[customer]","  (default schema name dbo will be assumed)",(0,l.kt)("br",null),"[dbo]",".","[customer]"," (database name shall be as per Datastore config)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the SQL query which will be run as-is on the source."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"azure-sql-as-a-target-or-reject"},"Azure SQL as a Target or Reject"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table"),(0,l.kt)("td",{parentName:"tr",align:null},"This is used to specify the Target Table we would like to create based on our Source."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operation"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides two options that determines whether the content of source or reject data is expected to be -",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"append:")," To append the existing data in the given Azure SQL table.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"overwrite:"),"This will do an overwrite of data for a subset of partitions that are present in the source. The entire Data in the Azure SQL server will be overwritten."),(0,l.kt)("td",{parentName:"tr",align:null},"append"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reliability Level"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed Values include BEST_EFFORT and NO_DUPLICATES.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"NO_DUPLICATES")," implements a reliable insert in executor restart scenarios. It also ensures higher reliability and availability of Data.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"BEST_EFFORT")," is a De-duplication mechanism. It seeks to minimize the number of duplicates in our Data. This means if there is the same piece of Data more than 1 time in a row BEST_EFFORT de-duplicates these instances and will only retain only one of these occurrences.  However, it does guarantee an absence of duplicates."),(0,l.kt)("td",{parentName:"tr",align:null},"BEST_EFFORT"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Isolation Level"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the transaction locking behavior for the SQL source. The allowed values are: ReadCommitted, ReadUncommitted, RepeatableRead and Serializable. If not specified, the database's default isolation level is used.",(0,l.kt)("br",null),"Refer to this doc for more details."),(0,l.kt)("td",{parentName:"tr",align:null},"READ_COMMITTED"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Batch Size"),(0,l.kt)("td",{parentName:"tr",align:null},"We can use this to specify how many rows are being written in each batch. Larger batch sizes may improve memory optimization.",(0,l.kt)("br",null),"Allowed values are Integers."),(0,l.kt)("td",{parentName:"tr",align:null},"2500"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bulk Copy Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"This property specifies the wait time for the insert operation for each batch to complete before time runs out."),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))))}c.isMDXComponent=!0}}]);