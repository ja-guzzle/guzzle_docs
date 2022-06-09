(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9409],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9292:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=["components"],l={id:"overwrite_and_append_operatoins",title:"How overwrite and append operation works in Guzzle"},p={unversionedId:"how_to_guides/ingest_data/overwrite_and_append_operatoins",id:"how_to_guides/ingest_data/overwrite_and_append_operatoins",isDocsHomePage:!1,title:"How overwrite and append operation works in Guzzle",description:"Overwrite and append operations are supported in the below technologies in the target section:",source:"@site/docs/how_to_guides/ingest_data/Overwrite and Append Operation.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/overwrite_and_append_operatoins",permalink:"/docs/how_to_guides/ingest_data/overwrite_and_append_operatoins",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Overwrite and Append Operation.md",version:"current",frontMatter:{id:"overwrite_and_append_operatoins",title:"How overwrite and append operation works in Guzzle"},sidebar:"sideBar",previous:{title:"Schema Derivation Strategies",permalink:"/docs/how_to_guides/ingest_data/derivation_strategies"},next:{title:"Schema Drift",permalink:"/docs/how_to_guides/ingest_data/schema_drift"}},s=[{value:"Append operation",id:"append-operation",children:[{value:"Example",id:"example",children:[]}]},{value:"Overwrite operation",id:"overwrite-operation",children:[{value:"Overwrite operation if target table do not have partition columns:",id:"overwrite-operation-if-target-table-do-not-have-partition-columns",children:[]},{value:"Overwrite operation if target table have partition columns:",id:"overwrite-operation-if-target-table-have-partition-columns",children:[]}]}],d={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Overwrite and append operations are supported in the below technologies in the target section:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Hive"),(0,i.kt)("li",{parentName:"ol"},"Delta"),(0,i.kt)("li",{parentName:"ol"},"Azure SQL"),(0,i.kt)("li",{parentName:"ol"},"Azure Synapse Analytics")),(0,i.kt)("h2",{id:"append-operation"},"Append operation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Append mode is used to atomically add new data to an existing target table.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Below is the scenario that if the user wants to perform ingestion activity, source and target are delta table and writer mode is ",(0,i.kt)("strong",{parentName:"p"},"append"),". And the data in both source and target tables before job execution are like this:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records in source table:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_src_delta:\n\n| id | name                 | location | system  |\n| 1  | Gallagher Fair       |    sg    | default |\n| 2  | Maia Thams           |    in    | demo    |\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Records in target table:\nWhile executing the job, Guzzle will add new data to the existing target table."),(0,i.kt)("li",{parentName:"ul"},"Records of target table after job run successfully:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_tgt_delta:\n\n| id | name                 | location | system  |\n| 4  | Lindon Corrad        |    sg    | default |\n| 5  | Che Millwall         |    in    | default |\n| 6  | Alidia Duiguid       |    sg    | demo    |\n| 1  | Gallagher Fair       |    sg    | default |\n| 2  | Maia Thams           |    in    | demo    |\n")),(0,i.kt)("h2",{id:"overwrite-operation"},"Overwrite operation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overwrite operation works differently for the table with partition columns and without partition columns.")),(0,i.kt)("h3",{id:"overwrite-operation-if-target-table-do-not-have-partition-columns"},"Overwrite operation if target table do not have partition columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overwrite mode to atomically replace all the data in a target table with the source data.")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Below is the scenario that if the user wants to perform ingestion activity, source and target are hive table and writer mode is ",(0,i.kt)("strong",{parentName:"p"},"overwrite"),". And the data in both source and target tables before job execution are like this:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records in source table:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_src_delta:\n\n| id | name                 | location | system  |\n| 1  | Gallagher Fair       |    sg    | default |\n| 2  | Maia Thams           |    in    | demo    |\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Records in target table:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_tgt_delta:\n\n| id | name                 | location | system  |\n| 4  | Lindon Corrad        |    sg    | default |\n| 5  | Che Millwall         |    in    | default |\n| 6  | Alidia Duiguid       |    sg    | demo    |\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While executing the job, Guzzle will replace all target records with source data."),(0,i.kt)("li",{parentName:"ul"},"Records of target table after job run successfully:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_tgt_delta:\n\n| id | name                 | location | system  |\n| 1  | Gallagher Fair       |    sg    | default |\n| 2  | Maia Thams           |    in    | demo    |\n")),(0,i.kt)("h3",{id:"overwrite-operation-if-target-table-have-partition-columns"},"Overwrite operation if target table have partition columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overwrite mode is used to replace the existing data from the target table with partitioned source records. The overwritten data can be specified by an arbitrary expression.")),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Below is the scenario that if the user wants to perform ingestion activity, source and target are hive table and writer mode is ",(0,i.kt)("strong",{parentName:"p"},"overwrite"),". And the data in both source and target tables before job execution are like this:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records in source table:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_src_delta:\n\n| id | name                 | location | system  |\n| 1  | Gallagher Fair       |    sg    | default |\n| 2  | Maia Thams           |    in    | demo    |\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Records in the target table with ",(0,i.kt)("strong",{parentName:"li"},"location")," and ",(0,i.kt)("strong",{parentName:"li"},"system")," column as partition columns:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_tgt_delta:\n\n| id | name                 | location | system  |\n| 4  | Lindon Corrad        |    sg    | default |\n| 5  | Che Millwall         |    in    | default |\n| 6  | Alidia Duiguid       |    sg    | demo    |\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"While executing the job, Guzzle will replace target data with source data that matches an arbitrary expression, in our example expression is ",(0,i.kt)("strong",{parentName:"p"},"((location=sg AND system=default)",(0,i.kt)("em",{parentName:"strong"}," OR "),"(location=in AND system=demo))")," and from target table data matches this expression will be overwritten by source data. So, from the target table record with id 4 is deleted. Guzzle's overwrite works same as sparks overwrite. For more information on how spark overwrites works follow ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.0.0-preview/sql-ref-syntax-dml-insert-overwrite-table.html"},"this")," link.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records of target table after job run successfully:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"employee_tgt_delta:\n\n| id | name                 | location | system  |\n| 1  | Gallagher Fair       |    sg    | default |\n| 2  | Maia Thams           |    in    | demo    |\n| 5  | Che Millwall         |    in    | default |\n| 6  | Alidia Duiguid       |    sg    | demo    |\n")))}u.isMDXComponent=!0}}]);