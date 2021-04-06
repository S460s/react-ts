(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{23:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var i,r,o,c,a,s,l,d,u,b,h,p=e(1),j=e.n(p),f=e(14),m=e.n(f),x=(e(23),e(4)),O=e(6),g=e(18),y=e(3),w=e(8),k=e.n(w),v=e(2),S={borderRadius:"10px",fontSize:{small:"10px",medium:"15px",large:"20px"},animations:{fadeIn:Object(v.c)(i||(i=Object(y.a)(["\n\t\t\tfrom{\n\t\t\t\topacity: 0%;\n\t\t\t\ttransform: scale(0.2) ;\n\t\t\t}\n\t\t\tto{\n\t\t\t\topacity: 100%;\n\t\t\t\ttransform: scale(1); \n\t\t\t}\n\t\t"])))},colors:{lightAccent:"#88b0b6",light:"#f5f6f6",primary:"#ea8f2d",darkAccent:"#ae6043",dark:"#324355"}},C=v.b.button(r||(r=Object(y.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\n\twidth: 120px;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: ",";\n"])),(function(t){var n=t.isPrimary,e=t.theme;return n?e.colors.primary:e.colors.light}),(function(t){var n=t.isPrimary,e=t.theme;return n?e.colors.light:e.colors.primary}),(function(t){return t.theme.fontSize.medium})),D=v.b.form(o||(o=Object(y.a)(["\n\twidth: 100vw;\n\theight: 30px;\n\tjustify-content: center;\n"]))),z=v.b.h1(c||(c=Object(y.a)(["\n\tcolor: ",";\n\ttext-align: center;\n"])),(function(t){return t.theme.colors.primary})),A=v.b.input(a||(a=Object(y.a)(["\n\twidth: 40%;\n\tmin-width: 300px;\n\tmin-height: 30px;\n\toutline: none;\n\tborder: "," 2px solid;\n"])),(function(t){return t.theme.colors.primary})),T=C,I=e(0),P=v.b.div(s||(s=Object(y.a)(["\n\tanimation: 2s linear ",";\n\twidth: 70%;\n"])),(function(t){return t.theme.animations.fadeIn})),E=v.b.div(l||(l=Object(y.a)(["\n\tborder: 3px solid ",";\n\tborder-bottom: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n\tmax-width: 800px;\n\tmin-width: 400px;\n\tmargin-top: 10px;\n\tcolor: ",";\n\ttext-decoration: ",";\n\theight: 60px;\n"])),(function(t){return t.theme.colors.lightAccent}),(function(t){return t.theme.colors.dark}),(function(t){return t.isComplete?"line-through":"none"})),N=v.b.div(d||(d=Object(y.a)(["\n\tmax-width: 800px;\n\tmin-width: 400px;\n\twidth: 100%;\n\tborder: 3px solid ",";\n\tborder-top: none;\n\theight: ","px;\n\ttransition: height 0.5s ease;\n\toverflow-y: hidden;\n"])),(function(t){return t.theme.colors.lightAccent}),(function(t){return t.on?60:0})),J=v.b.p(u||(u=Object(y.a)(["\n\tfont-size: ",";\n\tcursor: pointer;\n"])),(function(t){return t.theme.fontSize.large})),M=v.b.div(b||(b=Object(y.a)(["\n\twidth: 30%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),F=v.b.input(h||(h=Object(y.a)(["\n\tfont-size: ",";\n\tborder: none;\n\twidth: 50%;\n\tborder-bottom: solid 2px ",";\n\tcolor: ",";\n\toutline: none;\n\tmargin-left: 10px;\n"])),(function(t){return t.theme.fontSize.large}),(function(t){return t.theme.colors.dark}),(function(t){return t.theme.colors.dark}));var R,q,B,L=function(t){var n=t.title,e=t.id,i=t.isDone,r=t.handleDelete,o=t.complete,c=t.edit,a=Object(p.useState)(!1),s=Object(x.a)(a,2),l=s[0],d=s[1],u=Object(p.useState)(!1),b=Object(x.a)(u,2),h=b[0],f=b[1],m=Object(p.useState)(n),O=Object(x.a)(m,2),g=O[0],y=O[1],w=function(){i||d((function(t){return!t}))};return Object(I.jsxs)(P,{onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:[Object(I.jsx)(E,{isComplete:i,children:l?Object(I.jsxs)(j.a.Fragment,{children:[Object(I.jsx)(F,{value:g,onChange:function(t){return y(t.target.value)}}),Object(I.jsxs)(M,{children:[Object(I.jsx)(T,{onClick:function(){c(e,g),w()},children:"Save"}),Object(I.jsx)(T,{onClick:w,children:"Cancel"})]})]}):Object(I.jsxs)(j.a.Fragment,{children:[Object(I.jsxs)(J,{onClick:function(){o(e)},children:["Task: ",n]}),Object(I.jsxs)(M,{children:[Object(I.jsx)(T,{onClick:w,children:"Edit"}),Object(I.jsx)(T,{onClick:function(){r(e)},children:"Delete"})]})]})}),Object(I.jsx)(N,{on:h,children:Object(I.jsx)("p",{children:"Details"})})]})};var G=Object(v.b)(T)(R||(R=Object(y.a)(["\n\tdisplay: block;\n\tmargin: auto;\n\twidth: 150px;\n\tpadding: 5px;\n\tmargin-top: 10px;\n"]))),H=Object(v.b)(D)(q||(q=Object(y.a)(["\n\tdisplay: ",";\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tmargin: auto;\n\twidth: 50%;\n\tmax-width: 500px;\n\theight: 500px;\n\tbackground-color: ",";\n\tz-index: 4;\n\tborder: 3px solid ",";\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translate(-50%, 0);\n"])),(function(t){return t.isOpen?"flex":"none"}),(function(t){return t.theme.colors.light}),(function(t){return t.theme.colors.dark})),K=v.b.div(B||(B=Object(y.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\twidth: 70%;\n\theight: 40px;\n\tmargin-top: 350px;\n"])));var Q,U,V,W,X,Y,Z,$=function(t){var n=t.addTask,e=Object(p.useState)(""),i=Object(x.a)(e,2),r=i[0],o=i[1],c=Object(p.useState)(!1),a=Object(x.a)(c,2),s=a[0],l=a[1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)(H,{isOpen:s,onSubmit:function(t){t.preventDefault(),l(!1);var e={title:r,isDone:!1,id:k()()};n(e),o("")},children:[Object(I.jsx)("h3",{children:"Task Form"}),Object(I.jsx)(A,{required:!0,type:"text",value:r,onChange:function(t){t.preventDefault(),o(t.target.value)},placeholder:"Task Name"}),Object(I.jsxs)(K,{children:[Object(I.jsx)(T,{type:"submit",isPrimary:!0,children:"Add"}),Object(I.jsx)(T,{type:"button",isPrimary:!0,onClick:function(){return l(!1)},children:"Cancel"})]})]}),Object(I.jsx)(G,{type:"button",onClick:function(){return l((function(t){return!t}))},isPrimary:!0,children:"Add Task"})]})},_=v.b.div(Q||(Q=Object(y.a)(["\n\twidth: ","%;\n\theight: 100%;\n\tbackground-color: ",";\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tposition: absolute;\n\ttransition: width 1s ease;\n"])),(function(t){return t.width}),(function(t){return t.theme.colors.primary})),tt=v.b.div(U||(U=Object(y.a)(["\n\twidth: 80%;\n\tmax-width: 900px;\n\theight: 30px;\n\tdisplay: block;\n\tmargin: auto;\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n\tborder: 2px solid ",";\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])),(function(t){return t.theme.colors.dark})),nt=v.b.span(V||(V=Object(y.a)(["\n\tcolor: ",";\n\tposition: absolute;\n\tz-index: 2;\n"])),(function(t){return t.theme.colors.light})),et=function(t){var n=t.tasks,e=0,i=n.length;n.forEach((function(t){t.isDone&&(e+=1)}));var r=i?e/i*100:100;return Object(I.jsxs)(tt,{children:[Object(I.jsxs)(nt,{children:[Math.floor(r),"%"]}),Object(I.jsx)(_,{width:r})]})},it=Object(v.b)(T)(W||(W=Object(y.a)(["\n\twidth: 150px;\n\tpadding: 5px;\n\tmargin-top: 10px;\n"]))),rt=v.b.div(X||(X=Object(y.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\theight: max-content;\n\twidth: 100vw;\n"]))),ot=(Y="tasks",Z=[],localStorage.getItem(Y)?function(t){var n=localStorage.getItem(t);return JSON.parse(n)}(Y):Z);function ct(t,n){var e=null;switch(n.type){case"add":e=[].concat(Object(g.a)(t),[{title:n.payload.title,isDone:!1,id:k()()}]);break;case"delete":e=t.filter((function(t){return t.id!==n.payload}));break;case"complete":e=t.map((function(t){return t.id===n.payload?Object(O.a)(Object(O.a)({},t),{},{isDone:!t.isDone}):t}));break;case"edit":e=t.map((function(t){return t.id===n.payload.id?Object(O.a)(Object(O.a)({},t),{},{title:n.payload.newName}):t}));break;case"clear":e=t.filter((function(t){return!t.isDone}));break;default:throw new Error}return function(t,n){localStorage.setItem(n,JSON.stringify(t))}(e,"tasks"),e}var at=function(){var t=Object(p.useReducer)(ct,ot),n=Object(x.a)(t,2),e=n[0],i=n[1],r=function(t){i({type:"delete",payload:t})},o=function(t){i({type:"complete",payload:t})},c=function(t,n){i({type:"edit",payload:{id:t,newName:n}})},a=e.map((function(t){return Object(I.jsx)(L,{title:t.title,id:t.id,isDone:t.isDone,handleDelete:r,complete:o,edit:c},t.id)}));return Object(I.jsxs)(v.a,{theme:S,children:[Object(I.jsx)(z,{children:"Task App"}),Object(I.jsx)($,{addTask:function(t){i({type:"add",payload:t})}}),Object(I.jsx)(et,{tasks:e}),Object(I.jsxs)(rt,{children:[a,Object(I.jsx)(it,{onClick:function(){i({type:"clear"})},isPrimary:!0,children:"Clear"})]})]})};m.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(at,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c3f2fb5b.chunk.js.map