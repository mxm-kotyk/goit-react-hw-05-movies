"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4387:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,a,u,c=r(4165),s=r(5861),i=r(9439),o=r(2791),f=r(7689),p=r(7737),h=r(168),d=r(7924),l=d.zo.ul(t||(t=(0,h.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),v=d.zo.li(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  &:not(:first-child)::before {\n    display: block;\n    content: '';\n    width: 100%;\n    height: 3px;\n    background-color: rgb(5, 10, 24);\n  }\n"]))),Z=d.zo.span(u||(u=(0,h.Z)(["\n  font-weight: 700;\n"]))),x=r(184),w=function(){var n=(0,o.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,o.useState)(null),u=(0,i.Z)(a,2),h=u[0],d=u[1],w=(0,f.UO)().movieId;(0,o.useEffect)((function(){g(w)}),[w]);var g=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){var r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p._r)(e);case 3:r=n.sent,t(r.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),m=h&&(0,x.jsxs)("h2",{children:['Ooops, something went wrong... Server says: "',h,'". Try reloading the page.']});return(0,x.jsxs)("div",{children:[m,(0,x.jsx)("h3",{children:"Reviews"}),0===r.length?(0,x.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,x.jsx)(l,{children:r.map((function(n){var e=n.author,r=n.content,t=n.id;return(0,x.jsxs)(v,{children:[(0,x.jsxs)("p",{children:["Author: ",(0,x.jsx)(Z,{children:e})]}),(0,x.jsxs)("p",{children:['"',r,'"']})]},t)}))})]})}},7737:function(n,e,r){r.d(e,{Df:function(){return c},Jh:function(){return f},Pg:function(){return i},_r:function(){return o},zi:function(){return s}});var t=r(4165),a=r(5861),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"a57930fa8e3f4bde22e6ba98cb5f89d0"};var c=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.a6755302.chunk.js.map