(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[7505],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3292:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"pre-SQL_and_post-SQL_in_ingestion",title:"Pre-SQL and Post-SQL for Source and Target in Ingestion"},s={unversionedId:"how_to_guides/ingest_data/pre-SQL_and_post-SQL_in_ingestion",id:"how_to_guides/ingest_data/pre-SQL_and_post-SQL_in_ingestion",isDocsHomePage:!1,title:"Pre-SQL and Post-SQL for Source and Target in Ingestion",description:"Pre-SQL is an SQL statement executed using the source and target connections before the pipeline is run. On the other hand Post-SQL statements are executed after the pipeline is run. Using Pre-SQL and Post-SQL statements helps in performing operations like insert, delete and update before and after the load.",source:"@site/docs/how_to_guides/ingest_data/Pre-SQL and Post-SQL for Source and Target in Ingestion.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/pre-SQL_and_post-SQL_in_ingestion",permalink:"/guzzle_docs/docs/how_to_guides/ingest_data/pre-SQL_and_post-SQL_in_ingestion",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Pre-SQL and Post-SQL for Source and Target in Ingestion.md",version:"current",frontMatter:{id:"pre-SQL_and_post-SQL_in_ingestion",title:"Pre-SQL and Post-SQL for Source and Target in Ingestion"},sidebar:"sideBar",previous:{title:"Watermark",permalink:"/guzzle_docs/docs/how_to_guides/ingest_data/watermark"},next:{title:"Schema Derivation Strategies",permalink:"/guzzle_docs/docs/how_to_guides/ingest_data/derivation_strategies"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pre-SQL is an SQL statement executed using the source and target connections before the pipeline is run. On the other hand Post-SQL statements are executed after the pipeline is run. Using Pre-SQL and Post-SQL statements helps in performing operations like insert, delete and update before and after the load."),(0,o.kt)("p",null,'If we want to add some data in database from CSV file, and we haven\'t created a table for that so in this case we can use this feature like "Pre-SQL" option in target tab to create table before \tentering data in that table and if we want to delete specific data from table before fetching all data we can use feature like "Pre-SQL" option in source tab of selected table.'),(0,o.kt)("p",null,"Guzzle supports Pre-SQL and Post-SQL for Source and Target and their execution in Ingestion. It is used mainly for pre and post formatting of Data in a Database. "),(0,o.kt)("p",null,"Guzzle supports Pre-SQL and Post-SQL statements for Source and Target in Ingestion for different Datastore Technologies as listed in the table below: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Datastore technologies"),(0,o.kt)("th",{parentName:"tr",align:null},"Pre/Post SQL for source"),(0,o.kt)("th",{parentName:"tr",align:null},"Pre/Post SQL for target"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Delta"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hive"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure SQL"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure Synapse Analytics"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("p",null,"Guzzle follows the following order of execution for Pre-SQL and Post-SQL statements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Source Section \u2014 Pre SQL source")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Source Section \u2014 Read table or SQL")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Source Section \u2014 Post SQL source")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Target Section \u2014 Pre SQL target")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Target Section \u2014 Write data into target")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Target Section \u2014 Post sql target"))),(0,o.kt)("p",null,"we can summarize as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In source section : "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"pre sql syntax is executed in source table."),(0,o.kt)("li",{parentName:"ol"},"table is read by guzzle."),(0,o.kt)("li",{parentName:"ol"},"post sql syntax is executed in source table."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In target section : "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"pre sql syntax is executed in target table."),(0,o.kt)("li",{parentName:"ol"},"write data in target table."),(0,o.kt)("li",{parentName:"ol"},"post sql syntax is executed in selected table. ")))),(0,o.kt)("p",null,"This order of execution applies across all connectors in Guzzle."),(0,o.kt)("p",null,"In case of multiple SQL statements, the statements will be executed in the order the user sees them in the Interface."),(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/preSQL_and_postSQL.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/ingest_data/preSQL_and_postSQL.png"})),(0,o.kt)("p",null,"If we want to execute multiple SQL statement we can do by adding it in next input text, and they will execute all in sequence as first in first out. Example, In the above figure there are 2 Pre-SQL statements. The INSERT INTO statement will be executed first followed by the DELETE FROM statement."))}d.isMDXComponent=!0}}]);