(this["webpackJsonpright-deliveres"]=this["webpackJsonpright-deliveres"]||[]).push([[15],{172:function(e,t,a){e.exports=a.p+"static/media/NegativeSVG.ef8ca0ab.svg"},198:function(e,t,a){},233:function(e,t,a){},348:function(e,t,a){},591:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a.n(n),o=a(35),c=a(51),s=a(1),l=a(12),i=a(0),u=a.n(i),m=a(5),p=a(26),f=a(15),d=(a(348),a(172)),b=a.n(d),g=a(154),h=a(16),v=(a(233),a(198),a(19));t.default=Object(p.b)((function(e){return{config:e.config}}),(function(e){return{authenticate:function(t){return e(f.d(t))},setActiveOrders:function(t){return e(f.p(t))}}}))(Object(m.g)((function(e){var t=Object(m.f)(),a=Object(i.useState)(!0),n=Object(l.a)(a,2),p=n[0],f=n[1],d=Object(i.useState)(!1),O=Object(l.a)(d,2),j=O[0],y=O[1],E=Object(i.useState)({}),N=Object(l.a)(E,2),x=N[0],w=N[1],k=Object(i.useState)(30),S=Object(l.a)(k,2),C=S[0],T=S[1],P=Object(i.useState)(""),A=Object(l.a)(P,2),K=A[0],I=A[1],_=Object(i.useState)(""),J=Object(l.a)(_,2),z=J[0],B=J[1],D=Object(i.useState)(!1),V=Object(l.a)(D,2),q=V[0],W=V[1],G=Object(i.useState)(!1),L=Object(l.a)(G,2),M=L[0],R=L[1];Object(i.useEffect)((function(){e.config.isAuth&&t.push("/")}),[]),Object(i.useEffect)((function(){var e=null;return!M&C>0?e=setInterval((function(){T((function(e){return e-1}))}),1e3):0===C&&(clearInterval(e),R(!0)),function(){return clearInterval(e)}}),[M,C]);var U={fullname:"",phone:"",password:"",errors:{phone:"",password:"",fullname:"",signup:""}},X=Object(i.useState)(U),$=Object(l.a)(X,2),F=$[0],H=$[1],Q=h.b+"register/v2/resendotp",Y=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={mobile:F.phone,pwd:F.password,name:F.fullname},a={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",rkey:x.rKey,dkey:x.dKey},body:JSON.stringify(t)},e.next=4,Object(v.a)(Q,a);case 4:return e.next=6,e.sent.json();case 6:if(!(n=e.sent)||0!==n.status){e.next=11;break}return B(n.msg),y(!0),e.abrupt("return");case 11:if(!n||1!==n.status){e.next=16;break}return B(n.msg),y(!0),w(n),e.abrupt("return");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=h.b+"register/v2/sendotp",ee=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={mobile:F.phone,pwd:F.password,name:F.fullname,ftoken:localStorage.getItem("ftoken")},a={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)},e.next=4,Object(v.a)(Z,a);case 4:return e.next=6,e.sent.json();case 6:if(!(n=e.sent)||0!==n.status){e.next=11;break}return B(n.msg),y(!0),e.abrupt("return");case 11:if(!n||1!==n.status){e.next=19;break}return B(n.msg),y(!0),w(n),W(!0),T(30),0===n.isNewUser?(f(!1),H(Object(s.a)(Object(s.a)({},F),{},{fullname:n.name}))):f(!0),e.abrupt("return");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e={phone:"",password:"",email:"",fullname:""},t=!0;return F.phone?"undefined"!==typeof F.phone?F.phone.match(/^[0-9]{10}$/)||(t=!1,e=Object(s.a)(Object(s.a)({},e),{},{phone:"*Please enter valid mobile no."})):e=Object(s.a)(Object(s.a)({},e),{},{phone:""}):(t=!1,e=Object(s.a)(Object(s.a)({},e),{},{phone:"*Please enter your mobile no."})),H(Object(s.a)(Object(s.a)({},F),{},{errors:e})),t},ae=h.b+"register/v2/submit",ne=function(){var a=Object(o.a)(r.a.mark((function a(){var n,o,c,l,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(localStorage.getItem("ftoken")),n={mobile:F.phone,pwd:F.password,name:F.fullname,otp:K,ftoken:localStorage.getItem("ftoken")},o={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",rkey:x.rKey,dkey:x.dKey},body:JSON.stringify(n)},a.next=5,Object(v.a)(ae,o);case 5:return a.next=7,a.sent.json();case 7:if(!(c=a.sent)||0!==c.status){a.next=12;break}return B(c.msg),y(!0),a.abrupt("return");case 12:c&&1===c.status&&(l=Object(s.a)({phone:F.phone,user:c.user,rKey:c.rKey,dKey:c.dKey},c),e.authenticate(l),e.setActiveOrders(c),B(c.msg),y(!0),t.push("/"),H(U),i=c.user.userid||"",Object(v.b)(i));case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),re=u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),te()&&ee()}},u.a.createElement("div",{style:{margin:"0px 0px 30px 0px",textAlign:"left"}},u.a.createElement("h5",{style:{textTransform:"uppercase",color:"#d30013"}},"Login"),u.a.createElement("p",{style:{fontSize:"12px",color:"#d30013"}},"Enter your mobile number to proceed")),u.a.createElement("div",{className:"form-group pos_rel"},u.a.createElement("input",{id:"phone[number]",name:"phone",type:"tel",value:F.phone,placeholder:"Mobile",onChange:function(e){var t=e.target,a=t.name,n=t.value;n.length<=10&&H(Object(s.a)(Object(s.a)({},F),{},Object(c.a)({},a,n)))},className:"form-control lgn_input",autoComplete:"off",required:!0}),u.a.createElement("i",{className:"uil uil-mobile-android-alt lgn_icon"})),u.a.createElement("button",{className:"login-btn hover-btn",style:{backgroundColor:10===F.phone.length?"#d30013":"grey"},disabled:10!==F.phone.length,type:"submit"},10===F.phone.length?"Send OTP":"Enter phone number")),oe=u.a.createElement(g.a,{onClose:function(){return y(!1)},show:j,delay:2e3,autohide:!0,style:{position:"fixed",bottom:"20vh",zIndex:"999",textAlign:"center",left:"50%",transform:"translateX(-50%)"}},u.a.createElement(g.a.Body,{style:{backgroundColor:"#2f4f4f",color:"white",borderBottom:"none",textAlign:"center",padding:"0.2rem 0.8rem"}},u.a.createElement("strong",{className:"mr-auto"},z))),ce=u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),te()&&(W(!0),ne())}},u.a.createElement("div",{style:{padding:"20px 0px",textAlign:"left"}},!p&&u.a.createElement("h5",{style:{color:"#d30013"}},"Welcome back, ",F.fullname),u.a.createElement("span",{style:{fontSize:"12px"}},"OTP sent to ",F.phone),u.a.createElement("span",{onClick:function(){I(""),W(!1)},style:{fontSize:"12px"},className:"action-btn float-right"},u.a.createElement("i",{className:"uil uil-edit"}),"Change number")),p&&u.a.createElement("div",{className:"form-group pos_rel"},u.a.createElement("input",{id:"full[name]",name:"fullname",type:"text",placeholder:"Name",value:F.fullname,onChange:function(e){var t=e.target,a=t.name,n=t.value;H(Object(s.a)(Object(s.a)({},F),{},Object(c.a)({},a,n)))},className:"form-control lgn_input",autoComplete:"off",required:!0}),u.a.createElement("i",{className:"uil uil-user-circle lgn_icon"})),u.a.createElement("div",{className:"form-row form-group"},u.a.createElement("div",{className:"col d-flex"},u.a.createElement("input",{id:"otp",name:"otp",type:"tel",placeholder:"Enter OTP",value:K,onChange:function(e){e.target.value.length<=6&&I(e.target.value)},autoComplete:"off",className:"form-control "})),u.a.createElement("div",{className:"col"},u.a.createElement("button",{type:"submit",style:{backgroundColor:F.fullname.length>=3&&6===K.length?"#d30013":"grey"},disabled:!(F.fullname.length>=3&&6===K.length),className:"w-100 otp-btn"},"Verify"))),u.a.createElement("div",{className:"form-group"},M?u.a.createElement("div",{onClick:function(){T(30),x&&Y(),R(!1)},style:{width:"100%"},className:"otp-wait-btn"},"Resend OTP"):u.a.createElement("div",{disabled:!0,style:{width:"100%"},className:"otp-wait-btn"},"Wait ",C," s")));return u.a.createElement("div",{className:"sign-inup"},oe,u.a.createElement("div",{className:"ColorBg-login"}),u.a.createElement("div",{className:"footer-more-area"},u.a.createElement("span",{style:{color:"white",bottom:"2vh",right:"33%",position:"fixed"},className:""},"App Version 1.0.1")),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-5"},u.a.createElement("div",{className:"sign-form"},u.a.createElement("div",{className:"sign-inner"},u.a.createElement("div",{className:"sign-logo mt-5",id:"logo"},u.a.createElement("div",null,u.a.createElement("img",{src:b.a,alt:""})))),u.a.createElement("div",{className:"ColorBgDown signup-link"},u.a.createElement("div",{className:"dims checout-address-step"},q?ce:re)))))))})))}}]);
//# sourceMappingURL=15.1f379b70.chunk.js.map