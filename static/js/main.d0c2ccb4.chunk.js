(this["webpackJsonpproblem-timing-status"]=this["webpackJsonpproblem-timing-status"]||[]).push([[0],{109:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),s=(a(109),a(22)),o=a(200),l=a(30),j=a(199),b=a(27),d=a(8),u=a(181),h=a(207),O=a(209),m=a(190),p=a(206),g=a(210),x=a(180),f=a(205);function v(e){return JSON.parse(localStorage.getItem(e))}function S(e,t){return localStorage.setItem(e,JSON.stringify(t)),t}function T(e){var t=Math.floor(e/Math.pow(60,2));t<10&&(t="0"+t);var a=Math.floor(e%Math.pow(60,2)/60);a<10&&(a="0"+a);var n=Math.floor(e%Math.pow(60,2)%60);return n<10&&(n="0"+n),"".concat(t,":").concat(a,":").concat(n)}var E=a(201),C=a(202),y=a(81),R=a.n(y),_=a(2);function A(){var e=Object(n.useContext)(Ve),t=e.state.SelectCodeReducer,a=t.problemCodeList,r=t.code,c=e.dispatch;return Object(_.jsx)("div",{children:Object(_.jsx)(C.a,{popupIcon:Object(_.jsx)(R.a,{}),value:r,id:"combo-box-demo",options:a,getOptionLabel:function(e){return e},style:{width:500,height:64.34,marginLeft:8,marginTop:8},renderInput:function(e){return Object(_.jsx)(E.a,Object(d.a)(Object(d.a)({},e),{},{label:"Problems Links",placeholder:"type to search...",variant:"outlined"}))},onChange:function(e,t){c({type:"SELECT_CODE",code:t}),c(Object(d.a)({type:"INIT_TIMER"},v(t))),S("code",t)}})})}var L={problemCodeList:v("problemCodeList")||S("problemCodeList",[]),code:v("code")||S("code","")};var M=a(83),w=a.n(M),I=a(82),k=a.n(I),N=a(179),D=Object(N.a)((function(e){return{text:{fontFamily:"Qwigley",fontStyle:"normal",fontSize:16.043,textAlign:"center",textTransform:"uppercase",color:"#000000",marginBottom:-1*e.spacing(6)},unit:{fontFamily:"Reenie Beanie",fontStyle:"normal",fontWeight:500,fontSize:135.898,textAlign:"center",textTransform:"uppercase",color:"#000000"},btn:{width:80.66,marginTop:-1*e.spacing(2)}}}));function B(){var e=D(),t=Object(n.useContext)(Ve),a=t.state,r=a.StatusReducer.status,c=a.SelectCodeReducer.code,i=a.TimerReducer,o=i.timers,l=i.initialTime,j=i.curTime,b=i.isStarted,d=t.dispatch,h=Object(n.useState)(null),O=Object(s.a)(h,2),m=O[0],p=O[1],g=Object(n.useMemo)((function(){return T(Math.round((l+j)/1e3)).split(":")}),[l,j]),f=Object(s.a)(g,3),v=f[0],E=f[1],C=f[2];return Object(n.useEffect)((function(){return b&&!m&&p(setInterval((function(){d({type:"INC_TIMER"})}),1e3)),function(){null!==m&&clearInterval(m)}}),[b,d,m]),Object(_.jsxs)(x.a,{container:!0,justify:"center",children:[Object(_.jsxs)(x.a,{item:!0,container:!0,justify:"center",children:[Object(_.jsxs)(x.a,{item:!0,children:[Object(_.jsx)("div",{className:e.text,children:"Houres"}),Object(_.jsx)("div",{className:e.unit,children:v})]}),Object(_.jsxs)(x.a,{item:!0,children:[Object(_.jsx)("div",{className:e.text,children:"Minutes"}),Object(_.jsxs)("div",{className:e.unit,children:[":",E,":"]})]}),Object(_.jsxs)(x.a,{item:!0,children:[Object(_.jsx)("div",{className:e.text,children:"Seconds"}),Object(_.jsx)("div",{className:e.unit,children:C})]})]}),Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(u.a,{variant:"outlined",color:"primary",className:e.btn,onClick:function(){var e=Date.now();b?(clearInterval(m),d({type:"SET_TIMER",initialTime:l+j}),o[r]=l+j,S(c,{timers:o}),S("startedAt",0)):(null!==m&&clearInterval(m),S("startedAt",e),p(setInterval((function(){d({type:"INC_TIMER"})}),1e3))),S("isStarted",!b),d({type:"TIMER_CLICKED",startedAt:e})},children:b?Object(_.jsx)(k.a,{}):Object(_.jsx)(w.a,{})})})]})}var H=v("code"),P=v("status"),z=v(H)?v(H).timers:{},F={timers:z,initialTime:z[P],isStarted:v("isStarted")||S("isStarted",!1),startedAt:v("startedAt"),curTime:0};var G=a(175),K=a(176),X=a(208),J=a(182),U=a(204);function V(){var e=Object(l.a)(),t=Object(n.useContext)(Ve),a=t.state.StatusReducer.status,r=t.dispatch;return Object(n.useEffect)((function(){a&&r({type:"SET_TIMER",status:a})}),[a,r]),Object(_.jsxs)(G.a,{component:"fieldset",style:{marginLeft:e.spacing(1),marginTop:e.spacing(2),marginBottom:e.spacing(1)},children:[Object(_.jsx)(K.a,{component:"legend",children:"Status"}),Object(_.jsxs)(X.a,{"aria-label":"status",name:"status",value:a,onChange:function(e){var t=e.target.value;r({type:"STATUS_CHANAGE",status:t}),S("status",t)},children:[Object(_.jsx)(J.a,{value:"reading",control:Object(_.jsx)(U.a,{}),label:"Reading"}),Object(_.jsx)(J.a,{value:"thinking",control:Object(_.jsx)(U.a,{}),label:"Thinking"}),Object(_.jsx)(J.a,{value:"coding",control:Object(_.jsx)(U.a,{}),label:"Coding"}),Object(_.jsx)(J.a,{value:"debugging",control:Object(_.jsx)(U.a,{}),label:"Debugging"})]})]})}var Z={status:v("status")||S("status","")};var W=a(183),Y=a(184),Q=a(185),q=a(186),$=a(187),ee=a(188),te=a(189),ae=["Reading","Thinking","Coding","Debugging"];function ne(e){var t=Object(d.a)({},e.timers),a=ae.reduce((function(e,a){return e+t[a.toLowerCase()]}),0);return t.total=a,Object(_.jsx)(W.a,{align:"alternate",children:ae.concat("Total").map((function(e){return Object(_.jsxs)(Y.a,{children:[Object(_.jsx)(Q.a,{children:Object(_.jsx)(b.a,{color:"textSecondary",style:{fontFamily:"Reenie Beanie",fontStyle:"normal",fontWeight:500,fontSize:30.65,textTransform:"uppercase",marginTop:-12},children:T(Math.round(t[e.toLowerCase()]/1e3))})}),Object(_.jsxs)(q.a,{children:[Object(_.jsx)($.a,{}),"Total"!==e?Object(_.jsx)(ee.a,{}):Object(_.jsx)(_.Fragment,{})]}),Object(_.jsx)(te.a,{children:Object(_.jsx)(b.a,{children:e})})]},e)}))})}function re(e){var t=Object(l.a)(),a=Object(n.useContext)(Ve),r=a.state,c=r.SelectCodeReducer.code,i=r.StatusReducer.status,s=r.StepperReducer.activeStep,o=r.TimerReducer.isStarted,j=a.dispatch,b=[!!c,!!i];return Object(_.jsxs)("div",Object(d.a)(Object(d.a)({},e),{},{children:[Object(_.jsx)(u.a,{style:{marginRight:t.spacing(2)},onClick:function(){if(2===s&&o)j({type:"SET_ERROR_MESSAGE",errorMessage:"Stop the timer first before going to the previous step"});else{var e=Math.max(0,s-1);j({type:"HANDLE_BACK",activeStep:e}),S("activeStep",e)}},disabled:0===s,children:"Back"}),Object(_.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){if(b[s]||2===s)if(2===s&&o)j({type:"SET_ERROR_MESSAGE",errorMessage:"Stop the timer first before going to the next step"});else{var e=Math.min(3,s+1);j({type:"HANDLE_NEXT",activeStep:e}),S("activeStep",e)}else j({type:"SET_ERROR_MESSAGE",errorMessage:"Please select a ".concat(s?"status":"problem"," so you can go to the next step")})},disabled:3===s,children:"Next"})]}))}function ce(e){return Object(_.jsx)(f.a,Object(d.a)({elevation:6,variant:"filled"},e))}function ie(){var e=Object(l.a)(),t=Object(n.useContext)(Ve),a=t.state,r=a.StepperReducer,c=r.activeStep,i=r.errorMessage,s=r.open,o=a.TimerReducer.timers,j=t.dispatch;function b(e,t){"clickaway"!==t&&j({type:"CLOSE_ERROR_MESSAGE"})}return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(h.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:100*i.length,onClose:b,children:Object(_.jsx)(ce,{severity:"info",onClose:b,children:i})}),Object(_.jsxs)(O.a,{activeStep:c,orientation:"vertical",elevation:4,style:{width:950,marginLeft:"50%",transform:"translateX(-50%)",marginTop:e.spacing(1.5)+"%"},children:[Object(_.jsxs)(m.a,{children:[Object(_.jsx)(p.a,{children:"Choose A Problem To Start"}),Object(_.jsxs)(g.a,{children:[Object(_.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",style:{marginTop:e.spacing(2)},children:[Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(A,{})}),Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(u.a,{variant:"outlined",color:"primary",style:{marginTop:e.spacing(2),padding:e.spacing(1,3)},onClick:function(){j({type:"SET_ACTIVE_TAB",activeTab:1})},children:"Add new problem"})})]}),Object(_.jsx)(re,{style:{marginLeft:-5,marginTop:e.spacing(1)}})]})]},"1"),Object(_.jsxs)(m.a,{children:[Object(_.jsx)(p.a,{children:"Select Status"}),Object(_.jsxs)(g.a,{children:[Object(_.jsx)(V,{}),Object(_.jsx)(re,{style:{marginLeft:-5,marginTop:e.spacing(2)}})]})]},"2"),Object(_.jsxs)(m.a,{children:[Object(_.jsx)(p.a,{children:"Start Timing"}),Object(_.jsxs)(g.a,{children:[Object(_.jsx)(B,{}),Object(_.jsx)(re,{style:{marginLeft:-5,marginTop:e.spacing(2)}})]})]},"3"),Object(_.jsxs)(m.a,{children:[Object(_.jsx)(p.a,{children:"Create A Summary"}),Object(_.jsxs)(g.a,{children:[Object(_.jsx)(ne,{timers:o}),Object(_.jsx)(re,{style:{marginLeft:-5,marginTop:e.spacing(2)}})]})]},"4")]})]})}var se={activeStep:v("activeStep")||S("activeStep",0),errorMessage:""};var oe=a(211),le=a(191),je=a(192),be=a(174),de=a(84),ue=a.n(de),he=a(193),Oe=a(89),me=Object(N.a)((function(e){return Object(oe.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function pe(){var e=me(),t=Object(n.useContext)(Ve).dispatch,a=r.a.useState(null),c=Object(s.a)(a,2),i=c[0],o=c[1],l=Boolean(i);function j(e){return function(){o(null),S("activeTab",e),t({type:"SET_ACTIVE_TAB",activeTab:e})}}return Object(_.jsx)("div",{className:e.root,children:Object(_.jsx)(le.a,{position:"fixed",children:Object(_.jsxs)(je.a,{children:[Object(_.jsx)(b.a,{variant:"h6",className:e.title,children:"Problem Timing Status"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(be.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(_.jsx)(ue.a,{})}),Object(_.jsxs)(Oe.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){o(null)},children:[Object(_.jsx)(he.a,{onClick:j(0),children:"Home"}),Object(_.jsx)(he.a,{onClick:j(1),children:"Problems"}),Object(_.jsx)(he.a,{onClick:j(2),children:"About"})]})]})]})})})}var ge={activeTab:v("activeTab")||S("activeTab",0)};var xe=Object(N.a)((function(e){return Object(oe.a)({root:{width:850,minHeight:310},problems:{width:"100%",minHeight:"auto",marginTop:e.spacing(1.5)+"%"},form:{},addProblem:{width:440},controllBtn:{width:75,marginLeft:e.spacing(1),textTransform:"capitalize"},emptyListMsg:{textTransform:"capitalize",marginTop:e.spacing(14.5),textAlign:"center",display:"block"},pagination:{position:"absolute",bottom:e.spacing(3),left:"50%",transform:"translateX(-50%)"}})})),fe=a(90),ve=a(196),Se=a(197),Te=a(198),Ee=/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,Ce=a(178),ye=a(122),Re=a(195),_e=a(194),Ae=a(203),Le=a(86),Me=a.n(Le),we=a(87),Ie=a.n(we),ke=a(85),Ne=a.n(ke);function De(){var e=Object(l.a)(),t=xe(),a=Object(n.useState)(1),r=Object(s.a)(a,2),c=r[0],i=r[1],o=Object(n.useContext)(Ve),j=o.state.SelectCodeReducer,d=j.problemCodeList,u=j.code,h=o.dispatch;Object(n.useEffect)((function(){i(1)}),[d]);function O(e){return function(){Ne()(e)}}function m(e){return function(){u!==e&&d.length||(h({type:"SELECT_CODE",code:""}),h({type:"STATUS_CHANAGE",status:""}),h({type:"HANDLE_BACK",activeStep:0}),h({type:"RESET_TIMER_STATE"}),S("code",""),S("status",""),S("activeStep",0),S("startedAt",0),S("isStarted",!1));var t=d.filter((function(t){return t!==e}));localStorage.removeItem(e),S("problemCodeList",t),h({type:"SET_PROBLEM_CODE",problemCodeList:t})}}return Object(_.jsx)(Ce.a,{className:t.root,children:d.length?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"list",children:d.slice(6*(c-1),6*c).map((function(t){var a="checkbox-list-label-".concat(t);return Object(_.jsxs)(ye.a,{role:"list",dense:!0,title:t.length>80?t:"",children:[Object(_.jsx)(_e.a,{id:a,primary:t.length>80?t.substr(0,80)+"...":t}),Object(_.jsxs)(Re.a,{children:[Object(_.jsx)(be.a,{edge:"end","aria-label":"delete",onClick:O(t),title:"copy",children:Object(_.jsx)(Me.a,{})}),Object(_.jsx)(be.a,{edge:"end","aria-label":"delete",onClick:m(t),style:{color:e.palette.error.main,marginLeft:e.spacing(.5)},title:"delete",children:Object(_.jsx)(Ie.a,{})})]})]},t)}))}),Object(_.jsx)(Ae.a,{className:t.pagination,count:Math.ceil(d.length/6),page:c,onChange:function(e,t){i(t)}})]}):Object(_.jsx)(b.a,{variant:"caption",color:"textSecondary",className:t.emptyListMsg,children:"no problems were found"})})}function Be(e){return function(){e({type:"SET_PROBLEM_CODE",problemCodeList:v("problemCodeList")})}}function He(e){return function(t){for(var a=0,n=0;n<t.length;n++)a<e.length&&e[a]===t[n]&&a++;return a===e.length}}var Pe=Object(N.a)((function(e){return{root:{width:900,height:490},textField:{width:490},btn:{width:e.spacing(18),marginLeft:25,marginTop:-5,textTransform:"capitalize"}}}));function ze(){var e,t=Pe(),a=r.a.useState(""),c=Object(s.a)(a,2),i=c[0],o=c[1],l=r.a.useState(""),j=Object(s.a)(l,2),b=j[0],d=j[1],h=r.a.useState(""),O=Object(s.a)(h,2),m=O[0],p=O[1],g=r.a.useContext(Ve).dispatch;return Object(n.useEffect)((function(){return Be(g)(),Be(g)}),[g]),Object(_.jsxs)(ve.a,{className:t.root,children:[Object(_.jsx)(Se.a,{}),Object(_.jsxs)(Te.a,{component:x.a,container:!0,direction:"column",alignItems:"center",spacing:4,children:[Object(_.jsxs)(x.a,{item:!0,style:{height:67},children:[Object(_.jsx)(E.a,{placeholder:"Paste The Link Here ...",className:t.textField,value:i,onChange:function(e){var t=e.target.value;o(t),p("")},helperText:(e=m,e.split(" ").map((function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):e}))),error:!!m.length}),Object(_.jsx)(u.a,{variant:"contained",className:t.btn,color:"primary",onClick:function(){if(i)if(i.length>300)p("the link shouldn't be more than 300 character long");else{var e,t=v("problemCodeList");if(t.includes(i))p("this link is already added");else if(i.match(Ee)){e=[i].concat(Object(fe.a)(t)),g({type:"SET_PROBLEM_CODE",problemCodeList:e.filter(He(b))});S(i,{timers:{reading:0,thinking:0,coding:0,debugging:0}}),S("problemCodeList",e),o(""),p("")}else p("this is not a valid link")}else p("please fill the field")},children:"Add Problem"})]}),Object(_.jsx)(x.a,{item:!0,style:{height:67},children:Object(_.jsxs)(x.a,{container:!0,justify:"center",children:[Object(_.jsx)(E.a,{placeholder:"Type Something To Search ...",className:t.textField,value:b,onChange:function(e){var t=e.target.value;d(t);var a=v("problemCodeList");g(t?{type:"SET_PROBLEM_CODE",problemCodeList:a.filter(He(t))}:{type:"SET_PROBLEM_CODE",problemCodeList:a})}}),Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){g({type:"SET_PROBLEM_CODE",problemCodeList:v("problemCodeList")}),d("")},className:t.btn,children:"Reset Search"})})]})}),Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(De,{})})]})]})}function Fe(){var e=xe();return Object(_.jsx)(x.a,{container:!0,direction:"column",alignItems:"center",className:e.problems,children:Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(ze,{})})})}var Ge=Object(N.a)((function(e){return{about:{width:790,marginLeft:"50%",transform:"translateX(-50%)",marginTop:e.spacing(1.5)+"%"}}}));function Ke(){var e=Ge();return Object(_.jsx)(ve.a,{className:e.about,children:Object(_.jsxs)(Te.a,{children:[Object(_.jsx)("br",{}),Object(_.jsxs)(b.a,{align:"center",children:["1.This app was inspired by Dr. Mostafa's saad"," ",Object(_.jsx)("a",{href:"https://goo.gl/unDETI",rel:"noreferrer",target:"_blank",children:"sheet"}),"."]}),Object(_.jsx)("br",{}),Object(_.jsxs)(b.a,{align:"center",children:["2.In this sheet the constant performance in a problem have divided into four major timing columns reading, thinking, coding, and debugging for more info about the sheet see this"," ",Object(_.jsx)("a",{href:"https://www.youtube.com/watch?v=c3lmvYBxgwE",rel:"noreferrer",target:"_blank",children:"video"}),"."]}),Object(_.jsx)("br",{}),Object(_.jsx)(b.a,{align:"center",children:"3.So on the home page you have four steps:"}),Object(_.jsx)("br",{}),Object(_.jsx)(b.a,{align:"center",children:"- choose the problem that you want to record your performance for."}),Object(_.jsx)(b.a,{align:"center",children:"- choose your current (column / status)."}),Object(_.jsx)(b.a,{align:"center",children:"- start timing."}),Object(_.jsx)(b.a,{align:"center",children:"- get a summary."}),Object(_.jsx)("br",{}),Object(_.jsx)(b.a,{align:"center",children:"4.At first you will have no problems to choose from so go to the problems page and add your problem."}),Object(_.jsx)("br",{}),Object(_.jsx)(b.a,{align:"center",children:"4.1. The problem id is its link."}),Object(_.jsx)("br",{}),Object(_.jsxs)(b.a,{align:"center",children:["5.You can check the app code"," ",Object(_.jsx)("a",{href:"https://github.com/mahmoudAcm/problem-timing-status",rel:"noreferrer",target:"_blank",children:"here"}),"."]}),Object(_.jsx)("br",{}),Object(_.jsxs)(b.a,{align:"center",children:["5.1.Create an"," ",Object(_.jsx)("a",{href:"https://github.com/mahmoudAcm/problem-timing-status/issues/new",rel:"noreferrer",target:"_blank",children:"issue"}),"."]})]})})}function Xe(e){switch(e.tab){case 0:return Object(_.jsx)(ie,{});case 1:return Object(_.jsx)(Fe,{});case 2:return Object(_.jsx)(Ke,{});default:return Object(_.jsx)(_.Fragment,{})}}function Je(){var e=Object(l.a)(),t=Object(n.useContext)(Ve).state.HeaderReducer.activeTab;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(pe,{}),Object(_.jsx)(j.a,{children:Object(_.jsx)(Xe,{tab:t})}),Object(_.jsx)("footer",{style:{marginTop:e.spacing(6),marginBottom:e.spacing(6)},children:Object(_.jsxs)(b.a,{align:"center",variant:"body2",children:["Developed by ",Object(_.jsx)("a",{href:"https://m.facebook.com/mahmoud.tarek.3538039",rel:"noreferrer",target:"_blank",style:{color:"#2F80ED",textDecoration:"none"},children:"Mahmoud Tarek"})]})})]})}var Ue={HeaderReducer:ge,StepperReducer:se,SelectCodeReducer:L,StatusReducer:Z,TimerReducer:F},Ve=Object(n.createContext)(Ue),Ze=Object(o.a)({HeaderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.activeTab;switch(a){case"SET_ACTIVE_TAB":return Object(d.a)(Object(d.a)({},e),{},{activeTab:n});default:return e}},StepperReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.activeStep,r=t.errorMessage;switch(a){case"HANDLE_NEXT":case"HANDLE_BACK":return Object(d.a)(Object(d.a)({},e),{},{activeStep:n});case"SET_ERROR_MESSAGE":return Object(d.a)(Object(d.a)({},e),{},{errorMessage:r,open:!0});case"CLOSE_ERROR_MESSAGE":return Object(d.a)(Object(d.a)({},e),{},{open:!1});default:return e}},SelectCodeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.code,r=t.problemCodeList;switch(a){case"SELECT_CODE":return Object(d.a)(Object(d.a)({},e),{},{code:n});case"SET_PROBLEM_CODE":return Object(d.a)(Object(d.a)({},e),{},{problemCodeList:r});default:return e}},StatusReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.status;switch(a){case"STATUS_CHANAGE":return Object(d.a)(Object(d.a)({},e),{},{status:n});default:return e}},TimerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.timers,r=t.status,c=t.startedAt,i=t.initialTime;switch(a){case"INIT_TIMER":return Object(d.a)(Object(d.a)({},e),{},{timers:n});case"SET_TIMER":return Object(d.a)(Object(d.a)({},e),{},{initialTime:i||e.timers[r]});case"TIMER_CLICKED":return Object(d.a)(Object(d.a)({},e),{},{curTime:0,isStarted:!e.isStarted,startedAt:c});case"INC_TIMER":return Object(d.a)(Object(d.a)({},e),{},{curTime:Date.now()-e.startedAt});case"RESET_TIMER_STATE":return Object(d.a)(Object(d.a)({},e),{},{isStarted:!1,startedAt:0,curTime:0});default:return e}}});function We(e){var t=e.children,a=Object(n.useReducer)(Ze,Ue),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(_.jsx)(Ve.Provider,{value:{state:c,dispatch:i},children:t})}i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(We,{children:Object(_.jsx)(Je,{})})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.d0c2ccb4.chunk.js.map