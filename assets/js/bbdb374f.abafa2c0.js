(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[248],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4144:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"azure_single_sign_on",title:"Azure Single Sign On"},s={unversionedId:"how_to_guides/administration/security/azure_single_sign_on",id:"how_to_guides/administration/security/azure_single_sign_on",isDocsHomePage:!1,title:"Azure Single Sign On",description:"Guzzle provides support for configuring Azure Active Directory (AAD) single sign-on (SSO) to allow AAD users to login into Guzzle. Below are the steps to configure Azure Active Directory single sign-on:",source:"@site/docs/how_to_guides/administration/security/Azure Single Sign On.md",sourceDirName:"how_to_guides/administration/security",slug:"/how_to_guides/administration/security/azure_single_sign_on",permalink:"/docs/how_to_guides/administration/security/azure_single_sign_on",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/administration/security/Azure Single Sign On.md",version:"current",frontMatter:{id:"azure_single_sign_on",title:"Azure Single Sign On"},sidebar:"sideBar",previous:{title:"View Service Log",permalink:"/docs/how_to_guides/administration/maintenance/view_service_log"},next:{title:"User Management",permalink:"/docs/how_to_guides/administration/security/user_management"}},c=[{value:"Configuration on Azure Active Directory",id:"configuration-on-azure-active-directory",children:[]},{value:"Enabling Azure SSO in Guzzle",id:"enabling-azure-sso-in-guzzle",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Guzzle provides support for configuring Azure Active Directory (AAD) single sign-on (SSO) to allow AAD users to login into Guzzle. Below are the steps to configure Azure Active Directory single sign-on:"),(0,a.kt)("h2",{id:"configuration-on-azure-active-directory"},"Configuration on Azure Active Directory"),(0,a.kt)("p",null,"To use create a new one that shall be used by Guzzle to perform SSO- ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"for more")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create new app registration "),(0,a.kt)("li",{parentName:"ol"},"Generate a secret with appropriate expiry date"),(0,a.kt)("li",{parentName:"ol"},"Add following API permissions",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Microsoft Graph"),(0,a.kt)("li",{parentName:"ol"},"Azure DevOps (This is required if you plan to enable Azure Devops git integration.)"),(0,a.kt)("li",{parentName:"ol"},"Azure Service Management (for getting user profile details)"))),(0,a.kt)("li",{parentName:"ol"},"In Authentication tab add following:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"add redirect URL (which is provided by Guzzle)\nFor redirect URL guzzle follows below rules,\nhttp://","<","domain of guzzle app",">","/oauth/microsoft. "),(0,a.kt)("li",{parentName:"ol"},"Only Single tenant is supported")))),(0,a.kt)("a",{href:"/img/docs/how-to-guides/administrator/security/sso0.png",target:"_self"},(0,a.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/administrator/security/sso0.png"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can also use existing App registration in AAD and add the redirect URL of the Guzzle instance you are integrating. However, as a best practice, each Guzzle instance should have its own App registration for better segregation"))),(0,a.kt)("p",null,"Guzzle internally uses below scopes for Azure Active Directory single sign-on:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"499b84ac-1321-427f-aa17-267ca6975798/user_impersonation",(0,a.kt)("br",null),"(Azure DevOps)"),(0,a.kt)("td",{parentName:"tr",align:null},"Guzzle create Access token for azure DevOps when users are logged in to achieve this user have to give azure devops scope to Azure Active Directory SSO.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,a.kt)("td",{parentName:"tr",align:null},"To retrieve email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"profile"),(0,a.kt)("td",{parentName:"tr",align:null},"To retrieve username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offline_access"),(0,a.kt)("td",{parentName:"tr",align:null},"To retrieve refresh token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://management.azure.com/user_impersonation"},"https://management.azure.com/user_impersonation")),(0,a.kt)("td",{parentName:"tr",align:null},"To retrieve user profile")))),(0,a.kt)("h2",{id:"enabling-azure-sso-in-guzzle"},"Enabling Azure SSO in Guzzle"),(0,a.kt)("p",null,"Step 1. Go to ",(0,a.kt)("strong",{parentName:"p"},"Manage")," from the top navigation bar."),(0,a.kt)("p",null,"Step 2. Go to Security from the sidebar"),(0,a.kt)("p",null,"Step 3. Click on Azure Single Sign On"),(0,a.kt)("p",null,"Step 4. Click on Enable to enable SSO"),(0,a.kt)("a",{href:"/img/docs/how-to-guides/administrator/security/sso1.png",target:"_self"},(0,a.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/administrator/security/sso1.png"})),(0,a.kt)("p",null,"Step 5 : Enter all below necessary details "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Client Id            < ID of client >")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Client Secret        < You can give client secret as manual or by providing key vault name and secret name >")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tenant Id            < Tenant ID >")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Redirect URI         < URL to which you have to redirect when Guzzle will open. >"))),(0,a.kt)("p",null,"Step 6 : Click on Save  < To save this properties click on save. >"),(0,a.kt)("p",null,"Step 7 : Create User "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once user enabled Single Sign-on User have to create their profile in guzzle as well. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Users which is Under ",(0,a.kt)("strong",{parentName:"p"},"Manage")," Settings Security tab")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on create user")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter all valid necessary details")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Create"))),(0,a.kt)("a",{href:"/img/docs/how-to-guides/administrator/security/sso2.gif",target:"_self"},(0,a.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/administrator/security/sso2.gif"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Once SSO is enabled, the native login gets disabled. User can only log in via SSO"))))}p.isMDXComponent=!0}}]);