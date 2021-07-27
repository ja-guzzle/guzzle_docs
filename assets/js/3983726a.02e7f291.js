(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9817],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return u},kt:function(){return d}});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=c(i),d=a,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return i?n.createElement(m,r(r({ref:e},u),{},{components:i})):n.createElement(m,r({ref:e},u))}));function d(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},923:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=i(2122),a=i(9756),o=(i(7294),i(3905)),r=["components"],l={},s={unversionedId:"How to guides/Author/Git Integration and Version Control",id:"How to guides/Author/Git Integration and Version Control",isDocsHomePage:!1,title:"Git Integration and Version Control",description:"Git Integration",source:"@site/docs/How to guides/Author/Git Integration and Version Control.md",sourceDirName:"How to guides/Author",slug:"/How to guides/Author/Git Integration and Version Control",permalink:"/docs/docs/How to guides/Author/Git Integration and Version Control",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Author/Git Integration and Version Control.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External",permalink:"/docs/docs/How to guides/Author/External"},next:{title:"Schedule",permalink:"/docs/docs/How to guides/Author/Schedule"}},c=[{value:"Git Integration",id:"git-integration",children:[]},{value:"Configured Github Repo",id:"configured-github-repo",children:[]},{value:"Configured git for Azure DevOps Git",id:"configured-git-for-azure-devops-git",children:[]},{value:"Version Control",id:"version-control",children:[{value:"Creating new branch",id:"creating-new-branch",children:[]},{value:"Publish Branch",id:"publish-branch",children:[]},{value:"Pull Branch",id:"pull-branch",children:[]},{value:"Create Pull Request",id:"create-pull-request",children:[]},{value:"Switch to a different Git Provider",id:"switch-to-a-different-git-provider",children:[]},{value:"Commit and Push",id:"commit-and-push",children:[]},{value:"Custom Git Commit Message",id:"custom-git-commit-message",children:[]}]}],u={toc:c};function p(t){var e=t.components,l=(0,a.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"git-integration"},"Git Integration"),(0,o.kt)("p",null,"This article provides information about git integration support in Guzzle and what different git provider users can use in Guzzle and what git actions Guzzle have."),(0,o.kt)("p",null,"Guzzle supports GIT integration to enable code versioning which eventually also protects job definition from getting overwritten in case of concurrent development happening on the same Guzzle job in a shared development environment."),(0,o.kt)("p",null,"Guzzle provides two git provider supports"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Github")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Azure DevOps Git"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once GIT integration is enabled, user will not be able to update make any config change in github")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As a best practice the collaboration branch should have branch policy setup to prevent direct commit"))))),(0,o.kt)("h2",{id:"configured-github-repo"},"Configured Github Repo"),(0,o.kt)("p",null,"Github is a development platform that allows you to host and review code, manage projects and build software alongside millions of other developers from open source to business."),(0,o.kt)("p",null,"You can now integrate Guzzle with Github. The Guzzle Git integration with Github allows you to collaborate with other developers, do version control, versioning of your Guzzle configs (activities, pipelines, datastores, batches)."),(0,o.kt)("p",null,"Guzzle Git integration with Github allows you to use either public or private repositories belonging to individuals or organizations. Using an OAuth application to login to your Github account. Guzzle automatically pulls the repositories in your Github account that you can select. You can then choose the branch that developers in your team can use to do collaboration."),(0,o.kt)("p",null,"Integrating a git repository for your Guzzle installation will entail following:"),(0,o.kt)("p",null,"Step 1 : Registering OAuth application in Github"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For every Guzzle instance (or Guzzle installation) you will be required to register OAuth application in Github ",(0,o.kt)("img",{alt:"image alt text",src:i(6573).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter all the required details namely:"),(0,o.kt)("p",{parentName:"li"},"Application name: guzzle-dev"),(0,o.kt)("p",{parentName:"li"},"Home Page: ",(0,o.kt)("a",{parentName:"p",href:"https://guzzle.asia.cloudapp.azure.com:8082/"},"https://guzzle.asia.cloudapp.azure.com:8082/")),(0,o.kt)("p",{parentName:"li"},"Redirect URL : ",(0,o.kt)("a",{parentName:"p",href:"https://guzzle.asia.cloudapp.azure.com:8082/integration/git"},"https://guzzle.asia.cloudapp.azure.com:8082/integration/git")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(948).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Once Application is registered, Github shall provide you the details of Client ID and Client Secret ",(0,o.kt)("img",{alt:"image alt text",src:i(8995).Z}))),(0,o.kt)("p",null,"Step 2: Creating the repository"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can create a repository in Github or use an existing repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The repository can be created under individual's account or organization")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Guzzle supports both private and public repositories")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a repository, login to Github account, go to Repositories and click New. Ensure the repository is initialized. ",(0,o.kt)("img",{alt:"image alt text",src:i(7962).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Also ensure that user account that shall be used to integrate git with Guzzle should have "Name" defined in public profile: ',(0,o.kt)("img",{alt:"image alt text",src:i(158).Z})," "))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This repository can be either in the same user or organization as the OAuth Application or not. Both OAuth and repository are independent component of the setup"))),(0,o.kt)("p",null,"Step 3 : Integrating Github with Guzzle Git Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to Guzzle")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Goto Author tab from top navigation bar")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on Default Mode ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the provider as Github from dropdown")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Client Id and Client Secret And Click on Enable"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(2112).Z})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This will redirect you to login to Github and authorize the OAuth application: guzzle-dev to be able to access the public and private repositories in your account (personal repository) or those owned by your organization. Permit this access ",(0,o.kt)("img",{alt:"image alt text",src:i(3535).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After OAuth flow (authorization), you will be directed to Guzzle. Enter the repository owner (this could be an individual's account or organization) and tab-out. This will pull a list of repositories that are accessible under that owner."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(2342).Z})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"After you select a repository, Guzzle will prompt you to select the Collaboration branches to be used. Once done click on Save icon to save.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(1764).Z})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Once enabled you will notice in top navigation bar, Guzzle shall show Git setting option on Top navigation bar")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(8989).Z})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Also Guzzle will commit all the existing configs into the github repository and you should see the following folders showing up in the repo. Do take note that Guzzle will only clone the files in $GUZZLE_HOME/conf/default configs (which does not include spark, physical end point and schedules)")),(0,o.kt)("h2",{id:"configured-git-for-azure-devops-git"},"Configured git for Azure DevOps Git"),(0,o.kt)("p",null,"Guzzle with Azure Repos Git integration supports version control and collaboration for work on your Guzzle configs. You can associate a Guzzle with an Azure DevOps Git organization repository for version control, collaboration, versioning, and so on."),(0,o.kt)("p",null,"For configured Guzzle with Azure DevOps Git users need single sign on required."),(0,o.kt)("p",null,"User have to give below permissions for azure devops account from microsoft authentication application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Azure DevOps (guzzle will use on git integration with azure devops git)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Azure Service Management (for getting user profile detail)"))),(0,o.kt)("p",null,"Integrating a git repository for your Guzzle installation will entail following:"),(0,o.kt)("p",null,"Step 1: creating the project and repository in Azure DevOps account."),(0,o.kt)("p",null,"Step 2: integrating Azure DevOps Git with Guzzle."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to Guzzle")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to Author tab from top navigation bar")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on Default Mode ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the provider as Azure DevOps Git from dropdown")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Guzzle automatically pulls a list of tenants from your sso credentials.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Guzzle automatically fetches a list of azure devops accounts belonging to selected tenants. Select Azure DevOps account from dropdown.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select project name, repository name and branch name and click on save to integrate Azure DevOps."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(4236).Z})),(0,o.kt)("h2",{id:"version-control"},"Version Control"),(0,o.kt)("p",null,"Guzzle only version control following items:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Activities"),(0,o.kt)("li",{parentName:"ol"},"Pipeline"),(0,o.kt)("li",{parentName:"ol"},"Batches"),(0,o.kt)("li",{parentName:"ol"},"Data stores"),(0,o.kt)("li",{parentName:"ol"},"Processing Templates")),(0,o.kt)("p",null,"Following are not part of version control:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connection information and env mapping "),(0,o.kt)("li",{parentName:"ol"},"Compute"),(0,o.kt)("li",{parentName:"ol"},"Schedules")),(0,o.kt)("h3",{id:"creating-new-branch"},"Creating new branch"),(0,o.kt)("p",null,"Each Git repository that's associated with a Guzzle has a collaboration branch. (main) is the default collaboration branch. Users can also create feature branches by clicking + New Branch in the Top Nav Git dropdown. Once the new branch Dialogue  appears, enter the name of your feature branch."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(595).Z})),(0,o.kt)("h3",{id:"publish-branch"},"Publish Branch"),(0,o.kt)("p",null,"After you have merged changes to the collaboration branch (main is the default), click Publish to manually publish your code changes in the main branch to the Guzzle default configs.Users can publish branches by clicking Publish Branch in the Top Nav Git dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(3454).Z})),(0,o.kt)("h3",{id:"pull-branch"},"Pull Branch"),(0,o.kt)("p",null,"Users can manually pull branches by clicking Pull Branch in the Top Nav Git dropdown. To get the updated version of the branch from git repo"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(1718).Z})),(0,o.kt)("h3",{id:"create-pull-request"},"Create Pull Request"),(0,o.kt)("p",null,"Users can manually create pull Requests by clicking Create pull request in the Top Nav Git dropdown. This will show appropriate merge request UI of github or azure devops"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(7305).Z})),(0,o.kt)("h3",{id:"switch-to-a-different-git-provider"},"Switch to a different Git Provider"),(0,o.kt)("p",null,"To switch to a different Git Provider, go to the Git Settings from the Top Nav bar. Click on Remove (",(0,o.kt)("img",{alt:"image alt text",src:i(5547).Z}),") of the tab bar. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:i(6374).Z})),(0,o.kt)("h3",{id:"commit-and-push"},"Commit and Push"),(0,o.kt)("p",null,"For every action which requires updated configs to be saved in git, Guzzle takes the latest changes first and puts incoming changes on top of the current changes."),(0,o.kt)("h3",{id:"custom-git-commit-message"},"Custom Git Commit Message"),(0,o.kt)("p",null,"Once Users do git integrations every time when some config was changed, guzzle prompts the user to enter a custom git commit message if the user leaves as empty then by default guzzle takes some internal git commit message."))}p.isMDXComponent=!0},6573:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations0-558f153200ec1b00de24751ab39762cd.png"},948:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations1-c29addbc4106177317141794198cf82a.png"},4236:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations10-0f45c5ac6f1ec8b1bef93afa157df37e.png"},595:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations11-f8fac1e6ebdb242d34dc377e4d7db5b1.png"},3454:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations12-cdd4e9bc7e81a5bf1a78953d2c0a2113.png"},1718:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations13-33d1a665ed0f64d10dc601669617d893.png"},7305:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations14-ec0199495dc0c21679639f272a6d671a.png"},5547:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAmCAYAAADX7PtfAAAA7klEQVR4Xu2RTQ2GMBBE6wAHOAAHKAEHoAAUYAEHKCgOcIATziXDly+huy3hpxAOe3gHNjPzkqLmeTZvoujhaUQYHBEG57Awz3OjlHJSFAXL+7CE4ziaYRgYXdcxCQUZ2gPY9ArpSCi+I8yyjIXvgk2v8A2YUGttmqYJArboPhPWdc2e5SrYovvfFCZJYn1HUbSyl7ksLMvyF9zc8G/A9oYMsreF/9IRoa8rQmdJhHtdETpLItzrnhKmaWr6vrduVVWtbG/IIHta2LatVboDtug+E07TxIpXwRbdZ0KAp4jjmA0cBV3Xc3qFTyLC4CyMXaWD8mWpmQAAAABJRU5ErkJggg=="},6374:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations16-202e729ecd8ceb2119de0a3042c778a2.gif"},8995:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations2-7c7641f2c3c637768788898ea0686b46.png"},7962:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations3-a52df4d9fef72434b67604b87382afac.png"},158:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations4-43bf68b1350688919b05b49c46ba204f.png"},2112:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations5-9967092f1fb9fe3d5789a71e91325505.png"},3535:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations6-09867cc2c2a2b0a4a029bb2241b0aad5.png"},2342:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations7-031a85944bb37d701ef8b43511a85377.png"},1764:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations8-9390b60909ff18f93d1717494ded8fd9.png"},8989:function(t,e,i){"use strict";e.Z=i.p+"assets/images/gitintegrations9-e565abf7048dc3a5d5ca33b11ccf2896.png"}}]);