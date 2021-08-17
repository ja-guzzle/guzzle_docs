(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[3384],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1703:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],s={},i={unversionedId:"How to guides/Datastores/JDBC",id:"How to guides/Datastores/JDBC",isDocsHomePage:!1,title:"JDBC",description:"The Java Database Connectivity (JDBC) API provides universal data access from the Java programming language. Using the JDBC API, you can access virtually any data source, from relational databases.",source:"@site/docs/How to guides/Datastores/JDBC.md",sourceDirName:"How to guides/Datastores",slug:"/How to guides/Datastores/JDBC",permalink:"/docs/docs/How to guides/Datastores/JDBC",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Datastores/JDBC.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Rest",permalink:"/docs/docs/How to guides/Datastores/Rest"},next:{title:"Azure Synapse Analytics",permalink:"/docs/docs/How to guides/Datastores/Azure Synapse Analytics"}},p=[{value:"Steps to create Datastore for JDBC",id:"steps-to-create-datastore-for-jdbc",children:[]},{value:"<strong>If Standard is chosen : </strong>",id:"if-standard-is-chosen-",children:[]},{value:"<strong>If Custom is chosen :</strong>",id:"if-custom-is-chosen-",children:[]}],u={toc:p};function d(t){var e=t.components,s=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Java Database Connectivity")," (JDBC) API provides universal data access from the Java programming language. Using the JDBC API, you can access virtually any data source, from relational databases."),(0,l.kt)("p",null,"The connector can be used for SQL databases, on-premise (SQL Server Managed Instance), as an input data source or output data sink for Spark jobs."),(0,l.kt)("h2",{id:"steps-to-create-datastore-for-jdbc"},"Steps to create Datastore for JDBC"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on the action button (",(0,l.kt)("img",{alt:"image alt text",src:a(933).Z}),") from the ",(0,l.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select JDBC connector. Alternatively user can launch from ",(0,l.kt)("strong",{parentName:"p"},"Create New Datastore "),"link in Activity authoring UI or Copy Data tool.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,l.kt)("a",{parentName:"p",href:"http://http"},"Connection and Environments ")," for more details")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Users have to choose from two options like Custom or Standard.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the connection details properties as described below:"))),(0,l.kt)("h2",{id:"if-standard-is-chosen-"},(0,l.kt)("strong",{parentName:"h2"},"If Standard is chosen : ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vendor"),(0,l.kt)("td",{parentName:"tr",align:null},"Users have to choose sql server from given options like SQL server, MySQL, Oracle, PostgreSQL."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Driver Class"),(0,l.kt)("td",{parentName:"tr",align:null},"Selecting Vendor this property is automatically field by Guzzle"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"Hostname of selected server"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},"On which port selected server is running"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of Database"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username of server"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password (If manual is selected)"),(0,l.kt)("td",{parentName:"tr",align:null},"Password of server"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KeyVault name(if keyvault is chosen)"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of keyvault where password is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secret Name (If keyvault is chosen)"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret name from keyvault where password is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("p",null," Below gif represents created JDBC datastore :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image alt text",src:a(1066).Z})),(0,l.kt)("h2",{id:"if-custom-is-chosen-"},(0,l.kt)("strong",{parentName:"h2"},"If Custom is chosen :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Driver Class"),(0,l.kt)("td",{parentName:"tr",align:null},"Selecting Vendor this property is automatically field by Guzzle"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"Hostname of selected server"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Jdbc URL"),(0,l.kt)("td",{parentName:"tr",align:null},"JDBC URL for connecting to SQL server",(0,l.kt)("br",null)," Example: jdbc:mysql://","<","hostname",">","/ ","<","databaseName",">",(0,l.kt)("br",null)," The URL can optionally contain database name, user name and other connection properties."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username of server"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password (If manual is selected)"),(0,l.kt)("td",{parentName:"tr",align:null},"Password of server"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KeyVault name(if keyvault is chosen)"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of keyvault where password is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secret Name (If keyvault is chosen)"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret name from keyvault where password is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image alt text",src:a(4350).Z})))}d.isMDXComponent=!0},1066:function(t,e,a){"use strict";e.Z=a.p+"assets/images/jdbc_1-0e9b5b8798c4a3753ba1c4624d019635.gif"},4350:function(t,e,a){"use strict";e.Z=a.p+"assets/images/jdbc_2-5ab9391776b8f5f037f27b35356a3971.gif"},933:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAqUlEQVR4XmNIXXPn/2DAMMDw9tPX/4MBwx0U1Lf1/2DAow4ihEcdRAiPOogQHnUQITzqIEKYJAf1bDn3/9D1p/9ffvz2f8XxW2AxEH3l8VswRhYDqQGpBelBNwcfJslB+64+hmsAAZDYozef4XwQG9lQEADpQTcHH4aBoemgQRdl9MCjDiKERx1ECI86iBAedRAhPOogQnjwOgi9jz1QGO4g9FGIgcIwAAAAjDQ1GVtclgAAAABJRU5ErkJggg=="}}]);