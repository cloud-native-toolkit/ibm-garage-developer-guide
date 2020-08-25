(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{X9ru:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return y}));var n=a("k1TG"),o=a("8o2o"),i=(a("q1tI"),a("7ljp")),p=a("013z"),l=a("T0C+"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("PageDescription"),s=c("InlineNotification"),m=c("Video"),d=c("AnchorLinks"),g=c("AnchorLink"),h=c("Tabs"),O=c("Tab"),u=c("Accordion"),j=c("AccordionItem"),N={_frontmatter:r},A=p.a;function y(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(A,Object(n.a)({},N,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"Create a sample application and deploy it with a CI pipeline")),Object(i.b)("h2",null,"Overview"),Object(i.b)("p",null,"The ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," supports end-to-end development and deployment of an application. The instructions below\nwill show you how to do it."),Object(i.b)("p",null,"You can create a new app using one of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/starterkits"}),Object(i.b)(l.a,{name:"templates",mdxType:"Globals"})),". These have been\ncreated to include all the key components, configuration, and frameworks to get you started on creating the code you\nneed for your solutions. The approach for getting started is exactly the same for an environment based on\n",Object(i.b)("strong",{parentName:"p"},"Red Hat OpenShift")," or ",Object(i.b)("strong",{parentName:"p"},"Kubernetes"),"."),Object(i.b)(s,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The instructions provided below lean heavily on the use of the ",Object(i.b)(l.a,{name:"igccli",mdxType:"Globals"})," to both show how the\nCLI works in context and to streamline the process (the reason for creating the CLI in the first place). However, the\nuse of the CLI is in no way required to use the ",Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"}),". If you would prefer to work through these\ninstructions without the use of the CLI, we have provided the equivalent manual steps for each command on\nthe ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/cli"}),"Cloud Native Toolkit CLI")," page.")),Object(i.b)("p",null,"This video demonstrates how to work through the steps to create an application and use a deployment pipeline to install\nit into your development cluster."),Object(i.b)(m,{src:"/videos/deployapp.m4v",type:"video/m4v",poster:"/images/poster.png",mdxType:"Video"}),Object(i.b)("h3",null,"Links"),Object(i.b)(d,{mdxType:"AnchorLinks"},Object(i.b)(g,{to:"#1.-log-into-your-development-cluster-from-the-command-line",mdxType:"AnchorLink"},"1. Log into you Development Cluster from the command line"),Object(i.b)(g,{to:"#2.-create-the-development-namespace",mdxType:"AnchorLink"},"2. Create the development namespace"),Object(i.b)(g,{to:"#3.-open-the-developer-dashboard",mdxType:"AnchorLink"},"3. Open the Developer Dashboard"),Object(i.b)(g,{to:"#4.-create-your-app-in-git",mdxType:"AnchorLink"},"4. Create your app in Git"),Object(i.b)(g,{to:"#5.-clone-your-code",mdxType:"AnchorLink"},"5. Clone your code"),Object(i.b)(g,{to:"#6.-run-the-application-locally",mdxType:"AnchorLink"},"6. Run the application locally"),Object(i.b)(g,{to:"#7.-set-the-namespace-context",mdxType:"AnchorLink"},"7. Set the namespace context"),Object(i.b)(g,{to:"#8.-register-the-app-in-a-devops-pipeline",mdxType:"AnchorLink"},"8. Register your pipeline"),Object(i.b)(g,{to:"#9.-view-your-application-pipeline",mdxType:"AnchorLink"},"9. View your application pipeline"),Object(i.b)(g,{to:"#10.-access-the-running-app",mdxType:"AnchorLink"},"10. Access the running app"),Object(i.b)(g,{to:"#11.-locate-the-app-in-the-web-console",mdxType:"AnchorLink"},"11. Locate the app in the Web Console")),Object(i.b)("h3",null,"1. Log into your Development Cluster from the command line"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make sure you have installed all ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/prereqs"}),"Prerequisites")," before continuing")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open a terminal")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to the development cluster’s CLI (Kubernetes or Red Hat OpenShift)"),Object(i.b)("p",{parentName:"li"},"To do so, navigate to your cluster in the ",Object(i.b)("em",{parentName:"p"},"IBM Cloud console"),", click on the ",Object(i.b)("strong",{parentName:"p"},"Access")," tab, and follow the\ninstructions to log in to the cluster from the command line")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can test that you’re connected to the cluster with the following simple command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc get pods -n tools\n")))),Object(i.b)(s,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The remaining steps assume this step has already been performed. If you stop and then come\nback later it is a good idea to re-run this step again before proceeding")),Object(i.b)("h3",null,"2. Create the development namespace"),Object(i.b)("p",null,"Before getting started, the development namespace/project needs to be created and prepared for the DevOps pipelines.\nThis is something that would typically happen once at the beginning of a project as a development team is formed and assigned to the cluster. This step copies the common ",Object(i.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(i.b)("inlineCode",{parentName:"p"},"configMaps")," to your new namespace. This enables the pipelines to reference the values easily for you project."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc sync {DEV_NAMESPACE} --dev\n")),Object(i.b)("h3",null,"3. Open the Developer Dashboard"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started-day-1/dashboard"}),"Developer Dashboard")," makes it easy for you to navigate to the tools, including a\nsection that allows you to select a set of preconfigured ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/codepatterns/overview"}),Object(i.b)(l.a,{name:"templates",mdxType:"Globals"}))," that\nmake seeding your development project very easy."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open a browser and make sure you are logged into ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com"}),"Github"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the dashboard by running the following command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc dashboard\n")))),Object(i.b)("h3",null,"4. Create your app in Git"),Object(i.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," If you are developing on a shared education cluster, you need to make it easy to identify\nyour app. Please suffix the app name with your initials ",Object(i.b)("inlineCode",{parentName:"p"},"{app name}-{your initials}")," (e.g.\n",Object(i.b)("inlineCode",{parentName:"p"},"stockbffnode-mjp"),") and use the ",Object(i.b)("strong",{parentName:"p"},"Git Organization")," for the shared environment."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," Your browser needs to be logged in to your GitHub account for a template to work. If the link from the\ntile displays the GitHub 404 page, log in and reload the page.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the Developer Dashboard, click on ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(l.a,{name:"templates",mdxType:"Globals"}))," tab")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Pick one of the templates that is a good architectural fit for your application and the language and framework that you prefer to work with."),Object(i.b)("p",{parentName:"li"},"Click on a ",Object(i.b)(l.a,{name:"template",mdxType:"Globals"})," ",Object(i.b)("strong",{parentName:"p"},"Tile")," to create your app github repository from the\ntemplate repository selected. You can also click on the ",Object(i.b)("strong",{parentName:"p"},"Git Icon")," to browse the source template repository and click on the ",Object(i.b)("strong",{parentName:"p"},"Template")," to create the template")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Complete the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"GitHub create repository from template")," process."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Owner"),": Select a validate GitHub organization that you are authorized to create repositories within or the one you were given for the shared cluster (See warning above)"),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Repository name"),": Enter a valid name for you repo, GitHub will help with showing a green tick if it is valid (See warning above)"),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Description"),": Describe your app"),Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Create repository from template")),Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"733px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABzUlEQVQ4y5WTyY7TQBCG/b5cEQcO3EDizo1HgBdBGqIEhJzEEy/xHru9b+2l/6nuzEwY0DDB0qfq6nZV/e0qa2nKoG93cF0PR8K0bOyNWxxMC45zhE2YloUtvWMZJgx9j9udAWO7x+6XDkbx8hFCKKu1bYcoPilOp+SyTlLE5EtC8n03gLn3YVkxXCemIhFsw8XQNI8JJRr+6xF/Q0mW+2QqYZIk8D0PA+eYphmWG0E3HBycAEU9oB+BjgvUw0yBL5fUojDAz80G9tEDyyuYfgb94MH2GdKKKxjhshJlO1DREXzkJKDHOJ0tH4eLwqqqEYQRfbMEskFZXqCkvaKsyM/Ashwpy9Q6z3OioMIMpzxEVqVkI6RFfFFYUqDr+aoJeVGRggnLstwjzlaIp76yT5nmWZ1p4jFA0BVmjOP0LPwFZA+0vFmQsAJJmip1M1WSB9L+ifitm8+h1f2EiGbNC3xUTY2mbVHWNdquO9Oebdf3Vw2WJkdpLEuwMMPUTuTQLgdmGhOZSBZ4SPag4t9jU3hYRyv8iDZYB2tswjVWwQpGvMXIRwwDB6cZvea66spf9K949e0d3n7/iDc3HxSvb97j0+YzyVwu/8iVCe8AEn7mulhG8aYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Template",title:"Template",src:"/static/bd9be19f35d6f0a922612f7beea23413/de7a7/template.png",srcSet:["/static/bd9be19f35d6f0a922612f7beea23413/7fc1e/template.png 288w","/static/bd9be19f35d6f0a922612f7beea23413/a5df1/template.png 576w","/static/bd9be19f35d6f0a922612f7beea23413/de7a7/template.png 733w"],sizes:"(max-width: 733px) 100vw, 733px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("p",null,"The new repository will be created in your selected organization."),Object(i.b)("h3",null,"5. Clone your code"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"With the browser open to the newly created repository, click on ",Object(i.b)("strong",{parentName:"p"},"Clone or download"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the clone ",Object(i.b)("em",{parentName:"p"},"SSH link"),", and use the ",Object(i.b)("inlineCode",{parentName:"p"},"git clone")," command to clone it to your developer desktop machine."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone git@github.com:{gitid}/stockbffnode.git\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change into the cloned directory"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cd stockbffnode\n")))),Object(i.b)("h3",null,"6. Run the application locally"),Object(i.b)("p",null,"Most developers like to run the code natively in local development environment. To do so, follow the instructions listed in the ",Object(i.b)("strong",{parentName:"p"},"README.md")," file to run the code locally. You may be required to install a specific runtime like ",Object(i.b)("strong",{parentName:"p"},"Java"),", ",Object(i.b)("strong",{parentName:"p"},"Node")," or ",Object(i.b)("strong",{parentName:"p"},"Go"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you want to quickly access your git repo you can run a helper command to open the git webpage.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"oc git\n")))),Object(i.b)("h3",null,"7. Set the namespace context"),Object(i.b)("p",null,"Before running these remainder of the instructions commands it is important to set the\nnamespace/project context. (",Object(i.b)("strong",{parentName:"p"},"Notes:")," The ",Object(i.b)("inlineCode",{parentName:"p"},"kubernetes")," command will work for both ",Object(i.b)("inlineCode",{parentName:"p"},"openshift"),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"kubernetes"),".)"),Object(i.b)(h,{mdxType:"Tabs"},Object(i.b)(O,{label:"OpenShift",mdxType:"Tab"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc project {DEV_NAMESPACE}\n"))),Object(i.b)(O,{label:"Kubernetes",mdxType:"Tab"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl config set-context --current --namespace={DEV_NAMESPACE}\n")))),Object(i.b)("h3",null,"8. Register the App in a DevOps Pipeline"),Object(i.b)("p",null,"Up to this point you have the code in a GitHub repository and have cloned it to you local development environment. You\nnow need to register the repository with the continuous integration pipeline. The ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," supports both\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/tools/tekton"}),"Tekton")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/tools/jenkins"}),"Jenkins")," for continuous\nintegration."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start the process to create a pipeline"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc pipeline\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the pipeline type for ",Object(i.b)("strong",{parentName:"p"},"OpenShift")," we recommend ",Object(i.b)("strong",{parentName:"p"},"Tekton")," as its optimized for Kubernetes based environments.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The first time a pipeline is registered in the namespace, the CLI will ask for a username and\n",Object(i.b)("strong",{parentName:"p"},"Personal Access Token")," for the Git repository that will be stored in a secret named ",Object(i.b)("inlineCode",{parentName:"p"},"git-credentials"),". It will\nalso ask for the branch that should be used for the pipeline."),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("strong",{parentName:"p"},"Username"),": Enter your GitHub user id"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("strong",{parentName:"p"},"Personal Access Token"),": Paste your GitHub personal access token"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("strong",{parentName:"p"},"Branch"),": Press enter for the default git branch or type in another branch you want to register")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When registering a ",Object(i.b)("inlineCode",{parentName:"p"},"Tekton")," pipeline, you will also be prompted to select which pipeline you want to use for your application. ",Object(i.b)("inlineCode",{parentName:"p"},"Gradle")," is for Spring and ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," is for Typescript based Starter Kits.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After the pipeline has been created, the command will set up a webhook from the Git host to the pipeline event listener"),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," If the webhook registration step fails it is likely because the Git credentials are incorrect or do not have enough permission in the repository."),Object(i.b)("p",{parentName:"li"},"The pipeline will be registered in your development cluster."))),Object(i.b)("h3",null,"9. View your application pipeline"),Object(i.b)("p",null,"The steps to view your registered pipeline will vary based on type of pipeline (",Object(i.b)("inlineCode",{parentName:"p"},"Jenkins")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Tekton"),") and container platform version."),Object(i.b)(u,{mdxType:"Accordion"},Object(i.b)(j,{title:"Tekton",mdxType:"AccordionItem"},Object(i.b)(h,{mdxType:"Tabs"},Object(i.b)(O,{label:"OpenShift 4.x",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the OpenShift Web Console"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc console\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"345px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACZ0lEQVQ4y31SO2ySURi9PIbGQpWUZ6G8yqOlPEJKo1PtRBAFGijyaO3gSHQ00USNbazRxLi4u+liYnQipaWduhgfq23dsAttgCgEFMrx3kshaNCbnJzvee53/+8nGHDa7Tbno0odH/aL+Lh/1MOngz4+tT9/Pcb7L0XsFSoggwSbrRPOr7YPcOHmW6w82UFyfQvLj7cRW80htZ5H9EEO8bVNJB9uIXQ3ixWaSz/Kg7BpWq0Wms1mD42fvzqC+T2cv/GGFuexuLrBEbmXpSI5LNzPcj++toGVp7u4/mwX6fXNwRP2n8NKG4XSCb6VOzikKJRa3GZcrAHPX7zGy3c7qNKHkUajgUwmg0AohFgshnA0ikuBAILBIEJXLmMxGsFy6iqWknGkT9FvX0sncFZ6Bkq5DHdu3wKp12o4p1RCTwgWKEYoxgwGqJQKaDRjkI6MgNDY/yHgzOpJ5UcVLquVi/nEYiQpIokEllIpPrHf74fb7eaQy+W8UUxrRCLRH2Bxh8MBclz+DpPZjAkaSAsEMFGIhoYgGR6GVCqFRCKBQqHg3G38GwJBZ0Kb3Q5So0+esFg6yX80DBIQCoU9oe5Fk5OTTLCKqakp6LRaeOizLs7Nwev18uTMzAymp6d53ufzYX5+vuez3OzsLGc7m6wrWCpX+KgymQxaKmqmz2dsNBqh0+m4zcCaXC4Xj+n1eoyOjtIlaHq1XJBeRKrVKi8aHx+HlS7HQDfMvhmLqdVqeDwe3mSz2bhAt06lUvFak8kEy+knYzlSr9cRDof5uKy5u1E2DfMnLFY4nU7uM/Tnuj6z2Yaj9B/+DemYHwrcnhh6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud console",title:"IBM Cloud console",src:"/static/1ad3ab71a612e721d4955919cf7424d8/8e149/openshiftconsole.png",srcSet:["/static/1ad3ab71a612e721d4955919cf7424d8/7fc1e/openshiftconsole.png 288w","/static/1ad3ab71a612e721d4955919cf7424d8/8e149/openshiftconsole.png 345w"],sizes:"(max-width: 345px) 100vw, 345px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From menu on the left switch to the ",Object(i.b)("strong",{parentName:"p"},"Developer")," mode")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("em",{parentName:"p"},"dev")," project that was used for the application pipeline registration")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the left menu, select ",Object(i.b)("em",{parentName:"p"},"Pipelines")))),Object(i.b)("p",null,"You will see your application dev ops pipeline now starting to build and once completed will look like the image below."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABv0lEQVQoz42Ry27aQBiFZ9m8AjYGY+LYkMKqXfEeVdUHiQpPkJQki4hkn6JuKkFFUdp1d911F4VNCiYgoOALDsT4cjozlVBBtDDS0Vx0/m/O/ENeaBoOc3mIoghFURCLxSAIAuLx+AaJEKUEFFWDTuuYX1VV6JkMDrLPIacUEP0wj1T6AJKsoFr9gG63j1arhXa7ja7RhWEY6HQ6/5VBvfc/vuPn3S2IqmWRTKv05hQ+Nuown6YYj8bo9/twpjY8z8PWEYWwv9URDTsgiqpDpgkFSUat0cQ8AhxnCtd1MZvN4C08BEGwVT7lBlRkX8twoJigwE+fYTlzns40zdUQUbQyr59FFBqFIQNmlwlvvnzlBm+xgPvowrRM2LaNsTmmqR0+W3TPzpks28LEnMB2bPi+z2tJUlE5UJLTuH5fxcnpMY7eHtG0NVhTi0MeBg8c3Bv2+H74a4jBaMDXvUGPg5dABmPQ1L6G8vkZ9JwGQgiKxSI3hEGIXQd7+grw3XkZ+Zc57D3bQ6lU4ibW8JVebdDf/VwCmSpXV3j95hUKhQIuKpd/EtJG/wu0CcyBLJ0gJdFo3uBxwT7FX/vFnV+N33Szu9Gb+N/QAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/static/bc2fdf9ded3491d12c0b10ab5584a164/3cbba/tektonpipeline.png",srcSet:["/static/bc2fdf9ded3491d12c0b10ab5584a164/7fc1e/tektonpipeline.png 288w","/static/bc2fdf9ded3491d12c0b10ab5584a164/a5df1/tektonpipeline.png 576w","/static/bc2fdf9ded3491d12c0b10ab5584a164/3cbba/tektonpipeline.png 1152w","/static/bc2fdf9ded3491d12c0b10ab5584a164/0b124/tektonpipeline.png 1728w","/static/bc2fdf9ded3491d12c0b10ab5584a164/4ea69/tektonpipeline.png 2304w","/static/bc2fdf9ded3491d12c0b10ab5584a164/df13e/tektonpipeline.png 2720w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)(O,{label:"Kubernetes",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the Developer Dashboard"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl dashboard\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the ",Object(i.b)("inlineCode",{parentName:"p"},"Tekton")," tile to launch the Tekton UI")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select your development project")))))),Object(i.b)(j,{title:"Jenkins",mdxType:"AccordionItem"},Object(i.b)(h,{mdxType:"Tabs"},Object(i.b)(O,{label:"OpenShift 4.x",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the OpenShift Web Console"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc console\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"345px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACZ0lEQVQ4y31SO2ySURi9PIbGQpWUZ6G8yqOlPEJKo1PtRBAFGijyaO3gSHQ00USNbazRxLi4u+liYnQipaWduhgfq23dsAttgCgEFMrx3kshaNCbnJzvee53/+8nGHDa7Tbno0odH/aL+Lh/1MOngz4+tT9/Pcb7L0XsFSoggwSbrRPOr7YPcOHmW6w82UFyfQvLj7cRW80htZ5H9EEO8bVNJB9uIXQ3ixWaSz/Kg7BpWq0Wms1mD42fvzqC+T2cv/GGFuexuLrBEbmXpSI5LNzPcj++toGVp7u4/mwX6fXNwRP2n8NKG4XSCb6VOzikKJRa3GZcrAHPX7zGy3c7qNKHkUajgUwmg0AohFgshnA0ikuBAILBIEJXLmMxGsFy6iqWknGkT9FvX0sncFZ6Bkq5DHdu3wKp12o4p1RCTwgWKEYoxgwGqJQKaDRjkI6MgNDY/yHgzOpJ5UcVLquVi/nEYiQpIokEllIpPrHf74fb7eaQy+W8UUxrRCLRH2Bxh8MBclz+DpPZjAkaSAsEMFGIhoYgGR6GVCqFRCKBQqHg3G38GwJBZ0Kb3Q5So0+esFg6yX80DBIQCoU9oe5Fk5OTTLCKqakp6LRaeOizLs7Nwev18uTMzAymp6d53ufzYX5+vuez3OzsLGc7m6wrWCpX+KgymQxaKmqmz2dsNBqh0+m4zcCaXC4Xj+n1eoyOjtIlaHq1XJBeRKrVKi8aHx+HlS7HQDfMvhmLqdVqeDwe3mSz2bhAt06lUvFak8kEy+knYzlSr9cRDof5uKy5u1E2DfMnLFY4nU7uM/Tnuj6z2Yaj9B/+DemYHwrcnhh6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud console",title:"IBM Cloud console",src:"/static/1ad3ab71a612e721d4955919cf7424d8/8e149/openshiftconsole.png",srcSet:["/static/1ad3ab71a612e721d4955919cf7424d8/7fc1e/openshiftconsole.png 288w","/static/1ad3ab71a612e721d4955919cf7424d8/8e149/openshiftconsole.png 345w"],sizes:"(max-width: 345px) 100vw, 345px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the left-hand menu, select ",Object(i.b)("inlineCode",{parentName:"p"},"Builds")," -> ",Object(i.b)("inlineCode",{parentName:"p"},"Build Configs"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select your project from the drop-down menu at the top")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The registered pipeline should appear in the list")))),Object(i.b)(O,{label:"Kubernetes",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run the command ",Object(i.b)("inlineCode",{parentName:"li"},"oc dashboard")," in your terminal to open your ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/getting-started-day-1/dashboard"}),Object(i.b)(l.a,{name:"dashboard",mdxType:"Globals"}))),Object(i.b)("li",{parentName:"ol"},"Select the Jenkins tool to open the Jenkins dashboard"),Object(i.b)("li",{parentName:"ol"},"Run the command ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl credentials")," in your terminal to get the list of logins for the tools"),Object(i.b)("li",{parentName:"ol"},"Use the Jenkins userid and password to log into the Jenkins dashboard")),Object(i.b)("p",null,"Wait for the pipeline stages to start building. Once the stages have completed, you will see a view similar to the one below."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQY021Pa4+EIBDz///I88VTARFcEHdjFybxch9ukmZKS2egO44Dy7Lgui60uu8bT/3l/9Xjt/6ge7/fOM/z14wxoi3JORP33sM5h33f6ayUQgiBtMabrrWGdZb07tnWBpdS4KwjbG6DWQ11rWrAWIJgAutioKSuUHSXV00KCVP9LqYToga831DOArZxjGHCvDP02wCRJIba58gwB4Yf19fzhN6NGPwIfojKB0xhxppN/fLngxADUkr00jUZGqKSAn8J6LJQSGUFWTV2cMiXhKga+VlXn1PGFosvYKh+NvZqCLYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Jenkins Pipeline",title:"Jenkins Pipeline",src:"/static/7ea60a103966823b810fcea6c7cd116c/3cbba/pipeline.png",srcSet:["/static/7ea60a103966823b810fcea6c7cd116c/7fc1e/pipeline.png 288w","/static/7ea60a103966823b810fcea6c7cd116c/a5df1/pipeline.png 576w","/static/7ea60a103966823b810fcea6c7cd116c/3cbba/pipeline.png 1152w","/static/7ea60a103966823b810fcea6c7cd116c/336fc/pipeline.png 1260w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(i.b)("h3",null,"10. Access the running app"),Object(i.b)("p",null,"Once the pipeline has completed successfully, the app will be deployed into the namespace used when\nregistering the pipeline. To validate the app is running follow these steps:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Be sure the namespace context is set correctly before running the following commands -\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#7.-set-the-namespace-context"}),"set the namespace context")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Retrieve the app ingress endpoint using commands below in your terminal."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc endpoints\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the endpoints listed, select the URL for the repo that was just deployed and press ",Object(i.b)("strong",{parentName:"p"},"Enter")," to open that URL in a web browser and validate the application is working as expected"))),Object(i.b)("h3",null,"11. Locate the app in the web console"),Object(i.b)("p",null,"The build pipeline is configured to build the source code from the Git repository into a container image. This image is stored in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/tools/ibm-cloud-container-registry"}),"Image Registry"),". After that the image is deployed into the same namespace/project within development cluster where the pipeline ran and validated for its health. The steps below will walk through locating the installed application within the Web Console."),Object(i.b)(h,{mdxType:"Tabs"},Object(i.b)(O,{label:"OpenShift 4.x",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the ",Object(i.b)("strong",{parentName:"li"},"OpenShift web console"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc console\n"))),Object(i.b)("li",{parentName:"ol"},"Change to the ",Object(i.b)("strong",{parentName:"li"},"Developer")," view"),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Topology")," menu"),Object(i.b)("li",{parentName:"ol"},"Click on your application deployment in the topology view"),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Overview")," tab"),Object(i.b)("li",{parentName:"ol"},"Increase the number of running pods"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Resource")," tab and then on the pod ",Object(i.b)("strong",{parentName:"li"},"View Logs")," link"),Object(i.b)("li",{parentName:"ol"},"You can see the running state of your application")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.3611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y22TeU8TURTF+zkMKKXKTktZhAgYPrbxT40JMW6hpDuVYjvT6VvmzdbFLsd7X6EV8SU3kzSd3zvnnjOp9a0dbOxksfQ8jezeAS4vL9FoNFCpVFCtVh9NvVZFuXaDcqONny0P3a6AEAJSSriuC8dxkDo6OUP+8BjrW7s4OT1HrVZHkiTwfYMgCOZj7NMgSgYQ8QSj0Qj/O6njswvs3QOP35yjVCoTzKfbu/Z2O6RACAmtBBwZotBK0NY9YDrBdDp9NCm2vPpqA8+WV7Cb2ydgCVEUQkkGKIJra4mBRis0vQBfbiM01cAqGo3GGI/HC+BOLo9d2t3SSga5/SOUymU4rqTx4HYEmncdKAYbDa01DKlXfjC3yA74dz4WuJ3NY3ObQnlBwPwBrspVfPtQRLHQQKnSxuf3X8mmj+viL7QcgY5wIX09B/JlcRwvgBsEy6xt3gMPUbgu4qYt4VGCN5Rk0yObHYWP776jXm/Dp3CajiRohKQ3mKkn1f1+fxbKSmYNqy/XsUyWs6SwSDsMKU3tK1QrLVx9uobTlWi6AoqsaUr/li5yBVuPrGUOcDgczoBpgv0N5FCMCehlhVKtjasfDUgC+UrOgiKFLoUW/B4ipupwpaIoWlhmYPofIP9JUqquJ+y+GCSlss+AXja9HgYEG1K6D2eeslVItZkBDxdASekpaSvzMLwvTjkwwRMQz3yHDOXacH0YGIYhOh51TxlbCQY9ADVVRujwCWj+pbCqvYPX4D6evr2gb7aGJI7Q6vjwVGg/NwvlQGivJozRNT2MJ5MnCnn+ABeBYRTUFx6JAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pods on OpenShift",title:"Pods on OpenShift",src:"/static/b7d8544ffe411f10e3aac1675629e269/3cbba/topology.png",srcSet:["/static/b7d8544ffe411f10e3aac1675629e269/7fc1e/topology.png 288w","/static/b7d8544ffe411f10e3aac1675629e269/a5df1/topology.png 576w","/static/b7d8544ffe411f10e3aac1675629e269/3cbba/topology.png 1152w","/static/b7d8544ffe411f10e3aac1675629e269/0417f/topology.png 1436w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)(O,{label:"Kubernetes",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the ",Object(i.b)("strong",{parentName:"li"},"Kubernetes Dashboard"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl console\n"))),Object(i.b)("li",{parentName:"ol"},"Change to the namespace from ",Object(i.b)("inlineCode",{parentName:"li"},"default")," to either ",Object(i.b)("inlineCode",{parentName:"li"},"dev")," or the namespace you used to deploy your app"),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Deployments")),Object(i.b)("li",{parentName:"ol"},"You should see the deployment of your application"),Object(i.b)("li",{parentName:"ol"},"Click on your application and the corresponding ",Object(i.b)("strong",{parentName:"li"},"Replica Set")),Object(i.b)("li",{parentName:"ol"},"Try scaling the application, click on ",Object(i.b)("strong",{parentName:"li"},"Scale")," in the header, change number of pods to 2 and click ",Object(i.b)("strong",{parentName:"li"},"OK")),Object(i.b)("li",{parentName:"ol"},"Click on one of the ",Object(i.b)("inlineCode",{parentName:"li"},"pod")," instances"),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Logs")),Object(i.b)("li",{parentName:"ol"},"You can see the running state of your application"),Object(i.b)("li",{parentName:"ol"},"Navigate around the console to understand where your deployment, service and pods are running")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y31S2W4UMRCcf4eIRHkJ8AoBBS0hAZFIARTyBkJI8AMIbfaY3dlj7hnPsXMXrt5MEh7AUqntdrtc1bbx7HOKw6sUx18yXPzINTYYXK3w/GKCo0sLrzRefrJw+PEOLzSOLhc4+57iw88c775lgpOvGYydwQL7pzZ2j9d4dIPHZx6enAc4OPPx9NzH3qmHBwMHDzUYd1472H/rYveNg72TLQ7ee5pjBSN054j9Jao81AhQpB6A+gbVvdjh32O719UJDHM2x3gyhe248PxAYt20UCqFtVhibTuSC8MYsc6pJEMUKz1PJBdGClXdCiHPGJZlwTRNuK6nC0JkWYa27ZAkCYbDIUajESaTCYIgQBzH8H1f5oysbZpG6jnSVBMul0vYti1FJCTKspTi2WwG7nueJxcwv9lskOe5oCgKVFWlCds7Qip0HEcI+5s5SDgej0U9SfsLlVJykOAljH8RTqdTUcJikrmuKzaoIIqiWzVURkV1XaPrOiHpI3OMvEAUkpSEfZ/KspDDjJW2SVu0ex/c79GvReFsbmG5sm9tFwUJdKN1n5uWCiCEVM3Rk3NNZVwTHMwbU9PCr9/XoFLXc+CGCl7cwlcN3KhBnG1fnPY5OGdb2B6q6m2TjK0xTHOKa/095vM51s4KTuzrv1YiUjlCtYFKCyHZtqKUOR+sf3GCVkkmPSQR1cn/0h+b4GarLTXaEm3RXm/xf+C5P9r4zsYCMDfqAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pods on IKS",title:"Pods on IKS",src:"/static/5cb1937c1cc8758b1309f80362287dfd/3cbba/podsiks.png",srcSet:["/static/5cb1937c1cc8758b1309f80362287dfd/7fc1e/podsiks.png 288w","/static/5cb1937c1cc8758b1309f80362287dfd/a5df1/podsiks.png 576w","/static/5cb1937c1cc8758b1309f80362287dfd/3cbba/podsiks.png 1152w","/static/5cb1937c1cc8758b1309f80362287dfd/bbae5/podsiks.png 1345w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(s,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Success:")," You now have your application running inside your development cluster building built with a CI pipeline.")),Object(i.b)("p",null,"Having reached this point, we recommend you repeat the process a few more times using different starter kits templates and explore the environment to get familiar. For more information about the tools used by the pipeline, check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/tools"}),"Guides")),Object(i.b)("p",null,"This completes the deployment of your app. The next step is to prepare for Continuous Delivery, Code Analysis, and Artifact Management."))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-deploy-app-index-mdx-31fd8f8f902f3b9dcdcc.js.map