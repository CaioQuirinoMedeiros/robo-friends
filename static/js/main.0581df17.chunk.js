(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),h=function(e){var t=e.id,a=e.name,n=e.email,c=e.clickRobot;return r.a.createElement("div",{className:"card",id:t,onClick:c},r.a.createElement("img",{className:"card-img",alt:"foto-robo",src:"https://robohash.org/robo-".concat(t,"?200x200")}),r.a.createElement("div",{className:"card-info"},r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots,a=e.clickRobot,n=t.map(function(e,t){return r.a.createElement(h,{key:Math.floor(1e4*Math.random()),id:e.id,name:e.name,email:e.email,clickRobot:a})});return r.a.createElement("div",{className:"board dragscroll"},n)},p=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"search_box"},r.a.createElement("input",{type:"search",placeholder:"Search robots...",onChange:t}))},b=function(e){return r.a.createElement("div",{className:"scrollable"},e.children)},f=function(e){var t=e.user,a=t.id,n=t.name,c=t.email,o=t.adress,l=t.phone,s=r.a.createElement("div",{className:"detail"},r.a.createElement("img",{className:"card-img",alt:"foto-robo",src:"https://robohash.org/robo-".concat(a,"?200x200")}),r.a.createElement("div",{className:"card-info"},r.a.createElement("p",null,n),r.a.createElement("p",null,c),r.a.createElement("p",null,o),r.a.createElement("p",null,l)));return Object.keys(t).length?s:r.a.createElement("div",null)},E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onClickRobot=function(t){fetch("https://jsonplaceholder.typicode.com/users/".concat(t.currentTarget.id)).then(function(e){return e.json()}).then(function(t){return e.setState({detail:t})})},e.state={robots:[],searchfield:"",detail:{}},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"app_box"},r.a.createElement(f,{user:this.state.detail}),r.a.createElement("div",{className:"app_header"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Robo Friends"),r.a.createElement(p,{searchChange:this.onSearchChange}))),r.a.createElement(b,null,r.a.createElement(d,{robots:t,clickRobot:this.onClickRobot})))}}]),t}(r.a.Component);a(14);o.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0581df17.chunk.js.map