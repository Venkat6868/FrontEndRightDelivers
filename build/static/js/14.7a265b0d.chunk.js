(this["webpackJsonpright-deliveres"]=this["webpackJsonpright-deliveres"]||[]).push([[14],{135:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(28),i=a(4),c=a(21);t.a=Object(c.b)((function(e){return{config:e.config,cartCount:e.cart.cartItems.length}}))(Object(i.g)((function(e){var t=e.cartCount;return r.a.createElement("div",{className:"fixed-top align-middle",style:{position:"fixed",padding:"0.5rem 1rem",top:"0",width:"100%",backgroundColor:"#2F4F4F",zIndex:"10"}},r.a.createElement("div",{style:{paddingTop:"4vh",display:"flex",alignItems:"center"}},r.a.createElement("div",{onClick:e.back,style:{fontSize:"20px",color:"white",padding:"0px 20px"}},r.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),r.a.createElement("span",{style:{fontSize:"18px",color:"white"}},e.heading),r.a.createElement(o.b,{to:"/dashboard/cart",className:"option_links ml-auto mr-3"},r.a.createElement("i",{className:"uil uil-shopping-cart-alt icon_wishlist"}),r.a.createElement("span",{className:"noti_count1"},t))))})))},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a(168),o=a(176),i=Math.pow(2,31)-1;function c(){var e=Object(r.a)(),t=Object(n.useRef)();return Object(o.a)((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=i?t.current=setTimeout(n,r):function e(t,a,n){var r=n-Date.now();t.current=r<=i?setTimeout(a,r):setTimeout((function(){return e(t,a,n)}),i)}(t,n,Date.now()+r))},clear:a}}),[])}},194:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},225:function(e,t,a){"use strict";var n=a(3),r=a(5),o=a(0),i=a.n(o),c=a(194);function l(e){return!e||"#"===e.trim()}var s=i.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"a":a,s=e.disabled,u=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,a=d.onClick;(s||l(t))&&e.preventDefault(),s?e.stopPropagation():a&&a(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),s&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.a.createElement(o,Object(n.a)({ref:t},d,{onClick:f,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));s.displayName="SafeAnchor",t.a=s},229:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(21);t.a=Object(o.b)((function(e){return{config:e.config}}))((function(e){var t=e.config.authData.user.name,a=e.config.authData.user.mbl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",height:"43vh",background:"#2f4f4f",display:"block",width:"100%",zIndex:"-1",borderRadius:"0 0 5px 5px"}}),r.a.createElement("div",null,r.a.createElement("div",{class:"container",style:{marginTop:"17vh"}},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-12"},r.a.createElement("div",{class:"user-dt"},r.a.createElement("div",{style:{width:"80px",height:"80px",backgroundColor:"#fff",position:"relative",left:"50%",transform:"translateX(-50%)",textAlign:"center",borderRadius:"50%",webkitBorderRadius:"50%",mozBorderRadius:"50%"}},r.a.createElement("span",{style:{position:"relative",top:"20px",fontSize:"40px",lineHeight:"40px",color:"green",fontWeight:"bold"}},t[0]||"G")),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"white",fontSize:"16px"}},t||"Guest")," ",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"white",fontSize:"12px"}},a||"")))))))}))},255:function(e,t,a){"use strict";var n=a(3),r=a(5),o=a(0),i=a.n(o),c=a(132),l=a.n(c),s=a(152),u=a(177),d=a(167),f=a(134),m=a(180),b=i.a.createContext({onClose:function(){}}),p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.closeLabel,s=e.closeButton,u=e.className,p=e.children,v=Object(r.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(f.b)(a,"toast-header");var h=Object(o.useContext)(b),g=Object(d.a)((function(e){h&&h.onClose&&h.onClose(e)}));return i.a.createElement("div",Object(n.a)({ref:t},v,{className:l()(a,u)}),p,s&&i.a.createElement(m.a,{label:c,onClick:g,className:"ml-2 mb-1","data-dismiss":"toast"}))}));p.displayName="ToastHeader",p.defaultProps={closeLabel:"Close",closeButton:!0};var v=p,h=a(151),g=Object(h.a)("toast-body"),y={animation:!0,autohide:!1,delay:3e3,show:!0,transition:u.a},E=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.children,d=e.transition,m=e.show,p=e.animation,v=e.delay,h=e.autohide,g=e.onClose,y=Object(r.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(f.b)("toast");var E=Object(o.useRef)(v),x=Object(o.useRef)(g);Object(o.useEffect)((function(){E.current=v,x.current=g}),[v,g]);var j=Object(s.a)(),O=Object(o.useCallback)((function(){h&&m&&x.current()}),[h,m]);j.set(O,E.current);var w=Object(o.useMemo)((function(){return d&&p}),[d,p]),C=i.a.createElement("div",Object(n.a)({},y,{ref:t,className:l()(a,c,!w&&(m?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),u),N={onClose:g};return i.a.createElement(b.Provider,{value:N},w?i.a.createElement(d,{in:m,unmountOnExit:!0},C):C)}));E.defaultProps=y,E.displayName="Toast",E.Body=g,E.Header=v;t.a=E},582:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a.n(n),o=a(42),i=a(41),c=a(0),l=a.n(c),s=a(21),u=a(11),d=a(4),f=a(135),m=a(14),b=a(229),p=a(3),v=a(5),h=a(132),g=a.n(h),y=a(134),E=a(225),x=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,r=e.size,o=e.active,i=e.className,c=e.block,s=e.type,u=e.as,d=Object(v.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),f=Object(y.b)(a,"btn"),m=g()(i,f,o&&"active",f+"-"+n,c&&f+"-block",r&&f+"-"+r);if(d.href)return l.a.createElement(E.a,Object(p.a)({},d,{as:u,ref:t,className:g()(m,d.disabled&&"disabled")}));t&&(d.ref=t),u||(d.type=s);var b=u||"button";return l.a.createElement(b,Object(p.a)({},d,{className:m}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var j=x,O=a(255),w=a(16);t.default=Object(s.b)((function(e){return{config:e.config}}),(function(e){return{updateSettings:function(t){return e(u.E(t))}}}))((function(e){var t=Object(d.f)(),a=Object(c.useState)(!1),n=Object(i.a)(a,2),s=n[0],u=n[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),h=v[0],g=v[1],y=Object(c.useState)(!1),E=Object(i.a)(y,2),x=E[0],C=E[1],N=Object(c.useState)(""),k=Object(i.a)(N,2),S=k[0],R=k[1],T=m.b+"editname",z=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,i,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={name:S},o={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",rKey:e.config.authData.rKey,dKey:e.config.authData.dKey},body:JSON.stringify(n)},t.next=5,Object(w.a)(T,o);case 5:return t.next=7,t.sent.json();case 7:(i=t.sent)&&0===i.status&&(g(i.msg),u(!0)),i&&1===i.status&&(g(i.msg),u(!0),c={name:S},e.updateSettings(c),R(""),C(!1));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=l.a.createElement(O.a,{onClose:function(){return u(!1)},show:s,delay:2e3,autohide:!0,style:{position:"fixed",bottom:"20vh",zIndex:"999",textAlign:"center",left:"50%",transform:"translateX(-50%)"}},l.a.createElement(O.a.Body,{style:{backgroundColor:"#2f4f4f",color:"white",borderBottom:"none",textAlign:"center",padding:"0.2rem 0.8rem"}},l.a.createElement("strong",{className:"mr-auto"},h)));return l.a.createElement("div",null,l.a.createElement(f.a,{heading:"Settings",back:function(){return t.goBack()}}),l.a.createElement(b.a,null),D,l.a.createElement("div",{style:{marginTop:"8vh",width:"100%",padding:"30px 15px 5px 15px",borderRadius:"10px"}},l.a.createElement("div",{style:{color:"#2f4f4f",fontSize:"16px",padding:"5px",border:"1px solid #2f4f4f",borderRadius:"5px",textAlign:"center"},onClick:function(){return C(!0)}},"Change Username ",l.a.createElement("i",{className:"uil uil-edit"}))),x&&l.a.createElement("form",{onSubmit:z},l.a.createElement("div",{className:"form-group pos_rel m-3"},l.a.createElement("input",{id:"name",name:"name",type:"text",placeholder:"Enter new username",value:S,onChange:function(e){return R(e.target.value)},className:"form-control lgn_input",style:{backgroundColor:"transparent"},autoComplete:"off",required:!0}),l.a.createElement("i",{className:"uil uil-user-circle lgn_icon"})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement("div",{onClick:function(){return C(!1)},style:{width:"45%",backgroundColor:"rgb(47, 79, 79)"},className:"otp-btn"},"Cancel"),l.a.createElement(j,{type:"submit",disabled:S.length<3||S.length>20,className:"otp-btn",style:{width:"45%",backgroundColor:S.length>=3&&S.length<20?"#d30013":"grey"}},"Save"))))}))}}]);
//# sourceMappingURL=14.7a265b0d.chunk.js.map