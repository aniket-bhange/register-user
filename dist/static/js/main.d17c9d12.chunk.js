(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},24:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},25:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(15),r=t.n(s),i=(t(23),t(7)),o=t(8),h=t(10),m=t(9),c=t(11),u=(t(24),t(25),t(30)),d=t(34),p=t(33),b=t(32),g=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"),"My Home page!")},v=t(2),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(m.a)(a).call(this,e))).state={firstName:"",lastName:"",email:"",phone:"",username:"",password:""},t.handleSubmit=t.handleSubmit.bind(Object(v.a)(Object(v.a)(t))),t.handleFirstNameChange=t.handleFirstNameChange.bind(Object(v.a)(Object(v.a)(t))),t.handleLastNameChange=t.handleLastNameChange.bind(Object(v.a)(Object(v.a)(t))),t.handleEmailChange=t.handleEmailChange.bind(Object(v.a)(Object(v.a)(t))),t.handlePhoneChange=t.handlePhoneChange.bind(Object(v.a)(Object(v.a)(t))),t.handleUserNameChange=t.handleUserNameChange.bind(Object(v.a)(Object(v.a)(t))),t.handlePasswordChange=t.handlePasswordChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(c.a)(a,e),Object(o.a)(a,[{key:"handleFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleUserNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handlePhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),fetch("/api/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)}).then(function(e){console.log(e),e.ok&&a.props.history.push("/home")}).catch(function(e){return console.log})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleEmailChange})),l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{type:"text",id:"firstName",value:this.state.firstName,onChange:this.handleFirstNameChange})),l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{type:"text",id:"lastName",value:this.state.lastName,onChange:this.handleLastNameChange})),l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"UserName:"),l.a.createElement("input",{type:"text",id:"userName",value:this.state.username,onChange:this.handleUserNameChange})),l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"Phone:"),l.a.createElement("input",{type:"text",id:"phone",value:this.state.phone,onChange:this.handlePhoneChange})),l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handlePasswordChange})),l.a.createElement("input",{type:"submit",id:"submit",value:"Register"}))}}]),a}(l.a.Component),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(m.a)(a).call(this,e))).state={username:"",password:"",error:null},t.handleSubmit=t.handleSubmit.bind(Object(v.a)(Object(v.a)(t))),t.handleUsernameChange=t.handleUsernameChange.bind(Object(v.a)(Object(v.a)(t))),t.handlePasswordChange=t.handlePasswordChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(c.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(e){var a=this;fetch("/api/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then(function(e){e.ok?a.props.history.push("/home"):alert("Wrong Credentials")})}},{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{id:"username",type:"text",value:this.state.username,onChange:this.handleUsernameChange})),l.a.createElement("div",{className:"form-element"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:this.handlePasswordChange})),l.a.createElement("input",{id:"submit",type:"button",value:"Submit",onClick:this.handleSubmit}))}}]),a}(l.a.Component),C=function(e){function a(){return Object(i.a)(this,a),Object(h.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement(u.a,{to:"/login"},"Login")," "),l.a.createElement("li",null," ",l.a.createElement(u.a,{to:"/register"},"Register")," "))),l.a.createElement("div",{className:"App-intro"},l.a.createElement(d.a,null,l.a.createElement(p.a,{exact:!0,path:"/login",component:f}),l.a.createElement(p.a,{exact:!0,path:"/register",component:E}),l.a.createElement(p.a,{exact:!0,path:"/home",component:g}),l.a.createElement(b.a,{to:"/login"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(31);r.a.render(l.a.createElement(O.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.d17c9d12.chunk.js.map