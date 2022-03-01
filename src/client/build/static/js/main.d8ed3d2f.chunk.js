(this["webpackJsonppresence-client-app"]=this["webpackJsonppresence-client-app"]||[]).push([[0],{178:function(e,t,a){e.exports=a(330)},183:function(e,t,a){},241:function(e,t){},330:function(e,t,a){"use strict";a.r(t),a.d(t,"render",(function(){return Ut}));var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(183),a(24)),l=a(36),s=a(362),u=a(331),m=a(386),p=a(16),d=a(365),g=a(367),f=a(59),E=a(368),h=a(106),v=a.n(h),b=a(77),y=a.n(b),O=a(372),S=a(89),j=a(168),U=a(19),C=a.n(U),x=a(34),N=a(56),_=a.n(N),I="app/auth/LOGIN_STARTED",T="app/auth/LOGIN_SUCCESS",w="app/auth/SIGN_UP_PENDING",k="app/auth/SIGN_UP_SUCCESS",R="app/auth/SIGN_UP_FAILURE",L="production";console.log("ENV: ",L);var A="Unable to register :( Please contact system admin if issue persists.",G=a(159),F=a.n(G),P=function(){var e;return{getSocket:function(){return e},create:function(){return e=F()("")},disconnect:function(){return e.disconnect()}}}(),D=a(10),H=a(160),V={Accept:"application/json","Content-Type":"application/json"},z=a.n(H).a.create({baseURL:"",headers:V});z.interceptors.request.use((function(e){return e}),(function(e){return console.info("Request ERROR::\n".concat(new Date," :: "),e),Promise.reject(e)})),z.interceptors.response.use((function(e){return e}),(function(e){return console.info("Response ERROR::\n".concat(new Date," :: "),e),Promise.reject(e)}));var W=function(e,t){return z(Object(D.a)({url:e},t,{withCredentials:!0,headers:Object(D.a)({},V)}))},q=function(){var e=Object(x.a)(C.a.mark((function e(t,a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Ot.dispatch({type:I}),e.next=4,W("/session/login",{method:"POST",data:{username:t,password:a}});case 4:if(n=e.sent,"OK"!==(r=n.data).status){e.next=11;break}P.create(),Ot.dispatch({type:T,payload:r.data}),e.next=12;break;case 11:throw r;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),Ot.dispatch({type:"app/auth/LOGIN_FAILURE",payload:e.t0});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(x.a)(C.a.mark((function e(t,a){var n,r,c,i=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]&&i[2],e.prev=1,Ot.dispatch({type:w}),e.next=5,W("/users/register-user",{method:"PUT",data:{username:t,password:a,isAdmin:n}});case 5:if(r=e.sent,"OK"!==(c=r.data).status){e.next=11;break}Ot.dispatch({type:k,payload:!0}),e.next=12;break;case 11:throw c;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),Ot.dispatch({type:R,payload:_()(e.t0,"response.data.message",A)});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(x.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Ot.dispatch({type:"app/auth/LOGIN_RESET"}),Ot.dispatch({type:"app/auth/LOGOUT_PENDING"}),e.next=5,W("/session/logout",{method:"GET"});case 5:if(t=e.sent,"OK"!==(a=t.data).status){e.next=13;break}P.disconnect(),Ot.dispatch({type:"app/auth/LOGOUT_SUCCESS",payload:!0}),setTimeout((function(){Ot.dispatch({type:"app/auth/LOGOUT_RESET"})}),3e3),e.next=14;break;case 13:throw a;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),Ot.dispatch({type:"app/auth/LOGOUT_FAILURE"});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(x.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Ot.dispatch({type:"app/auth/FETCH_USER_HISTORY_PENDING"}),e.next=4,W("/users/history",{method:"GET"});case 4:if(t=e.sent,"OK"!==(a=t.data).status){e.next=10;break}Ot.dispatch({type:"app/auth/FETCH_USER_HISTORY_SUCCESS",payload:a.data}),e.next=11;break;case 10:throw a;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),Ot.dispatch({type:"app/auth/FETCH_USER_HISTORY_SUCCESS",payload:[]});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),B=a(369),J=Object(s.a)((function(){return{container:{height:"100vh",margin:"auto 1em",textAlign:"center"},title:{flexGrow:1}}})),Q=function(e){var t=J(),a=Object(l.g)(),c=Object(n.useState)(null),i=Object(p.a)(c,2),o=i[0],s=i[1],u=Boolean(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(f.a,{variant:"h6",className:t.title},"User Presence"),e.isLoggedIn&&r.a.createElement("div",null,r.a.createElement(E.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},color:"inherit"},e.admin?r.a.createElement(B.a,{overlap:"circle",anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:r.a.createElement(y.a,{style:{color:S.a[500]}})},r.a.createElement(v.a,{fontSize:"large"})):r.a.createElement(v.a,{fontSize:"large"})),r.a.createElement(j.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:function(){return s(null)}},e.admin&&r.a.createElement(O.a,{onClick:function(){a.push("/app/history")}},"User History"),r.a.createElement(O.a,{onClick:function(){a.push("/app"),Y()}},"Logout"))))),r.a.createElement("main",{className:t.container},e.children))};Q.defaultProps={isLoggedIn:!1,admin:!1};var X=Q,Z=a(385),$=a(373),ee=a(374),te=Object(s.a)((function(){return{loginForm:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"26em"},field:{width:"75%"}}})),ae=function(e){var t=e.isSubmitting,a=e.onSubmit,c=te(),i=Object(n.useState)(""),l=Object(p.a)(i,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),g=d[0],E=d[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(e.target.elements)},className:c.loginForm},r.a.createElement("header",null,r.a.createElement(f.a,{variant:"h5"},"Welcome!"),r.a.createElement(f.a,{variant:"subtitle1"},"Please login to see more")),r.a.createElement(Z.a,{id:"username",label:"Username",variant:"outlined",className:c.field,required:!0,value:s,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement(Z.a,{id:"password",label:"Password",type:"password",variant:"outlined",className:c.field,required:!0,value:g,onChange:function(e){var t=e.target;return E(t.value)}}),t?r.a.createElement($.a,null):r.a.createElement(ee.a,{variant:"contained",type:"submit",disabled:t,color:"primary"},"Login"),r.a.createElement("footer",null,r.a.createElement(f.a,{variant:"subtitle2"},"Not registered yet? ",r.a.createElement(o.b,{to:"/app/register"},"Sign up"))))},ne=Object(s.a)((function(){return{loginCtr:{margin:"8em auto",maxWidth:"32em"}}})),re=function(e){var t=e.loggingIn,a=e.loginFailure,n=e.signingUp,c=e.signUpSuccess,i=e.loggingOut,o=e.logoutSuccess,l=ne(),s=!t&&a,p=!n&&c,d=!i&&o;return r.a.createElement(X,null,r.a.createElement("section",{className:l.loginCtr},p&&r.a.createElement(m.a,{severity:"success"},"Registration successfull! Please login below"),d&&r.a.createElement(m.a,{severity:"success"},"Logout successful! Visit again!"),s&&r.a.createElement(m.a,{severity:"error"},"Invalid credientials. Please try again!"),r.a.createElement("br",null),r.a.createElement(u.a,{elevation:2},r.a.createElement(ae,{onSubmit:function(e){var t=e.username,a=e.password;q(t.value,a.value)},isSubmitting:t}))))},ce=a(387),ie=a(44),oe=a.n(ie),le=a(375),se=a(376),ue=a(85),me=a(377),pe=a(378),de=a(83),ge=a(389),fe=a(391),Ee=a(45),he=a.n(Ee),ve=a(165),be=a.n(ve),ye=function(e){return be()(e).format("ddd, MMM Do hA")},Oe=function(e){var t=e.username,a=e.lastVisited;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,"Name: ",he()(t)),r.a.createElement("em",null,"last online: ",ye(a)))},Se=a(166),je=a.n(Se),Ue=function(e){var t=e.initial,a=e.admin,n=e.className,c=r.a.createElement(fe.a,{alt:"",className:n},je()(t));return a?r.a.createElement(B.a,{overlap:"circle",anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:r.a.createElement(y.a,{style:{color:S.a[500]}})},c):c},Ce=Object(s.a)((function(){return oe()([le.a,se.a,ue.a,me.a,pe.a],(function(e){return{color:"white",backgroundColor:e[500]}}))})),xe=Object(s.a)((function(){return{listCtr:{listStyleType:"none",padding:0,display:"flex"},avatarCtr:{marginRight:"-0.85em"},lastAvatar:{color:"white",backgroundColor:de.a[500]},avatar:{height:"3em",width:"3em",border:"white solid 3px"}}})),Ne=r.a.memo((function(e){var t=e.users,a=e.hiddenCount,n=e.handleMore,c=Ce(),i=xe();return r.a.createElement("ul",{className:i.listCtr},t.map((function(e,t){return r.a.createElement("li",{key:e.username,className:i.avatarCtr},r.a.createElement(ge.a,{disableTouchListener:!0,title:r.a.createElement(Oe,e),arrow:!0},r.a.createElement("div",null,r.a.createElement(Ue,{initial:e.username[0],className:"".concat(c[t]," ").concat(i.avatar),admin:e.admin}))))})),a?r.a.createElement("li",{key:"last-item",className:i.avatarCtr,onClick:n},r.a.createElement(fe.a,{alt:"",className:"".concat(i.lastAvatar," ").concat(i.avatar)},"+",a)):null)})),_e=a(82),Ie=a.n(_e),Te=a(332),we=a(382),ke=a(383),Re=a(371),Le=a(88),Ae=a(379),Ge=a(87),Fe=a(86),Pe=a(380),De=a(84),He=a(381),Ve=[];Ie()(5,(function(){return Ve.push(S.a,Le.a,Ae.a,Ge.a,Fe.a,Pe.a,De.a,He.a,pe.a)}));var ze=Object(s.a)((function(){return oe()(Ve,(function(e){return{color:"white",backgroundColor:e[500]}}))})),We=function(e){var t=e.username,a=e.color,n=e.lastVisited,c=e.admin;return r.a.createElement(Te.a,null,r.a.createElement(we.a,null,r.a.createElement(Ue,{initial:t[0],className:a,admin:c})),r.a.createElement(ke.a,{primary:he()(t),secondary:r.a.createElement("em",null,"Last online: ".concat(ye(n)))}))},qe=function(e){var t=e.users,a=ze();return r.a.createElement(Re.a,null,t.map((function(e,t){return r.a.createElement(We,Object.assign({key:e.username,color:a[t]},e))})))},Me=Object(s.a)((function(){return{container:{height:"85%",display:"flex",flexDirection:"column",alignItems:"center"},title:{display:"flex",flex:.4,alignItems:"center"},main:{display:"flex",flex:.2,alignItems:"center"},footer:{display:"flex",flex:.4,alignItems:"flex-end"},modalWindow:{display:"flex",alignItems:"center",justifyContent:"center"},modalCtr:{width:"50%",overflow:"auto",maxHeight:"75%"}}})),Ye=function(e){var t=e.activeUsers,a=e.loggedInUser,c=Me(),i=Object(n.useState)(!1),o=Object(p.a)(i,2),l=o[0],s=o[1],m=_()(a,"isAdmin",!1),d=t.slice(0,5),g=t.slice(5);return r.a.createElement(X,{isLoggedIn:!0,admin:m},r.a.createElement("section",{className:c.container},r.a.createElement("header",{className:c.title},r.a.createElement(f.a,{variant:"h4"},"Welcome ",m?"Admin!":"User!")),r.a.createElement("main",{className:c.main},r.a.createElement(Ne,{users:d,hiddenCount:g.length,max:5,handleMore:function(){return s(!0)}}),r.a.createElement(ce.a,{open:l,onClose:function(){return s(!1)},className:c.modalWindow},r.a.createElement(u.a,{className:c.modalCtr},r.a.createElement(qe,{users:g})))),r.a.createElement("footer",{className:c.footer},r.a.createElement(f.a,{variant:"caption"},"Created by: Veeresh Rathod V, 2022"))))},Ke=function(e){var t=e.color,a=e.username,n=e.createdOn,c=e.lastVisited,i=e.isAdmin;return r.a.createElement(Te.a,null,r.a.createElement(we.a,null,r.a.createElement(Ue,{initial:a[0],className:t,admin:i})),r.a.createElement(ke.a,{primary:he()(a),secondary:r.a.createElement("em",null,"Created on: ".concat(ye(n)))}),r.a.createElement(ke.a,{style:{textAlign:"right"},primary:r.a.createElement("em",null,"Last online: ".concat(ye(c)))}))},Be=[];Ie()(5,(function(){return Be.push(Le.a,Ae.a,Ge.a,Fe.a,Pe.a,De.a,He.a,pe.a)}));var Je,Qe=Object(s.a)((function(){return oe()(Be,(function(e){return{color:"white",backgroundColor:e[500]}}))})),Xe=Object(s.a)((function(){return{container:{marginTop:"1em",textAlign:"left"},title:{padding:"8px 16px"},noData:{color:de.a[500],padding:"16px"}}})),Ze=function(e){var t=e.users,a=Qe(),n=Xe();return r.a.createElement(X,{isLoggedIn:!0},r.a.createElement("section",{className:n.container},r.a.createElement(f.a,{variant:"h4",color:"primary",className:n.title},"User History"),t.length?r.a.createElement(Re.a,null,t.map((function(e,t){return r.a.createElement(Ke,Object.assign({key:e.username,color:a[t]},e))}))):r.a.createElement(f.a,{variant:"h5",className:n.noData},"No history data")))},$e=a(384),et=a(390),tt=Object(s.a)((function(){return{registerForm:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"26em"},field:{width:"75%"}}})),at=function(e){var t=e.isSubmitting,a=e.onSubmit,c=tt(),i=Object(n.useState)(""),l=Object(p.a)(i,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),g=d[0],E=d[1],h=Object(n.useState)(!1),v=Object(p.a)(h,2),b=v[0],y=v[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(e.target.elements)},className:c.registerForm},r.a.createElement("header",null,r.a.createElement(f.a,{variant:"h5"},"Register")),r.a.createElement(Z.a,{id:"username",label:"Username",variant:"outlined",className:c.field,required:!0,value:s,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement(Z.a,{id:"password",label:"Password",type:"password",variant:"outlined",className:c.field,required:!0,value:g,onChange:function(e){var t=e.target;return E(t.value)}}),r.a.createElement($e.a,{control:r.a.createElement(et.a,{id:"admin",size:"medium",checked:b,onChange:function(e){var t=e.target;return y(t.checked)},color:"primary"}),label:"is Admin?"}),t?r.a.createElement($.a,null):r.a.createElement(ee.a,{variant:"contained",type:"submit",disabled:t,color:"primary"},"Sign up"),r.a.createElement("footer",null,r.a.createElement(f.a,{variant:"subtitle2"},"Already have account with us? ",r.a.createElement(o.b,{to:"/app"},"Sign in"))))},nt=Object(s.a)((function(){return{signUpCtr:{margin:"10em auto",maxWidth:"32em"}}})),rt=function(e){var t=e.signingUp,a=e.signUpFailure,n=nt(),c=!t&&a;return r.a.createElement(X,null,r.a.createElement("section",{className:n.signUpCtr},c&&r.a.createElement(m.a,{severity:"error"},a),r.a.createElement("br",null),r.a.createElement(u.a,{elevation:2},r.a.createElement(at,{isSubmitting:t,onSubmit:function(e){var t=e.username,a=e.password,n=e.admin;M(t.value,a.value,n.checked)}}))))},ct=Object(s.a)((function(){return{container:{margin:"10em auto",maxWidth:"32em"}}})),it=function(e){var t=ct();return r.a.createElement(X,null,r.a.createElement("section",{className:t.container},r.a.createElement(f.a,{variant:"h2",color:"secondary"},"Sorry..."),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"h5"},e.message),r.a.createElement("br",null),r.a.createElement(ee.a,{href:"/app",size:"large",variant:"outlined",color:"primary"},"Log in")))},ot=function(e){return function(t){var a=Object(n.useState)(!0),c=Object(p.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W("/session/checkToken");case 3:if(200!==(t=e.sent).status){e.next=9;break}o(!1),Ot.dispatch({type:T,payload:t.data.data}),e.next=10;break;case 9:throw t;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),o(!1),d(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i?r.a.createElement("p",null,"Authenticating...."):m?r.a.createElement(l.a,{to:"/app/error"}):r.a.createElement(e,t)}},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return function(t){return function(a){var c=Object(n.useContext)(St),i=e&&e(c);return r.a.createElement(t,Object.assign({},i,a,{dispatch:Ot.dispatch}))}}},st=lt((function(e){return{loggingIn:e.login.loading,loginSuccess:e.login.payload,loginFailure:e.login.error,signingUp:e.signUp.loading,signUpSuccess:e.signUp.payload,loggingOut:e.logout.loading,logoutSuccess:e.logout.payload}}))((function(e){var t=Object(l.g)(),a=e.loggingIn,c=e.loginSuccess;return Object(n.useEffect)((function(){!a&&c&&t.push("/app/home")}),[a,c]),r.a.createElement(re,e)})),ut=ot((function(e){return Object(n.useEffect)((function(){P.getSocket()||P.create(),function(){var e=P.getSocket();e?(Ot.dispatch({type:"app/auth/FETCH_ACTIVE_USERS_PENDING"}),e.on("activeUsers",(function(e){Ot.dispatch({type:"app/auth/FETCH_ACTIVE_USERS_SUCCESS",payload:e})}))):Ot.dispatch({type:"app/auth/FETCH_ACTIVE_USERS_FAILURE",payload:{},error:"Something went wrong!"})}()}),[]),r.a.createElement(Ye,e)})),mt=lt((function(e){return{activeUsers:Object.values(e.activeUsers.payload),loggedInUser:e.login.payload&&e.login.payload.user}}))(ut),pt=ot((function(e){return Object(n.useEffect)((function(){K()}),[]),r.a.createElement(Ze,e)})),dt=lt((function(e){return{users:e.userHistory.payload||[]}}))(pt),gt=lt((function(e){return{signingUp:e.signUp.loading,signUpSuccess:e.signUp.payload,signUpFailure:e.signUp.error}}))((function(e){var t=Object(l.g)(),a=e.signingUp,c=e.signUpSuccess,i=e.dispatch;return Object(n.useEffect)((function(){!a&&c&&(t.push("/app"),setTimeout((function(){return i({type:"app/auth/SIGN_UP_RESET"})}),3e3))}),[a,c]),r.a.createElement(rt,e)})),ft=function(e){return r.a.createElement(it,Object.assign({message:"Invalid session. Please login again!"},e))},Et={loading:!1,payload:null,error:!1},ht=a(107),vt={dummy1:{username:"sDummy1",lastVisited:"2020-01-02T05:23:59+00:00",admin:!0},dummy2:{username:"mDummy2",lastVisited:"2020-03-08T02:23:59+00:00",admin:!1},dummy3:{username:"hDummy3",lastVisited:"2020-01-14T04:23:59+00:00",admin:!1},dummy4:{username:"dDummy4",lastVisited:"2020-04-12T12:23:59+00:00",admin:!0},dummy5:{username:"sDummy5",lastVisited:"2020-01-11T02:23:59+00:00",admin:!1}},bt={loading:!1,payload:vt,error:!1},yt={loading:!1,payload:Object.values(vt),error:!1},Ot=function(e){var t,a=[],n=function(n){t=e(t,n),a.forEach((function(e){return e()}))};return n({}),{getState:function(){return t},subscribe:function(e){return a.push(e),a.filter((function(t){return e!==t}))},dispatch:n}}((Je={login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(D.a)({},e,{loading:!0,error:!1});case T:return Object(D.a)({},e,{loading:!1,payload:t.payload,error:!1});case"app/auth/LOGIN_FAILURE":return Object(D.a)({},e,{loading:!1,error:!0});case w:case"app/auth/LOGIN_RESET":return Object(D.a)({},Et);default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(D.a)({},e,{loading:!0,error:!1});case k:return Object(D.a)({},e,{loading:!1,payload:t.payload,error:!1});case R:return Object(D.a)({},e,{loading:!1,error:t.payload});case I:case"app/auth/SIGN_UP_RESET":return Object(D.a)({},Et);default:return e}},logout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth/LOGOUT_PENDING":return Object(D.a)({},e,{loading:!0,error:!1});case"app/auth/LOGOUT_SUCCESS":return Object(D.a)({},e,{loading:!1,payload:!0,error:!1});case"app/auth/LOGOUT_FAILURE":return Object(D.a)({},e,{loading:!1,error:!0});case I:case"app/auth/LOGOUT_RESET":return Object(D.a)({},Et);default:return e}},activeUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth/FETCH_ACTIVE_USERS_PENDING":return Object(D.a)({},e,{loading:!0,error:!1});case"app/auth/FETCH_ACTIVE_USERS_SUCCESS":return Object(D.a)({},e,{loading:!1,payload:Object(D.a)({},t.payload,{},vt)});case"app/auth/FETCH_ACTIVE_USERS_FAILURE":return Object(D.a)({},e,{loading:!1,error:!0});default:return e}},userHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth/FETCH_USER_HISTORY_PENDING":return Object(D.a)({},e,{loading:!0,error:!1});case"app/auth/FETCH_USER_HISTORY_SUCCESS":return Object(D.a)({},e,{loading:!1,payload:[].concat(Object(ht.a)(t.payload),Object(ht.a)(Object.values(vt)))});default:return e}}},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.keys(Je).reduce((function(a,n){return a[n]=Je[n](e[n],t),a}),{})})),St=r.a.createContext(),jt=function(){return r.a.createElement(St.Provider,{value:Ot.getState()},r.a.createElement(o.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,render:function(){return r.a.createElement(l.a,{to:"/app"})}}),r.a.createElement(l.b,{path:"/app",exact:!0,component:st}),r.a.createElement(l.b,{path:"/app/register",component:gt}),r.a.createElement(l.b,{path:"/app/home",component:mt}),r.a.createElement(l.b,{path:"/app/history",component:dt}),r.a.createElement(l.b,{path:"/app/error",component:ft}),r.a.createElement(l.b,{render:function(){return r.a.createElement(ft,{message:"Looking for the App? Login below to get started"})}}))))},Ut=function(){return i.a.render(r.a.createElement(jt,null),document.getElementById("root"))};Ot.subscribe(Ut),Ut()}},[[178,1,2]]]);
//# sourceMappingURL=main.d8ed3d2f.chunk.js.map