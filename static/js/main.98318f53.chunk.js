(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{23:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var i,r,o,c,a,l,s,d,u,b=n(0),p=n.n(b),j=n(14),f=n.n(j),h=(n(23),n(4)),m=n(6),x=n(18),O=n(3),g=n(8),y=n.n(g),k=n(2),v={borderRadius:"10px",fontSize:{small:"10px",medium:"15px",large:"20px"},animations:{fadeIn:Object(k.c)(i||(i=Object(O.a)(["\n\t\t\tfrom{\n\t\t\t\topacity: 0%;\n\t\t\t\ttransform: scale(0.2) ;\n\t\t\t}\n\t\t\tto{\n\t\t\t\topacity: 100%;\n\t\t\t\ttransform: scale(1); \n\t\t\t}\n\t\t"])))},colors:{lightAccent:"#88b0b6",light:"#f5f6f6",primary:"#ea8f2d",darkAccent:"#ae6043",dark:"#324355"}},w=k.b.button(r||(r=Object(O.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\twidth: 100px;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: ",";\n"])),(function(t){var e=t.isPrimary,n=t.theme;return e?n.colors.primary:n.colors.light}),(function(t){var e=t.isPrimary,n=t.theme;return e?n.colors.light:n.colors.primary}),(function(t){return t.theme.fontSize.medium})),D=k.b.h1(o||(o=Object(O.a)(["\n\tcolor: ",";\n\ttext-align: center;\n"])),(function(t){return t.theme.colors.primary})),S=k.b.form(c||(c=Object(O.a)(["\n\twidth: 100vw;\n\theight: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n"]))),C=k.b.input(a||(a=Object(O.a)(["\n\twidth: 30%;\n\toutline: none;\n\tborder: "," 2px solid;\n"])),(function(t){return t.theme.colors.primary})),z=w,I=n(1),A=k.b.div(l||(l=Object(O.a)(["\n\tborder: 3px solid ",";\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 70%;\n\tmax-width: 800px;\n\tmin-width: 400px;\n\tmargin-top: 10px;\n\tcolor: ",";\n\ttext-decoration: ",";\n\tanimation: 2s linear ",";\n\theight: 60px;\n"])),(function(t){return t.theme.colors.lightAccent}),(function(t){return t.theme.colors.dark}),(function(t){return t.isComplete?"line-through":"none"}),(function(t){return t.theme.animations.fadeIn})),T=k.b.p(s||(s=Object(O.a)(["\n\tfont-size: ",";\n\tcursor: ",";\n"])),(function(t){return t.theme.fontSize.large}),(function(t){return t.isDone?"default":"pointer"})),J=k.b.div(d||(d=Object(O.a)(["\n\twidth: 30%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),N=k.b.input(u||(u=Object(O.a)(["\n\tfont-size: ",";\n\tborder: none;\n\twidth: 50%;\n\tborder-bottom: solid 2px ",";\n\tcolor: ",";\n\toutline: none;\n\tmargin-left: 10px;\n"])),(function(t){return t.theme.fontSize.large}),(function(t){return t.theme.colors.dark}),(function(t){return t.theme.colors.dark}));var P=function(t){var e=t.title,n=t.id,i=t.isDone,r=t.handleDelete,o=t.complete,c=t.edit,a=Object(b.useState)(!1),l=Object(h.a)(a,2),s=l[0],d=l[1],u=Object(b.useState)(e),j=Object(h.a)(u,2),f=j[0],m=j[1],x=function(){i||d((function(t){return!t}))};return Object(I.jsx)(A,{isComplete:i,children:s?Object(I.jsxs)(p.a.Fragment,{children:[Object(I.jsx)(N,{value:f,onChange:function(t){return m(t.target.value)}}),Object(I.jsxs)(J,{children:[Object(I.jsx)(z,{onClick:function(){c(n,f),x()},children:"Save"}),Object(I.jsx)(z,{onClick:x,children:"Cancel"})]})]}):Object(I.jsxs)(p.a.Fragment,{children:[Object(I.jsxs)(T,{isDone:i,onClick:x,children:["Task: ",e]}),Object(I.jsxs)(J,{children:[Object(I.jsx)(z,{onClick:function(){o(n)},children:i?"Undo":"Finish"}),Object(I.jsx)(z,{onClick:function(){r(n)},children:"Delete"})]})]})})};var E,F,M,R,B,U,q,G=function(t){var e=t.addTask,n=Object(b.useState)(""),i=Object(h.a)(n,2),r=i[0],o=i[1];return Object(I.jsx)("div",{children:Object(I.jsxs)(S,{onSubmit:function(t){t.preventDefault();var n={title:r,isDone:!1,id:y()()};e(n),o("")},children:[Object(I.jsx)(C,{type:"text",value:r,onChange:function(t){t.preventDefault(),o(t.target.value)}}),Object(I.jsx)(z,{isPrimary:!0,children:"Add"})]})})},H=k.b.div(E||(E=Object(O.a)(["\n\twidth: ","%;\n\theight: 100%;\n\tbackground-color: ",";\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tposition: absolute;\n\ttransition: width 1s ease;\n"])),(function(t){return t.width}),(function(t){return t.theme.colors.primary})),K=k.b.div(F||(F=Object(O.a)(["\n\twidth: 80%;\n\tmax-width: 900px;\n\theight: 30px;\n\tdisplay: block;\n\tmargin: auto;\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n\tborder: 2px solid ",";\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])),(function(t){return t.theme.colors.dark})),L=k.b.span(M||(M=Object(O.a)(["\n\tcolor: ",";\n\tposition: absolute;\n\tz-index: 2;\n"])),(function(t){return t.theme.colors.light})),Q=function(t){var e=t.tasks,n=0,i=e.length;e.forEach((function(t){t.isDone&&(n+=1)}));var r=i?n/i*100:100;return Object(I.jsxs)(K,{children:[Object(I.jsxs)(L,{children:[Math.floor(r),"%"]}),Object(I.jsx)(H,{width:r})]})},V=Object(k.b)(z)(R||(R=Object(O.a)(["\n\twidth: 150px;\n\tpadding: 5px;\n\tmargin-top: 10px;\n"]))),W=k.b.div(B||(B=Object(O.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\theight: max-content;\n\twidth: 100vw;\n"]))),X=(U="tasks",q=[],localStorage.getItem(U)?function(t){var e=localStorage.getItem(t);return JSON.parse(e)}(U):q);function Y(t,e){var n=null;switch(e.type){case"add":n=[].concat(Object(x.a)(t),[{title:e.payload.title,isDone:!1,id:y()()}]);break;case"delete":n=t.filter((function(t){return t.id!==e.payload}));break;case"complete":n=t.map((function(t){return t.id===e.payload?Object(m.a)(Object(m.a)({},t),{},{isDone:!t.isDone}):t}));break;case"edit":n=t.map((function(t){return t.id===e.payload.id?Object(m.a)(Object(m.a)({},t),{},{title:e.payload.newName}):t}));break;case"clear":n=t.filter((function(t){return!t.isDone}));break;default:throw new Error}return function(t,e){localStorage.setItem(e,JSON.stringify(t))}(n,"tasks"),n}var Z=function(){var t=Object(b.useReducer)(Y,X),e=Object(h.a)(t,2),n=e[0],i=e[1],r=function(t){i({type:"delete",payload:t})},o=function(t){i({type:"complete",payload:t})},c=function(t,e){i({type:"edit",payload:{id:t,newName:e}})},a=n.map((function(t){return Object(I.jsx)(P,{title:t.title,id:t.id,isDone:t.isDone,handleDelete:r,complete:o,edit:c},t.id)}));return Object(I.jsxs)(k.a,{theme:v,children:[Object(I.jsx)(D,{children:"Task App"}),Object(I.jsx)(G,{addTask:function(t){i({type:"add",payload:t})}}),Object(I.jsx)(Q,{tasks:n}),Object(I.jsxs)(W,{children:[Object(I.jsx)(V,{onClick:function(){i({type:"clear"})},isPrimary:!0,children:"Delete Completed Tasks"}),a]})]})};f.a.render(Object(I.jsx)(p.a.StrictMode,{children:Object(I.jsx)(Z,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.98318f53.chunk.js.map