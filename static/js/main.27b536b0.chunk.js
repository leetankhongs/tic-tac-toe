(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),s=(a(13),a(1)),l=a(2),u=a(4),o=a(3),m=(a(14),a(7));a(15);var d=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},h=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=n.state.squares.slice();n.calculateWinner(t)||t[e]||(t[e]=n.state.xIsNext?"X":"O",n.setState({squares:t,xIsNext:!n.state.xIsNext}))},n.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(m.a)(t[a],3),r=n[0],c=n[1],i=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[i])return e[r]}return null},n.state={index:[0,1,2,3,4,5,6,7,8],squares:Array(9).fill(null),xIsNext:!0},n}return Object(l.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(d,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e=this.calculateWinner(this.state.squares),t=this.state.squares.filter((function(e){return null===e})).length,a=e?"Winner: "+e:0===t?"Equal":"Next player: "+(this.state.xIsNext?"X":"O");return r.a.createElement("div",null,r.a.createElement("div",{className:"status"},a),r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.Component),v=(a(16),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(h,null)),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null),r.a.createElement("ol",null)))}}]),a}(n.Component)),f=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.27b536b0.chunk.js.map