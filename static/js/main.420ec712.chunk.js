(this.webpackJsonpfinalproject=this.webpackJsonpfinalproject||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/twitter2.c8f7c054.png"},19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),m=(a(24),a(25),a(7)),o=a(5),s=function(){return l.a.createElement("div",{className:"bodyHome"},l.a.createElement("div",{className:"homepageTitle"},l.a.createElement("h1",null,"Ping Pong Tournament"),l.a.createElement("h3",null,"The table tennis tournament generator")),l.a.createElement("div",{className:"beginButton"},l.a.createElement(m.b,{to:"/namesform"},l.a.createElement("button",{className:"buttonMain"},"Begin"))))},i=a(18),u=a.n(i),E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("p",{className:"date"}," \xa9 2020"),l.a.createElement("p",{className:"rights"},l.a.createElement("i",null,"Designed & Built by Nate Lloyd")),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"/https://twitter.com/nateknown",className:"icon"},l.a.createElement("img",{src:u.a,link:"",alt:"twitterwidget",width:"100%",className:"icon"})))))},f=function(){return l.a.createElement("div",{className:"headerBackground"})},d=a(9),p={name:"",names:[]};var g=function(){var e=Object(n.useState)(p.names),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(p.name),o=Object(d.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)([]),E=Object(d.a)(u,2),f=E[0],g=E[1],h=function(e){var t=e.name;return l.a.createElement("li",null,t)},N=function(e){var t=e.pair;return l.a.createElement("li",null,t[0]," v ",t[1])};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"formBackground"},l.a.createElement("h3",{className:"setupTitle"},"Enter Player Names"),l.a.createElement("form",{className:"App",onSubmit:function(e){e.preventDefault(),i("")}},l.a.createElement("div",{className:"container",align:"center"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Player Name"),l.a.createElement("input",{onChange:function(e){var t=e.target;i(t.value)},type:"text",className:"form-control",value:s}),l.a.createElement("button",{className:"addButton",onClick:function(){r((function(e){return e.concat(s)}))}},"Add"),l.a.createElement("button",{className:"resetButton",onClick:function(){r([]),i(""),g([])}},"Reset"),l.a.createElement("ul",{className:"namesList"},a.map((function(e){return l.a.createElement(h,{name:e,key:e})}))),l.a.createElement("div",{className:"formBackground"},l.a.createElement("div",{className:"shuffleWrap"},l.a.createElement("button",{className:"createButton",onClick:function(){for(var e=[];a.length>=2;){a.sort((function(){return.5-Math.random()}));var t=[a.pop(),a.pop()];e.push(t),console.log(t)}g(e)},disabled:!a.length||a.length%2},"Create Fixtures"),a.length%2?l.a.createElement("p",{className:"errorMessage"},"Please enter an even number of players"):null,l.a.createElement("ul",{className:"fixtureList"},f.map((function(e){return l.a.createElement(N,{pair:e,key:e})}))),l.a.createElement(m.b,{to:"/"},l.a.createElement("button",{className:"homeButton"},"Back To Start"))))))))))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(f,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(s,null)),l.a.createElement(o.a,{exact:!0,path:"/namesform"},l.a.createElement(g,null))),l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.420ec712.chunk.js.map