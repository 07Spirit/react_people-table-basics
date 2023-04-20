(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(23),r=c(7),a=(c(32),c(33),c(4)),s=c(0),o=(c(34),c(3)),i=c(12),j=c.n(i),l=c(2),d=function(e){var t=e.person,c=e.selectedTodoId,n=e.peopleFromServer,a=void 0===n?[]:n,s=t.name,o=t.sex,i=t.born,d=t.died,b=t.fatherName,h=t.motherName,x=t.slug,O=function(e){var t=e&&a.find((function(t){return t.name===e}));return t?Object(l.jsx)(r.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:e}):e||" - "};return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===x}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(r.b,{to:"/people/".concat(x),className:j()({"has-text-danger":"f"===o}),children:s})}),Object(l.jsx)("td",{children:o}),Object(l.jsx)("td",{children:i}),Object(l.jsx)("td",{children:d}),Object(l.jsx)("td",{children:O(h)}),Object(l.jsx)("td",{children:O(b)})]})},b=(c(36),function(){var e=Object(s.useState)(!0),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){setTimeout((function(){return n(!1)}),5e3)}),[]),Object(l.jsx)(l.Fragment,{children:c?Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})}):Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})})}),h=function(e){var t=e.peopleFromServer,c=e.errorMessage,n=Object(o.p)().slug,r=void 0===n?"":n;return t?Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[c&&Object(l.jsx)("p",{"data-cy":0===t.length?"noPeopleMessage":"peopleLoadingError",className:"has-text-danger",children:c}),Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t&&t.map((function(e){return Object(l.jsx)(d,{person:e,selectedTodoId:r,peopleFromServer:t},e.name)}))})]})]})})]}):Object(l.jsx)(b,{})};function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.to,c=e.text;return Object(l.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},p=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})},u=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Home Page"})})},m=function(){var e=Object(s.useState)(),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(),i=Object(a.a)(r,2),j=i[0],d=i[1];return Object(s.useEffect)((function(){x().then((function(e){n(e),0===(null===c||void 0===c?void 0:c.length)&&d("There are no people on the server")})).catch((function(){return d("Something went wrong")}))}),[]),Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(O,{to:"/home",text:"Home"}),Object(l.jsx)(O,{to:"/people",text:"People"})]})})}),Object(l.jsx)("main",{className:"section",children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"*",element:Object(l.jsx)(p,{})}),Object(l.jsx)(o.b,{path:"/home",element:Object(l.jsx)(u,{})}),Object(l.jsx)(o.b,{path:"/",element:Object(l.jsx)(o.a,{to:"/home",replace:!0})}),Object(l.jsxs)(o.b,{path:"/people",children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(h,{peopleFromServer:c,errorMessage:j})}),Object(l.jsx)(o.b,{path:":slug",element:Object(l.jsx)(h,{peopleFromServer:c,errorMessage:j})})]})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.a,{children:Object(l.jsx)(m,{})}))}},[[37,1,2]]]);
//# sourceMappingURL=main.a65d4136.chunk.js.map