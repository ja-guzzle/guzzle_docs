(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6696],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6948:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l=["components"],s={},i={unversionedId:"How to guides/Ingest data/Working with Databases- Azure Synapse Analytics",id:"How to guides/Ingest data/Working with Databases- Azure Synapse Analytics",isDocsHomePage:!1,title:"Working with Databases- Azure Synapse Analytics",description:"Only supported on Databricks compute",source:"@site/docs/How to guides/Ingest data/Working with Databases- Azure Synapse Analytics.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Working with Databases- Azure Synapse Analytics",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- Azure Synapse Analytics",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Working with Databases- Azure Synapse Analytics.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Working with Databases- Azure SQL",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- Azure SQL"},next:{title:"Working with Databases- HIVE",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- HIVE"}},u=[{value:"Azure Synapse Analytics as a Source",id:"azure-synapse-analytics-as-a-source",children:[]},{value:"Azure Synapse Analytics as a Target or Reject",id:"azure-synapse-analytics-as-a-target-or-reject",children:[]}],p={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only supported on Databricks compute"))),(0,o.kt)("p",null,"Azure Synapse Analytics is a cloud-based enterprise data warehouse platform that leverages massively parallel processing (MPP) to quickly run complex queries across petabytes of data. "),(0,o.kt)("p",null,"This article outlines how to use Azure Synapse Analytics as source or target in Ingestion activity. Guzzle leverages Databrick\u2019s Synapse Spark Connector detail of which can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/synapse-analytics"},"here")," which uses a common Azure Blob storage container to exchange data between two systems (Databricks Cluster and Azure Synapse). Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. "),(0,o.kt)("h2",{id:"azure-synapse-analytics-as-a-source"},"Azure Synapse Analytics as a Source"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: In the Datastore section we can choose to read from Azure Synapse either as a Table or through SQL (in the form of a query).")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Table + Filter"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the table from where to read data. The table can contain schema or even database name. Example: ",(0,o.kt)("br",null),"customerdb.","[dbo]",".","[customer]",(0,o.kt)("br",null),"[customer]","  (default schema name dbo will be assumed)",(0,o.kt)("br",null),"[dbo]",".","[customer]"," (database name shall be as per Datastore config)",(0,o.kt)("br",null),"Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse."),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SQL"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the SQL query which will be run as-is on the source"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"azure-synapse-analytics-as-a-target-or-reject"},"Azure Synapse Analytics as a Target or Reject"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Table"),(0,o.kt)("td",{parentName:"tr",align:null},"This is used to specify the Target Table we would like to create based on our Source."),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operation"),(0,o.kt)("td",{parentName:"tr",align:null},"Provides two options that determines whether the content of source or reject data is expected to be -",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"append:")," To append the existing data ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"overwrite:")," Entire data in the synapse tabe is overwritten"),(0,o.kt)("td",{parentName:"tr",align:null},"append"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Max String Length"),(0,o.kt)("td",{parentName:"tr",align:null},"Max String Length to set the string length for all VARCHAR/NVARCHAR type columns when writing data into Azure Synapse."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Any data which is greater than this will be clipped"),(0,o.kt)("td",{parentName:"tr",align:null},"4000"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Write Semantics"),(0,o.kt)("td",{parentName:"tr",align:null},"There are two possible values that can be selected :",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Polybase:"),"This option shall use Polybase feature of Azure Synapse to load or unload data to from common Blob storage. ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Copy:"),"The Copy statement offers a more convenient way of loading data into Azure Synapse without the need to create an external table, requires fewer permissions to load data, and provides an improved performance for high-throughput data ingestion into Azure Synapse."),(0,o.kt)("td",{parentName:"tr",align:null},"Polybase"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))))}c.isMDXComponent=!0}}]);