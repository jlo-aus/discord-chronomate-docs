(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),l=(n(0),n(92)),c={id:"cmds",title:"Commands"},o={unversionedId:"cmds",id:"cmds",isDocsHomePage:!1,title:"Commands",description:"The default prefix for Chronomate is .. All commands listed here are shown with that prefix ie. .ping.",source:"@site/docs/cmds.md",slug:"/cmds",permalink:"/discord-chronomate-docs/docs/cmds",version:"current",sidebar:"someSidebar",previous:{title:"Setup Guide",permalink:"/discord-chronomate-docs/docs/setup"},next:{title:"Permissions",permalink:"/discord-chronomate-docs/docs/perms"}},b=[{value:"Admin",id:"admin",children:[{value:"<code>.config</code>",id:"config",children:[]},{value:"<code>.logging [channel]</code>",id:"logging",children:[]},{value:"<code>.prefix [prefix]</code>",id:"prefix",children:[]},{value:"<code>.timezone [timezone]</code>",id:"timezone",children:[]}]},{value:"Icon",id:"icon",children:[{value:"<code>.channel [channel]</code>",id:"channel",children:[]},{value:"<code>.geticon</code>",id:"geticon",children:[]},{value:"<code>.seticon &lt;message&gt;</code>",id:"seticon",children:[]}]},{value:"Icon Tasks",id:"icon-tasks",children:[{value:"<code>.task toggle [bool]</code>",id:"task-toggle",children:[]},{value:"<code>.task add &lt;month&gt; &lt;day&gt; &lt;message&gt;</code>",id:"task-add",children:[]},{value:"<code>.task del &lt;month&gt; &lt;day&gt;</code>",id:"task-del",children:[]},{value:"<code>.task list</code>",id:"task-list",children:[]},{value:"<code>.task next</code>",id:"task-next",children:[]},{value:"<code>.task clean</code>",id:"task-clean",children:[]},{value:"<code>.task reset</code>",id:"task-reset",children:[]}]},{value:"Misc",id:"misc",children:[{value:"<code>.ping</code>",id:"ping",children:[]},{value:"<code>.uptime</code>",id:"uptime",children:[]}]}],r={toc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Default Prefix")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The default prefix for Chronomate is ",Object(l.b)("inlineCode",{parentName:"p"},"."),". All commands listed here are shown with that prefix ie. ",Object(l.b)("inlineCode",{parentName:"p"},".ping"),". "),Object(l.b)("p",{parentName:"div"},"If you have changed the prefix using ",Object(l.b)("inlineCode",{parentName:"p"},".prefix")," then you will need to use that prefix instead. "),Object(l.b)("p",{parentName:"div"},"Alternate to a prefix you can mention the bot ie. ",Object(l.b)("inlineCode",{parentName:"p"},"@Chronomate ping")))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Some command inputs are required and some are optional. Required inputs are wrapped using ",Object(l.b)("inlineCode",{parentName:"p"},"<>")," while optional inputs are wrapped using ",Object(l.b)("inlineCode",{parentName:"p"},"[]"),"."))),Object(l.b)("h2",{id:"admin"},"Admin"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Permissions")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Admin commands can only be used by users with the ",Object(l.b)("inlineCode",{parentName:"p"},"Administrator")," permission."))),Object(l.b)("h3",{id:"config"},Object(l.b)("inlineCode",{parentName:"h3"},".config")),Object(l.b)("p",null,"Show the server config:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Prefix")," - The custom prefix set for the server"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Timezone")," - The timezone used for icon tasks"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Icon Tasks Enabled")," - Whether icon tasks should be executed when they occur"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Icon Channel")," - The channel where icon images are stored")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"logging"},Object(l.b)("inlineCode",{parentName:"h3"},".logging [channel]")),Object(l.b)("p",null,"Set the channel which the bot can send log messages to."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Optional argument ",Object(l.b)("inlineCode",{parentName:"li"},"[channel]")," accepts text channels",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example ",Object(l.b)("inlineCode",{parentName:"li"},".channel #logs"))))),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"[channel]")," is left blank the log channel will be cleared."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"prefix"},Object(l.b)("inlineCode",{parentName:"h3"},".prefix [prefix]")),Object(l.b)("p",null,"Change the server's prefix."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"[prefix]")," is left blank the prefix is reset to the default."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"timezone"},Object(l.b)("inlineCode",{parentName:"h3"},".timezone [timezone]")),Object(l.b)("p",null,"Set the timezone for the server, used for icon tasks. Default is Coordinated Universal Time (UTC)"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"[timezone]")," is left blank the timezone is reset to UTC."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Optional argument ",Object(l.b)("inlineCode",{parentName:"li"},"[timezone]")," accepts timezones from the ",Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Tz_database"},"TZ Database")," only. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},".timezone Australia/Sydney"))))),Object(l.b)("p",null,"A full list of TZ Databse names can be found here: ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones - Wikipedia")),Object(l.b)("h2",{id:"icon"},"Icon"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Permissions")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Icon commands can only be used by users with the ",Object(l.b)("inlineCode",{parentName:"p"},"Manage Server")," permission, which would be required to change the server icon traditionally."))),Object(l.b)("h3",{id:"channel"},Object(l.b)("inlineCode",{parentName:"h3"},".channel [channel]")),Object(l.b)("p",null,"Set the chanel which will be used to stored icons."),Object(l.b)("p",null,"If this is not set then the icon tasks will not be able to locate the icons."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Optional argument ",Object(l.b)("inlineCode",{parentName:"li"},"[channel]")," accepts text channels",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example ",Object(l.b)("inlineCode",{parentName:"li"},".channel #general"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"geticon"},Object(l.b)("inlineCode",{parentName:"h3"},".geticon")),Object(l.b)("p",null,"Show the current icon for this server."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"seticon"},Object(l.b)("inlineCode",{parentName:"h3"},".seticon <message>")),Object(l.b)("p",null,"Set the server icon to one stored in the icon channel."),Object(l.b)("p",null,"Required argument ",Object(l.b)("inlineCode",{parentName:"p"},"<message>")," will accept either the message ID or the message link."),Object(l.b)("h2",{id:"icon-tasks"},"Icon Tasks"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Permissions")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Icon task commands can only be used by users with the ",Object(l.b)("inlineCode",{parentName:"p"},"Manage Server")," permission, which would be required to change the server icon traditionally."))),Object(l.b)("h3",{id:"task-toggle"},Object(l.b)("inlineCode",{parentName:"h3"},".task toggle [bool]")),Object(l.b)("p",null,"Enable or disable the automatic icon tasks. Default is off."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"[bool]")," is left blank the setting will toggle between on or off."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Optional argument ",Object(l.b)("inlineCode",{parentName:"li"},"[bool]")," accepts valid boolean expressions.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"To enable: ",Object(l.b)("inlineCode",{parentName:"li"},"yes"),",",Object(l.b)("inlineCode",{parentName:"li"},"on"),",",Object(l.b)("inlineCode",{parentName:"li"},"enable"),",",Object(l.b)("inlineCode",{parentName:"li"},"true")," or ",Object(l.b)("inlineCode",{parentName:"li"},"1")),Object(l.b)("li",{parentName:"ul"},"To disable: ",Object(l.b)("inlineCode",{parentName:"li"},"no"),",",Object(l.b)("inlineCode",{parentName:"li"},"off"),",",Object(l.b)("inlineCode",{parentName:"li"},"disable"),",",Object(l.b)("inlineCode",{parentName:"li"},"false")," or ",Object(l.b)("inlineCode",{parentName:"li"},"0"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"task-add"},Object(l.b)("inlineCode",{parentName:"h3"},".task add <month> <day> <message>")),Object(l.b)("p",null,"Add a new task on the specified month and day. Tasks set on on 29th Feb will only occur on leap years."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Required argument ",Object(l.b)("inlineCode",{parentName:"li"},"<month>")," accepts a number 1-12 or a month name in short or full form. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"3"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Mar")," or ",Object(l.b)("inlineCode",{parentName:"li"},"March")))),Object(l.b)("li",{parentName:"ul"},"Required argument ",Object(l.b)("inlineCode",{parentName:"li"},"<day>")," accepts valid days for the month chosen. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"1"),"-",Object(l.b)("inlineCode",{parentName:"li"},"31")," for the month of March"))),Object(l.b)("li",{parentName:"ul"},"Required argument ",Object(l.b)("inlineCode",{parentName:"li"},"<message>")," accepts the message ID or the message link.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"task-del"},Object(l.b)("inlineCode",{parentName:"h3"},".task del <month> <day>")),Object(l.b)("p",null,"Delete a task on the specified month and day."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Required argument ",Object(l.b)("inlineCode",{parentName:"li"},"<month>")," accepts a number 1-12 or a month name in short or full form. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"9"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Sep"),", ",Object(l.b)("inlineCode",{parentName:"li"},"September")))),Object(l.b)("li",{parentName:"ul"},"Required argument ",Object(l.b)("inlineCode",{parentName:"li"},"<day>")," accepts valid days for the month chosen. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"1")," to ",Object(l.b)("inlineCode",{parentName:"li"},"30")," for the month of September")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"task-list"},Object(l.b)("inlineCode",{parentName:"h3"},".task list")),Object(l.b)("p",null,"List all the tasks currently set for this server."),Object(l.b)("p",null,"Tasks followed by a \u26a0 emoji are broken, meaning the icon file couldn't be found."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"task-next"},Object(l.b)("inlineCode",{parentName:"h3"},".task next")),Object(l.b)("p",null,"Finds the next scheduled task and displays and ETA (Estimated Time of Action) which counts down to the task running."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note that Feb 29 tasks only run on leap years so even if it appears next in the task list it may not actually be the next task to run.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"task-clean"},Object(l.b)("inlineCode",{parentName:"h3"},".task clean")),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This command will delete ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"all"))," broken tasks. They cannot be recovered once this command is excecuted."))),Object(l.b)("p",null,"Delete ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"all"))," tasks which are broken. Broken tasks will be followed by a \u26a0 emoji in the when listed using ",Object(l.b)("inlineCode",{parentName:"p"},".task list")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"task-reset"},Object(l.b)("inlineCode",{parentName:"h3"},".task reset")),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This command will delete ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"all"))," tasks. They cannot be recovered once this command is excecuted."))),Object(l.b)("p",null,"Delete ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"all"))," automatic icon tasks."),Object(l.b)("h2",{id:"misc"},"Misc"),Object(l.b)("h3",{id:"ping"},Object(l.b)("inlineCode",{parentName:"h3"},".ping")),Object(l.b)("p",null,"Ping the bot."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"uptime"},Object(l.b)("inlineCode",{parentName:"h3"},".uptime")),Object(l.b)("p",null,"See how long the bot has been running for."))}d.isMDXComponent=!0}}]);