(this["webpackJsonpright-deliveres"]=this["webpackJsonpright-deliveres"]||[]).push([[4],{11:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"A",(function(){return c})),n.d(e,"j",(function(){return s})),n.d(e,"k",(function(){return d})),n.d(e,"q",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"x",(function(){return T})),n.d(e,"y",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"l",(function(){return b})),n.d(e,"d",(function(){return D})),n.d(e,"m",(function(){return R})),n.d(e,"C",(function(){return _})),n.d(e,"p",(function(){return O})),n.d(e,"u",(function(){return A})),n.d(e,"E",(function(){return S})),n.d(e,"s",(function(){return y})),n.d(e,"D",(function(){return C})),n.d(e,"t",(function(){return I})),n.d(e,"w",(function(){return j})),n.d(e,"B",(function(){return v})),n.d(e,"a",(function(){return m})),n.d(e,"r",(function(){return N})),n.d(e,"e",(function(){return U})),n.d(e,"o",(function(){return L})),n.d(e,"b",(function(){return w})),n.d(e,"z",(function(){return P})),n.d(e,"n",(function(){return g})),n.d(e,"i",(function(){return F})),n.d(e,"v",(function(){return k}));var a=n(2),r=function(t){return{type:a.ADD_TO_CART,payload:t}},c=function(t){return{type:a.SET_QUANTITY,payload:t}},u=function(t){return{type:a.CLEAR_AND_ADD,payload:t}},o=function(){return{type:a.CLEAR_CART}},i=function(t){return{type:a.SET_CHECKOUT_DATA,payload:t}},s=function(t){return{type:a.DELETE_CART_ITEM,payload:t}},d=function(t){return{type:a}},l=n(69),E=n.n(l),T=function(t){return{type:a.SET_LOCATION,payload:t}},f=function(t){return{type:a.SET_NOTIFICATION,payload:t}},A=function(t){return{type:a.SET_CUR_SERVICE,payload:t}},O=function(t){return{type:a.SET_BACK_URL,payload:t}},_=function(t){return{type:a.UPDATE_CONFIG_DATA,payload:t}},S=function(t){return{type:a.UPDATE_SETTINGS,payload:t}},p=function(t){return{type:a.CLEAR_NOTIFICATION,payload:t}},D=function(t){return{type:a.AUTHENTICATE,payload:t}},R=function(){return{type:a.LOGOUT}};function b(){return function(t){return E.a.get("http://localhost:8000/").then((function(e){var n=e.data;t(h(n))}))}}var h=function(t){return{type:a.LOAD_DATA,payload:t}},y=function(t){return{type:a.SET_CUR_PRODUCT,payload:t}},C=function(t){return{type:a.UPDATE_RESTAURANTS,payload:t}},I=function(t){return{type:a.SET_CUR_RESTAURANT,payload:t}},j=function(t){return{type:a.SET_LOADED_RESTAURANTS,payload:t}},v=function(){return{type:a.SET_RELOAD_RESTAURANTS}},m=function(t){return{type:a.ADD_NEW_ADDRESS,payload:t}},N=function(t){return{type:a.SET_CUR_ADDRESS,payload:t}},U=function(){return{type:a.CLEAR_ADDRESS}},L=function(t){return{type:a.SET_ADDRESS_LIST,payload:t}},g=function(t){return{type:a.SET_ACTIVE_ORDERS,payload:t}},P=function(t){return{type:a.SET_ORDER_STATUS,payload:t}},w=function(t){return{type:a.ADD_NEW_ORDER,payload:t}},F=function(){return{type:a.CLEAR_ORDERS}},k=function(t){return{type:a.SET_LOADED_NOTIFICATIONS,payload:t}}},111:function(t,e){},131:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(22),u=n.n(c),o=n(29),i=n.n(o),s=n(42),d=n(41),l=n(21),E=n(16),T=n(4),f=n(11),A=n(14),O=r.a.lazy((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,571))})),_=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,576))})),S=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,580))})),p=r.a.lazy((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,572))})),D=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(11)]).then(n.bind(null,577))})),R=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,578))})),b=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(9)]).then(n.bind(null,581))})),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,582))})),y=r.a.lazy((function(){return n.e(12).then(n.bind(null,573))})),C=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(18)]).then(n.bind(null,583))})),I=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,261))})),j=r.a.lazy((function(){return n.e(19).then(n.bind(null,574))}));var v=Object(l.b)((function(t){return{config:t.config}}),(function(t){return{updateConfigData:function(e){return t(f.C(e))},setActiveOrders:function(e){return t(f.n(e))},setAddressList:function(e){return t(f.o(e))}}}))((function(t){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),c=n[0],u=n[1];Object(a.useEffect)((function(){console.log(navigator.onLine),navigator.onLine?l():u(!0)}),[]);var o=A.b+"configs",l=function(){var e=Object(s.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",rKey:t.config.authData.rKey||"",dKey:t.config.authData.dKey||"",ftoken:localStorage.getItem("ftoken")||""}},e.next=3,Object(E.a)(o,n,3e3);case 3:return e.next=5,e.sent.json();case 5:(a=e.sent)&&(t.updateConfigData(a),t.setActiveOrders(a),t.setAddressList(a.address),r=a.user&&a.user.length>0?a.user[0].userid:"",t.config.isAuth&&Object(E.b)(r));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,!c&&r.a.createElement("div",{className:"",style:{overflowX:"hidden"}},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/login",component:O}),r.a.createElement(T.a,{exact:!0,path:"/notifications",component:y}),r.a.createElement(T.a,{exact:!0,path:"/addaddress",component:C}),r.a.createElement(T.a,{exact:!0,path:"/configure-address",component:I}),r.a.createElement(T.a,{exact:!0,path:"/settings",component:h}),r.a.createElement(T.a,{exact:!0,path:"/",component:_}),r.a.createElement(T.a,{exact:!0,path:"/register",component:O}),r.a.createElement(T.a,{exact:!0,path:"/more",component:p}),r.a.createElement(T.a,{exact:!0,path:"/rating",component:j}),r.a.createElement(T.a,{path:"/dashboard",component:D}),r.a.createElement(T.a,{path:"/checkout",component:R}),r.a.createElement(T.a,{exact:!0,path:"/:location",component:_}),r.a.createElement(T.a,{exact:!0,path:"/:location/:service",component:b}),r.a.createElement(T.a,{exact:!0,path:"/:location/:service/:restaurant",component:S})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=n(28),N=n(20);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(l.a,{store:N.a},r.a.createElement(v,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},14:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var a="m.rightdelivers.in"===window.location.host,r=a?"https://stream.rightdelivers.in":"https://teststream.rightdelivers.in",c=a?"https://api.rightdelivers.in/user/api/v1/":"https://testapi.rightdelivers.in/user/api/v1/",u="https://rightdelivers.in/uploads/",o="AIzaSyCDKBu1aPoiFQX0tCZUJJ2I8_JRW7f_vmU"},16:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return E}));var a=n(1),r=n(68),c=n.n(r),u=n(11),o=n(20),i=n(14),s=c()(i.d,{path:"/socket.io",transports:["websocket"]});function d(t){console.log("subscribed"),s.connect(),s.on("connect"),s.emit("subscribe",t),s.on("message",(function(t){})),s.on("orderstatus",(function(t){console.log("received"),o.a.dispatch(u.z(t))})),s.on("refreshRestaurants",(function(){o.a.dispatch(u.B())})),s.on("toast",(function(t){}))}function l(t){console.log("Unsubscribed"),s.emit("unsubscribe",t)}var E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,r=new AbortController,c=Object(a.a)(Object(a.a)({},e),{},{signal:r.signal});setTimeout((function(){r.abort()}),n);return fetch(t,c).then((function(t){if(!t.ok)throw new Error("".concat(t.status,": ").concat(t.statusText));return t})).catch((function(t){if("AbortError"===t.name)throw new Error("Response timed out");throw new Error(t.message)}))}},2:function(t,e,n){"use strict";n.r(e),n.d(e,"SET_LOCATION",(function(){return a})),n.d(e,"SET_NOTIFICATION",(function(){return r})),n.d(e,"CLEAR_NOTIFICATION",(function(){return c})),n.d(e,"AUTHENTICATE",(function(){return u})),n.d(e,"LOGOUT",(function(){return o})),n.d(e,"UPDATE_CONFIG_DATA",(function(){return i})),n.d(e,"SET_BACK_URL",(function(){return s})),n.d(e,"UPDATE_SETTINGS",(function(){return d})),n.d(e,"SET_CUR_SERVICE",(function(){return l})),n.d(e,"SET_QUANTITY",(function(){return E})),n.d(e,"ADD_TO_CART",(function(){return T})),n.d(e,"DELETE_CART_ITEM",(function(){return f})),n.d(e,"SET_CHECKOUT_DATA",(function(){return A})),n.d(e,"CLEAR_AND_ADD",(function(){return O})),n.d(e,"CLEAR_CART",(function(){return _})),n.d(e,"LOAD_DATA",(function(){return S})),n.d(e,"UPDATE_PRODUCTS",(function(){return p})),n.d(e,"SET_CUR_PRODUCT",(function(){return D})),n.d(e,"SET_CUR_RESTAURANT",(function(){return R})),n.d(e,"UPDATE_RESTAURANTS",(function(){return b})),n.d(e,"SET_LOADED_RESTAURANTS",(function(){return h})),n.d(e,"SET_RELOAD_RESTAURANTS",(function(){return y})),n.d(e,"SET_CUR_ADDRESS",(function(){return C})),n.d(e,"CLEAR_ADDRESS",(function(){return I})),n.d(e,"SET_DEFAULT_ADDRESS",(function(){return j})),n.d(e,"ADD_NEW_ADDRESS",(function(){return v})),n.d(e,"SET_ADDRESS_LIST",(function(){return m})),n.d(e,"ADD_NEW_ORDER",(function(){return N})),n.d(e,"CLEAR_ORDERS",(function(){return U})),n.d(e,"SET_ALL_ORDERS",(function(){return L})),n.d(e,"SET_ORDER_STATUS",(function(){return g})),n.d(e,"SET_ACTIVE_ORDERS",(function(){return P})),n.d(e,"SET_LOADED_NOTIFICATIONS",(function(){return w})),n.d(e,"SET_RELOAD_NOTIFICATIONS",(function(){return F}));var a="SET_LOCATION",r="SET_NOTIFICATION",c="CLEAR_NOTIFICATION",u="AUTHENTICATE",o="LOGOUT",i="UPDATE_CONFIG_DATA",s="SET_BACK_URL",d="UPDATE_SETTINGS",l="SET_CUR_SERVICE",E="SET_QUANTITY",T="ADD_TO_CART",f="DELETE_CART_ITEM",A="SET_CHECKOUT_DATA",O="CLEAR_AND_ADD",_="CLEAR_CART",S="LOAD_DATA",p="UPDATE_PRODUCTS",D="SET_CUR_PRODUCT",R="SET_CUR_RESTAURANT",b="UPDATE_RESTAURANTS",h="SET_LOADED_RESTAURANTS",y="SET_RELOAD_RESTAURANTS",C="SET_CUR_ADDRESS",I="CLEAR_ADDRESS",j="SET_DEFAULT_ADDRESS",v="ADD_NEW_ADDRESS",m="SET_ADDRESS_LIST",N="ADD_NEW_ORDER",U="CLEAR_ORDERS",L="SET_ALL_ORDERS",g="SET_ORDER_STATUS",P="SET_ACTIVE_ORDERS",w="SET_LOADED_NOTIFICATIONS",F="SET_RELOAD_NOTIFICATIONS"},20:function(t,e,n){"use strict";var a=n(19),r=n(70),c=n.n(r),u=n(1),o=n(2),i=n(14),s=n(16),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{curLocation:"",isAuth:!1,authData:{user:{name:"",mbl:"",userid:0},phone:"",rKey:"",dKey:""},backUrl:"/",baseUrl:i.b,loadedData:{},curBranch:{bid:"",services:[]},curService:{name:"",pic:""},notification:"",showNotification:!1,rcats:[],services:{},branches:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.LOAD_DATA:return Object(u.a)(Object(u.a)({},t),{},{loadedData:e.payload});case o.AUTHENTICATE:return Object(u.a)(Object(u.a)({},t),{},{isAuth:!0,authData:e.payload});case o.LOGOUT:return Object(s.c)(t.authData.user.userid),localStorage.clear(),Object(u.a)(Object(u.a)({},t),{},{isAuth:!1,authData:{},curLocation:"",backUrl:"/"});case o.SET_BACK_URL:return Object(u.a)(Object(u.a)({},t),{},{backUrl:e.payload});case o.UPDATE_SETTINGS:return Object(u.a)(Object(u.a)({},t),{},{authData:Object(u.a)(Object(u.a)({},t.authData),{},{user:Object(u.a)(Object(u.a)({},t.authData.user),{},{name:e.payload.name})})});case o.UPDATE_CONFIG_DATA:var n=e.payload.branches.find((function(e){return e.bid===(t.curBranch?t.curBranch.bid:"")}));return Object(u.a)(Object(u.a)({},t),{},{branches:e.payload.branches,rcats:e.payload.rcats,services:e.payload.services,curBranch:n,isAuth:1===e.payload.auth,authData:Object(u.a)(Object(u.a)({},t.authData),{},{user:e.payload.user?Object(u.a)(Object(u.a)({},t.authData.user),e.payload.user[0]):t.authData.user})});case o.SET_LOCATION:return Object(u.a)(Object(u.a)({},t),{},{curBranch:e.payload,showNotification:!1,notification:"",curLocation:e.payload.name});case o.SET_CUR_SERVICE:return Object(u.a)(Object(u.a)({},t),{},{curService:e.payload});case o.SET_NOTIFICATION:return Object(u.a)(Object(u.a)({},t),{},{notification:e.payload,showNotification:!0});case o.CLEAR_NOTIFICATION:return Object(u.a)(Object(u.a)({},t),{},{notification:"",showNotification:!1});default:return t}},l=n(12),E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],checkoutData:{totalPrice:0,subTotal:0,deliveryCharge:0,savings:0}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.SET_QUANTITY:var n=t.cartItems.find((function(t){return t.pid===e.payload.pid}));return n.quantity=e.payload.quantity,Object(u.a)({},t);case o.SET_CHECKOUT_DATA:return Object(u.a)(Object(u.a)({},t),{},{checkoutData:e.payload});case o.CLEAR_AND_ADD:var a=[];return a.push(e.payload),Object(u.a)(Object(u.a)({},t),{},{cartItems:a});case o.CLEAR_CART:return Object(u.a)(Object(u.a)({},t),{},{cartItems:[],checkoutData:{totalPrice:0,subTotal:0,deliveryCharge:0,savings:0}});case o.DELETE_CART_ITEM:var r=t.cartItems.filter((function(t){return t.pid!==e.payload})),c=0,i=0;r.map((function(t){return c+=(parseInt(t.itemPrice)+parseInt(t.extraPrice))*t.quantity,i+=t.sprice*t.quantity,c}));var s=Object(u.a)(Object(u.a)({},t.checkoutData),{},{subTotal:c,savings:i-c,totalPrice:c+parseInt(t.checkoutData.delivery)});return Object(u.a)(Object(u.a)({},t),{},{cartItems:r,checkoutData:s});case o.ADD_TO_CART:var d=t.cartItems.find((function(t){return t.pid===e.payload.pid})),E=t.cartItems.find((function(t){return e.payload.pid===t.pid}));return E?(d.quantity+=e.payload.quantity,Object(u.a)({},t)):Object(u.a)(Object(u.a)({},t),{},{cartItems:[].concat(Object(l.a)(t.cartItems),[e.payload])});default:return t}},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{curProduct:{},items:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.UPDATE_PRODUCTS:return Object(u.a)(Object(u.a)({},t),{},{items:e.payload.items});case o.SET_CUR_PRODUCT:return Object(u.a)(Object(u.a)({},t),{},{curProduct:e.payload});default:return t}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{curRestaurant:{},items:[],refreshRestaurants:!0},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.UPDATE_RESTAURANTS:return Object(u.a)(Object(u.a)({},t),{},{items:e.payload.shops});case o.SET_CUR_RESTAURANT:return Object(u.a)(Object(u.a)({},t),{},{curRestaurant:e.payload});case o.SET_RELOAD_RESTAURANTS:return Object(u.a)(Object(u.a)({},t),{},{refreshRestaurants:!0});case o.SET_LOADED_RESTAURANTS:return Object(u.a)(Object(u.a)({},t),{},{refreshRestaurants:!1,items:e.payload.shops});default:return t}},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{curAddress:{},defaultAddress:{},addressList:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.ADD_NEW_ADDRESS:return Object(u.a)(Object(u.a)({},t),{},{addressList:t.addressList.length>0?[].concat(Object(l.a)(t.addressList),[e.payload]):[e.payload]});case o.SET_DEFAULT_ADDRESS:return Object(u.a)(Object(u.a)({},t),{},{defaultAddress:e.payload});case o.SET_ADDRESS_LIST:return Object(u.a)(Object(u.a)({},t),{},{addressList:e.payload});case o.SET_CUR_ADDRESS:return Object(u.a)(Object(u.a)({},t),{},{curAddress:e.payload});case o.CLEAR_ADDRESS:return Object(u.a)(Object(u.a)({},t),{},{curAddress:{},defaultAddress:{},addressList:[]});default:return t}},O=[2,3,4,5,77,99],_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activeOrders:[],allOrders:[],orderStatus:{}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.SET_ALL_ORDERS:return Object(u.a)(Object(u.a)({},t),{},{allOrders:e.payload});case o.ADD_NEW_ORDER:return Object(u.a)(Object(u.a)({},t),{},{activeOrders:t.activeOrders.length>0?[].concat(Object(l.a)(t.activeOrders),[e.payload]):[e.payload]});case o.SET_ACTIVE_ORDERS:return 1===e.payload.status?Object(u.a)(Object(u.a)({},t),{},{activeOrders:e.payload.activeOrders}):Object(u.a)(Object(u.a)({},t),{},{activeOrders:e.payload.activeOrders,orderStatus:e.payload.statuses});case o.CLEAR_ORDERS:return Object(u.a)(Object(u.a)({},t),{},{activeOrders:{},allOrders:{}});case o.SET_ORDER_STATUS:if(O.includes(e.payload.ost)){var n=t.activeOrders.findIndex((function(t){return t.ordid===e.payload.id})),a=Object(l.a)(t.activeOrders);return a[n]=Object(u.a)(Object(u.a)({},a[n]),{},{ost:e.payload.ost}),Object(u.a)(Object(u.a)({},t),{},{activeOrders:a})}return Object(u.a)({},t);default:return t}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notificationsList:[],refreshNotifications:!0},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.SET_RELOAD_NOTIFICATIONS:return Object(u.a)(Object(u.a)({},t),{},{refreshNotifications:!0});case o.SET_LOADED_NOTIFICATIONS:return Object(u.a)(Object(u.a)({},t),{},{refreshNotifications:!1,notificationsList:e.payload});default:return t}},p=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),D=Object(a.b)({config:d,cart:E,product:T,restaurant:f,address:A,orders:_,notifications:S}),R=Object(a.c)(D,p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());R.subscribe(c.a.throttle((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(n){}}({cart:R.getState().cart,config:R.getState().config,address:R.getState().address,product:R.getState().product,orders:R.getState().orders,restaurant:R.getState().restaurant})}),1e3));e.a=R},73:function(t,e,n){t.exports=n(131)}},[[73,5,7]]]);
//# sourceMappingURL=main.bdab0f40.chunk.js.map