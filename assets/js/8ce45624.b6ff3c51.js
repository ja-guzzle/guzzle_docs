(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4260],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1929:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),s=(r(7294),r(3905)),o=["components"],l={},i={unversionedId:"releases/2_3_0/deployment-structure-changes",id:"releases/2_3_0/deployment-structure-changes",isDocsHomePage:!1,title:"Deployment structure changes (Guzzle 2.3.0)",description:"As per new deployment approach, guzzle reduces scope of shared storage just to keep guzzle module and third-party dependency jar files which can be referenced by activities running in the remote clusters. Guzzle API must be accessible from the remote clusters where guzzle activities are running. Following are the high-level changes -",source:"@site/docs/releases/2_3_0/deployment-structure-changes.md",sourceDirName:"releases/2_3_0",slug:"/releases/2_3_0/deployment-structure-changes",permalink:"/guzzle_docs/docs/releases/2_3_0/deployment-structure-changes",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/releases/2_3_0/deployment-structure-changes.md",version:"current",frontMatter:{}},u=[{value:"Automatic upgrade steps",id:"automatic-upgrade-steps",children:[]},{value:"Post upgrade manual setup steps",id:"post-upgrade-manual-setup-steps",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As per new deployment approach, guzzle reduces scope of shared storage just to keep guzzle module and third-party dependency jar files which can be referenced by activities running in the remote clusters. Guzzle API must be accessible from the remote clusters where guzzle activities are running. Following are the high-level changes -"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Shared storage account is not needed to be mounted on Guzzle VM or remote spark clusters"),(0,s.kt)("li",{parentName:"ul"},"Guzzle keeps all configs and logs on local file system of the Guzzle VM. Activities running in remote spark clusters use Guzzle APIs to read necessary configs and to write activity logs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"GUZZLE_HOME")," environment variable is not needed to be defined in Guzzle VM. All the directories from previous ",(0,s.kt)("strong",{parentName:"li"},"GUZZLE_HOME")," are now referred from ",(0,s.kt)("strong",{parentName:"li"},"GUZZLE_PRODUCT_HOME")),(0,s.kt)("li",{parentName:"ul"},"Guzzle config file ",(0,s.kt)("strong",{parentName:"li"},"guzzle.yml")," is removed. All the config properties from ",(0,s.kt)("strong",{parentName:"li"},"guzzle.yml")," are referred from ",(0,s.kt)("strong",{parentName:"li"},"guzzle-api.yml")),(0,s.kt)("li",{parentName:"ul"},"When shared storage is enabled - guzzle upgrade process will sync guzzle module and third-party dependency jar files every time guzzle is upgraded. Also there is an option to sync jar files with storage account in Guzzle UI"),(0,s.kt)("li",{parentName:"ul"},"Setup Workspace button from databricks compute editor is removed")),(0,s.kt)("h3",{id:"automatic-upgrade-steps"},"Automatic upgrade steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Move directories bin, conf, libs, logs, scripts and test-data from current ",(0,s.kt)("strong",{parentName:"li"},"GUZZLE_HOME")," to ",(0,s.kt)("strong",{parentName:"li"},"GUZZLE_PRODUCT_HOME")),(0,s.kt)("li",{parentName:"ul"},"Remove version.txt file from current ",(0,s.kt)("strong",{parentName:"li"},"GUZZLE_HOME")),(0,s.kt)("li",{parentName:"ul"},"Move config properties default_spark, java, guzzle and api from ",(0,s.kt)("strong",{parentName:"li"},"guzzle.yml")," to ",(0,s.kt)("strong",{parentName:"li"},"guzzle-api.yml")),(0,s.kt)("li",{parentName:"ul"},"Remove guzzle.yml and passphrase files from conf directory"),(0,s.kt)("li",{parentName:"ul"},"Remove config property ",(0,s.kt)("strong",{parentName:"li"},"dbfs_guzzle_dir")," from azure databricks compute configs"),(0,s.kt)("li",{parentName:"ul"},"Remove config property ",(0,s.kt)("strong",{parentName:"li"},"guzzle_storage_linked_service")," from azure synapse spark compute configs"),(0,s.kt)("li",{parentName:"ul"},"Remove ",(0,s.kt)("strong",{parentName:"li"},"mount")," properties of ",(0,s.kt)("strong",{parentName:"li"},"storage")," setting specified in ",(0,s.kt)("strong",{parentName:"li"},"guzzle-api.yml")),(0,s.kt)("li",{parentName:"ul"},"Add property ",(0,s.kt)("inlineCode",{parentName:"li"},"deployment_scheme: azure")," under ",(0,s.kt)("strong",{parentName:"li"},"guzzle")," setting in ",(0,s.kt)("strong",{parentName:"li"},"guzzle-api.yml"))),(0,s.kt)("h3",{id:"post-upgrade-manual-setup-steps"},"Post upgrade manual setup steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ensure that Guzzle API is accessible from the remote spark cluster"),(0,s.kt)("li",{parentName:"ul"},"Navigate to ",(0,s.kt)("strong",{parentName:"li"},"Manage > Environment Config > Api Settings")," in Guzzle UI and specify Guzzle API URL, Key vault name and Secret name which is holding value of the passphrase"),(0,s.kt)("li",{parentName:"ul"},"Unmount guzzle shared storage account from Guzzle VM ",(0,s.kt)("strong",{parentName:"li"},"[Optional]")),(0,s.kt)("li",{parentName:"ul"},"Remove ",(0,s.kt)("strong",{parentName:"li"},"GUZZLE_HOME")," environment variable from guzzle service (/lib/systemd/system/guzzle.service) ",(0,s.kt)("strong",{parentName:"li"},"[Optional]"))),(0,s.kt)("h4",{id:"when-using-azure-databricks-clusters--"},"When using Azure databricks clusters -"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In databricks analytics clusters - specify following spark config which will be used as credential to refer and install jars from the shared storage (secret value should be access key of the storage account) -",(0,s.kt)("br",{parentName:"li"}),(0,s.kt)("inlineCode",{parentName:"li"},"fs.azure.account.key.[storage-account-name].dfs.core.windows.net {{secrets/[secret-scope]/[secret-name]}}")),(0,s.kt)("li",{parentName:"ul"},"Unmount guzzle shared storage account from databricks workspace ",(0,s.kt)("strong",{parentName:"li"},"[Optional]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"GUZZLE_HOME")," environment variable is not needed for databricks analytics clusters and can be removed ",(0,s.kt)("strong",{parentName:"li"},"[Optional]"))),(0,s.kt)("h4",{id:"when-using-azure-synapse-spark-clusters--"},"When using Azure synapse spark clusters -"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Linked service for guzzle shared storage can be removed from synapse workspace ",(0,s.kt)("strong",{parentName:"li"},"[Optional]"))))}p.isMDXComponent=!0}}]);