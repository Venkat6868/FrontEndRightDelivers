(this["webpackJsonpright-deliveres"]=this["webpackJsonpright-deliveres"]||[]).push([[16],{135:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(28),c=a(4),i=a(21);t.a=Object(i.b)((function(e){return{config:e.config,cartCount:e.cart.cartItems.length}}))(Object(c.g)((function(e){var t=e.cartCount;return o.a.createElement("div",{className:"fixed-top align-middle",style:{position:"fixed",padding:"0.5rem 1rem",top:"0",width:"100%",backgroundColor:"#2F4F4F",zIndex:"10"}},o.a.createElement("div",{style:{paddingTop:"4vh",display:"flex",alignItems:"center"}},o.a.createElement("div",{onClick:e.back,style:{fontSize:"20px",color:"white",padding:"0px 20px"}},o.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),o.a.createElement("span",{style:{fontSize:"18px",color:"white"}},e.heading),o.a.createElement(r.b,{to:"/dashboard/cart",className:"option_links ml-auto mr-3"},o.a.createElement("i",{className:"uil uil-shopping-cart-alt icon_wishlist"}),o.a.createElement("span",{className:"noti_count1"},t))))})))},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),o=a(168),r=a(176),c=Math.pow(2,31)-1;function i(){var e=Object(o.a)(),t=Object(n.useRef)();return Object(r.a)((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,o){void 0===o&&(o=0),e()&&(a(),o<=c?t.current=setTimeout(n,o):function e(t,a,n){var o=n-Date.now();t.current=o<=c?setTimeout(a,o):setTimeout((function(){return e(t,a,n)}),c)}(t,n,Date.now()+o))},clear:a}}),[])}},255:function(e,t,a){"use strict";var n=a(3),o=a(5),r=a(0),c=a.n(r),i=a(132),l=a.n(i),s=a(152),u=a(177),m=a(167),d=a(134),f=a(180),b=c.a.createContext({onClose:function(){}}),h=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.closeLabel,s=e.closeButton,u=e.className,h=e.children,v=Object(o.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(d.b)(a,"toast-header");var p=Object(r.useContext)(b),E=Object(m.a)((function(e){p&&p.onClose&&p.onClose(e)}));return c.a.createElement("div",Object(n.a)({ref:t},v,{className:l()(a,u)}),h,s&&c.a.createElement(f.a,{label:i,onClick:E,className:"ml-2 mb-1","data-dismiss":"toast"}))}));h.displayName="ToastHeader",h.defaultProps={closeLabel:"Close",closeButton:!0};var v=h,p=a(151),E=Object(p.a)("toast-body"),g={animation:!0,autohide:!1,delay:3e3,show:!0,transition:u.a},O=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,u=e.children,m=e.transition,f=e.show,h=e.animation,v=e.delay,p=e.autohide,E=e.onClose,g=Object(o.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(d.b)("toast");var O=Object(r.useRef)(v),j=Object(r.useRef)(E);Object(r.useEffect)((function(){O.current=v,j.current=E}),[v,E]);var y=Object(s.a)(),N=Object(r.useCallback)((function(){p&&f&&j.current()}),[p,f]);y.set(N,O.current);var w=Object(r.useMemo)((function(){return m&&h}),[m,h]),C=c.a.createElement("div",Object(n.a)({},g,{ref:t,className:l()(a,i,!w&&(f?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),u),k={onClose:E};return c.a.createElement(b.Provider,{value:k},w?c.a.createElement(m,{in:f,unmountOnExit:!0},C):C)}));O.defaultProps=g,O.displayName="Toast",O.Body=E,O.Header=v;t.a=O},337:function(e,t,a){},572:function(e,t,a){"use strict";a.r(t);var n=a(41),o=a(0),r=a.n(o),c=a(135),i=a(21),l=a(11),s=a(4),u=(a(337),a(255));t.default=Object(i.b)((function(e){return{config:e.config}}),(function(e){return{logout:function(){return e(l.m())},clearOrders:function(){return e(l.i())},clearAddress:function(){return e(l.e())}}}))(Object(s.g)((function(e){var t=Object(o.useState)(!1),a=Object(n.a)(t,2),i=a[0],l=a[1],m=Object(s.f)();Object(o.useEffect)((function(){e.config.isAuth||m.push("/login")}),[]);var d=r.a.createElement(u.a,{onClose:function(){return l(!1)},show:i,delay:2e3,autohide:!0,style:{position:"fixed",bottom:"20vh",zIndex:"999",textAlign:"center",left:"50%",transform:"translateX(-50%)"}},r.a.createElement(u.a.Body,{style:{backgroundColor:"#2f4f4f",color:"white",borderBottom:"none",textAlign:"center",padding:"0.2rem 0.8rem"}},r.a.createElement("strong",{className:"mr-auto"},"Coming Soon"))),f=r.a.createElement("div",{className:"Container",style:{marginTop:"18vh"}},r.a.createElement("div",{className:"row m-3"},[{name:"Orders",icon:"fa fa-motorcycle icon__1",link:"/dashboard/orders",isEnabled:!0},{name:"Live Chat",icon:"far fa-comment icon__1",link:"",isEnabled:!0},{name:"Address",icon:"fa fa-map-marked-alt icon__1",link:"/dashboard/address",isEnabled:!0},{name:"Faq",icon:"fa fa-question-circle  icon__1",link:"/dashboard/faq",isEnabled:!1},{name:"Account",icon:"fa fa-user-cog icon__1",link:"/settings",isEnabled:!0}].map((function(e){return r.a.createElement("div",{className:"col col-5 moreBtn",key:e.name},r.a.createElement("div",{onClick:function(){return function(e){"Live Chat"!==e.name?e.isEnabled?m.push(e.link):l(!0):window.location.href="https://tawk.to/chat/5f33eb1a4c7806354da5cef8/default"}(e)},style:{color:"white"}},r.a.createElement("i",{className:"iconStyle ".concat(e.icon)}),r.a.createElement("br",null),r.a.createElement("span",{className:"textStyle"},e.name)))})),r.a.createElement("div",{className:"col col-5 m-auto moreBtn"},r.a.createElement("div",{style:{color:"white"},onClick:function(){e.logout(),m.push("/login"),e.clearOrders(),e.clearAddress()}},r.a.createElement("i",{className:"iconStyle fa fa-sign-out-alt icon__1"}),r.a.createElement("br",null),r.a.createElement("span",{className:"textStyle"},"Logout")))));return r.a.createElement("div",null,r.a.createElement(c.a,{heading:"More",back:function(){return m.goBack()}}),f,d,r.a.createElement("div",{className:"footer-more-area"},r.a.createElement("span",{style:{color:"white",bottom:"2vh",right:"33%",position:"fixed"},className:""},"App Version 1.0.1")))})))}}]);
//# sourceMappingURL=16.698fca1b.chunk.js.map