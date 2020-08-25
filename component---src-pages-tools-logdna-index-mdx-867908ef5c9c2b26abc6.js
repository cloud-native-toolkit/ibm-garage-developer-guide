(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"pC+I":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),o=a("8o2o"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=a("T0C+"),p=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=s("PageDescription"),b=s("AnchorLinks"),m=s("AnchorLink"),g={_frontmatter:p},d=r.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use LogDNA to manage your running application’s logs")),Object(i.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),", including logging. Imagine your application isn’t working right in production even though the environment is fine. What information would you want in your logs to help you figure out what’s wrong with your application? Build logging messages for that information into your application."),Object(i.b)("p",null,"Given that your application is logging, as are lots of other applications and services in your cloud environment, these logs need to be managed and made accessible. LogDNA adds log management capabilities to a Kubernetes cluster and its deployments. The ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," includes an IBM Log Analysis with LogDNA service instance configured with a LogDNA agent installed in the environment’s cluster. Simply by deploying your application into the ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"}),", LogDNA collects the logs, just open the LogDNA web UI from the IBM Cloud dashboard to browse your application’s logs."),Object(i.b)("h2",null,"LogDNA log management"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA"}),"IBM Log Analysis with LogDNA")," explains how to configure and use an instance of the LogDNA service, but the ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," has already done this for you. You can skip these steps about provisioning an instance, installing an agent, and user access."),Object(i.b)("h2",null,"Give it a try"),Object(i.b)("p",null,"Before you start to understanding how to look at your application logs, make sure you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/deployapp"}),"deployed an app")," into your development cluster. Each of the template apps has a logging framework included, this ",Object(i.b)("em",{parentName:"p"},"Git it a Try")," will use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/starterkits/starterkittemplates"}),"template-node-typescript")," as an example."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"LogDNA")," service is already created, bound and configured to listen to logs from your development cluster."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the **LogDNA instance that is named the same as your development cluster")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"All Apps")," and enter the name of your app or narrow the app selection using the suffix that you used to create it\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"605px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQoz6WN0VKDMBRE+f/fUl86VahASbBFCy0wJSSQpA6UwhrS6oMv6piZM7t3s3Ov4y7v4S7vQIIFIn8Bz8yrxwfLhjxhS91fkcQeEqMO26VgaYYmz9EccvD94Yu2KCCL0vCp37nmc49nGfYJhTPUCtA9cDrf6K/zjJrpfkZ3eC85FGdw+q6H1hoDkxhKgbE7YxxHjJfLn5imCUpyOForVNUR7FihFQ3+81RrFkp9gmglpGwheI1GcKPMeiFq1KwCMwdnnZlzXjP7ZzumWxa5zexCGlNEhGC7oaCRjxcaIiYByPrZahh4CH0PUbiyfh0Y9V28JjHKPEVx2OHt5mXD8AHYeQ4VEbpCVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AllAps",title:"AllAps",src:"/static/0c42420d71c996f75d96205ed7b54c39/29a2c/allapps.png",srcSet:["/static/0c42420d71c996f75d96205ed7b54c39/7fc1e/allapps.png 288w","/static/0c42420d71c996f75d96205ed7b54c39/a5df1/allapps.png 576w","/static/0c42420d71c996f75d96205ed7b54c39/29a2c/allapps.png 605w"],sizes:"(max-width: 605px) 100vw, 605px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the app you want to monitor")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will now see just the logs for your app"))),Object(i.b)("h3",null,"Add some logging to your app"),Object(i.b)("p",null,"All the common logging frameworks support the ability publish different types of log statement. The developer can use the log level to help trap specific information or error conditions. The common log levels are  ",Object(i.b)("inlineCode",{parentName:"p"},"info"),", ",Object(i.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(i.b)("inlineCode",{parentName:"p"},"warn")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fatal"),". It is best practice to add log statements to help operations teams and monitoring services to help identify possible issues quickly."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add the following ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," statement and ",Object(i.b)("inlineCode",{parentName:"p"},"error")," condition to the ",Object(i.b)("inlineCode",{parentName:"p"},"greetings")," implementation in your app."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"src=/src/services/hello-world.service",src:"/src/services/hello-world.service"}),"\n  async greeting(name: string = 'World'): Promise<string> {\n    this.logger.info(`Generating greeting for ${name}`);\n\n    this.logger.debug('This is a debug message from inside my API');\n\n    // Only Trigger error if the name passed in matches ERROR\n    if (name === 'ERROR' ) {\n        try {\n          throw new Error('\"Throwing an error');\n        } catch (e) {\n          this.logger.error(e);\n          throw new Error('\"Catching and Throwing errors');\n        } finally {\n          throw new Error('Last chance to trap this Error');\n        }\n    }\n\n    return `Hello, ${name}!`;\n  }\n\n")))),Object(i.b)("p",null,"Now that we have introduced some debug messages, let’s adjust the log level for the application."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To add ",Object(i.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," settings to you app, edit the ",Object(i.b)("inlineCode",{parentName:"p"},"deployment.yaml")," in your ",Object(i.b)("inlineCode",{parentName:"p"},"chart")," folder and add the following ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," value to the ",Object(i.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," env property"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"src=/chart/template-node-typescript/templates/deployment.yaml",src:"/chart/template-node-typescript/templates/deployment.yaml"}),"-env:\n    name: LOG_LEVEL\n    value: debug\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the app changes locally first before deploying"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run start\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Push your changes back to your server repo and wait for your CI pipeline to complete build and deploy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open up the ",Object(i.b)("strong",{parentName:"p"},"LogDNA")," console and narrow the logs to just your app")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the app into a browser: Run ",Object(i.b)("inlineCode",{parentName:"p"},"igc ingress -n {your namespace}")," and select your running app")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPS")," and test the ",Object(i.b)("inlineCode",{parentName:"p"},"/hello/{name}")," API and pass in some data. You have introduced a ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG")," message and an ",Object(i.b)("inlineCode",{parentName:"p"},"ERROR")," into this API logic. Click the ",Object(i.b)("strong",{parentName:"p"},"Execute")," button a few times to simulate some API calls.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Try the API with your own name, and you will see just the ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG")," message appearing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Try the API with ",Object(i.b)("inlineCode",{parentName:"p"},"ERROR")," as the name , and this will trigger the error code we put in the API service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will see the errors appearing in ",Object(i.b)("strong",{parentName:"p"},"LogDNA")," triggered by your application"))),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABUklEQVQoz42S3VLDIBCF8xpJgJTfhJCGJP3RmTpeeeP7P9BxF622M3X04gMW2AMcthrSiDxFbL3GJRmsYw83Lni9XHA8bNjWFWneY5oS1iVTvGBPY45znnHYVoR5hs0ZylpULgTEMSIFi9wbDM7C+Yj30xnWGoJirdF1HXa7XYHHJf6ak9QLpdA0DSrRtmWREw1xTVK0gZFSQgiBlvZxwl9UnNCRgDYGhriezmIsdAuLPqK5woJKSVh6kqfb8ROvgnxQ2za/ijwUZkEeeBKa44ApDRh6j+AdHHtJ81qzBZ83/pdgTY0SEtGRCD+bBHSnyHDykG7JsM/tt0/1nWd1TXF94+E+Ory9bIhDwPH5iLQeEOcFISZ4qgAfeqQ8Fazz9HHuB+MwUMn53tGaLT5XKUWcnzbyTyOfZvQUh3EoP26dK31aUkFxeQh5h6Q/KJUgReEDcNb6JUYz8PwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Error",title:"Error",src:"/static/bba5aa64c3be95d578cf0aea68bf3f49/3cbba/errorcondition.png",srcSet:["/static/bba5aa64c3be95d578cf0aea68bf3f49/7fc1e/errorcondition.png 288w","/static/bba5aa64c3be95d578cf0aea68bf3f49/a5df1/errorcondition.png 576w","/static/bba5aa64c3be95d578cf0aea68bf3f49/3cbba/errorcondition.png 1152w","/static/bba5aa64c3be95d578cf0aea68bf3f49/a9016/errorcondition.png 1430w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Try scaling you pods for the app and calling the API again and come and watch the logs and see where the API call is being routed and which pod is triggering the error")),Object(i.b)("p",null,"There is lots more information around how to use ",Object(i.b)("strong",{parentName:"p"},"LogDNA"),", these links will help:"),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(m,{to:"https://docs.logdna.com/docs/filters",mdxType:"AnchorLink"},"More information on using LogDNA log filtering"),Object(i.b)(m,{to:"https://docs.logdna.com/docs/time",mdxType:"AnchorLink"},"Understand how to jump to a specific timeframe")),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"It’s important to be able to manage the logs of your deployed applications to help identify issues and quickly understand how to resolve them. The Developer Tools configures LogDNA directly to you development cluster to make it easy to get the log you data you need as a developer. Just deploy your application into your ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," and its logs start appearing automatically, open the LogDNA web UI and browse your logs."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tools-logdna-index-mdx-867908ef5c9c2b26abc6.js.map