"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(r,t,n){n.r(t);var e=n(165),a=n(861),u=n(439),c=n(791),s=n(689),i=n(737),o=n(184);t.default=function(){var r=(0,s.UO)().movieId,t=(0,c.useState)([]),n=(0,u.Z)(t,2),f=n[0],p=n[1];(0,c.useEffect)((function(){v(r)}),[r]);var v=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i._r)(t);case 2:n=r.sent,p(n.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Reviews"}),0===f.length?(0,o.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,o.jsx)("ul",{children:f.map((function(r){var t=r.author,n=r.content,e=r.id;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author ",t]}),(0,o.jsx)("p",{children:n})]},e)}))})]})}},737:function(r,t,n){n.d(t,{Df:function(){return c},Jh:function(){return f},Pg:function(){return i},_r:function(){return o},zi:function(){return s}});var e=n(165),a=n(861),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"a57930fa8e3f4bde22e6ba98cb5f89d0"};var c=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){var t;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/trending/movie/day");case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/reviews"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.2df52f99.chunk.js.map