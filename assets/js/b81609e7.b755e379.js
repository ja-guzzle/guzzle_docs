(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6084],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,N=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6272:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],p={id:"datastore_overview",title:"Datastore Overview"},o={unversionedId:"how_to_guides/datastores/datastore_overview",id:"how_to_guides/datastores/datastore_overview",isDocsHomePage:!1,title:"Datastore Overview",description:"Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle activities. A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like Azure SQL, MySQL or apps which are accessible via Rest API.",source:"@site/docs/how_to_guides/datastores/Datastore overview.md",sourceDirName:"how_to_guides/datastores",slug:"/how_to_guides/datastores/datastore_overview",permalink:"/docs/how_to_guides/datastores/datastore_overview",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/datastores/Datastore overview.md",version:"current",frontMatter:{id:"datastore_overview",title:"Datastore Overview"},sidebar:"sideBar",previous:{title:"Yarn",permalink:"/docs/how_to_guides/computes/yarn"},next:{title:"Amazon S3",permalink:"/docs/how_to_guides/datastores/amazon_s3"}},u=[{value:"Supported Datastores",id:"supported-datastores",children:[]},{value:"Support for External activity",id:"support-for-external-activity",children:[]},{value:"Supported File Format",id:"supported-file-format",children:[]}],d={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle ",(0,l.kt)("strong",{parentName:"p"},"activities"),". A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like Azure SQL, MySQL or apps which are accessible via Rest API."),(0,l.kt)("p",null,"Additionally Guzzle supports datastore to run external activities like procedure, Azure Data Factory pipeline or notebook. "),(0,l.kt)("h2",{id:"supported-datastores"},"Supported Datastores"),(0,l.kt)("p",null,"Guzzle broadly supports three types of datastores: File, Database and API. Below matrix provides supported Datastores \u2014 across different activity types and Computes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Computes")),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Activities")),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Category"),(0,l.kt)("td",{parentName:"tr",align:null},"Connector"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Azure Databricks")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Apache Spark (on Yarn)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Apache Spark (on Local mode)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ingestion(source/target)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Processing(source/target)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Reconciliation (source/target)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Constraint Checks")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Housekeeping"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},"DBFS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ADLS Gen2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Server file system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"HDFS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AWS S3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Hive"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Synapse"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API"),(0,l.kt)("td",{parentName:"tr",align:null},"Rest API"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713/\u2212"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"The JDBC connector is a generic connector that lets you connect to any database that supports the JDBC interface. "),(0,l.kt)("li",{parentName:"ol"},"Rest API connector allows you to connect any API or cloud application which provides REST API interface ")))),(0,l.kt)("h2",{id:"support-for-external-activity"},"Support for External activity"),(0,l.kt)("p",null,"Guzzle supports running external procedures, scripts, notebook and pipelines on remote systems and data services. This is supported via External activity in Guzzle. The supported connectors for calling external activities are below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connector"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,l.kt)("td",{parentName:"tr",align:null},"To call Notebook, Databricks jar or Python task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure Data Factory (ADF)"),(0,l.kt)("td",{parentName:"tr",align:null},"To call ADF pipeline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:null},"To trigger stored procedure or run a JDBC datastore")))),(0,l.kt)("h2",{id:"supported-file-format"},"Supported File Format"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delimited format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed length files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Text files (using Grok or Regex)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"XML format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Excel format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ORC format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Avro format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Parquet format"))))}m.isMDXComponent=!0}}]);