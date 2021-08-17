(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[7659],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8339:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"How to guides/Administration/Environment config/Setup Shared Storage",id:"How to guides/Administration/Environment config/Setup Shared Storage",isDocsHomePage:!1,title:"Setup Shared Storage",description:"Applicable when using Azure Databricks as compute",source:"@site/docs/How to guides/Administration/Environment config/Setup Shared Storage.md",sourceDirName:"How to guides/Administration/Environment config",slug:"/How to guides/Administration/Environment config/Setup Shared Storage",permalink:"/docs/docs/How to guides/Administration/Environment config/Setup Shared Storage",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Administration/Environment config/Setup Shared Storage.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Repository database",permalink:"/docs/docs/How to guides/Administration/Environment config/Repository database"},next:{title:"Timeout and Sync",permalink:"/docs/docs/How to guides/Administration/Environment config/Timeout and Sync"}},c=[{value:"Steps to Enable Shared Storage",id:"steps-to-enable-shared-storage",children:[]},{value:"Steps to edit the Shared Storage configuration",id:"steps-to-edit-the-shared-storage-configuration",children:[]}],u={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Applicable when using Azure Databricks as compute")),(0,o.kt)("p",null,"Guzzle home (also referred as GUZZLE_HOME) is stores the binaries, configs and logs on a file system which should be accessible to both the Guzzle VM and the ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," where the ",(0,o.kt)("strong",{parentName:"p"},"activities ")," will run. Below architecture diagram explains this further "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:n(971).Z})),(0,o.kt)("p",null,"When using Azure Databricks ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," for running activities, it is mandatory to enable shared storage using Azure blob storage. A shared storage simply means mounting the same Azure blob storage account on both Guzzle VM and Azure Databricks Workspace so that both this component can point to the same GUZZLE_HOME which contains the Guzzle configs, logs, and binaries. "),(0,o.kt)("p",null,"The Guzzle Azure Marketplace VM by defualt hosts GUZZLE_HOME on local folder in VM at location /guzzle/guzzlehome. When  enabling the shared storage first time, Guzzle will do a one time copy of configs, binaries and logs from this direcotry  to the blob storage. It will also mount the Azure blob storage is mounted on Guzzle VM using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-how-to-mount-container-linux"},"Blob fuse")," and automatically mount and unmount when the Guzzle services on Guzzle VM is restarted. "),(0,o.kt)("p",null,'Similarly the Azure blob storage container is also mounted on Azure Databricks workspace by running "Setup Workspace" wizard from ',(0,o.kt)("inlineCode",{parentName:"p"},"compute")," UI"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once shared storage is enabled, you will not be able to disable it any more"))),(0,o.kt)("h2",{id:"steps-to-enable-shared-storage"},"Steps to Enable Shared Storage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Admin menu from the top navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Navigate to Environment-> Shared Storage and click on "Enable" ')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter following configuration details:"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:n(8135).Z})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the Azure Storage Account Name."),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Container"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the Azure storage container name"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Manual: Enter the storage storage access key."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key Vault: Specify the Keyvault name and Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Container Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify directory inside the container where GUZZLE_HOME has to be setup",(0,o.kt)("br",null),"You can specify / (or root directory) if the GUZZLE_HOME  has to be setup in the root directory of the container"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Force Clean"),(0,o.kt)("td",{parentName:"tr",align:null},"You can check this option to cleanup existing files in the container before initializing the GUZZLE_HOME",(0,o.kt)("br",null),"If kept unchecked, guzzle_will merge the files of GUZZLE_HOME with the existing ones in that directory"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Databricks Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Below information is utilized when setting up Databricks Workspace to mount the Azure storage account. The details of setting up Databricks ",(0,o.kt)("br",null),"Workspace is covered  here.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Secret Scope: This is the secret scope defined in databricks workspace.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Secret Key: This is the secret containing the access key for the storage account that is to be used for shared storage.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Refer to this articles to create Databricks Secret Scope and secrets"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("p",null,"Guzzle will validate the shared storage configuration ensuring the storage account, container, access key, and folder are valid before enabling the shared storage."),(0,o.kt)("h2",{id:"steps-to-edit-the-shared-storage-configuration"},"Steps to edit the Shared Storage configuration"),(0,o.kt)("p",null,"Guzzle allows you to update Shared storage configuration when there is a change in the access keys, or if a storage account, container or directory."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When there is change in storage account, container or folder name, Guzzle will copy the configs, logs and Guzzle binaries  from the existing storage account /container container / folder to the new one. This process can take many minutes depending on the size of log files and config directories. "))),(0,o.kt)("p",null,"Below are the steps to edit the existing Shared Storage configuration: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Admin menu from the top navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to Environment-> Shared Storage ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the required configuration details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on Update button"))))}p.isMDXComponent=!0},971:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setup_shared_storage0-5764a2f8337a5122a7cb0d497b79e1d1.png"},8135:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setup_shared_storage1-6febba73e1e516d813b4b303734f3a9f.png"}}]);