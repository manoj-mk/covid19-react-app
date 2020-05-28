(this["webpackJsonpcovid19-react-app"]=this["webpackJsonpcovid19-react-app"]||[]).push([[0],{110:function(e,t,n){e.exports={red:"card_red__Cgcky",mycard:"card_mycard__1N0zQ"}},114:function(e,t,n){e.exports=n(292)},120:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},268:function(e,t,n){},288:function(e,t,n){},291:function(e,t,n){e.exports={test:"covid19_test__2IJ7W"}},292:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=n(3),u=n.n(s),i=n(12),l=n(7),d=n(8),p=n(9),m=n(10),v=(n(120),n(45)),f=n.n(v),h="https://covid19.mathdro.id/api",y=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(h);case 2:return t=e.sent,n=t.data,a=n.confirmed,r=n.recovered,c=n.deaths,e.abrupt("return",{confirmed:a,recovered:r,deaths:c});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h,"/countries"));case 2:return t=e.sent,n=t.data.countries,console.log(n),e.abrupt("return",n.map((function(e){return e.name})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h,"/countries/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=(n(137),n(138),n(295)),j=n(101),O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e}return Object(d.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({country:e.country,data:e.data})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.country;e.count;return t?t.confirmed?r.a.createElement("div",{className:"barChart"},t.confirmed?r.a.createElement(j.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.8)","rgba(0, 255, 0, 0.8)","rgba(255, 0, 0, 0.8)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(n)}}}):null):r.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},r.a.createElement(E.a,null),"Loading... "):r.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},r.a.createElement(E.a,{tip:"Loading..."}),"Loading... ")}}]),n}(a.Component),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={countries:[],data:[],country:"",globaldata:[]},e.countryChange=function(){var t=Object(i.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({country:n}),t.next=3,g(n);case 3:a=t.sent,e.setState({data:a,country:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({globaldata:e.data})}},{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,this.setState({countries:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.countries,a=t.data,c=t.country,o=t.globaldata;return r.a.createElement("div",null,r.a.createElement("div",{className:"selectCountry"},r.a.createElement("select",{onChange:function(t){return e.countryChange(t.target.value)}},r.a.createElement("option",{value:""},"Global"),n.map((function(e,t){return r.a.createElement("option",{name:e,key:t}," ",e," ")})))),!c&&r.a.createElement(O,{data:o,country:"Globe"}),c&&r.a.createElement(O,{data:a,country:c}))}}]),n}(a.Component),x=(n(268),n(99),n(293)),k=n(294),C=(a.Component,n(110)),A=n.n(C),S=(n(288),n(111)),_=n.n(S),I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={name:e.name,cases:e.cases,color:e.color},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.cases;e.color;return n?r.a.createElement("div",null,r.a.createElement("div",{className:"".concat(A.a.mycard," ")},r.a.createElement("h2",{className:t},t),r.a.createElement("p",null,r.a.createElement("b",null,"Cases: ",r.a.createElement(_.a,{start:0,end:n,duration:2.75,separator:","}))))):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component),D=(n(291),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={confirmed:0,recovered:0,deaths:0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,y();case 3:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.confirmed,n=e.recovered,a=e.deaths;return t?r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Global Cases"),r.a.createElement("div",{className:"card-container",style:{display:"flex",justifyContent:"center",marginTop:"10px"}},r.a.createElement(I,{name:"Confirmed",cases:t.value}),r.a.createElement(I,{name:"Recovered",cases:n.value}),r.a.createElement(I,{name:"Deaths",cases:a.value}))):r.a.createElement("p",{style:{textAlign:"center"}},"Internet connection is slow,refresh the page ")}}]),n}(a.Component)),N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={confirmed:[],recovered:0,deaths:0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,n=t.confirmed,a=t.recovered,r=t.deaths,this.setState({confirmed:n,recovered:a,deaths:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",margin:"0"}},"COVID-19 VISUALIZER"),r.a.createElement(D,null),r.a.createElement(w,{data:e}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.d56d357a.chunk.js.map