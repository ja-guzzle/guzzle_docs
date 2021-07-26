(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[7659],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8339:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={},l={unversionedId:"How to guides/Administration/Environment config/Setup Shared Storage",id:"How to guides/Administration/Environment config/Setup Shared Storage",isDocsHomePage:!1,title:"Setup Shared Storage",description:"Applicable when using Azure Databricks as compute",source:"@site/docs/How to guides/Administration/Environment config/Setup Shared Storage.md",sourceDirName:"How to guides/Administration/Environment config",slug:"/How to guides/Administration/Environment config/Setup Shared Storage",permalink:"/docs/docs/How to guides/Administration/Environment config/Setup Shared Storage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/How to guides/Administration/Environment config/Setup Shared Storage.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Repository database",permalink:"/docs/docs/How to guides/Administration/Environment config/Repository database"},next:{title:"Timeout and Sync",permalink:"/docs/docs/How to guides/Administration/Environment config/Timeout and Sync"}},c=[{value:"Steps to Enable Shared Storage",id:"steps-to-enable-shared-storage",children:[]},{value:"Steps to edit the Shared Storage configuration",id:"steps-to-edit-the-shared-storage-configuration",children:[]}],u={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Applicable when using Azure Databricks as compute")),(0,r.kt)("p",null,"Guzzle home (also referred as GUZZLE_HOME) stores the binaries and configs on a file system which should be accessible to both the Guzzle VM and the compute where the ",(0,r.kt)("strong",{parentName:"p"},"activities "),"will run",(0,r.kt)("strong",{parentName:"p"},". ")," Below architecture diagram explains this further "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:n(971).Z})),(0,r.kt)("p",null,"When using Azure Databricks compute for running activities, it is mandatory to enable shared storage using Azure blob storage. A shared storage simply means mounting the same Azure blob storage account on both Guzzle VM and Azure Databricks workspace so that both this component can point to the same GUZZLE_HOME which contains the Guzzle configs, log files, and binaries. "),(0,r.kt)("p",null,"When you enable shared storage, Guzzle will do a one time copy of configs and binaries in GUZZLE_HOME directory on Guzzle VM (which is located at /guzzle/guzzlehome). to the blob storage. It will also ensure that Azure blob storage is mounted on Guzzle VM using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-how-to-mount-container-linux"},"Blob fuse")," and automatically mount and unmount when the Guzzle services  or Guzzle VM is restarted. "),(0,r.kt)("p",null,'Similarly the Azure blob storage container is also mounted on Azure Databricks workspace by running "Setup Workspace" wizard on compute UI'),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note: ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once shared storage is enabled, you will not be able to disable it.. "))),(0,r.kt)("h2",{id:"steps-to-enable-shared-storage"},"Steps to Enable Shared Storage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Admin menu from the top navigation bar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Navigate to Environment-> Shared Storage and click on "Enable" ')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter following configuration details:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:n(8135).Z})),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Property "),(0,r.kt)("td",null,"Description"),(0,r.kt)("td",null,"Default Value"),(0,r.kt)("td",null,"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Account Name"),(0,r.kt)("td",null,"Specify the Azure Storage Account Name. "),(0,r.kt)("td",null,"None"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Container"),(0,r.kt)("td",null,"Specify the Azure storage container name"),(0,r.kt)("td",null,"None"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Access Key"),(0,r.kt)("td",null,"Manual: Enter the storage storage access key Key Vault: Specify the Keyvault name and Secret"),(0,r.kt)("td",null,"None"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Container Directory"),(0,r.kt)("td",null,"Specify directory inside the container where GUZZLE_HOME has to be setup You can specify / (or root directory) if the GUZZLE_HOME  has to be setup in the root directory of the container"),(0,r.kt)("td",null,"None"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Force Clean"),(0,r.kt)("td",null,"You can check this option to cleanup existing files in the container before initializing the GUZZLE_HOME If kept unchecked, guzzle_will merge the files of GUZZLE_HOME with the existing ones in that directory"),(0,r.kt)("td",null,"False"),(0,r.kt)("td",null,"No")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Databricks Secret"),(0,r.kt)("td",null,"Below information is utilized when setting up Databricks Workspace to mount the Azure storage account. The details of setting up Databricks Workspace is covered  here Secret Scope: This is the secret scope defined in databricks workspace Secret Key: This is the secret containing the access key for the storage account that is to be used for shared storage Refer to this articles to create Databricks Secret Scope and secrets"),(0,r.kt)("td",null,"None"),(0,r.kt)("td",null,"No"))),(0,r.kt)("p",null,"Guzzle will validate the shared storage configuration ensuring the storage account, container, access key, and folder are valid before enabling the shared storage."),(0,r.kt)("h2",{id:"steps-to-edit-the-shared-storage-configuration"},"Steps to edit the Shared Storage configuration"),(0,r.kt)("p",null,"Guzzle allows you to update Shared storage configuration when there is a change in the access keys, or if a storage account, container or directory."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note: ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When there is change in storage account, container or folder name, Guzzle will copy the configs, logs and Guzzle binaries  from the existing storage account /container container / folder to the new one. This process can take many minutes depending on the size of log files and config directories. "))),(0,r.kt)("p",null,"Below are the steps to edit the existing Shared Storage configuration: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Admin menu from the top navigation bar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to Environment-> Shared Storage ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the required configuration details")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Update button"))))}d.isMDXComponent=!0},971:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setup_shared_storage0-5764a2f8337a5122a7cb0d497b79e1d1.png"},8135:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setup_shared_storage1-6febba73e1e516d813b4b303734f3a9f.png"}}]);