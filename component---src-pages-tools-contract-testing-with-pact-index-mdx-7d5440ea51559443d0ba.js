(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BxjE:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return h}));var n,i=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("XbGe"),c=a("T0C+"),l=(a("qKvR"),{}),p=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:l},d=s.a;function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use Pact to test your code’s API")),Object(o.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/contract-driven-testing"},"contract-driven testing"),". ",Object(o.b)("a",{parentName:"p",href:"https://docs.pact.io/"},"Pact")," automates contract testing and enables it to be added to a continuous integration pipeline. The ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(o.b)("a",{parentName:"p",href:"/tools/jenkins"},"Jenkins"),", ",Object(o.b)("a",{parentName:"p",href:"/tools/tekton"},"Tekton"),", etc.) includes a Pact stage. Simply by building your app using the CI pipeline, your code’s contract gets tested, just open the Pact UI to browse the results."),Object(o.b)("h2",null,"What is contract testing"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Contract testing")," is a testing discipline that ensures two applications (a consumer and\na provider) have a shared understanding of the interactions or the ",Object(o.b)("em",{parentName:"p"},"contract")," between them."),Object(o.b)("p",null,"The Pact framework has been selected for the provided tool set. Pact is a\nconsumer-driven contract testing framework. More details can be found here -\n",Object(o.b)("a",{parentName:"p",href:"https://docs.pact.io/"},"Pact overview"),". The framework has been built into the ",Object(o.b)(c.a,{name:"templates",mdxType:"Globals"}),"\nand a Pact Broker instance is provisioned in the cluster along with the other tools."),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"consumer-driven contract testing")," it is the consumer who defines the ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," in terms of the\nexpected interactions, the data structure, and the expected responses. That ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," can then be used\non the consumer-side to mock the interactions and validate the consumer behavior. More importantly,\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," can be shared with the provider of the interaction so that the provider’s responses\ncan be validated to ensure the consumer’s expectations are met."),Object(o.b)("p",null,"In the Pact framework, the contract is called a ",Object(o.b)("inlineCode",{parentName:"p"},"pact"),". A ",Object(o.b)("inlineCode",{parentName:"p"},"pact")," consists of one or more\n",Object(o.b)("inlineCode",{parentName:"p"},"interactions"),". Each ",Object(o.b)("inlineCode",{parentName:"p"},"interaction")," has the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Given a *state* of {state}\n\n*upon receiving* a {description} request\n\n*with request* parameters\n- HTTP method\n- path\n- headers\n- body\n\n*will respond with* values like\n- status\n- headers\n- body\n")),Object(o.b)("p",null,"where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"{state} is an optional string that describes the initial state. This value can be used by the\nprovider during testing to make sure the preconditions are met"),Object(o.b)("li",{parentName:"ul"},"{description} is a unique description of the interaction"),Object(o.b)("li",{parentName:"ul"},"the request parameters can contain any values that describe the interaction"),Object(o.b)("li",{parentName:"ul"},"the response contains the relevant information for the consumer. The response values can be exact values\nor using matchers for type, regular expressions, etc")),Object(o.b)("h2",null,"Consumer"),Object(o.b)("p",null,"Using the Pact framework libraries in conjunction with the unit testing framework on the consumer, the\n",Object(o.b)("inlineCode",{parentName:"p"},"pact")," for the interaction between the consumer and provider is generated and validated. As part of the\npact test setup, a Pact server is started and configured with the expected interactions. All of the consumer\nservice invocations are directed at the Pact server which provides mock responses based on the\ninteractions defined by the ",Object(o.b)("inlineCode",{parentName:"p"},"pact"),". At the end of the test, if all the interactions completed successfully\na file containing the pact definition is generated."),Object(o.b)("p",null,"The following diagram gives an overview of the consumer interactions:\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"607px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVQ4y5WU14pDMQxE8///lhAI5CGQ3nvvZZYjmOBbdmENTnRteTSSxq4oN+bzuarVqur1uhqNhp7Ppx6Ph2q1mjqdjlqtlvb7vcrG5/NR5Xg8ypPD1+tVi8UigJfLZYC93++wAWLigy9nzudzTHwYFRybzabG47Hu97tut5tms5kmk4m2261er1c4rtdrjUajCIYfs9/vRxabzSa+AxAGRD2dThGVSUSiw+RyucTENiPO4Hc4HLTb7eKbdAOQH9iwATsDEICoMJ9Op2GzBjATX4jALlNDDCI7godT/WuNusHYYF9A6K9WKw2Hw2CL7ZrgBBCHWbOdgtrvmzK0KTppkwY2wKTFHnIZDAZqt9vRCAKTNr6cKTBkMZ8OHYY56/4HxA0xY/wKNXSn0lpxuEy4+QF4acpIgIjYvV4vUiNNOgw4xUezAFAKszWRDCC0cXIDAPYNcboMRI1vt9uNehKcBhZqyAYac70A5Fb4ShkcQDSKzMgIf/4LNSQqjl7ksG8ONpN1AuUlY/aZlKkN9fKDgGQAzDfCAZye2RdSBoRa2IF6psI2qAFThmmXM7IxwF9Xj8MpY+xSQEsAEDcGli46TYANa+66hZ0nEoC8KDSGTT9ZgABAPdEiNmt+yvza8HayZm0GIBum/p/XhsElQE5M+vDVYdqEsu4xrMf0m+wKKSPglGFZ937rMqmmfj/DN7ML6dM7VAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Pact consumer interactions",title:"Pact consumer interactions",src:"/static/39dbe818c7125f745c85a2314aa88d5b/4d9f3/PactFramework-consumer.png",srcSet:["/static/39dbe818c7125f745c85a2314aa88d5b/7fc1e/PactFramework-consumer.png 288w","/static/39dbe818c7125f745c85a2314aa88d5b/a5df1/PactFramework-consumer.png 576w","/static/39dbe818c7125f745c85a2314aa88d5b/4d9f3/PactFramework-consumer.png 607w"],sizes:"(max-width: 607px) 100vw, 607px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"An example pact test on a Typescript consumer using the jest testing framework is provided below. It has\nbeen broken into several parts."),Object(o.b)("h3",null,"Pact server config"),Object(o.b)("p",null,"At the beginning of the test file, the pact server is configured and started in the\n",Object(o.b)("inlineCode",{parentName:"p"},"beforeAll()")," block. The ",Object(o.b)("inlineCode",{parentName:"p"},"afterAll()")," block finalizes the pacts by writing them out\nto a file and stopping the pact server."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  const port = 1234;\n  const baseUrl = `http://localhost:${port}`;\n  let pact: Pact;\n  beforeAll(() => {\n    pact = new Pact({\n      consumer: consumerName,\n      provider: providerName,\n      logLevel: 'error',\n      port,\n    });\n\n    return pact.setup();\n  });\n\n  afterAll(() => {\n    return pact.finalize()\n      .catch(err => console.error('Error finalizing pact', err));\n  });\n")),Object(o.b)("h3",null,"Setup the service"),Object(o.b)("p",null,"Next, an instance of the component that will be tested is loaded and configured with the\npact server host and port as the base url used for the interactions. In this example,\nthe consumer is using the ",Object(o.b)("inlineCode",{parentName:"p"},"typescript-ioc")," library to inject the ",Object(o.b)("inlineCode",{parentName:"p"},"baseUrl")," config value\ninto the service."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  let service: SampleApi;\n  beforeAll(() => {\n    Container\n      .bind(MyServiceConfig)\n      .provider({get: () => ({baseUrl})});\n    \n    service = Container.get(SampleService);\n  });\n")),Object(o.b)("h3",null,"Define and test the interaction"),Object(o.b)("p",null,"For each interaction with the provider, a test similar to the one provided below is created. In\nit, the Pact framework is used to define the interaction. The ",Object(o.b)("inlineCode",{parentName:"p"},"addInteraction()")," publishes the\ninteraction to the Pact server so that it can be used to provide a mock response when the\nrequest is made."),Object(o.b)("p",null,"The mock response is then used to validate the behavior of the component that is being tested.\nThe example below is simple and passes the provider response directly through the service api\nbut in more sophisticated examples the value would be transformed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  describe('given createWidget()', () => {\n    context('when called with valid request', () => {\n      const widgetRequest = {...};\n      const widgetResponse = {...};\n      \n      beforeEach(() => {\n        return pact.addInteraction({\n          uponReceiving: 'a valid widget request',\n          withRequest: {\n            method: 'POST',\n            path: '/widgets',\n            headers: {\n              'Content-Type': 'application/json',\n              'Accept': 'application/json',\n            },\n            body: widgetRequest,\n          },\n          willRespondWith: {\n            status: 200,\n            headers: {\n              'Content-Type': Matchers.regex({\n                generate: 'application/json', matcher: 'application/json.*'\n              }),\n            },\n            body: Matchers.like(widgetResponse),\n          },\n        });\n      });\n\n      test('then return 200 status', async () => {\n        expect(await service.createWidget(widgetRequest)).toEqual(widgetResponse);\n      });\n    });\n  });\n")),Object(o.b)("h2",null,"Provider"),Object(o.b)("p",null,"The provider uses the Pact framework to verify the running server against the ",Object(o.b)("inlineCode",{parentName:"p"},"pact"),", either\none started locally as part of the test or another instance running elsewhere. The interactions\nin the pact are sent to the provider by a mock consumer in the Pact framework and the results\nare verified against the expected results defined by the pact."),Object(o.b)("p",null,"As an optional configuration for the verification process, an endpoint can be provided that handles\nthe state information in the pact in order to ensure the preconditions for the test are met. (E.g.\nstate=“given an empty database”). In order for these tests to be repeatable, it is often advisable\nto stand up a clean backend to run the pact tests when the tests start and tear it down when the\ntests are completed. For example, if a provider interacts with a Cloudant database point the\ntest provider at a new database instance for the tests."),Object(o.b)("p",null,"The following diagram shows the interactions for the pact provider:\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"401px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"107.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqElEQVQ4y5WUh6oCQQxF9///RfBDVLCgKHax9969jzMwMu7OlhcISjK5m9yUoF6vq9lsqlKpaDab6XA4CPl8PvKJtW+3W63Xa41GI/V6Pd1uN+VyOQWNRkPFYlGlUkmbzUan0ykTIB9Gu92uSej5fCqfzyu4Xq/a7XY6n8+6XC56vV6ZAO/3u4glxv4nywDn4/HwBsUBuzZibRLIDyAPXfUBhu1k51ZlAF3u4jJJKj0CuFgsVKvV1Ol01Gq11G63M3fbC0jr6RROykff73ciDYmA/X5fx+MxkoGPvzA4nY0ATqdTw6NP3Ezj/O4bA8jEsyXMFJmizCX2crmsarVqfuGV5tk3KNUxgxFAMuRL8MfUo5ZPyoIra7c+Sp1MJiY+AhjmMKvYSrwZholHWEvKItD6qcQ2giOxWq1+AZfLpYbDoSkDHl0lgKZRAaW7ynv87kH5ZujblCwSntnv6kEuXxuPx5rP5yZrbJQTnr/UwSawUCgYEMpjFVHAXX58V8gLyMW1gUl7m3mXB4PBt/Xwkba/qYD7/d444nb439eGTsUd1DRA92Jj+wPV6LkaWOi4KAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Pact provider interactions",title:"Pact provider interactions",src:"/static/5b87a6af5243f5b34ff2164e1f6370d6/bcc02/PactFramework-provider.png",srcSet:["/static/5b87a6af5243f5b34ff2164e1f6370d6/7fc1e/PactFramework-provider.png 288w","/static/5b87a6af5243f5b34ff2164e1f6370d6/bcc02/PactFramework-provider.png 401w"],sizes:"(max-width: 401px) 100vw, 401px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("h2",null,"Pact Broker"),Object(o.b)("p",null,"One of the underpinning requirements of the pact verification process is the ability to make the\npact files generated by the consumer available to the provider. When the pact verification is run\nin an automated pipeline this is difficult without an intermediary. Within the Pact framework,\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"Pact Broker")," provides the facility for consumers and providers to share the pact definitions\nwith minimal dependencies between the systems."),Object(o.b)("p",null,"Additionally, the Pact Broker provides a place to define webhooks to trigger the provider build\nprocess when the pact definition changes and a way record and visualise the results of the\nverification process. The high-level interaction is shown below:\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"481px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVQoz21SaVODMBTk//8Zx89ateKX2lKopYc6vWhBLDeEs4Q1YQpDGXfm5XjJ22Q3EZTTFNJhDFmTMNFGcIgFjqqq/u0prUDLC7RzjLmWY7YnULYRVnqBgWJBkPYSBvIjxIUIWZ/Cie2WoE9WliXCMEISE3webKx/KN7XFoayhi+zxNPMgXBwd2hipS8QZeENSXdMCGnHQUKxP+fY/aY4OhecWMx3AQR0UOQFkiS5IWoI8jxHFEXwPK8OjpTtzbOs2V23QlPEoygKOI7TFuCap5QiCsNasuu68H2/zoUsx8/jvjYcQtenIAig6zo8VlTLu56dpCkKRtYFX+dEXdSEfZ9a+STCUZrAWC5hqnOkm2/E2w0uWYqMyeeE/LaGYcA0zVaV0H/NiknhsyrwYY1HWKkqtuIQ/usL7DcRoW2BxHEtOWY9l829bbwX+lduvwiTH0tjbAYPUO/vYDwPUHwooEx+428fvPYPpnmzVlXw9CsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Pact broker interactions",title:"Pact broker interactions",src:"/static/a7a882a6504c5c1ab5ba0e4cf7d13345/64c99/PactFramework-pactbroker.png",srcSet:["/static/a7a882a6504c5c1ab5ba0e4cf7d13345/7fc1e/PactFramework-pactbroker.png 288w","/static/a7a882a6504c5c1ab5ba0e4cf7d13345/64c99/PactFramework-pactbroker.png 481w"],sizes:"(max-width: 481px) 100vw, 481px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("h2",null,Object(o.b)(c.a,{name:"templates",mdxType:"Globals"})),Object(o.b)("p",null,"The ",Object(o.b)(c.a,{name:"templates",mdxType:"Globals"})," have been built with the frameworks necessary to generate and publish pacts for\napi consumers and verify against pacts and publish the results for api providers. The pipelines\nwill do all the publishing and verification against Pact Broker if an instance of Pact Broker has\nbeen configured within the cluster."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can review you pact contracts using the ",Object(o.b)("strong",{parentName:"p"},"Pact")," Dashboard.app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("a",{parentName:"p",href:"/getting-started-day-1/dashboard"},Object(o.b)(c.a,{name:"dashboard",mdxType:"Globals"}))," to open the ",Object(o.b)("strong",{parentName:"p"},"Pact")," dashboard"))))}h.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),p=a("TSYQ"),b=a.n(p),d=a("QH2O"),h=a.n(d),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:b()(h.a.pageHeader,(t={},t[h.a.withTabs]=r.length,t[h.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},v=a("dI71"),w=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,i);return Object(m.b)("li",{key:e,className:b()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+l},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},i))))))},t}(i.a.Component),j=a("MjG9"),O=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,p=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,h=p.tabs,g=p.title,v=p.theme,w=p.description,x=p.keywords,y=Object(O.a)().interiorTheme,k=Object(s.useStaticQuery)("223705900").site.pathPrefix,N=k?n.pathname.replace(k,""):n.pathname,P=h?N.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",T=v||y;return Object(m.b)(l.a,{tabs:h,homepage:!1,theme:T,pageTitle:g,pageDescription:w,pageKeywords:x,titleType:d},Object(m.b)(u,{title:i?Object(m.b)(i,null):g,label:"label",tabs:h,theme:T}),h&&Object(m.b)(A,{slug:N,tabs:h,currentTab:P}),Object(m.b)(j.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:b})),Object(m.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-tools-contract-testing-with-pact-index-mdx-7d5440ea51559443d0ba.js.map