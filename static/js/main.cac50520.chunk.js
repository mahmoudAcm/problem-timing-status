(this["webpackJsonpproblem-timing-status"]=this["webpackJsonpproblem-timing-status"]||[]).push([[0],{111:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),s=(n(111),n(17)),o=n(203),l=n(33),j=n(202),d=n(26),b=n(173),u=n(210),h=n(176),O=n(178),m=n(179),p=n(80),g=n.n(p),x=n(182),f=n(92);function v(e){return JSON.parse(localStorage.getItem(e))}function T(e,t){return localStorage.setItem(e,JSON.stringify(t)),t}function C(e){var t=Math.floor(e/Math.pow(60,2));t<10&&(t="0"+t);var n=Math.floor(e%Math.pow(60,2)/60);n<10&&(n="0"+n);var a=Math.floor(e%Math.pow(60,2)%60);return a<10&&(a="0"+a),"".concat(t,":").concat(n,":").concat(a)}var S=n(2),E=Object(b.a)((function(e){return Object(u.a)({root:{flexGrow:1},menu:{width:200},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function y(){var e=E(),t=Object(a.useContext)(We).dispatch,n=r.a.useState(null),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Boolean(i);function j(e){return function(){o(null),T("activeTab",e),t({type:"SET_ACTIVE_TAB",activeTab:e})}}return Object(S.jsx)("div",{className:e.root,children:Object(S.jsx)(h.a,{position:"fixed",children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(d.a,{variant:"h6",className:e.title,children:"Problem Timing Status"}),Object(S.jsxs)("div",{children:[Object(S.jsx)(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(S.jsx)(g.a,{})}),Object(S.jsxs)(f.a,{id:"menu-appbar",className:e.menu,anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){o(null)},children:[Object(S.jsx)(x.a,{onClick:j(0),children:"Home"}),Object(S.jsx)(x.a,{onClick:j(1),children:"About"})]})]})]})})})}var _=n(12),L={activeTab:v("activeTab")||T("activeTab",0)};var R=n(192),A=n(196),I=n(198),w=Object(b.a)((function(e){return Object(u.a)({root:{width:850,minHeight:300},problems:{width:"100%",marginTop:e.spacing(1.5)+"%"},form:{},addProblem:{width:440},controllBtn:{width:75,marginLeft:e.spacing(1),textTransform:"capitalize"},emptyListMsg:{textTransform:"capitalize",marginTop:e.spacing(14.5),textAlign:"center",display:"block"}})})),k=n(93),M=n(197),N=n(204),D=n(201),B=n(85),z=n.n(B),P=n(86),F=n.n(P),H=/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;function G(e){return function(){e({type:"SET_PROBLEM_CODE",problemCodeList:v("problemCodeList")})}}function W(e){return function(t){for(var n=0,a=0;a<t.length;a++)n<e.length&&e[n]===t[a]&&n++;return n===e.length}}var J=n(181),U=n(124),K=n(195),Z=n(194),V=n(211),Y=n(193),Q=n(207),X=n(206),q=n(83),$=n.n(q),ee=n(84),te=n.n(ee),ne=n(82),ae=n.n(ne),re=n(81),ce=n.n(re),ie=n(183),se=n(184),oe=n(185),le=n(186),je=n(187),de=n(188),be=n(189),ue=["Reading","Thinking","Coding","Debugging"];function he(e){var t=v(e.link).timers,n=ue.reduce((function(e,n){return e+t[n.toLowerCase()]}),0);return t.total=n,Object(S.jsx)(ie.a,{align:"alternate",children:ue.concat("Total").map((function(e){return Object(S.jsxs)(se.a,{children:[Object(S.jsx)(oe.a,{children:Object(S.jsx)(d.a,{color:"textSecondary",style:{fontFamily:"Reenie Beanie",fontStyle:"normal",fontWeight:500,fontSize:30.65,textTransform:"uppercase",marginTop:-12},children:C(Math.round(t[e.toLowerCase()]/1e3))})}),Object(S.jsxs)(le.a,{children:[Object(S.jsx)(je.a,{}),"Total"!==e?Object(S.jsx)(de.a,{}):Object(S.jsx)(S.Fragment,{})]}),Object(S.jsx)(be.a,{children:Object(S.jsx)(d.a,{children:e})})]},e)}))})}var Oe=n(209),me=n(190),pe=n(191);function ge(e){var t=e.open,n=e.setOpen,a=e.link;return Object(S.jsx)("div",{children:Object(S.jsxs)(Oe.a,{open:t,onClose:function(){n(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(S.jsx)(me.a,{id:"alert-dialog-slide-title",children:Object(S.jsxs)(d.a,{variant:"body2",align:"center",color:"primary",children:["Summary of ",a]})}),Object(S.jsx)(pe.a,{children:Object(S.jsx)(he,{link:a})})]})})}function xe(){var e=Object(l.a)(),t=w(),n=Object(a.useState)(1),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),j=Object(s.a)(o,2),b=j[0],u=j[1],h=Object(a.useState)(""),O=Object(s.a)(h,2),p=O[0],g=O[1],x=Object(a.useContext)(We),f=x.state,C=f.SelectCodeReducer,E=C.problemCodeList,y=C.code,L=f.TimerReducer.isStarted,A=x.dispatch;Object(a.useEffect)((function(){i(1)}),[E]);function I(e){return function(){ce()(e)}}function k(e){return function(){y!==e&&E.length||(A({type:"SELECT_CODE",code:""}),A({type:"STATUS_CHANAGE",status:"reading"}),A({type:"HANDLE_BACK",activeStep:0}),A({type:"RESET_TIMER_STATE"}),T("code",""),T("status","reading"),T("activeStep",0),T("startedAt",0),T("isStarted",!1));var t=E.filter((function(t){return t!==e}));localStorage.removeItem(e),T("problemCodeList",v("problemCodeList").filter((function(t){return t!==e}))),A({type:"SET_PROBLEM_CODE",problemCodeList:t})}}function M(e){return function(){u(!0),g(e)}}return Object(S.jsxs)(R.a,{container:!0,direction:"column",alignItems:"center",children:[Object(S.jsxs)(R.a,{item:!0,children:[Object(S.jsx)(ge,{open:b,setOpen:u,link:p}),Object(S.jsx)(J.a,{className:t.root,children:Object(S.jsx)(V.a,{name:"code",value:y,onChange:function(e){var t=e.target.value;A({type:"SELECT_CODE",code:t}),A({type:"LOADING",loading:!0}),setTimeout((function(){A({type:"LOADING",loading:!1})}),750),A(Object(_.a)({type:"INIT_TIMER"},v(t))),L&&document.getElementById("timer-btn").click(),T("code",t)},children:E.length?E.slice(10*(c-1),10*c).map((function(t){var n="checkbox-list-label-".concat(t);return Object(S.jsxs)(U.a,{role:"list",dense:!0,title:t.length>80?t:"",children:[Object(S.jsx)(Y.a,{value:t,control:Object(S.jsx)(Q.a,{color:"primary"}),label:Object(S.jsx)(Z.a,{id:n,primary:t.length>80?t.substr(0,80)+"...":t})}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(m.a,{"aria-label":"create",onClick:M(t),title:"create a summary",style:{color:e.palette.info.main},children:Object(S.jsx)(ae.a,{})}),Object(S.jsx)(m.a,{"aria-label":"copy",onClick:I(t),title:"copy",children:Object(S.jsx)($.a,{})}),Object(S.jsx)(m.a,{edge:"end","aria-label":"delete",onClick:k(t),style:{color:e.palette.error.main},title:"delete",children:Object(S.jsx)(te.a,{})})]})]},t)})):Object(S.jsx)(d.a,{variant:"caption",color:"textSecondary",className:t.emptyListMsg,children:"no problems were found"})})})]}),Object(S.jsx)(R.a,{item:!0,children:E.length?Object(S.jsx)(X.a,{count:Math.ceil(E.length/10),page:c,onChange:function(e,t){i(t)}}):Object(S.jsx)(S.Fragment,{})})]})}var fe=Object(b.a)((function(e){return{root:{minHeight:500},textField:{width:490},btn:{width:e.spacing(10),marginLeft:25,marginTop:-5,textTransform:"capitalize"}}}));function ve(){var e,t=fe(),n=r.a.useState(""),c=Object(s.a)(n,2),i=c[0],o=c[1],l=r.a.useState(""),j=Object(s.a)(l,2),d=j[0],b=j[1],u=r.a.useState(""),h=Object(s.a)(u,2),O=h[0],m=h[1],p=r.a.useContext(We).dispatch;return Object(a.useEffect)((function(){return G(p)(),G(p)}),[p]),Object(S.jsxs)(A.a,{className:t.root,children:[Object(S.jsx)(M.a,{}),Object(S.jsxs)(I.a,{component:R.a,container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(S.jsxs)(R.a,{item:!0,style:{height:67},children:[Object(S.jsx)(N.a,{placeholder:"Paste The Link Here ...",className:t.textField,value:i,onChange:function(e){var t=e.target.value;o(t),m("")},helperText:(e=O,e.split(" ").map((function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):e})).join(" ")),error:!!O.length}),Object(S.jsx)(D.a,{variant:"contained",className:t.btn,color:"primary",onClick:function(){if(i)if(i.length>300)m("the link shouldn't be more than 300 character long");else{var e,t=v("problemCodeList");if(t.includes(i))m("this link is already added");else if(i.match(H)){e=[i].concat(Object(k.a)(t)),p({type:"SET_PROBLEM_CODE",problemCodeList:e.filter(W(d))});T(i,{timers:{reading:0,thinking:0,coding:0,debugging:0}}),T("problemCodeList",e),o(""),m("")}else m("this is not a valid link")}else m("please fill the field")},title:"Add A Problem",children:Object(S.jsx)(z.a,{})})]}),Object(S.jsxs)(R.a,{item:!0,children:[Object(S.jsx)(N.a,{placeholder:"Type Something To Search ...",className:t.textField,value:d,onChange:function(e){var t=e.target.value;b(t);var n=v("problemCodeList");p(t?{type:"SET_PROBLEM_CODE",problemCodeList:n.filter(W(t))}:{type:"SET_PROBLEM_CODE",problemCodeList:n})}}),Object(S.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(){p({type:"SET_PROBLEM_CODE",problemCodeList:v("problemCodeList")}),b("")},className:t.btn,title:"Reset Search",children:Object(S.jsx)(F.a,{})})]}),Object(S.jsx)(R.a,{item:!0,children:Object(S.jsx)(xe,{})})]})]})}function Te(){var e=w();return Object(S.jsx)(R.a,{container:!0,direction:"column",alignItems:"center",className:e.problems,spacing:1,children:Object(S.jsx)(R.a,{item:!0,children:Object(S.jsx)(ve,{})})})}var Ce=n(199),Se=n(200);function Ee(){var e=Object(l.a)(),t=Object(a.useContext)(We),n=t.state.StatusReducer.status,r=t.dispatch;return Object(a.useEffect)((function(){n&&r({type:"SET_TIMER",status:n})}),[n,r]),Object(S.jsxs)(Ce.a,{component:"fieldset",style:{marginLeft:e.spacing(1),marginTop:e.spacing(2),marginBottom:e.spacing(1)},children:[Object(S.jsx)(Se.a,{component:"legend",children:"Status"}),Object(S.jsxs)(V.a,{"aria-label":"status",name:"status",value:n,onChange:function(e){var t=e.target.value;r({type:"STATUS_CHANAGE",status:t}),T("status",t)},children:[Object(S.jsx)(Y.a,{value:"reading",control:Object(S.jsx)(Q.a,{}),label:"Reading"}),Object(S.jsx)(Y.a,{value:"thinking",control:Object(S.jsx)(Q.a,{}),label:"Thinking"}),Object(S.jsx)(Y.a,{value:"coding",control:Object(S.jsx)(Q.a,{}),label:"Coding"}),Object(S.jsx)(Y.a,{value:"debugging",control:Object(S.jsx)(Q.a,{}),label:"Debugging"})]})]})}var ye={status:v("status")||T("status","reading")};var _e=n(88),Le=n.n(_e),Re=n(87),Ae=n.n(Re),Ie=Object(b.a)((function(e){return{text:{fontFamily:"Qwigley",fontStyle:"normal",fontSize:16.043,textAlign:"center",textTransform:"uppercase",color:"#000000",marginBottom:-1*e.spacing(6)},unit:{fontFamily:"Reenie Beanie",fontStyle:"normal",fontWeight:500,fontSize:135.898,textAlign:"center",textTransform:"uppercase",color:"#000000"},btn:{width:80.66,marginTop:-1*e.spacing(2)}}}));function we(){var e=Ie(),t=Object(a.useContext)(We),n=t.state,r=n.StatusReducer.status,c=n.SelectCodeReducer.code,i=n.TimerReducer,o=i.timers,l=i.initialTime,j=i.curTime,d=i.isStarted,b=t.dispatch,u=Object(a.useState)(null),h=Object(s.a)(u,2),O=h[0],m=h[1],p=Object(a.useMemo)((function(){return C(Math.round((l+j)/1e3)).split(":")}),[l,j]),g=Object(s.a)(p,3),x=g[0],f=g[1],v=g[2];return Object(a.useEffect)((function(){return d&&!O&&m(setInterval((function(){b({type:"INC_TIMER"})}),1e3)),function(){null!==O&&clearInterval(O)}}),[d,b,O]),Object(S.jsxs)(R.a,{container:!0,justify:"center",children:[Object(S.jsxs)(R.a,{item:!0,container:!0,justify:"center",children:[Object(S.jsxs)(R.a,{item:!0,children:[Object(S.jsx)("div",{className:e.text,children:"Houres"}),Object(S.jsx)("div",{className:e.unit,children:x})]}),Object(S.jsxs)(R.a,{item:!0,children:[Object(S.jsx)("div",{className:e.text,children:"Minutes"}),Object(S.jsxs)("div",{className:e.unit,children:[":",f,":"]})]}),Object(S.jsxs)(R.a,{item:!0,children:[Object(S.jsx)("div",{className:e.text,children:"Seconds"}),Object(S.jsx)("div",{className:e.unit,children:v})]})]}),Object(S.jsx)(R.a,{item:!0,children:Object(S.jsx)(D.a,{variant:"outlined",color:"primary",className:e.btn,onClick:function(){var e=Date.now();d?(clearInterval(O),b({type:"SET_TIMER",initialTime:l+j}),o[r]=l+j,T(c,{timers:o}),T("startedAt",0)):(null!==O&&clearInterval(O),T("startedAt",e),m(setInterval((function(){b({type:"INC_TIMER"})}),1e3))),T("isStarted",!d),b({type:"TIMER_CLICKED",startedAt:e})},id:"timer-btn",children:d?Object(S.jsx)(Ae.a,{}):Object(S.jsx)(Le.a,{})})})]})}var ke=v("code"),Me=v("status"),Ne=v(ke)?v(ke).timers:{},De={timers:Ne,initialTime:Ne[Me],isStarted:v("isStarted")||T("isStarted",!1),startedAt:v("startedAt"),curTime:0};function Be(){var e=Object(a.useContext)(We).state.SelectCodeReducer,t=e.code,n=e.loading;return Object(S.jsxs)(R.a,{container:!0,direction:"column",alignItems:"center",spacing:4,children:[Object(S.jsx)(R.a,{item:!0,children:Object(S.jsx)(Te,{})}),Object(S.jsx)(R.a,{item:!0,children:t&&!n?Object(S.jsx)(A.a,{style:{width:880},children:Object(S.jsx)(I.a,{children:Object(S.jsxs)(R.a,{container:!0,spacing:2,justify:"center",alignItems:"center",children:[Object(S.jsx)(R.a,{item:!0,md:12,children:Object(S.jsx)(d.a,{style:{fontFamily:"Reenie Beanie",fontWeight:500,fontSize:35.898},children:t})}),Object(S.jsx)(R.a,{item:!0,md:1,children:Object(S.jsx)(Ee,{})}),Object(S.jsx)(R.a,{item:!0,md:11,children:Object(S.jsx)(we,{})})]})})}):Object(S.jsx)(S.Fragment,{children:n?"loading...":""})})]})}var ze=Object(b.a)((function(e){return{about:{width:790,marginLeft:"50%",transform:"translateX(-50%)",marginTop:e.spacing(1.5)+"%"}}}));function Pe(){var e=ze();return Object(S.jsx)(A.a,{className:e.about,children:Object(S.jsxs)(I.a,{children:[Object(S.jsx)("br",{}),Object(S.jsxs)(d.a,{align:"center",children:["1.This app was inspired by Dr. Mostafa's saad"," ",Object(S.jsx)("a",{href:"https://goo.gl/unDETI",rel:"noreferrer",target:"_blank",children:"sheet"}),"."]}),Object(S.jsx)("br",{}),Object(S.jsxs)(d.a,{align:"center",children:["2.In this sheet the constant performance in a problem have divided into four major timing columns reading, thinking, coding, and debugging for more info about the sheet see this"," ",Object(S.jsx)("a",{href:"https://www.youtube.com/watch?v=c3lmvYBxgwE",rel:"noreferrer",target:"_blank",children:"video"}),"."]}),Object(S.jsx)("br",{}),Object(S.jsx)(d.a,{align:"center",children:"4. The problem id is its link i.e https://codeforces.com/contest/1480/problem/B."}),Object(S.jsx)("br",{}),Object(S.jsxs)(d.a,{align:"center",children:["5.You can check the app code"," ",Object(S.jsx)("a",{href:"https://github.com/mahmoudAcm/problem-timing-status",rel:"noreferrer",target:"_blank",children:"here"}),"."]}),Object(S.jsx)("br",{}),Object(S.jsxs)(d.a,{align:"center",children:["5.1.Create an"," ",Object(S.jsx)("a",{href:"https://github.com/mahmoudAcm/problem-timing-status/issues/new",rel:"noreferrer",target:"_blank",children:"issue"}),"."]})]})})}function Fe(){var e=Object(l.a)(),t=Object(a.useContext)(We).state.HeaderReducer.activeTab;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(y,{}),Object(S.jsx)(j.a,{children:0===t?Object(S.jsx)(Be,{}):Object(S.jsx)(Pe,{})}),Object(S.jsx)("footer",{style:{marginTop:e.spacing(6),marginBottom:e.spacing(6)},children:Object(S.jsxs)(d.a,{align:"center",variant:"body2",children:["Developed by ",Object(S.jsx)("a",{href:"https://m.facebook.com/mahmoud.tarek.3538039",rel:"noreferrer",target:"_blank",style:{color:"#2F80ED",textDecoration:"none"},children:"Mahmoud Tarek"})]})})]})}["load","resize"].forEach((function(e){return window.addEventListener(e,(function(){window.innerWidth<1080&&(alert("Please Open This App With A Screen Width More Than 1079 pixels"),document.write(""))}))}));n(205),n(90);var He={problemCodeList:v("problemCodeList")||T("problemCodeList",[]),code:v("code")||""};var Ge={HeaderReducer:L,SelectCodeReducer:He,StatusReducer:ye,TimerReducer:De},We=Object(a.createContext)(Ge),Je=Object(o.a)({HeaderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.activeTab;switch(n){case"SET_ACTIVE_TAB":return Object(_.a)(Object(_.a)({},e),{},{activeTab:a});default:return e}},SelectCodeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.code,r=t.problemCodeList,c=t.loading;switch(n){case"SELECT_CODE":return Object(_.a)(Object(_.a)({},e),{},{code:a});case"SET_PROBLEM_CODE":return Object(_.a)(Object(_.a)({},e),{},{problemCodeList:r});case"LOADING":return Object(_.a)(Object(_.a)({},e),{},{loading:c});default:return e}},StatusReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.status;switch(n){case"STATUS_CHANAGE":return Object(_.a)(Object(_.a)({},e),{},{status:a});default:return e}},TimerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.timers,r=t.status,c=t.startedAt,i=t.initialTime;switch(n){case"INIT_TIMER":return Object(_.a)(Object(_.a)({},e),{},{timers:a});case"SET_TIMER":return Object(_.a)(Object(_.a)({},e),{},{initialTime:i||e.timers[r]});case"TIMER_CLICKED":return Object(_.a)(Object(_.a)({},e),{},{curTime:0,isStarted:!e.isStarted,startedAt:c});case"INC_TIMER":return Object(_.a)(Object(_.a)({},e),{},{curTime:Date.now()-e.startedAt});case"RESET_TIMER_STATE":return Object(_.a)(Object(_.a)({},e),{},{isStarted:!1,startedAt:0,curTime:0});default:return e}}});function Ue(e){var t=e.children,n=Object(a.useReducer)(Je,Ge),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(S.jsx)(We.Provider,{value:{state:c,dispatch:i},children:t})}i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(Ue,{children:Object(S.jsx)(Fe,{})})}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.cac50520.chunk.js.map