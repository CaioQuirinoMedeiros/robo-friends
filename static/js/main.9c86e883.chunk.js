(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),d=function(e){var t=e.id,a=e.name,n=e.email,o=e.clickRobot,r=t===e.activeRobot.id?"active":"";return c.a.createElement("div",{className:"card resume ".concat(r),id:t,onClick:o},c.a.createElement("img",{className:"card-img",alt:"foto-robo",src:"https://robohash.org/robo-".concat(t,"?200x200")}),c.a.createElement("div",{className:"card-info"},c.a.createElement("h3",null,a),c.a.createElement("p",null,n.toLowerCase())))},h=function(e){var t=e.robots,a=e.clickRobot,n=e.activeRobot,o=t.map(function(e,t){return c.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email,clickRobot:a,activeRobot:n})});return c.a.createElement("div",{className:"board"},o)},b=function(e){var t=e.searchChange;return c.a.createElement("div",{className:"search_box"},c.a.createElement("input",{type:"search",placeholder:"Search robots...",onChange:t}))},p=function(e){var t=e.user,a=e.closeRobot;if(!Object.keys(t).length)return c.a.createElement("div",null);var n=t.id,o=t.name,r=t.email,l=t.address,s=t.company,i=t.phone;return c.a.createElement("div",{className:"card detail"},c.a.createElement("img",{className:"card-img",alt:"foto-robo",src:"https://robohash.org/robo-".concat(n,"?200x200")}),c.a.createElement("div",{className:"card-info"},c.a.createElement("p",null,c.a.createElement("strong",null,"Name:")," ",o),c.a.createElement("p",null,c.a.createElement("strong",null,"Email:")," ",r.toLowerCase()),c.a.createElement("p",null,c.a.createElement("strong",null,"Phone:")," ",i),c.a.createElement("p",null,c.a.createElement("strong",null,"Address:")," ",l.street," ",l.suit,", ",l.city," - ",l.zipcode,"  ")),c.a.createElement("div",{className:"card-phrase"},c.a.createElement("p",null,'"',s.catchPhrase,'"')),c.a.createElement("button",{className:"close",onClick:a},"X"))},E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onClickRobot=function(t){fetch("https://jsonplaceholder.typicode.com/users/".concat(t.currentTarget.id)).then(function(e){return e.json()}).then(function(t){e.setState({detail:t})}),t.currentTarget.classList.add("card-active")},e.onCloseRobot=function(){e.setState({detail:""})},e.state={robots:[],searchfield:"",detail:{}},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return c.a.createElement("div",{className:"app_box"},c.a.createElement("div",{className:"app_header"},c.a.createElement("div",null,c.a.createElement("h1",null,"Robo Friends"),c.a.createElement(b,{searchChange:this.onSearchChange}))),c.a.createElement("div",{className:"content wrapper-h"},c.a.createElement(h,{robots:t,clickRobot:this.onClickRobot,activeRobot:this.state.detail}),c.a.createElement(p,{user:this.state.detail,closeRobot:this.onCloseRobot})))}}]),t}(c.a.Component);a(14);r.a.render(c.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9c86e883.chunk.js.map