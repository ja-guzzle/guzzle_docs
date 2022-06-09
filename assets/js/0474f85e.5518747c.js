(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[5833],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,p=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(p,o(o({ref:t},c),{},{components:n})):a.createElement(p,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3641:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"schema_drift",title:"Schema Drift"},s={unversionedId:"how_to_guides/ingest_data/schema_drift",id:"how_to_guides/ingest_data/schema_drift",isDocsHomePage:!1,title:"Schema Drift",description:"What is Schema Drift?",source:"@site/docs/how_to_guides/ingest_data/Schema Drift.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/schema_drift",permalink:"/docs/how_to_guides/ingest_data/schema_drift",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Schema Drift.md",version:"current",frontMatter:{id:"schema_drift",title:"Schema Drift"},sidebar:"sideBar",previous:{title:"How overwrite and append operation works in Guzzle",permalink:"/docs/how_to_guides/ingest_data/overwrite_and_append_operatoins"},next:{title:"Truncate Partition Columns",permalink:"/docs/how_to_guides/ingest_data/configure_truncate_partition_columns"}},m=[{value:"What is Schema Drift?",id:"what-is-schema-drift",children:[]},{value:"Use of schema drift feature in Guzzle",id:"use-of-schema-drift-feature-in-guzzle",children:[]},{value:"Merge Schema",id:"merge-schema",children:[{value:"Example",id:"example",children:[]}]},{value:"Overwrite Schema",id:"overwrite-schema",children:[{value:"Example",id:"example-1",children:[]}]}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-schema-drift"},"What is Schema Drift?"),(0,i.kt)("p",null,"Schema drift is a feature that allows users to easily change a target table's current schema to accommodate data that is changing over time. Most commonly, it is used when performing an append or overwrite operation, to automatically adapt the schema to include one or more new columns. For more information visit ",(0,i.kt)("a",{parentName:"p",href:"https://databricks.com/blog/2019/09/24/diving-into-delta-lake-schema-enforcement-evolution.html#:~:text=Schema%20evolution%20is%20a%20feature,one%20or%20more%20new%20columns."},"here"),". The schema drift feature includes two options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Merge schema"),(0,i.kt)("li",{parentName:"ol"},"Overwrite schema")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The schema drift feature is supported in ingestion activity only when delta technology is used",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"As a target"),(0,i.kt)("li",{parentName:"ol"},"As a reject (only merge schema option is supported)")))))),(0,i.kt)("h2",{id:"use-of-schema-drift-feature-in-guzzle"},"Use of schema drift feature in Guzzle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The schema drift feature is available in the target and reject section when delta technology is used while performing ingestion activity."),(0,i.kt)("li",{parentName:"ul"},"From the Guzzle UI users can enable ",(0,i.kt)("strong",{parentName:"li"},"Merge schema")," option when the user wants to add a new column that is present in source data but not in the target or reject records. So, Guzzle will automatically add that column to your target or reject records. Users can enable ",(0,i.kt)("strong",{parentName:"li"},"Overwrite schema")," option when user wants to overwrite the schema of the table. So, Guzzle will automatically overwrite the schema of the target table.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When schema derivation strategy is ",(0,i.kt)("strong",{parentName:"p"},"schema")," or ",(0,i.kt)("strong",{parentName:"p"},"target"),", if new columns are added in the source they must be explicitly specified in the validation or transformation section."))),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_drift_1.png",target:"_self"},(0,i.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/ingest_data/schema_drift_1.png"})),(0,i.kt)("h2",{id:"merge-schema"},"Merge Schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automatically update the schema of the target table and make it compatible with the data being written."),(0,i.kt)("li",{parentName:"ul"},"The following types of schema changes are eligible for schema drift during table appends or overwrites:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Adding a new column."),(0,i.kt)("li",{parentName:"ul"},"Changing of column data types from ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NullType -> any other type"),(0,i.kt)("li",{parentName:"ul"},"upcasts from ByteType -> ShortType -> IntegerType")))))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The scenario is that we have to ingest data from JDBC to the existing delta table and the merge schema option is enabled, and the operation is append.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let the source is JDBC, and it has the following columns and data:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table_name: src_demo\n\nDefinition of source table:\n\n| column    | datatype |\n|  id       |  integer |\n|  name     |  string  |\n| full_name |  string  |\n\nRecords in the table:\n\n| id | name | full_name |\n| 1  | n1   | n1_extra  |\n| 2  | n2   | n2_extra  |\n| 3  | n3   | n3_extra  |\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let the target is delta, and it has the following columns and data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table_name: tgt_demo\n\nDefinition of target table:\n\n| column    | datatype |\n|  id       |  short   |\n|  name     |  string  |\n\nRecords in the table:\n\n| id | name |\n| 4  | n4   |\n| 5  | n5   |\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After running the job, the target table will look like the below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table_name: tgt_demo\n\nDefinition of target table:\n\n| column    | datatype |\n|  id       |  integer |\n|  name     |  string  |\n| full_name |  string  |\n \nRecords in the table:\n\n| id | name | full_name |\n| 4  | n4   |           |\n| 5  | n5   |           |\n| 1  | n1   | n1_extra  |\n| 2  | n2   | n2_extra  |\n| 3  | n3   | n3_extra  |\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As the merge schema option is enabled so, the ",(0,i.kt)("strong",{parentName:"li"},"short")," datatype is converted to the ",(0,i.kt)("strong",{parentName:"li"},"integer")," and a new column ",(0,i.kt)("strong",{parentName:"li"},"full_name")," is added to the target table.")),(0,i.kt)("h2",{id:"overwrite-schema"},"Overwrite Schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automatically overwrite the schema of the target table and make it compatible with the data being written.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Overwrite schema is only applicable when the operation is ",(0,i.kt)("strong",{parentName:"p"},"overwrite"),"."))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The scenario is that we have to ingest data from JDBC to the existing delta table and the overwrite schema option is enabled, and the operation is overwrite.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let the source is JDBC, and it has the following columns and data:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table_name: src_demo\n\nDefinition of source table:\n\n| column    | datatype |\n|  id       |  integer |\n|  name     |  string  |\n| full_name |  string  |\n\nRecords in the table:\n\n| id | name | full_name |\n| 1  | n1   | n1_extra  |\n| 2  | n2   | n2_extra  |\n| 3  | n3   | n3_extra  |\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let the target is delta, and it has the following columns and data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table_name: tgt_demo\n\nDefinition of target table:\n\n| column    | datatype |\n|  id       |  short   |\n|  name     |  string  |\n\nRecords in the table:\n\n| id | name |\n| 4  | n4   |\n| 5  | n5   |\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After running the job, the target table will look like the below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table_name: tgt_demo\n\nDefinition of target table:\n\n| column    | datatype |\n|  id       |  integer |\n|  name     |  string  |\n| full_name |  string  |\n \nRecords in the table:\n\n| id | name | full_name |\n| 1  | n1   | n1_extra  |\n| 2  | n2   | n2_extra  |\n| 3  | n3   | n3_extra  |\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As the overwrite schema option is enabled so, the schema of the target table is overwritten by the source schema and the operation is overwrite so, the records are also overwritten.")))}d.isMDXComponent=!0}}]);