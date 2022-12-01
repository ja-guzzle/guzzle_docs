(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2990],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=i,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7890:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o=["components"],l={sidebar_position:1,id:"overview",slug:"/",title:"What is Guzzle"},s={unversionedId:"introduction/overview",id:"introduction/overview",isDocsHomePage:!1,title:"What is Guzzle",description:"Guzzle enables analytics engineers to build data pipelines consisting of extraction, transformation, loading, validation and reconciliation for their data warehouses and data lakes by specifying a set of simple configurations. As Guzzle user, you remain focused on specifying high level configurations settings and business logic for data pipelines, and let Guzzle handle the low level implementation details for you.",source:"@site/docs/introduction/What is Guzzle Overview.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/introduction/What is Guzzle Overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"overview",slug:"/",title:"What is Guzzle"},sidebar:"sideBar",next:{title:"Deploying Guzzle on Microsoft Azure",permalink:"/docs/introduction/deploying_guzzle_on_microsoft_azure"}},u=[{value:"What makes Guzzle powerful?",id:"what-makes-guzzle-powerful",children:[]},{value:"What are the building blocks of Guzzle?",id:"what-are-the-building-blocks-of-guzzle",children:[]},{value:"What is the typical Workflow of using?",id:"what-is-the-typical-workflow-of-using",children:[]},{value:"Architecture Overview of Guzzle",id:"architecture-overview-of-guzzle",children:[]}],p={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Guzzle enables analytics engineers to build data pipelines consisting of extraction, transformation, loading, validation and reconciliation for their data warehouses and data lakes by specifying a set of simple configurations. As Guzzle user, you remain focused on specifying high level configurations settings and business logic for data pipelines, and let Guzzle handle the low level implementation details for you."),(0,r.kt)("p",null,"Built on the foundation of Apache Spark, Guzzle leverages the Spark connectors to extract and load data at massive scale on most common datastores (both relational data warehouses or data lakes). All the transformation and validation rules in Guzzle are specified in SQL, lingua franca of the data. "),(0,r.kt)("p",null,"Guzzle is available on "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Marketplace")," and gets deployed as virtual machine. It supports Azure Databricks, Azure synapse spark pool or bundled local spark in Guzzle VM.\nRefer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/introduction/deploying_guzzle_on_microsoft_azure"},"Deploying Guzzle on Azure")," for the details of setting up Guzzle instance. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/prodview-cdai6bjd4gkiw"},"AWS Marketplace")," and gets deployed as EC2 instance. It supports AWS EMR EC2, AWS EMR Serverless, AWS Glue, AWS Databricks and bundled local spark in Guzzle. Refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/introduction/deploying_guzzle_on_aws"},"Deploying Guzzle on AWS")," for how to set up Guzzle in AWS.")),(0,r.kt)("h2",{id:"what-makes-guzzle-powerful"},"What makes Guzzle powerful?"),(0,r.kt)("p",null,"Guzzle is a Data Engineering Workbench that automates the movement and transformation of data. It allows the creation, deployment, and monitoring of data pipelines which consist of ingestion, processing, reconciliation, data quality and house-keeping activities."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Native to Apache Spark and big data")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Simple to deploy and use")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Encapsulate commonly occurring design patterns in the data pipelines")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Supports of wide array of source and target technology")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Detail traceability and provenance of job runs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deeper support for DevOps \u2014 out of box integration with Git (and git workflows), test-automation and auto-deployment"))),(0,r.kt)("h2",{id:"what-are-the-building-blocks-of-guzzle"},"What are the building blocks of Guzzle?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Activities: "),"These are individual data integration tasks meant to either "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ingest data ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"process the data (processing logic defined as SQL) ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"perform reconciliation of data between any two tables/SQL across same or different datastores")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"do constraint (data quality) checks of your data in a standard way")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"house keep any historical data"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pipelines: ")," You can combine ",(0,r.kt)("strong",{parentName:"p"},"activities "),"to form pipelines, to either run them sequentially or in parallel with Guzzle automatically determining the dependencies between them"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Batches: ")," Pipelines can optionally be combined as ",(0,r.kt)("strong",{parentName:"p"},"batches "),"which provides advanced orchestration capabilities of running them in sequence (or stages), and ability to run catch-ups by sequence of date or time interval"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datastores: "),"These represent connections to the databases, cloud storage and REST URI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Computes: "),"These are the Apache Spark environment that will run the ",(0,r.kt)("strong",{parentName:"p"},"activities "),"and carry out actual data ingestion, processing, reconciliation and other tasks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schedules :")," A schedule enables you to run one or more activities, pipeline or batches either sequentially or concurrently at a specific interval"),(0,r.kt)("p",null,"Collectively all the above buildings blocks are referred to as ",(0,r.kt)("strong",{parentName:"p"},"Configs")," which gets stored as YML files. Also, activities, pipelines and batches are specifically referred to as ",(0,r.kt)("strong",{parentName:"p"},"jobs")," as they are executables and can be individually run."),(0,r.kt)("h2",{id:"what-is-the-typical-workflow-of-using"},"What is the typical Workflow of using?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A analytics engineer logs in to Guzzle UI and defines the datastores, activities and compute ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Additional to this, they can define pipelines or batches to orchestrate multiple activities.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, they will run these activities interactively from UI, schedule it using Guzzle schedule feature or invoke it from external scheduler using Guzzle REST API")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"User can monitor the job runs from Guzzle Monitor UI or via Guzzle REST API"))),(0,r.kt)("h2",{id:"architecture-overview-of-guzzle"},"Architecture Overview of Guzzle"),(0,r.kt)("p",null,"Guzzle architecture consist of following components: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configs: "),"These are ",(0,r.kt)("strong",{parentName:"p"},"YML "),"based configuration files that capture the definition of activities, pipelines, batches, datastores, compute and schedules. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Guzzle binaries : "),"These are core binaries of Guzzle which perform specific task of ingesting data, processing, reconciliation, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Guzzle App: "),"This consist of Guzzle REST API and Web app which allows users to author Guzzle configs, Run and monitor jobs, and administer Guzzle environment configurations "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Repository database : "),"This stores run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values for incremental data load and other metadata for Guzzle app"),(0,r.kt)("a",{href:"https://guzzle.justanalytics.com/assets/images/introduction0-b696e32182bbff8bdc6b8bc65919c9de.png",target:"_self"},(0,r.kt)("img",{src:"/img/docs/introduction/introduction0.png"})))}c.isMDXComponent=!0}}]);