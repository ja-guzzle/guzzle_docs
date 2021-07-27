(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[3274],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2649:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={},s={unversionedId:"How to guides/Computes/Azure Databricks",id:"How to guides/Computes/Azure Databricks",isDocsHomePage:!1,title:"Azure Databricks",description:"Guzzle supports Computing environments on the Azure Cloud. In Guzzle azure cloud setup, we can use databricks to execute our workloads. This article helps in using Azure Databricks as a computing environment in Guzzle.",source:"@site/docs/How to guides/Computes/Azure Databricks.md",sourceDirName:"How to guides/Computes",slug:"/How to guides/Computes/Azure Databricks",permalink:"/docs/docs/How to guides/Computes/Azure Databricks",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Computes/Azure Databricks.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schedule",permalink:"/docs/docs/How to guides/Author/Schedule"},next:{title:"Local Spark",permalink:"/docs/docs/How to guides/Computes/Local Spark"}},u=[{value:"Use of Azure Databricks as a computing environment",id:"use-of-azure-databricks-as-a-computing-environment",children:[]},{value:"Setup Databricks Workspace",id:"setup-databricks-workspace",children:[]},{value:"how to setup external metastore",id:"how-to-setup-external-metastore",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Guzzle supports Computing environments on the Azure Cloud. In Guzzle azure cloud setup, we can use databricks to execute our workloads. This article helps in using Azure Databricks as a computing environment in Guzzle."),(0,a.kt)("h2",{id:"use-of-azure-databricks-as-a-computing-environment"},"Use of Azure Databricks as a computing environment"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Property "),(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Default Value")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Cluster Type"),(0,a.kt)("td",null,"There are 3 types of Databricks clusters available in Guzzle:",(0,a.kt)("br",null),(0,a.kt)("b",null,"Data Engineering:"),(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0 Data Engineering cluster is recommended for automated workloads. It is recommended to use it for your BAU data loads.",(0,a.kt)("br",null),(0,a.kt)("b",null,"Data Analytics:")," ",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0 Data Analytics cluster is recommended for interactive queries along with concurrent user support. This cluster type is configurable in Guzzle and it can also execute the workloads, but it is not recommended to use it for your BAU data loads. Data Analytics cluster is costlier than Data Engineering cluster for per DBU usage and meant for interactive queries through Databricks notebook in a shared environment where multiple people have to collaborate as a team.",(0,a.kt)("br",null),(0,a.kt)("b",null,"Data Engineering Light:")," ",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0 Data Engineering Light cluster is even cheaper than Data Engineering cluster for per DBU usage. Once you select this type, rest all the other configuration for this cluster type would be the same as the Data Engineering cluster. Note that, Data Engineering Light provides a runtime option for jobs that don\u2019t need the advanced performance, reliability, or autoscaling benefits provided by the more capable Databricks Data Engineering cluster offering."),(0,a.kt)("td",null,"Data Engineering")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"API URL"),(0,a.kt)("td",null,"It is used to specify the URL of the Databricks environment which will be used with Guzzle. We can specify the Azure region accordingly based on the region of the Databricks workspace."),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"API Token"),(0,a.kt)("td",null,"It is used to specify the API Token for our Databricks Environment. API token is required for Guzzle to authenticate to Azure Databricks. API token needs to be generated from the databricks workspace."),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DBFS Guzzle Directory"),(0,a.kt)("td",null,"It is used to specify the Guzzle mount directory location where guzzle job configs, jars and all bin relies in the Databricks."),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Cluster Id (Applicable for Data Analytics cluster)"),(0,a.kt)("td",null,"It is used to specify the name of the Cluster we have created in the Databricks Environment. A job cluster is created in Databricks with this name. Guzzle will show available clusters once a valid API key is provided UI will show cluster name, but it stores cluster id in the underlying yml file"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Configure Retry Options"),(0,a.kt)("td",null,"basically is the retry which we do if Guzzle is not able to successfully submit the job (possibly due to issues like unavalabilty of cloud resources or error in control plane)"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Spark Version (Only in Data Engineering and Data Engineering Light)"),(0,a.kt)("td",null,"Specify the Spark Version we have used in creating our cluster in the databricks environment. These drop downs are populated once valid API keys and URLs are provided. "),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Enable Cluster Pool"),(0,a.kt)("td",null,"Used to specify To attach a cluster to a pool."),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Instance Pool Id"),(0,a.kt)("td",null,"select the pool from the drop-down when you configure the cluster. Available pools are listed at the top of each drop-down list. You can use the same pool or different pools for the driver node and worker nodes."),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Driver Node Type (Only in Data Engineering and Data Engineering Light)"),(0,a.kt)("td",null,"It is used to specify the type of driver we would like to use as our Driver Node."),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Worker Node Type (Only in Data Engineering and Data Engineering Light)"),(0,a.kt)("td",null,"Specify the workers we would like to use in our databricks environment"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Enable AutoScaling"),(0,a.kt)("td",null,"A cluster that automatically scales between the minimum and maximum number of nodes, based on load."),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Customize Spark Config"),(0,a.kt)("td",null,"Used to specify additional spark config options Ex: conf : spark.sql.broadcastTimeout value : 5000 "),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Customize Environment Variables"),(0,a.kt)("td",null,"Used to specify environment variables to use in spark computes Ex: Variable : GuzzleHome Value    : /mnt/guzzle/guzzle"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Init Script"),(0,a.kt)("td",null,"Cluster-scoped init scripts are init scripts defined in a cluster configuration. You can put init scripts in a DBFS or ADLS directory accessible by a cluster. And give the location to that script in guzzle spark computes"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Custom Cluster Tags"),(0,a.kt)("td",null,"You apply tags to your Cluster. Each tag consists of a name and a value pair"),(0,a.kt)("td",null,"None"))),(0,a.kt)("p",null,"For sensitive spark configuration, one should use Databricks secrets instead of using plain values as they will be visible in the configure. This could be a storage account access key."),(0,a.kt)("h2",{id:"setup-databricks-workspace"},"Setup Databricks Workspace"),(0,a.kt)("p",null,"Once you enter all necessary fields, the user has to set up the workspace on databricks through click on setup workspace from the tab bar."),(0,a.kt)("p",null,"On click of setup workspace guzzle will create a notebook known as setup-guzzle.scala in the Databricks workspace."),(0,a.kt)("p",null,"In the notebook guzzle programmatically mount shared storage in the databricks environment."),(0,a.kt)("h2",{id:"how-to-setup-external-metastore"},"how to setup external metastore"),(0,a.kt)("p",null,"One can use init script or spark configs. More details of can be found here"),(0,a.kt)("p",null,"A typical set of spark configuration when using Azure SQL server are external meatore are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spark.hadoop.javax.jdo.option.ConnectionDriverName \n\ncom.microsoft.sqlserver.jdbc.SQLServerDriver\n\nspark.hadoop.javax.jdo.option.ConnectionURL jdbc:sqlserver://<Azure sql server>.database.windows.net:1433;database=<DB NAME>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;\n\nspark.databricks.delta.preview.enabled true\n\nspark.hadoop.javax.jdo.option.ConnectionUserName <USERNAME>;\n\ndatanucleus.fixedDatastore false\n\nspark.hadoop.javax.jdo.option.ConnectionPassword {{secrets/<scope name>/<scret name for password>}}\n\nspark.sql.sources.partitionOverwriteMode DYNAMIC datanucleus.autoCreateSchema true\n\nspark.sql.hive.metastore.jars &lt;LOCATION WHERE JARS ARE AVAILABLE. built is not supported. /databricks/hive-v1_2/*?\n\nspark.sql.hive.metastore.version 1.2.1\n")))}d.isMDXComponent=!0}}]);