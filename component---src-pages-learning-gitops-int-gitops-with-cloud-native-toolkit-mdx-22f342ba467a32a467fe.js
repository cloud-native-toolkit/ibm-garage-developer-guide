(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),i=r===n,l=new RegExp(n+"/?(#.*)?$"),s=a.replace(l,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(u.b)(c.Link,{className:N.link,to:""+s},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,m=b.tabs,O=b.title,g=b.theme,N=b.description,x=b.keywords,C=Object(v.a)().interiorTheme,T=Object(c.useStaticQuery)("223705900").site.pathPrefix,w=T?n.pathname.replace(T,""):n.pathname,k=m?w.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",A=g||C;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:A,pageTitle:O,pageDescription:N,pageKeywords:x,titleType:d},Object(u.b)(h,{title:r?Object(u.b)(r,null):O,label:"label",tabs:m,theme:A}),m&&Object(u.b)(f,{slug:w,tabs:m,currentTab:k}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(l.a,null))}},mNDL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("XbGe"),l=a("T0C+"),s=(a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:s},d=c.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This is a work in progress, come back for updates.")),Object(o.b)("p",null,"Steps to install the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," in an existing OpenShift cluster using a declarative approach with ArgoCD.")),Object(o.b)("h2",null,"Pre-requisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Provision an OpenShift cluster."),Object(o.b)("li",{parentName:"ul"},"Install the ",Object(o.b)("inlineCode",{parentName:"li"},"oc")," and ",Object(o.b)("inlineCode",{parentName:"li"},"git")," cli."),Object(o.b)("li",{parentName:"ul"},"Install the ",Object(o.b)("a",{parentName:"li",href:"https://cloudnativetoolkit.dev/getting-started/cli"},"Cloud Native Toolkit CLI"),".")),Object(o.b)("hr",null),Object(o.b)("h2",null,"Installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/multi-tenancy-gitops"},"multi-tenancy-gitops")," repository and clone your fork."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone git@github.com:{gitid}/multi-tenancy-gitops.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the cloned repository."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Search and replace ",Object(o.b)("inlineCode",{parentName:"li"},"cloud-native-toolkit")," GithUb Org references with your {gitid}."),Object(o.b)("li",{parentName:"ul"},"Search and replace ",Object(o.b)("inlineCode",{parentName:"li"},"master")," with the branch you would like to use."),Object(o.b)("li",{parentName:"ul"},"The gitops repository is structured into different layers (ie. ",Object(o.b)("inlineCode",{parentName:"li"},"1-apps"),", ",Object(o.b)("inlineCode",{parentName:"li"},"2-services"),", ",Object(o.b)("inlineCode",{parentName:"li"},"3-infra"),").")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"    .\n├── 0-bootstrap\n├── 1-apps\n├── 2-services\n├── 3-infra\n├── 4-rhacm\n├── README.md\n└── bootstrap.yaml\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Each layer is structured in a similar pattern consisting of an ",Object(o.b)("inlineCode",{parentName:"p"},"argocd")," folder and folder(s) for groupings of resources."),Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"argocd")," folder contains a set of ArgoCD Application YAMLs which references the directory path that contains the YAMLs of the corresponding resources."),Object(o.b)("p",{parentName:"li"},"The other folder(s) under each layer contains the YAMLs of resources such as namespace, operator, tools, etc that can be deployed on the cluster.\nThe menu of resources can be expanded upon to include additional YAMLs."))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"1-apps/\n├── argocd\n└── instances\n\n2-services/\n├── argocd\n├── instances\n└── operators\n\n3-infra/\n├── argocd\n├── clusterrole\n├── consolelink\n├── consolenotification\n└── namespaces\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"argocd")," folder contains an ",Object(o.b)("inlineCode",{parentName:"li"},"active")," and ",Object(o.b)("inlineCode",{parentName:"li"},"inactive")," sub-folder.  To install a specific resource, simply move the ArgoCD Application yaml(s) from the ",Object(o.b)("inlineCode",{parentName:"li"},"inactive")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"active")," folder.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"3-infra/argocd/\n├── active\n└── inactive\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Review the available resources in the repository for each of the 3 layers and customize your repository to select what you would like to deploy by moving the ArgoCD Application."),Object(o.b)("p",{parentName:"li"},"Once you have completed, commit and push your changes to the target branch.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the Red Hat OpenShift GitOps operator using the commands below or directly from the OpenShift Web Console.  An instance of ArgoCD will automatically be created in the ",Object(o.b)("inlineCode",{parentName:"p"},"openshift-gitops")," namespace."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd multi-tenancy-gitops\n\noc apply -f 2-services/operators/openshift-gitops/ -n openshift-operators\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review and apply the custom ClusterRole permissions to the ArgoCD Application Controller service account.  This is required for ArgoCD to create the required Kubernetes resources in target namespaces."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd multi-tenancy-gitops\n\noc apply -f 3-infra/clusterrole/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the bootstrap ArgoCD application."),Object(o.b)("p",{parentName:"li"}," The bootstrap application will create the parent ArgoCD Application for each layer (YAMLs are located in ",Object(o.b)("inlineCode",{parentName:"p"},"0-bootstrap")," folder).\nThe parent ArgoCD Applications will subsequently create child ArgoCD Applications in the ",Object(o.b)("inlineCode",{parentName:"p"},"/argocd/active")," directory."),Object(o.b)("p",{parentName:"li"}," Depending on what resources have been selected, it will take some time for the ArgoCD to deploy the resources."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"oc apply -f bootstrap.yaml -n openshift-gitops\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log on to the ArgoCD Web Console and verify the resources selected in the previous step has been successfully synced and are healty."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"# ArgoCD Web Console URL\necho https://$(oc get route argocd-server -o jsonpath='{ .spec.host }' -n openshift-gitops)\n\n# Admin password\noc extract secret/argocd-cluster-cluster --to=- -n openshift-gitops\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the OpenShift Web Console, verify the resources (ie, operators, namespaces, etc) have been successfully created and/or deployed."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-learning-gitops-int-gitops-with-cloud-native-toolkit-mdx-22f342ba467a32a467fe.js.map