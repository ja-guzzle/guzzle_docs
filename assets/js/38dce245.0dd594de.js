(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[5594],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5674:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r=["components"],l={},s={unversionedId:"How to guides/Administration/Environment config/Repository database",id:"How to guides/Administration/Environment config/Repository database",isDocsHomePage:!1,title:"Repository database",description:"Updating Guzzle Repository Database",source:"@site/docs/How to guides/Administration/Environment config/Repository database.md",sourceDirName:"How to guides/Administration/Environment config",slug:"/How to guides/Administration/Environment config/Repository database",permalink:"/docs/docs/How to guides/Administration/Environment config/Repository database",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Administration/Environment config/Repository database.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getting-started",permalink:"/docs/docs/Getting started/getting-started"},next:{title:"Setup Shared Storage",permalink:"/docs/docs/How to guides/Administration/Environment config/Setup Shared Storage"}},p=[{value:"Steps to Update Repository database",id:"steps-to-update-repository-database",children:[]},{value:"Steps to Initialize Guzzle Repository database",id:"steps-to-initialize-guzzle-repository-database",children:[]}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Updating Guzzle Repository Database"),(0,o.kt)("p",null,"One of the important components of a Guzzle instance is the repository database. Guzzle repository contains two types of table as described below: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Metadata tables for for Guzzle app"))),(0,o.kt)("p",null,"The marketplace deployment of Guzzle comes bundled with a local MySQL database instance which is meant for trial and development purposes. When using Azure Databricks compute for running activities, it is mandatory to configure an external database to host Guzzle repository. The supported databases are: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Azure SQL ",(0,o.kt)("strong",{parentName:"p"},"(recommended)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SQL Server 2016 and above")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Azure MySQL")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"MySQL Database version 8 and above"))),(0,o.kt)("p",null,"You will need to ensure the database used for Guzzle repository is accessible by both Guzzle VM and Azure Databricks workspace."),(0,o.kt)("p",null,"Below diagram explains typical setup of configuring Azure SQL DB to host Guzzle repository.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"repository database",src:a(3607).Z})),(0,o.kt)("h2",{id:"steps-to-update-repository-database"},"Steps to Update Repository database"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Admin menu from the top navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to Environment-> Repository Database")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter following configuration details:"))),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Property "),(0,o.kt)("td",null,"Description"),(0,o.kt)("td",null,"Default Value"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Credential type"),(0,o.kt)("td",null,"Specify credential type to be used to connect to repository database: - Native : This is native Azure SQL, SQL Server or MySQL account - Azure service principal: To use Azure service principal and secret to connect to Azure SQL database. This is not supported for other database"),(0,o.kt)("td",null,"Native"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Driver class"),(0,o.kt)("td",null,"Specify the driver class name which database is going to be used. This can be left empty if standard Driver provided by Guzzle are to be used"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"JDBC Url"),(0,o.kt)("td",null,"Specify JDBC URL of the Repository database: For Azure SQL/ SQL server, you can use below format to specify JDBC URL: `jdbc:sqlserver://<server name>.database.windows.net;database=<database name>;encrypt=true;trustServerCertificate=true;create=false;loginTimeout=30;socketKeepAlive=true` For Azure MySQL / MySQL Server following format can be used: jdbc:mysql://<server name>:3306/<database name>"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Username"),(0,o.kt)("td",null,"Username to connect to repository database Applicable for Native credential type"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Password"),(0,o.kt)("td",null,"Password to connect to repository database Applicable for Native credential type"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Client Id"),(0,o.kt)("td",null,"Client id of Azure Service Principal Applicable for Azure service principal credential type"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Client Secret"),(0,o.kt)("td",null,"Client Secret of Azure Service Principal Applicable for Azure service principal credential type"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Tenant Id"),(0,o.kt)("td",null,"Tenant id of Azure Service Principal Applicable for Azure service principal credential type"),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Validate "),"to validate the connection details of the repository database. Its strongly recommended to validate the connection details else it may impact the Guzzle instance")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Update "),"to update the repository database details. Guzzle initialize the above database with required tables for Guzzle app if they are ont present"))),(0,o.kt)("h2",{id:"steps-to-initialize-guzzle-repository-database"},"Steps to Initialize Guzzle Repository database"),(0,o.kt)("p",null,"As mentioned above, Guzzle repository contains two types of tables:"),(0,o.kt)("p",null,"The first set of tables are meant for: Run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load. "),(0,o.kt)("p",null,"This table contains additional context columns that are useful for analysis. Guzzle batch functionality has a concept of stages which again are stored as explicit columns in the batch related audit tables. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Metadata tables for for Guzzle app")),(0,o.kt)("p",null,'"Initialize Database" functionality is meant Initialize the run '),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"To initialize the repository ")),(0,o.kt)("p",null,"Step 6 : To validate your connection click on Validate."),(0,o.kt)("p",null,"Step 7 : For Apply changes click on Update"),(0,o.kt)("p",null,"Guzzle also give functionality to specify your context column and Stages"),(0,o.kt)("p",null,"Step 8 : Go to Initialize database tab "),(0,o.kt)("p",null,"Step 9: Context Column : Specify a list of context columns you want. Guzzle come up with below default context columns "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"system")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"location"))),(0,o.kt)("p",null,"Step 10 : Stage : Specify a list of Stages you want. Guzzle Come up with below default Stages "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"STG")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"FND")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SNP")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CALC")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"REP")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"OUT"))),(0,o.kt)("p",null,"Step 11 :  Save the changes and Initialize the database via click on Initialize."),(0,o.kt)("p",null,"The Guzzle UI will auto-detect if the repository tables are present, and it will show"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"On Initialize guzzle will create a database table related to guzzle jobs if the database is already initialized then guzzle will show an option as reinitialize to reinitialize the database."))))}d.isMDXComponent=!0},3607:function(e,t,a){"use strict";t.Z=a.p+"assets/images/repository_db01-60256e22f3b323f2c442e0631178d2d8.png"}}]);