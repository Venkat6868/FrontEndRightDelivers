(this["webpackJsonpright-deliveres"]=this["webpackJsonpright-deliveres"]||[]).push([[12],{172:function(e,t,a){e.exports=a.p+"static/media/NegativeSVG.ef8ca0ab.svg"},182:function(e,t,a){},183:function(e,t,a){},188:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(34),o=a(5),l=a(26),i=(a(182),a(12)),s=a(598),u=(a(183),a(15));var m=Object(l.b)((function(e){return{curLocation:e.config.curLocation,branches:e.config.branches}}),(function(e){return{changeLocation:function(t){return e(u.A(t))}}}))((function(e){var t=Object(o.f)(),a=e.branches,c=Object(n.useState)(!1),l=Object(i.a)(c,2),u=l[0],m=l[1],f=e.curLocation,d=r.a.createElement(s.a,{show:u,onHide:function(){m(!1)},centered:!0},r.a.createElement(s.a.Body,null,r.a.createElement("h5",{style:{fontWeight:"bold",padding:"0px 15px"}},"Select your Location"),a.map((function(n){return r.a.createElement("div",{key:n.name,className:"myLoc item drop-item",style:{alignContent:"left"},onClick:function(){return function(n){m(!1),t.push("/"+n);var r=a.find((function(e){return e.name===n}));e.changeLocation(r)}(n.name)}},r.a.createElement("i",{className:"uil uil-location-point"}),n.name)}))));return r.a.createElement(r.a.Fragment,null,d,r.a.createElement("div",{className:"header-color"},r.a.createElement("span",{className:"btn",style:{color:"white"},onClick:function(){return m(!0)}},r.a.createElement("i",{className:"uil uil-location-point"}),f||"Pick Your Location")))})),f=a(172),d=a.n(f);t.a=Object(l.b)((function(e){return{config:e.config,cartCount:e.cart.cartItems.length}}))(Object(o.g)((function(e){var t=e.config.curLocation;return r.a.createElement("nav",{className:"navbar header clearfix",style:{backgroundColor:"#2F4F4F",zIndex:"10"}},r.a.createElement("div",{className:"top-header-group",style:{marginTop:"4vh"}},r.a.createElement("div",{className:"float-left"},r.a.createElement("div",{className:"res_main_logo",id:"logo"},r.a.createElement(c.b,{to:"/"+t},r.a.createElement("img",{src:d.a,alt:"Right Delivers"})))),r.a.createElement("div",{className:"select_location d-flex float-right align-middle mt-2"},r.a.createElement(m,null),r.a.createElement(c.b,{to:"/notifications"},r.a.createElement("i",{style:{color:"white",padding:"0.4rem 1.0rem"},className:"fa fa-bell","aria-hidden":"true"})))))})))},190:function(e,t,a){"use strict";var n=a(3),r=a(4),c=a(0),o=a.n(c),l=a(189);function i(e){return!e||"#"===e.trim()}var s=o.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"a":a,s=e.disabled,u=e.onKeyDown,m=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=m.href,a=m.onClick;(s||i(t))&&e.preventDefault(),s?e.stopPropagation():a&&a(e)};return i(m.href)&&(m.role=m.role||"button",m.href=m.href||"#"),s&&(m.tabIndex=-1,m["aria-disabled"]=!0),o.a.createElement(c,Object(n.a)({ref:t},m,{onClick:f,onKeyDown:Object(l.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));s.displayName="SafeAnchor",t.a=s},233:function(e,t,a){},274:function(e,t,a){},350:function(e,t,a){e.exports=a.p+"static/media/banner-1.e8762380.svg"},351:function(e,t,a){e.exports=a.p+"static/media/banner-2.21995f34.png"},352:function(e,t,a){e.exports=a.p+"static/media/banner-3.18903c3f.svg"},353:function(e,t,a){},599:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a(5),l=a(34),i=a(15),s=a(188),u=(a(233),a(3)),m=a(4),f=a(49);var d=function(e,t){var a=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},p=a(80),v=a(11),b=a.n(v),E=a(55),g=a(32),h=a(207),y=a(48),N=Object(y.a)("carousel-caption",{Component:"div"}),x=Object(y.a)("carousel-item");function O(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}var j=a(190),k=a(18),S=a(56),C={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var w=r.a.forwardRef((function(e,t){var a=Object(h.a)(e,{activeIndex:"onSelect"}),c=a.as,o=void 0===c?"div":c,l=a.bsPrefix,i=a.slide,s=a.fade,v=a.controls,y=a.indicators,N=a.activeIndex,x=a.onSelect,C=a.onSlide,w=a.onSlid,L=a.interval,T=a.keyboard,I=a.onKeyDown,B=a.pause,D=a.onMouseOver,A=a.onMouseOut,M=a.wrap,R=a.touch,z=a.onTouchStart,K=a.onTouchMove,P=a.onTouchEnd,F=a.prevIcon,H=a.prevLabel,U=a.nextIcon,V=a.nextLabel,W=a.className,X=a.children,_=Object(m.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),q=Object(k.b)(l,"carousel"),J=Object(n.useRef)(null),Y=Object(n.useState)("next"),G=Y[0],Q=Y[1],Z=Object(n.useState)(!1),$=Z[0],ee=Z[1],te=Object(n.useState)(N),ae=te[0],ne=te[1];$||N===ae||(J.current?(Q(J.current),J.current=null):Q(N>ae?"next":"prev"),i&&ee(!0),ne(N));var re=r.a.Children.toArray(X).filter(r.a.isValidElement).length,ce=Object(n.useCallback)((function(e){if(!$){var t=ae-1;if(t<0){if(!M)return;t=re-1}J.current="prev",x(t,e)}}),[$,ae,x,M,re]),oe=Object(f.a)((function(e){if(!$){var t=ae+1;if(t>=re){if(!M)return;t=0}J.current="next",x(t,e)}})),le=Object(n.useRef)();Object(n.useImperativeHandle)(t,(function(){return{element:le.current,prev:ce,next:oe}}));var ie=Object(f.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(le.current)&&oe()})),se="next"===G?"left":"right";d((function(){i||(C&&C(ae,se),w&&w(ae,se))}),[ae]);var ue=q+"-item-"+G,me=q+"-item-"+se,fe=Object(n.useCallback)((function(e){Object(S.a)(e),C&&C(ae,se)}),[C,ae,se]),de=Object(n.useCallback)((function(){ee(!1),w&&w(ae,se)}),[w,ae,se]),pe=Object(n.useCallback)((function(e){if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ce(e);case"ArrowRight":return e.preventDefault(),void oe(e)}I&&I(e)}),[T,I,ce,oe]),ve=Object(n.useState)(!1),be=ve[0],Ee=ve[1],ge=Object(n.useCallback)((function(e){"hover"===B&&Ee(!0),D&&D(e)}),[B,D]),he=Object(n.useCallback)((function(e){Ee(!1),A&&A(e)}),[A]),ye=Object(n.useRef)(0),Ne=Object(n.useRef)(0),xe=Object(n.useState)(!1),Oe=xe[0],je=xe[1],ke=Object(p.a)(),Se=Object(n.useCallback)((function(e){ye.current=e.touches[0].clientX,Ne.current=0,R&&je(!0),z&&z(e)}),[R,z]),Ce=Object(n.useCallback)((function(e){e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-ye.current,K&&K(e)}),[K]),we=Object(n.useCallback)((function(e){if(R){var t=Ne.current;if(Math.abs(t)<=40)return;t>0?ce(e):oe(e)}ke.set((function(){je(!1)}),L),P&&P(e)}),[R,ce,oe,ke,L,P]),Le=null!=L&&!be&&!Oe&&!$,Te=Object(n.useRef)();Object(n.useEffect)((function(){if(Le)return Te.current=setInterval(document.visibilityState?ie:oe,L),function(){clearInterval(Te.current)}}),[Le,oe,L,ie]);var Ie=Object(n.useMemo)((function(){return y&&Array.from({length:re},(function(e,t){return function(e){x(t,e)}}))}),[y,re,x]);return r.a.createElement(o,Object(u.a)({ref:le},_,{onKeyDown:pe,onMouseOver:ge,onMouseOut:he,onTouchStart:Se,onTouchMove:Ce,onTouchEnd:we,className:b()(W,q,i&&"slide",s&&q+"-fade")}),y&&r.a.createElement("ol",{className:q+"-indicators"},O(X,(function(e,t){return r.a.createElement("li",{key:t,className:t===ae?"active":null,onClick:Ie[t]})}))),r.a.createElement("div",{className:q+"-inner"},O(X,(function(e,t){var a=t===ae;return i?r.a.createElement(g.e,{in:a,onEnter:a?fe:null,onEntered:a?de:null,addEndListener:E.a},(function(t){return r.a.cloneElement(e,{className:b()(e.props.className,a&&"entered"!==t&&ue,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):r.a.cloneElement(e,{className:b()(e.props.className,a&&"active")})}))),v&&r.a.createElement(r.a.Fragment,null,(M||0!==N)&&r.a.createElement(j.a,{className:q+"-control-prev",onClick:ce},F,H&&r.a.createElement("span",{className:"sr-only"},H)),(M||N!==re-1)&&r.a.createElement(j.a,{className:q+"-control-next",onClick:oe},U,V&&r.a.createElement("span",{className:"sr-only"},V))))}));w.displayName="Carousel",w.defaultProps=C,w.Caption=N,w.Item=x;var L=w,T=a(208),I=a(350),B=a.n(I),D=a(351),A=a.n(D),M=a(352),R=a.n(M),z=a(12),K=a(598),P=(a(274),a(16));var F=Object(c.b)((function(e){return{config:e.config}}),(function(e){return{changeLocation:function(t){return e(i.A(t))},setNotification:function(t){return e(i.B(t))},setBackUrl:function(t){return e(i.r(t))}}}))(Object(o.g)((function(e){var t=Object(o.f)(),a=e.config.branches,c=e.config.curLocation,i=P.c+"services/",s=Object(n.useState)(!1),u=Object(z.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)(!0),p=Object(z.a)(d,2),v=p[0],b=p[1];Object(n.useEffect)((function(){e.config&&e.config.curBranch&&b(e.config.curBranch.services.includes(e.category.id))}),[c]);var E=r.a.createElement(K.a,{show:m,onHide:function(){f(!1)},centered:!0},r.a.createElement(K.a.Body,null,r.a.createElement("h5",{style:{fontWeight:"bold",padding:"0px 15px"}},"Select your Location"),a.map((function(n){return r.a.createElement("div",{key:n.name,className:"myLoc item drop-item",style:{alignContent:"left"},onClick:function(){return function(n){f(!1),t.push("/"+n);var r=a.find((function(e){return e.name===n}));e.changeLocation(r)}(n.name)}},r.a.createElement("i",{className:"uil uil-location-point"}),n.name)}))));return r.a.createElement("div",{className:"col col-".concat(0===e.index||1===e.index?"6":"4"," col-xs-4 col-sm-4 col-md-3 item")},E,r.a.createElement(l.b,{to:c&&v?"/"+c+"/"+e.category.link:"/",onClick:function(){c||f(!0)},className:"category-item"},r.a.createElement("div",null,r.a.createElement(T.a,{fluid:!0,className:"mx-auto d-block category-img",style:{height:"92px"},src:i+e.category.appimage,alt:""}))),!v&&c&&r.a.createElement("div",{className:"ribbon ribbon-top-left"},r.a.createElement("span",{className:"badge badge-danger"},"Coming Soon")))})));a(353);function H(e){var t=e.status,a="light"===e.theme?"#2f4f4f":"white";return r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"order-tracking ".concat(t>1&&"completed")},r.a.createElement("span",{className:"is-complete"}),r.a.createElement("p",{style:{color:{textColor:a}}},"Accepted")),r.a.createElement("div",{className:"order-tracking ".concat(t>2&&"completed")},r.a.createElement("span",{className:"is-complete"}),r.a.createElement("p",null,"Cooked")),r.a.createElement("div",{className:"order-tracking ".concat(t>3&&"completed")},r.a.createElement("span",{className:"is-complete"}),r.a.createElement("p",null,"On the way")),r.a.createElement("div",{className:"order-tracking ".concat(t>4&&"completed")},r.a.createElement("span",{className:"is-complete"}),r.a.createElement("p",null,"Delivered")))}var U=a(209),V=a.n(U),W=a(603);function X(e){return r.a.createElement("div",null,r.a.createElement(W.a,{className:"panel-group accordion active-orders mt-0 mb-0",defaultActiveKey:"0"},e.orders.orderStatus&&e.orders.activeOrders.map((function(t){return r.a.createElement("div",{key:t.ordid,style:{backgroundColor:"white",boxShadow:"0px 3px 8px 2px rgba(0, 0, 0, .08)",overflowX:"hidden",overflowY:"auto",borderRadius:"10px",padding:"10px",margin:"5px 0px",marginBottom:"15px",color:"#2f4f4f"},className:"active-order-item"},r.a.createElement(W.a.Toggle,{eventKey:t.ordid,style:{backgroundColor:"Transparent",backgroundRepeat:"no-repeat",border:"none",cursor:"pointer",overflow:"hidden",paddingTop:"3px",paddingBottom:"3px",width:"100%",fontSize:"10px",color:"#2f4f4f",textAlign:"left",verticalAlign:"middle"}},r.a.createElement("div",null,r.a.createElement("i",{style:{marginLeft:"5px",fontSize:"14px"},className:"fa ".concat(1===t.ost?"fa-clock":2===t.ost?"fa-utensils":3===t.ost?"fa-shopping-bag":4===t.ost?"fa-motorcycle":"fa-check"," pr-2")}),r.a.createElement("span",{style:{fontSize:"14px"}},e.orders.orderStatus[t.ost]&&e.orders.orderStatus[t.ost].l),r.a.createElement("i",{style:{fontSize:"18px",marginTop:"1.5px"},className:"fa fa-angle-right float-right mr-2"}))),r.a.createElement(W.a.Collapse,{eventKey:t.ordid},r.a.createElement("div",{className:"container",style:{margin:"5px"}},r.a.createElement("div",{className:"row",style:{paddingBottom:"10px",marginBottom:"10px"}},r.a.createElement("div",{className:"col col-12 align-middle",style:{paddingBottom:"5px"}},r.a.createElement("br",null),t.items.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{style:{listStyle:"none",marginTop:"5px",marginBottom:"5px"}},e.n," x ",e.q," ",r.a.createElement("span",{style:{float:"right"}}," \u20b9",e.p*e.q," ")))}))),r.a.createElement("div",{className:"col col-12 pt-1"},r.a.createElement("li",{style:{listStyle:"none",marginBottom:"5px"}},"Delivery Charges ",r.a.createElement("span",{style:{float:"right"}},"\u20b9",t.fee)," "),r.a.createElement("li",{style:{fontSize:"16px",fontWeight:"bold",listStyle:"none"}},"Total ",r.a.createElement("span",{style:{float:"right"}},"\u20b9",t.amt+t.fee)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12"},r.a.createElement(H,{status:t.ost,theme:"dark"}))))),r.a.createElement("div",{className:"m-2"},r.a.createElement("span",{style:{fontSize:"10px",float:"left",color:"grey"}},r.a.createElement("i",{className:"fa fa-calendar pr-2"}),V()(1e3*t.time,"mediumDate")),r.a.createElement("span",{style:{fontSize:"10px",float:"right",color:"grey"}},r.a.createElement("i",{className:"fa fa-clock pr-2"}),V()(1e3*t.time,"shortTime"))))}))))}var _=Object(c.b)((function(e){return{curLocation:e.config.curLocation,config:e.config,orders:e.orders}}))((function(e){var t=e.config.services,a=[B.a,A.a,R.a],n=e.orders.activeOrders||[],c=r.a.createElement(L,null,a.map((function(e){return r.a.createElement(L.Item,{key:e},r.a.createElement("div",{style:{backgroundColor:"grey",minHeight:"180px"}},r.a.createElement(T.a,{src:e,alt:"",fluid:!0})))})));return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 br-3",style:{position:"relative",zIndex:"0",marginTop:"15%"}},c)),r.a.createElement("div",{style:{marginTop:"8%",marginBottom:"15%"}},n.length>0&&r.a.createElement(X,{orders:e.orders}),r.a.createElement("div",{className:"row mb-5 mr-auto mb-5",style:{width:"100vw"}},Object.keys(t).map((function(e,a){return r.a.createElement(F,{category:t[e],key:e,index:a})}))))))}));t.default=Object(c.b)((function(e){return{config:e.config,orders:e.orders}}),(function(e){return{loadData:function(){return e(i.n())},clearNotification:function(){return e(i.h())},setBackUrl:function(t){return e(i.r(t))}}}))((function(e){var t=Object(o.f)(),a=e.location.pathname,c=e.config.curLocation;Object(n.useEffect)((function(){e.config.isAuth||t.push("/login")}),[]),Object(n.useEffect)((function(){e.setBackUrl(a),c&&(e.clearNotification(),t.push("/"+c))}),[]);var i=r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement("div",{className:"ColorBg"}),r.a.createElement("div",{style:{marginTop:"60px"}},r.a.createElement("div",{className:""},r.a.createElement(_,null))),r.a.createElement("div",{className:"footer-nav-area",id:"footerNav"},r.a.createElement("div",{className:"container h-100 px-0"},r.a.createElement("div",{className:"suha-footer-nav h-100"},r.a.createElement("ul",{className:"h-100 d-flex align-items-center justify-content-between pl-0"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("i",{className:"fa fa-home"}),"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/dashboard/cart"},r.a.createElement("i",{className:"fa fa-shopping-cart"}),"Cart")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("i",{className:"fa fa-user"}),"Profile")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/more"},r.a.createElement("i",{className:"fa fa-ellipsis-h"}),"More")))))));return r.a.createElement("div",null,i)}))}}]);
//# sourceMappingURL=12.3e5cb2fb.chunk.js.map