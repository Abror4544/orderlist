(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,r){e.exports={ordersWrapper:"Orders_ordersWrapper__vq1Tx",titleBlock:"Orders_titleBlock__Qv8ux",ordersBlock:"Orders_ordersBlock__3Rd8O",orderItem:"Orders_orderItem___j0g2",orderTitle:"Orders_orderTitle__2jgBF",price:"Orders_price___EkkL",date:"Orders_date__-Zn1F"}},24:function(e,t,r){e.exports={header:"Header_header__31eUA",menu_bar:"Header_menu_bar__13Zhk"}},4:function(e,t,r){e.exports={infoWrapper:"Info_infoWrapper__3146t",head:"Info_head__3OZz5",close:"Info_close__79Pux",title:"Info_title__33Lcn",goods:"Info_goods__3kLq6",goodItem:"Info_goodItem__35GNJ",goodName:"Info_goodName__1OPev",quantity:"Info_quantity__2VPcm",price:"Info_price__1lhhF",saleInfo:"Info_saleInfo__3vWXX",total:"Info_total__1p0lK",notice:"Info_notice__2xoNe"}},47:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(20),a=r.n(s),o=r(6),i=r(3),d=(r(47),r(24)),j=r.n(d),l=r(1),u=function(e){return Object(l.jsx)("header",{className:j.a.header,children:Object(l.jsxs)("div",{className:j.a.menu_bar,children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})},h=r(15),O=r(16),b=r(18),p=r(17),f=r(4),_=r.n(f),x=function(e){var t=e.good.price*e.good.count-e.sale*e.good.count;return Object(l.jsxs)("div",{className:_.a.goodItem,children:[Object(l.jsxs)("div",{className:_.a.goodInfo,children:[Object(l.jsx)("p",{className:_.a.goodName,children:e.good.name}),Object(l.jsxs)("p",{className:_.a.quantity,children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e ",e.good.count]})]}),Object(l.jsx)("div",{className:_.a.price,children:Math.ceil(100*t)/100})]})},g=r(13),m=r.p+"static/media/close.5870c163.svg",v=function(e){Object(b.a)(r,e);var t=Object(p.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(O.a)(r,[{key:"render",value:function(){for(var e=this.props.history.match.params.orderId,t=this.props.state.ordersPage.orders,r=t[0].goods,n=[],c=[],s=(t=t.filter((function(t){return t.id===e})))[0].sale,a=0;a<r.length;a++)n.push(r[a].price*r[a].count);for(var o=0;o<r.length;o++)c.push(s*r[o].count);var i=n.reduce((function(e,t){return e+t}),0),d=c.reduce((function(e,t){return e+t}),0),j=d/(i/100);return Object(l.jsxs)("div",{className:_.a.infoWrapper,children:[Object(l.jsxs)("div",{className:_.a.head,children:[Object(l.jsxs)("h2",{children:["\u0417\u0430\u043a\u0430\u0437 \u2116",t[0].number]}),Object(l.jsx)("span",{children:t[0].date})]}),Object(l.jsx)(g.b,{to:"/Main/",children:Object(l.jsx)("div",{className:_.a.close,children:Object(l.jsx)("img",{src:m,alt:""})})}),Object(l.jsxs)("div",{className:_.a.title,children:[Object(l.jsx)("h3",{children:"\u0422\u043e\u0432\u0430\u0440"}),Object(l.jsx)("p",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"})]}),Object(l.jsx)("div",{className:_.a.goods,children:r.map((function(e){return Object(l.jsx)(x,{good:e,sale:t[0].sale},e.id)}))}),Object(l.jsxs)("p",{className:_.a.saleInfo,children:["\u0421\u043a\u0438\u0434\u043a\u0430 \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0430 ",Math.ceil(100*j)/100," % "]}),Object(l.jsxs)("div",{className:_.a.total,children:["\u0418\u0442\u043e\u0433\u043e: ",Math.ceil(100*(i-d))/100]}),Object(l.jsx)("p",{className:_.a.notice,children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 10 \u0434\u043d\u0435\u0439 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043e\u043f\u043b\u0430\u0442\u044b"})]})}}]),r}(c.a.Component),N=r(42),I=r(28),y=r.n(I),k=r(39),B=r(40),P=r.n(B),W=function(){return P.a.get("https://u38027.netangels.ru/api/orders.php").then((function(e){return e.data}))},F="SET_ORDERS",T="TOGGLE_LOADING",w={orders:[],loading:!0},L=function(e){return{type:T,loading:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(o.a)(Object(o.a)({},e),{},{orders:t.orders});case T:return Object(o.a)(Object(o.a)({},e),{},{loading:t.loading});default:return e}},C=r(11),E=r.n(C),q=r.p+"static/media/filter.cf3cea15.svg",D=function(e){for(var t=[],r=e.sale,n=0;n<e.order.goods.length;n++)t.push(e.order.goods[n].price*e.order.goods[n].count-r);var c=t.reduce((function(e,t){return e+t}),0);return Object(l.jsx)(g.b,{to:"/Info/"+e.order.id,children:Object(l.jsxs)("div",{className:E.a.orderItem,children:[Object(l.jsxs)("div",{className:E.a.orderTitle,children:[Object(l.jsxs)("h4",{children:["\u0417\u0430\u043a\u0430\u0437 \u2116",e.order.number]}),Object(l.jsx)("svg",{children:Object(l.jsx)("text",{className:E.a.price,x:"1",y:"16",fill:"none",stroke:"#6e9143",strokeWidth:"1",strokeDasharray:"2000 2",children:Math.ceil(100*c)/100})})]}),Object(l.jsx)("div",{className:E.a.date,children:e.order.date?e.order.date:"Empty info"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["\u2219 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 ",e.order.goods.length," \u0448\u0442."]}),Object(l.jsxs)("li",{children:["\u2219 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439 ",e.order.goods.length," \u0448\u0442."]})]})]})})},S=function(e){Object(b.a)(r,e);var t=Object(p.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(O.a)(r,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:E.a.ordersWrapper,children:[Object(l.jsxs)("div",{className:E.a.titleBlock,children:[Object(l.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(l.jsx)("img",{src:q,alt:""})]}),Object(l.jsx)("div",{className:E.a.ordersBlock,children:this.props.orders.map((function(e){return Object(l.jsx)(D,{order:e,sale:e.sale},e.id)}))})]})}}]),r}(c.a.Component),G=r(12),J=r.p+"static/media/loader.a5e01cf9.svg",R=function(e){return Object(l.jsx)("img",{className:E.a.loader,src:J})},Z=function(e){Object(b.a)(r,e);var t=Object(p.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(O.a)(r,[{key:"componentDidMount",value:function(){this.props.getOrders()}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:this.props.loading?Object(l.jsx)(R,{}):Object(l.jsx)(S,Object(o.a)({orders:this.props.orders},this))})}}]),r}(c.a.Component),A=Object(G.d)(Object(N.a)((function(e){return{orders:e.ordersPage.orders,loading:e.ordersPage.loading}}),{getOrders:function(){return function(){var e=Object(k.a)(y.a.mark((function e(t){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0)),e.next=3,W();case 3:r=e.sent,t(L(!1)),t({type:F,orders:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Z),H=function(e){return Object(l.jsxs)("div",{className:"appWrapper",children:[Object(l.jsx)(u,{}),Object(l.jsx)(i.a,{render:function(t){return Object(l.jsx)(A,Object(o.a)(Object(o.a)({},e),{},{state:e.state}))},path:"/Main"}),Object(l.jsx)(i.a,Object(o.a)(Object(o.a)({},e),{},{render:function(t,r){return Object(l.jsx)(v,Object(o.a)(Object(o.a)({},e),{},{state:e.state,history:t}))},path:"/Info/:orderId?"}))]})},X=(r(73),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,75)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))}),z=r(41),K=Object(G.c)({ordersPage:M}),Q=Object(G.e)(K,Object(G.a)(z.a));window.store=Q;var U=Q,V=function(e){a.a.render(Object(l.jsx)(g.a,{children:Object(l.jsx)(H,{state:e,dispatch:U.dispatch.bind(U),store:U})}),document.getElementById("root"))};V(U.getState()),U.subscribe((function(){var e=U.getState();V(e)})),X()}},[[74,1,2]]]);
//# sourceMappingURL=main.b1c9d144.chunk.js.map