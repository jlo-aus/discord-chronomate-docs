(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),o=(t(0),t(92)),c={id:"setup",title:"Setup Guide"},s={unversionedId:"setup",id:"setup",isDocsHomePage:!1,title:"Setup Guide",description:"1. Invite Chronomate",source:"@site/docs/setup.md",slug:"/setup",permalink:"/discord-chronomate-docs/docs/setup",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/discord-chronomate-docs/docs/"},next:{title:"Commands",permalink:"/discord-chronomate-docs/docs/cmds"}},l=[{value:"1. Invite Chronomate",id:"1-invite-chronomate",children:[]},{value:"2. Set the icon channel",id:"2-set-the-icon-channel",children:[]},{value:"3. Add some icons",id:"3-add-some-icons",children:[{value:"Attached image",id:"attached-image",children:[]},{value:"Send url links",id:"send-url-links",children:[]}]},{value:"4. Add an icon task",id:"4-add-an-icon-task",children:[]},{value:"5. Turn on icon tasks",id:"5-turn-on-icon-tasks",children:[]},{value:"6. Set the timezone",id:"6-set-the-timezone",children:[]},{value:"7. Review config changes",id:"7-review-config-changes",children:[]}],r={toc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-invite-chronomate"},"1. Invite Chronomate"),Object(o.b)("p",null,"Invite the bot using the button below."),Object(o.b)("a",{class:"button button--info button--outline button--lg",href:"https://discord.com/api/oauth2/authorize?client_id=505166442338058251&permissions=11360&scope=bot"},"Invite Chronomate"),Object(o.b)("br",null),Object(o.b)("h4",{id:"required-permissions"},"Required Permissions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Manage Server")," ",Object(o.b)("inlineCode",{parentName:"p"},"View Channels")," ",Object(o.b)("inlineCode",{parentName:"p"},"Send Messages")," ",Object(o.b)("inlineCode",{parentName:"p"},"Manage Messages")," ",Object(o.b)("inlineCode",{parentName:"p"},"Add Reactions")),Object(o.b)("p",null,"For more informaion on what these permissions are needed for see ",Object(o.b)("a",{parentName:"p",href:"perms"},"Permissions")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"2-set-the-icon-channel"},"2. Set the icon channel"),Object(o.b)("p",null,'Chronomate only looks for icons in the channel designated as "icon channel".'),Object(o.b)("p",null,"The icon channel can be any text channel on the server. "),Object(o.b)("p",null,"It is recomended to start a new empty channel however this isn't required."),Object(o.b)("p",null,"To set the channel use ",Object(o.b)("a",{parentName:"p",href:"cmds#channel"},Object(o.b)("inlineCode",{parentName:"a"},".channel [channel]"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"3-add-some-icons"},"3. Add some icons"),Object(o.b)("p",null,"Add some icon files to the icon channel."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"File Formats")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Valid formats for icon images are: ",Object(o.b)("inlineCode",{parentName:"p"},".png")," ",Object(o.b)("inlineCode",{parentName:"p"},".jpg")," ",Object(o.b)("inlineCode",{parentName:"p"},".jpeg")," ",Object(o.b)("inlineCode",{parentName:"p"},".gif")),Object(o.b)("p",{parentName:"div"},"For animated server icons the server must have at least one boost. "))),Object(o.b)("h3",{id:"attached-image"},"Attached image"),Object(o.b)("p",null,"Upload attached images from a local folder."),Object(o.b)("h3",{id:"send-url-links"},"Send url links"),Object(o.b)("p",null,"You can also use URL links for any image."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use one URL per message.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If there is more than one URL per message only the first will be used."))),Object(o.b)("li",{parentName:"ul"},"URLs must link directly to the image.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"URLs must end in one of the appropriate file formats for a server icon.")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"4-add-an-icon-task"},"4. Add an icon task"),Object(o.b)("p",null,"Add a task using ",Object(o.b)("a",{parentName:"p",href:"cmds#task-add"},Object(o.b)("inlineCode",{parentName:"a"},".task add <month> <day> <message>"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"5-turn-on-icon-tasks"},"5. Turn on icon tasks"),Object(o.b)("p",null,"By default icon tasks are disabled in a new server. "),Object(o.b)("p",null,"To enable use ",Object(o.b)("a",{parentName:"p",href:"cmds#task-toggle"},Object(o.b)("inlineCode",{parentName:"a"},".task toggle on"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"6-set-the-timezone"},"6. Set the timezone"),Object(o.b)("p",null,"This is optional."),Object(o.b)("p",null,"Set the timezone using ",Object(o.b)("a",{parentName:"p",href:"cmds#timezone"},Object(o.b)("inlineCode",{parentName:"a"},".timezone [timezone]")),"."),Object(o.b)("p",null,"A full list of TZ Databse names can be found here: ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones - Wikipedia")),Object(o.b)("p",null,"The automatic icon changes will occur within the hour of 2am (2:00 to 2:59) in whatever timezone is set. By default the timezone is UTC."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"7-review-config-changes"},"7. Review config changes"),Object(o.b)("p",null,"To make sure all settings are as expected use ",Object(o.b)("a",{parentName:"p",href:"cmds#config"},Object(o.b)("inlineCode",{parentName:"a"},".config"))," to list all configuration for the bot."))}b.isMDXComponent=!0}}]);