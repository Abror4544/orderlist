(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,r){e.exports={ordersWrapper:"Orders_ordersWrapper__vq1Tx",titleBlock:"Orders_titleBlock__Qv8ux",ordersBlock:"Orders_ordersBlock__3Rd8O",orderItem:"Orders_orderItem___j0g2",orderTitle:"Orders_orderTitle__2jgBF",price:"Orders_price___EkkL",date:"Orders_date__-Zn1F"}},26:function(e,t,r){e.exports={header:"Header_header__31eUA",menu_bar:"Header_menu_bar__13Zhk"}},47:function(e,t,r){},5:function(e,t,r){e.exports={infoWrapper:"Info_infoWrapper__3146t",head:"Info_head__3OZz5",close:"Info_close__79Pux",title:"Info_title__33Lcn",goods:"Info_goods__3kLq6",goodItem:"Info_goodItem__35GNJ",goodName:"Info_goodName__1OPev",quantity:"Info_quantity__2VPcm",price:"Info_price__1lhhF",saleInfo:"Info_saleInfo__3vWXX",total:"Info_total__1p0lK",notice:"Info_notice__2xoNe"}},73:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),c=r(20),a=r.n(c),o=r(4),i=r(3),d=(r(47),r(26)),j=r.n(d),l=r(1),u=function(e){return Object(l.jsx)("header",{className:j.a.header,children:Object(l.jsxs)("div",{className:j.a.menu_bar,children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})},h=r(13),p=r(14),O=r(16),b=r(15),f=r(23),g=r(28),_=r.n(g),x=r(41),m=r(22),v=r.n(m),N=function(){return v.a.get("https://u38027.netangels.ru/api/orders.php").then((function(e){return e.data}))},I="SET_ORDERS",y="TOGGLE_LOADING",k={orders:[],loading:!0},B=function(e){return{type:y,loading:e}},F=function(){return function(){var e=Object(x.a)(_.a.mark((function e(t){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0)),e.next=3,N();case 3:r=e.sent,t(B(!1)),t({type:I,orders:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(o.a)(Object(o.a)({},e),{},{orders:t.orders});case y:return Object(o.a)(Object(o.a)({},e),{},{loading:t.loading});default:return e}},W=function(e){return e.ordersPage.orders},T=r(5),w=r.n(T),C=function(e){var t=e.good.price*e.good.count-e.sale*e.good.count;return Object(l.jsxs)("div",{className:w.a.goodItem,children:[Object(l.jsxs)("div",{className:w.a.goodInfo,children:[Object(l.jsx)("p",{className:w.a.goodName,children:e.good.name}),Object(l.jsxs)("p",{className:w.a.quantity,children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e ",e.good.count]})]}),Object(l.jsx)("div",{className:w.a.price,children:Math.ceil(100*t)/100})]})},L=r(17),D=r.p+"static/media/close.5870c163.svg",E=function(e){Object(O.a)(r,e);var t=Object(b.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){for(var e=this.props.history.match.params.orderId,t=this.props.orders,r=t[0].goods,n=[],s=[],c=(t=t.filter((function(t){return t.id===e})))[0].sale,a=0;a<r.length;a++)n.push(r[a].price*r[a].count);for(var o=0;o<r.length;o++)s.push(c*r[o].count);var i=n.reduce((function(e,t){return e+t}),0),d=s.reduce((function(e,t){return e+t}),0),j=d/(i/100);return Object(l.jsxs)("div",{className:w.a.infoWrapper,children:[Object(l.jsxs)("div",{className:w.a.head,children:[Object(l.jsxs)("h2",{children:["\u0417\u0430\u043a\u0430\u0437 \u2116",t[0].number]}),Object(l.jsx)("span",{children:t[0].date})]}),Object(l.jsx)(L.b,{to:"/",children:Object(l.jsx)("div",{className:w.a.close,children:Object(l.jsx)("img",{src:D,alt:""})})}),Object(l.jsxs)("div",{className:w.a.title,children:[Object(l.jsx)("h3",{children:"\u0422\u043e\u0432\u0430\u0440"}),Object(l.jsx)("p",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"})]}),Object(l.jsx)("div",{className:w.a.goods,children:r.map((function(e){return Object(l.jsx)(C,{good:e,sale:t[0].sale},e.id)}))}),Object(l.jsxs)("p",{className:w.a.saleInfo,children:["\u0421\u043a\u0438\u0434\u043a\u0430 \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0430 ",Math.ceil(100*j)/100," % "]}),Object(l.jsxs)("div",{className:w.a.total,children:["\u0418\u0442\u043e\u0433\u043e: ",Math.ceil(100*(i-d))/100]}),Object(l.jsx)("p",{className:w.a.notice,children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 10 \u0434\u043d\u0435\u0439 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043e\u043f\u043b\u0430\u0442\u044b"})]})}}]),r}(s.a.Component),M=r(12),q=r(11),S=r.n(q),G=r.p+"static/media/loader.a5e01cf9.svg",J=function(e){return Object(l.jsx)("img",{className:S.a.loader,src:G})},R=function(e){Object(O.a)(r,e);var t=Object(b.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://u38027.netangels.ru/api/orders.php").then((function(t){for(var r=0;r<t.data.length;r++)e.props.orders.push(t.data[r])})),this.props.getOrders()}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:this.props.loading?Object(l.jsx)(J,{}):Object(l.jsx)(E,Object(o.a)({orders:this.props.orders,history:this.props.history},this))})}}]),r}(s.a.Component),Z=Object(M.d)(Object(f.a)((function(e){return{orders:W(e),loading:e.ordersPage.loading}}),{getOrders:F}))(R),A=r.p+"static/media/filter.cf3cea15.svg",H=function(e){for(var t=[],r=e.sale,n=0;n<e.order.goods.length;n++)t.push(e.order.goods[n].price*e.order.goods[n].count-r);var s=t.reduce((function(e,t){return e+t}),0);return Object(l.jsx)(L.b,{to:"/Info/"+e.order.id,children:Object(l.jsxs)("div",{className:S.a.orderItem,children:[Object(l.jsxs)("div",{className:S.a.orderTitle,children:[Object(l.jsxs)("h4",{children:["\u0417\u0430\u043a\u0430\u0437 \u2116",e.order.number]}),Object(l.jsx)("svg",{children:Object(l.jsx)("text",{className:S.a.price,x:"1",y:"16",fill:"none",stroke:"#6e9143",strokeWidth:"1",strokeDasharray:"2000 2",children:Math.ceil(100*s)/100})})]}),Object(l.jsx)("div",{className:S.a.date,children:e.order.date?e.order.date:"Empty info"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["\u2219 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 ",e.order.goods.length," \u0448\u0442."]}),Object(l.jsxs)("li",{children:["\u2219 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439 ",e.order.goods.length," \u0448\u0442."]})]})]})})},X=function(e){Object(O.a)(r,e);var t=Object(b.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:S.a.ordersWrapper,children:[Object(l.jsxs)("div",{className:S.a.titleBlock,children:[Object(l.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(l.jsx)("img",{src:A,alt:""})]}),Object(l.jsx)("div",{className:S.a.ordersBlock,children:this.props.orders.map((function(e){return Object(l.jsx)(H,{order:e,sale:e.sale},e.id)}))})]})}}]),r}(s.a.Component),z=function(e){Object(O.a)(r,e);var t=Object(b.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.getOrders()}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:this.props.loading?Object(l.jsx)(J,{}):Object(l.jsx)(X,Object(o.a)({orders:this.props.orders},this))})}}]),r}(s.a.Component),K=Object(M.d)(Object(f.a)((function(e){return{orders:W(e),loading:e.ordersPage.loading}}),{getOrders:F}))(z),Q=function(e){return Object(l.jsxs)("div",{className:"appWrapper",children:[Object(l.jsx)(u,{}),Object(l.jsx)(i.a,{exact:!0,render:function(t){return Object(l.jsx)(K,Object(o.a)(Object(o.a)({},e),{},{state:e.state}))},path:"/"}),Object(l.jsx)(i.a,Object(o.a)(Object(o.a)({},e),{},{render:function(t,r){return Object(l.jsx)(Z,Object(o.a)(Object(o.a)({},e),{},{state:e.state,history:t}))},path:"/Info/:orderId?"}))]})},U=(r(73),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,75)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),c(e),a(e)}))}),V=r(42),Y=Object(M.c)({ordersPage:P}),$=Object(M.e)(Y,Object(M.a)(V.a));window.store=$;var ee=$,te=function(e){a.a.render(Object(l.jsx)(L.a,{basename:"/orderlist",children:Object(l.jsx)(Q,{state:e,dispatch:ee.dispatch.bind(ee),store:ee})}),document.getElementById("root"))};te(ee.getState()),ee.subscribe((function(){var e=ee.getState();te(e)})),U()}},[[74,1,2]]]);
//# sourceMappingURL=main.743b2142.chunk.js.map