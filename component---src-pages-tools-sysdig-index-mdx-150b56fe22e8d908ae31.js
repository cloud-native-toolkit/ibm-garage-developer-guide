(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},EcY3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("XbGe"),s=a("T0C+"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("PageDescription"),p=c("AnchorLinks"),d=c("AnchorLink"),m={_frontmatter:l},u=r.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use Sysdig to monitor your running application")),Object(o.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"},"automate application monitoring"),". Sysdig automates application monitoring, enabling an operator to view stats and collect metrics about a Kubernetes cluster and its deployments. The ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," includes an IBM Cloud Monitoring with Sysdig service instance configured with a Sysdig agent installed in the environment’s cluster. Simply by deploying your application into the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"}),", Sysdig monitors it, just open the Sysdig web UI from the IBM Cloud dashboard to browse your application’s status."),Object(o.b)("h2",null,"Sysdig Monitoring"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig"},"IBM Cloud Monitoring with Sysdig")," explains how to configure and use an instance of the Sysdig service, but the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," has already done most of this for you. You can skip steps 1-3 about user access, provisioning an instance, and installing an agent."),Object(o.b)("h3",null,"Explore your application"),Object(o.b)("p",null,"By default, the Sysdig dashboard opens the ",Object(o.b)("strong",{parentName:"p"},"Explore")," page on its ",Object(o.b)("strong",{parentName:"p"},"Deployments and Pods")," grouping."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select your cluster")),Object(o.b)("p",null,"By default, Sysdig opens its ",Object(o.b)("strong",{parentName:"p"},"Overview by Process")," dashboard, which has panels showing stats about CPU, memory, and networking.\nThis is one of Sysdig’s ",Object(o.b)("strong",{parentName:"p"},"Default Dashboards")," (i.e. built-in dashboards)."),Object(o.b)("p",null,"These are the cumulative totals for all of the pods running in the cluster. Hover over a graph and a key pops up to list\nthe pods and show each one’s color."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Expand your cluster and namespace, then select your deployment")),Object(o.b)("p",null,"This shows the stats just for the pods in your deployment."),Object(o.b)("p",null,"On the ",Object(o.b)("strong",{parentName:"p"},"Dashboard")," page, you can create your own custom dashboards."),Object(o.b)("p",null,"The Getting started tutorial, starting with\n",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step5"},"Step 5: Monitor your environment"),",\ngives some instructions on monitoring, managing, and what to do next."),Object(o.b)("h2",null,"Give it a try"),Object(o.b)("p",null,"Before you start to understanding how to monitor your application instances, make sure you have ",Object(o.b)("a",{parentName:"p",href:"/getting-started/deploy-app"},"deployed an app")," into your development cluster. This ",Object(o.b)("em",{parentName:"p"},"Git it a Try")," uses ",Object(o.b)("a",{parentName:"p",href:"/starterkits/starterkittemplates"},"template-node-typescript")," as an example."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"SysDig")," service is already created, bound and configured to listen to monitoring metrics and events for your development cluster. You can see this in the HTTP overview."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the ",Object(o.b)("strong",{parentName:"li"},"SysDig")," instance that is named the same as your development cluster."),Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("strong",{parentName:"li"},"Dashboards")," > ",Object(o.b)("strong",{parentName:"li"},"HTTP Overview"))),Object(o.b)("p",null,"The dashboard shows stats for all incoming HTTP requests for all apps in the cluster. Browse through these views to get a feel for what they’re showing."),Object(o.b)("h3",null,"View your app’s metrics"),Object(o.b)("p",null,"Take a look at the metrics for your app."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Explore")," page in the left nav menu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the Explore page, select the ",Object(o.b)("strong",{parentName:"p"},"Containerized Apps")," grouping")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Search for your app, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the list of apps, select yours, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"us.icr.io/mooc-team-one/hello-world-mjp:1.0.0-10"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"With your app selected, select the ",Object(o.b)("strong",{parentName:"p"},"Overview by Container")," dashboard"),Object(o.b)("p",{parentName:"li"},"  The Overview by Container dashboard shows metrics for the containers in your app. You will now see just the metrics for your your app. You can view at different levels—from pod to namespace to node to cluster—giving you a fine grain access to you monitoring requirements."),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVQoz4VRy07DMBDM//9RuAS1QcoFpN5or0QKNI3txPH7MTgm4VFRsDTy7o69mtktpFTQxsBaC+scTLpNys1ac97Bew+XuGvYFVvsvUUhZwGlFLYjhMLEJoxshEpx8BHWWIQQ8N+5MI3itb+gJwQDZWAjx3E8YXfe4TAf0PQNqu4erWgxTwJSSSitILjAoAnq/gENaTAokmtSJ4U0qSGUZtveBTzzI8qXEo/zE+pzjbK9Q2c7cMbTG53d0IGCWILqrcJ+2IMYAkZYsp4acj6DT9OnbGsdYog/vXxLtdYZv40gxIgiDzQNP8a4NvxYyvLhGstytmXd4osvFTE3XYobeQt/8e/o/h8KyF1LUQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Metrics View",title:"Metrics View",src:"/static/a02d9787bdccba1fa1f01486dcadf743/3cbba/appview.png",srcSet:["/static/a02d9787bdccba1fa1f01486dcadf743/7fc1e/appview.png 288w","/static/a02d9787bdccba1fa1f01486dcadf743/a5df1/appview.png 576w","/static/a02d9787bdccba1fa1f01486dcadf743/3cbba/appview.png 1152w","/static/a02d9787bdccba1fa1f01486dcadf743/0b124/appview.png 1728w","/static/a02d9787bdccba1fa1f01486dcadf743/4ea69/appview.png 2304w","/static/a02d9787bdccba1fa1f01486dcadf743/4cae6/appview.png 2864w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)("h3",null,"Creating a custom alert"),Object(o.b)("p",null,"SysDig enables monitoring for custom events and alerting for events. Let’s create a simple alert that will send an email when ever the total number of pods in your namespace/project exceeds a specific number. This is helpful to monitor when project is consuming unnecessary resources in the development environment."),Object(o.b)("p",null,"Note: This is not tracking the number of pods in an application, but the number of pods (for all applications) in a namespace/project."),Object(o.b)("h4",null,"Add Notification Channel"),Object(o.b)("p",null,"Create a notification channel, which is how SysDig will send you an alert."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the SysDig dashboard, press the button with your initials at the bottom of the left nav menu, and select ",Object(o.b)("strong",{parentName:"li"},"Settings")),Object(o.b)("li",{parentName:"ul"},"In the Settings page, select ",Object(o.b)("strong",{parentName:"li"},"Notification Channels")),Object(o.b)("li",{parentName:"ul"},"Press ",Object(o.b)("strong",{parentName:"li"},"Add Notification Channel")," and select ",Object(o.b)("strong",{parentName:"li"},"email")," as the channel type"),Object(o.b)("li",{parentName:"ul"},"Enter your business email address and give your channel a name, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"MJP Dev Channel")),Object(o.b)("li",{parentName:"ul"},"Press ",Object(o.b)("strong",{parentName:"li"},"Save")),Object(o.b)("li",{parentName:"ul"},"Using the ",Object(o.b)("inlineCode",{parentName:"li"},"...")," menu, send a test notification and verify that it arrives into your email account")),Object(o.b)("h4",null,"Add Alert"),Object(o.b)("p",null,"Create an alert, which notifies you when an event occurs."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Alerts")," page in the left nav menu"),Object(o.b)("li",{parentName:"ul"},"Press ",Object(o.b)("strong",{parentName:"li"},"Add Alert")," and select ",Object(o.b)("strong",{parentName:"li"},"Metric"))),Object(o.b)("p",null,"The New Alert/Metric wizard enables you to configure a wide range of alerts."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the default title, “New Metric Alert”, and edit it to name the alert, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MJP Dev Metric"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Change the severity to red ",Object(o.b)("inlineCode",{parentName:"p"},"High"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In Section 1: Define of th wizard, complete the fields as shown\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABKUlEQVQoz5WTy26EMAxF+f//6Oe0+y5mitiw6fBIEIRHcDkeOaIpldpIJg/sk2sbipfXN3m/3eTjfpd1XeUvY9/3ZLa3UbgpSNM0UpalOO/0cNs2tRjjj/kcnMMUyANH55xM0yTLssg4juK9l2EY9Jw1M3vA+GDEnRUrkAnnuq414D8pX50XlmLf99K27QH3ukbtPM9aVxxZo9T2ETsUqtq4JbUJSJpAeGE1wzmvVa5uPXz9EvSCBCTVqqrk8fhMQKttCEENiF1gilXAFjmQ/ayQwUsCrZs2rAEGNPUhPIGU4ByTukz9+HxoEOkDt5oBYm/gq4Z8awoLAiwNSxMgM03Cuq5TKJdYc/KPvPjtNhuoB2RAMrDSXP4p+a+U30ggEPvwgTFzftX1Lz7pr7DmRsyjAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Section1",title:"Section1",src:"/static/70e371cf39aeced5c9dfb274d0c24f86/3cbba/createalert.png",srcSet:["/static/70e371cf39aeced5c9dfb274d0c24f86/7fc1e/createalert.png 288w","/static/70e371cf39aeced5c9dfb274d0c24f86/a5df1/createalert.png 576w","/static/70e371cf39aeced5c9dfb274d0c24f86/3cbba/createalert.png 1152w","/static/70e371cf39aeced5c9dfb274d0c24f86/bf02b/createalert.png 1504w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"\nThis alert will trigger after the number of pods (in any/all applications) in your namespace/project raises above 3. This will only trigger for your own developer space, make sure this is set to the one you use for deploying your applications, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"dev-mjp"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In Section 2: Notify of the wizard, switch on the notification channel you created earlier, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MJP Dev Channel"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Set it to notify you every 2 minutes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Notification Subject & Event Title")," field, add your namespace to the end, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"- Dev-MJP namespace"),"\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"754px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVQ4y5WUaU7DMBSEe1cOxl8kLsAZ4A8gFiEVWlplbfY0e9LhjYkjN6hUtTSykybj771xurh9fMbrconV1yfatsXhcFD6b5i/6zXnYRiw4EWe5/AsG7Ztw3VdbLdbBEGAruvQyCadqBLlbYNOXtIG5uZ6vdA3nkIHG8dGmqSIkwRFUSjipmnQikoxS5taDPs/ZCaxIiyrCt++i9V6DddxYFmWIjw35qUrQl4UZYk3z8IuCoUwUS3Y7/eKTvemrmsl3uPMdsxJFaFeLFMxE5NaaPkwRWO9Ng1LAdCGc9IplMD14EkgDIUlO1I6lQgxBynNIHjNgIZ5KPoiF7osyxDHsTKhdNmajmK/K1FRV0gkpLofSzcJuRtD8DwPvu9PStP09+iIKdX3/clwjghpyJejKFJkWZarNlCk1uSceZRIWo2k3ES34MiQZrvdDmEYKir1kLGzVi/P9kY/j0jNlGspiT3jgc7H+aQkZZLORdrJkKV+bzYqYf3phUJN4nMKRL5Ux8AmQ+5QjUlWRqrze+wb52H8pudjMZ2rC8V3Gul1Ka0KpEV37x94cdzfUC4duqq90LpRjBf5p7q6ucX1/QN+AMWJ3i8fi0IqAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Notify",title:"Notify",src:"/static/6b056add61f161a4b7869543554b4b35/5ee13/section2.png",srcSet:["/static/6b056add61f161a4b7869543554b4b35/7fc1e/section2.png 288w","/static/6b056add61f161a4b7869543554b4b35/a5df1/section2.png 576w","/static/6b056add61f161a4b7869543554b4b35/5ee13/section2.png 754w"],sizes:"(max-width: 754px) 100vw, 754px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Press ",Object(o.b)("strong",{parentName:"p"},"Save")))),Object(o.b)("h3",null,"Cause the event"),Object(o.b)("p",null,"Let’s test your alert by causing the event to occur."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Back in your OpenShift or Kubernetes dashboard, navigate to your namespace/project and its deploments"),Object(o.b)("li",{parentName:"ul"},"Select the deployment for your app and increase the number of pods for your app to 4")),Object(o.b)("p",null,"Once your app has started 4 pods/replicas, your namespace/project will be running more than the 3 pods your alert is monitoring for."),Object(o.b)("h3",null,"Acknowledge your event"),Object(o.b)("h4",null,"Watch the container count"),Object(o.b)("p",null,"While starting pods goes very quickly, SysDig monitoring is not instantaneous. It will take 2-20 min for monitoring to detect the event."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Back in the SysDig dashboard, navigate to your app again",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Explore")," > ",Object(o.b)("strong",{parentName:"li"},"Containerized Apps")),Object(o.b)("li",{parentName:"ul"},"Select your app to display the ",Object(o.b)("strong",{parentName:"li"},"Overview by Container Image")," dashboard")))),Object(o.b)("p",null,"Wait and watch for the container count to rise to 4. (Again, this could take 2-20 min. Watch for the times along the bottom of the graph to finally change.)"),Object(o.b)("h4",null,"Watch for the event"),Object(o.b)("p",null,"Look for the event showing that your condition has been detected."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Events")," page in the left nav menu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the search field, enter the name of your app, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Look for an event named “{alert} is Triggered - {namespace} namespace”"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"{alert} is the name of the alert you created, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MJP Dev Metric"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"{namespace} is the name of your namespace/project, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"dev-mjp")),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABCklEQVQoz51R206FQAzk/3/OV6Mhak7kcGeBvd/GdhESEp/sZjLtBjqdbjXNC7wP4Mg54z9x/vfZjKjmRUApfV2mlG6IMRYOIZCwv+UXnIf0Bi/vH6iMMTBaQxLWbYMQAsM4YqbJ52UhMVXEAjW21pZmzM65qyHnKQa81Q9UkRRzipDKoGs7bOsKJWWBs65MmOkbcFNajSYBTw3ung96PCdUbCHnhM1YtNMIoXbsTmO3NLGWpWZwftY2kWUkuBwLuOaomx5VCLGM29FEdf+N5z5j8vIPqMKD2bAkgxUOaz4gkoVGxGvTkuX4a1lb9MOAkfbHe+M9adqrIjBzzTk7Ol/2PCkdnr/olX8ADOUhrXDSOJUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alert",title:"Alert",src:"/static/de3b975f6a8096d1e915380187f8102f/3cbba/alerttriggered.png",srcSet:["/static/de3b975f6a8096d1e915380187f8102f/7fc1e/alerttriggered.png 288w","/static/de3b975f6a8096d1e915380187f8102f/a5df1/alerttriggered.png 576w","/static/de3b975f6a8096d1e915380187f8102f/3cbba/alerttriggered.png 1152w","/static/de3b975f6a8096d1e915380187f8102f/0b124/alerttriggered.png 1728w","/static/de3b975f6a8096d1e915380187f8102f/0d9e4/alerttriggered.png 2284w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",{parentName:"li"},"If you’ve already waited a few minutes until the container count increased to 4, you should see this event immediately. Otherwise, you need to wait (2-20 min?) until monitoring detects the change, triggers the alert, and logs the event."))))),Object(o.b)("h4",null,"Watch for the alerts"),Object(o.b)("p",null,"Once the event is displayed, check your email. You should get an email from ",Object(o.b)("inlineCode",{parentName:"p"},"Sysdig Notifications <ibm-saas-emailer@sysdig.com>")," with the subject “{alert} is Triggered - {namespace} namespace” (same as the event label). It says the metric is ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes.namespace.pod.available.count")," and the value is the number of pods in your namespace/project, at least 4 — plus a bunch of other info about the event."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-email"},"From: Sysdig Notifications <ibm-saas-emailer@sysdig.com>\nTo: \"Matthew J Perrins\"\nSubject: MJP Dev Alert is Triggered - Dev-MJP namespace\n\n                Event Generated:\n    Severity    High\n      Metric    kubernetes.namespace.pod.available.count = 4\n     Segment    kubernetes.cluster.id = '75240dcc-0326-11ea-be8d-eadf5501b087' and kubernetes.cluster.name = 'default' and kubernetes.namespace.name = 'dev-mjp'\n       Scope    kubernetes.namespace.name in dev-mjp\n        Time    11/17/2019 09:29 PM UTC\n       State    Triggered\nActive since    4 minutes\n   More info    View notification\n\n                Triggered by Alert:\n        Name    MJP Dev Alert\n        Team    Monitor Operations\n       Scope    kubernetes.namespace.name in dev-mjp\n  Segment by    kubernetes.cluster.id, kubernetes.cluster.name, kubernetes.namespace.name\n        When    max(max(kubernetes.namespace.pod.available.count)) > 3\nFor at least    1 d\n   More info    View alert\n")),Object(o.b)("p",null,"Wait awhile and you should get more emails notifying you about this event, 1 email about every 10 min. The event is only listed once in the Events view, when the condition was first detected. But SysDig will continue to notify you about the event until you acknowledge it."),Object(o.b)("h4",null,"Acknowledge the event"),Object(o.b)("p",null,"Tell SysDig you’re aware of the event."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the event and press ",Object(o.b)("strong",{parentName:"p"},"Acknowledge")),Object(o.b)("p",{parentName:"li"},"  This will inform the monitoring that an operations team member is working the issue."))),Object(o.b)("p",null,"Alerting will send you one more alert email, subject “{alert} is Acknowledged - {namespace} namespace”, informing you that the event has been acknowledged. Then it won’t send you any more alert emails about this event."),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"It’s important to be able to monitor your deployed applications.\nHere, the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," uses Sysdig Monitoring, but you never had to install or run Sysdig.\nJust deploy your application into the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," and it gets moniotored automatically.\nAfter deploying your application, open the Sysdig web UI and browse the status, including the status\nof your cluster as a whole and your deployment in particular."),Object(o.b)("h3",null,"Learn more"),Object(o.b)("p",null,"Learn more about using SysDig Monitoring:"),Object(o.b)(p,{mdxType:"AnchorLinks"},Object(o.b)(d,{to:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-monitoring",mdxType:"AnchorLink"},"IBM Cloud Monitoring with Sysdig > Monitoring your environment"),Object(o.b)(d,{to:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-dashboards",mdxType:"AnchorLink"},"IBM Cloud Monitoring with Sysdig > Working with dashboards"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/dashboards.html",mdxType:"AnchorLink"},"Sysdig Monitor > Dashboards"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/explore.html",mdxType:"AnchorLink"},"Sysdig Monitor > Explore"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/events.html",mdxType:"AnchorLink"},"Sysdig Monitor > Events"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/metric-alerts.html",mdxType:"AnchorLink"},"Sysdig Monitor > Alerts > Metric Alerts")))}g.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,l=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},y=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),o=i===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,i);return Object(u.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:O.list},i))))))},t}(i.a.Component),A=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=b.tabs,h=b.title,y=b.theme,O=b.description,w=b.keywords,v=Object(N.a)().interiorTheme,k=Object(s.useStaticQuery)("223705900").site.pathPrefix,x=k?n.pathname.replace(k,""):n.pathname,T=m?x.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",S=y||v;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:S,pageTitle:h,pageDescription:O,pageKeywords:w,titleType:d},Object(u.b)(g,{title:i?Object(u.b)(i,null):h,label:"label",tabs:m,theme:S}),m&&Object(u.b)(f,{slug:x,tabs:m,currentTab:T}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-tools-sysdig-index-mdx-150b56fe22e8d908ae31.js.map