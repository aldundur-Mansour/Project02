(this["webpackJsonpthe-office"]=this["webpackJsonpthe-office"]||[]).push([[0],{23:function(t,e,c){},43:function(t,e,c){"use strict";c.r(e);var a=c(2),n=c.n(a),i=c(17),s=c.n(i),o=(c(23),c(3)),r=c(4),h=c(5),l=c(7),d=c(6),u=c(18),j=c.n(u),b=c(0),O=function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(t){var a;return Object(o.a)(this,c),(a=e.call(this,t)).state={name:a.props.CharacterName||"No name ",qoute:a.props.qoute||"No Quote"},a}return Object(r.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" The Office API"}),Object(b.jsxs)("div",{className:"Container",children:[Object(b.jsx)("h2",{children:"Character "}),Object(b.jsx)("h4",{children:"||"}),Object(b.jsxs)("h3",{children:[" ",this.state.name]}),Object(b.jsx)("h4",{children:"="}),Object(b.jsx)("h2",{children:" Quote"}),Object(b.jsx)("h4",{children:"||"}),Object(b.jsxs)("h3",{children:[" ",this.state.qoute]})]}),Object(b.jsx)("button",{className:"Button",onClick:this.props.handleClick,children:" New Quote"})]})}}]),c}(a.Component),f=function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(t){var a;return Object(o.a)(this,c),(a=e.call(this,t)).state={data:""},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(r.a)(c,[{key:"componentDidMount",value:function(){alert("Welcome to the office Quotes website")}},{key:"componentWillMount",value:function(){this.callApi()}},{key:"handleClick",value:function(){this.callApi(),this.setState({data:""})}},{key:"callApi",value:function(){var t=this;j()({method:"get",url:"https://officeapi.dev/api/quotes/random"}).then((function(e){t.setState({data:e.data.data}),console.log("res",t.state.data)})).catch((function(t){console.log("error",t)}))}},{key:"render",value:function(){return 0!=this.state.data.length?Object(b.jsx)("center",{children:Object(b.jsx)(O,{CharacterName:"".concat(this.state.data.character.firstname," ").concat(this.state.data.character.lastname),qoute:this.state.data.content,handleClick:this.handleClick})}):Object(b.jsx)("center",{children:Object(b.jsx)("span",{children:"Loading Quotes"})})}}]),c}(a.Component);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.55413c6a.chunk.js.map