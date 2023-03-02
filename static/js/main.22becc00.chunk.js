(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{45:function(e,n,t){"use strict";t.r(n);var o,r=t(0),c=t.n(r),i=t(22),a=t.n(i),l=t(23),s=t(19),d=t(1),b=t(3),u=t(9);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var j=Object(u.b)({key:"toDo",default:[]}),O=Object(u.b)({key:"category",default:o.TO_DO}),f=Object(u.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(j),o=n(O);return t.filter((function(e){return e.category===o}))}}),h=t(5),g=t(33),m=t(4);var p=function(){var e=Object(u.f)(j),n=Object(u.e)(O),t=Object(g.a)(),o=t.register,r=t.handleSubmit,c=t.setValue;return Object(m.jsxs)("form",{onSubmit:r((function(t){var o=t.toDo;e((function(e){return[{id:Date.now(),text:o,category:n}].concat(Object(h.a)(e))})),c("toDo","")})),children:[Object(m.jsx)("input",Object(d.a)(Object(d.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do list"})),Object(m.jsx)("button",{children:"Add"})]})};var x,D=function(e){var n=e.text,t=e.category,r=e.id,c=Object(u.f)(j),i=function(e){var t=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:n,id:r,category:t};return[].concat(Object(h.a)(e.slice(0,o)),[c],Object(h.a)(e.slice(o+1)))}))};return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:n}),t!==o.DOING&&Object(m.jsx)("button",{name:o.DOING,onClick:i,children:"Doing"}),t!==o.TO_DO&&Object(m.jsx)("button",{name:o.TO_DO,onClick:i,children:"To Do"}),t!==o.DONE&&Object(m.jsx)("button",{name:o.DONE,onClick:i,children:"Done"})]})};var v,y=s.c.div(x||(x=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 50px;\n"]))),k=function(){var e=Object(u.e)(f),n=Object(u.d)(O),t=Object(b.a)(n,2),r=t[0],c=t[1];return Object(m.jsxs)(y,{children:[Object(m.jsx)("h1",{children:"To Dos!"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[Object(m.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(m.jsx)("option",{value:o.DOING,children:"Doing"}),Object(m.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(m.jsx)(p,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(m.jsx)(D,Object(d.a)({},e),e.id)}))]})};var T=Object(s.b)(v||(v=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor})),w=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(k,{})]})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(s.a,{theme:{textColor:"white",bgColor:"#636e72",accentColor:"#d63031",titleColor:"#00b894",liBgColor:"#dfe6e9",themeBg:"white"},children:Object(m.jsx)(w,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.22becc00.chunk.js.map