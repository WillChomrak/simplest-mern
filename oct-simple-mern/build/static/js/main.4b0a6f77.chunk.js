(this["webpackJsonpoct-simple-mern"]=this["webpackJsonpoct-simple-mern"]||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),s=a(14),u=a(1),o=(a(36),a(8)),i=a(9),m=a(11),b=a(10),h=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(s.b,{to:"/",className:"navbar-brand"},"One"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(s.b,{to:"/create",className:"nav-link"},"Create One")))))}}]),a}(n.Component),p=a(15),v=a.n(p),d=function(e){return r.a.createElement("p",null,e.user)},E=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/one").then((function(t){console.log(t.data),t.data.length>0&&e.setState({users:t.data})}))}},{key:"userList",value:function(){return this.state.users.map((function(e){return r.a.createElement(d,{user:e.username,key:e._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hey whats up hope this works"),this.userList())}}]),a}(n.Component),f=a(13),O=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUser=n.onChangeUser.bind(Object(f.a)(n)),n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n.state={user:""},n}return Object(i.a)(a,[{key:"onChangeUser",value:function(e){this.setState({user:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.user};v.a.post("http://localhost:5000/one/add",t).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a new User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.user,onChange:this.onChangeUser})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"}))))}}]),a}(n.Component);var g=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement(u.a,{path:"/",exact:!0,component:E}),r.a.createElement(u.a,{path:"/create",component:O})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4b0a6f77.chunk.js.map