(this["webpackJsonpshopping-car"]=this["webpackJsonpshopping-car"]||[]).push([[0],{21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i,c,r,s,a,o,d,l,b,p,j,h,m,y=t(1),u=t.n(y),x=t(9),O=t.n(x),g=(t(21),t(4)),f=t(10),v=t(11),w=t(16),k=t(15),D=t(3),C=t.p+"static/media/add.8a50c913.svg",L=t.p+"static/media/remove.11d34a5f.svg",S=t(2),T=t(0),B=Object(S.a)(i||(i=Object(D.a)([";\n  box-sizing:border-box;\n  padding:0;\n  margin:0;\n"]))),R=S.b.div(c||(c=Object(D.a)(["\n  width:100%;\n"]))),V=S.b.div(r||(r=Object(D.a)(["\n  height:15vh;  \n  font-size:1.3em;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n"]))),z=S.b.div(s||(s=Object(D.a)(["  \n  display:flex;\n  justify-content: space-evenly;\n"]))),J=S.b.div(a||(a=Object(D.a)(["\n  width:65%; \n  height:max-content; \n  display:flex;\n  flex-wrap:wrap;\n"]))),U=S.b.div(o||(o=Object(D.a)(["\n  width: 12rem;\n  height: 8.75rem;\n  border: solid 1px gray;\n  border-radius: 6px;\n  text-align: center;\n  margin: 0px 8px 16px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  \n  .card&:hover{\n    border: solid 1px skyblue;\n    transform:scale(1.05);\n    transition: .3s;\n    .header{\n      color: #fff;\n      background-color: skyblue;\n      border-bottom: solid 1px skyblue;\n    }\n  }\n"]))),F=S.b.div(d||(d=Object(D.a)(["\n  display: flex;\n  align-items:center;\n  justify-content: space-between;\n  padding: 0 0.5rem 0 0.5rem;\n  background-color: rgb(245, 245, 245);\n  color: rgb(51, 51, 51);\n  border-bottom: solid 1px gray;\n"]))),H=S.b.div(l||(l=Object(D.a)(["\n  width: 30%;\n  height: 85vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),P=S.b.div(b||(b=Object(D.a)(["\n  width:100%;\n  height:90%;\n  border:solid 1px gray;\n  overflow-y: scroll;\n  background-image: url('./assets/car.svg')\n"]))),W=S.b.div(p||(p=Object(D.a)(["\n  width: 95%;\n  height: 5.75rem;\n  border: solid 1px skyblue;\n  border-radius: 6px;\n  text-align: center;\n  margin: 0px 8px 16px;\n  cursor: pointer;\n  font-size: 0.8rem;\n"]))),E=S.b.div(j||(j=Object(D.a)(["\n  display: flex;\n  align-items:center;\n  justify-content: space-between;\n  padding: 0 0.5rem 0 0.5rem;\n  color: #fff;\n  background-color: skyblue;\n  border-bottom: solid 1px skyblue;\n"]))),G=S.b.div(h||(h=Object(D.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),I=S.b.div(m||(m=Object(D.a)(["\n  width:100%;\n  display:flex;\n  justify-content:space-between;\n"]))),M=function(e){Object(w.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(f.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={cars:[{id:1,name:"Jetta",company:"Volkswagen",price:144e3,type:"Sedan",isDisabled:!1},{id:2,name:"Polo",company:"Wolkswagen",price:7e4,type:"Hatch",isDisabled:!1},{id:3,name:"T-Cross",company:"Wolkswagen",price:123e3,type:"SUV",isDisabled:!1},{id:4,name:"Tiguan R-line",company:"Wolkswagen",price:146e3,type:"SUV",isDisabled:!1},{id:5,name:"Civic",company:"Honda",price:115e3,type:"Sedan",isDisabled:!1},{id:6,name:"Corolla",company:"Toyota",price:11e4,type:"Sedan",isDisabled:!1},{id:7,name:"Corolla Cross",company:"Toyota",price:184e3,type:"SUV",isDisabled:!1},{id:8,name:"Compass",company:"Jeep",price:132e3,type:"SUV",isDisabled:!1},{id:9,name:"Golf GTI",company:"Volkswagen",price:138e3,type:"Hatch",isDisabled:!1}],shopList:[]},e.addCar=function(n){var t=e.state,i=t.shopList,c=t.cars,r=c.find((function(e){return e.id===n})),s=c.map((function(e){return e.id===n?Object(g.a)(Object(g.a)({},e),{},{isDisabled:!0}):e}));e.setState({shopList:i.concat(r),cars:s})},e.removeCar=function(n){var t=e.state,i=t.shopList,c=t.cars.map((function(e){return e.id===n?Object(g.a)(Object(g.a)({},e),{},{isDisabled:!1}):e}));i!==[]&&e.setState({shopList:i.filter((function(e){return e.id!==n})),cars:c})},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this,n=this.state.cars;return Object(T.jsxs)(R,{children:[Object(T.jsx)(B,{}),Object(T.jsx)(V,{children:Object(T.jsx)("h1",{children:"Loja de carros!"})}),Object(T.jsxs)(z,{children:[Object(T.jsx)(J,{children:n.map((function(n,t){return Object(T.jsxs)(U,{className:"card",style:!1===n.isDisabled?{Card:U}:{pointerEvents:"none",opacity:"0.4"},children:[Object(T.jsxs)(F,{className:"header",children:[Object(T.jsx)("h3",{children:n.name}),Object(T.jsx)("img",{onClick:function(){e.addCar(n.id)},src:C,alt:""})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Montadora:"})," ",n.company]}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Pre\xe7o:"})," ",n.price.toLocaleString("pt-BR",{minimumFractionDigits:2,style:"currency",currency:"BRL"})]}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Tipo:"})," ",n.type]})]})]},t)}))}),Object(T.jsxs)(H,{children:[Object(T.jsx)(P,{children:this.state.shopList.map((function(n){return Object(T.jsxs)(W,{children:[Object(T.jsxs)(E,{children:[Object(T.jsx)("h3",{children:n.name}),Object(T.jsx)("img",{onClick:function(){e.removeCar(n.id)},src:L,alt:""})]}),Object(T.jsxs)(G,{children:[Object(T.jsxs)("p",{children:[Object(T.jsx)("b",{children:"Tipo:"})," ",n.type]}),Object(T.jsxs)("p",{children:[Object(T.jsx)("b",{children:"Pre\xe7o:"})," ",n.price.toLocaleString("pt-BR",{minimumFractionDigits:2,style:"currency",currency:"BRL"})]})]})]})}))}),Object(T.jsxs)(I,{children:[Object(T.jsx)("h2",{children:"Total"}),Object(T.jsx)("h2",{children:this.state.shopList.reduce((function(e,n){return e+n.price}),0).toLocaleString("pt-BR",{minimumFractionDigits:2,style:"currency",currency:"BRL"})})]})]})]})]})}}]),t}(y.Component);O.a.render(Object(T.jsx)(u.a.StrictMode,{children:Object(T.jsx)(M,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6793c6fa.chunk.js.map