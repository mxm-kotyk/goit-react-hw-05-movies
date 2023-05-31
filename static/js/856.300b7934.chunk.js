"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[856],{4672:function(n,e,r){r.d(e,{Z:function(){return o}});var t,a=r(168),i=r(7924).zo.ul(t||(t=(0,a.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n"]))),s=r(184),o=function(n){var e=n.children;return(0,s.jsx)(i,{children:e})}},5700:function(n,e,r){r.d(e,{Z:function(){return z}});var t,a,i,s,o,c,u,f,p=r(7322),d=r(7689),l=r(168),h=r(7924),v=r(1087),x=h.zo.div(t||(t=(0,l.Z)(["\n  background-color: rgb(5, 10, 24);\n  color: #fff;\n  border: 1px solid rgb(5, 10, 24);\n  transition: 0.14s ease-out;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #fff;\n    color: rgb(5, 10, 24);\n    transform: translate(-0.25rem, -0.25rem);\n    box-shadow: 0.25rem 0.25rem 0 rgb(5, 10, 24);\n  }\n"]))),g=h.zo.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100px;\n  box-sizing: border-box;\n  padding: 15px;\n"]))),m=h.zo.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),Z=h.zo.img(s||(s=(0,l.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n"]))),b=h.zo.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  text-align: center;\n  aspect-ratio: 0.67;\n"]))),w=(0,h.zo)(v.rU)(c||(c=(0,l.Z)(["\n  text-decoration: none;\n"]))),y=h.zo.p(u||(u=(0,l.Z)(["\n  margin: 0;\n"]))),j=h.zo.span(f||(f=(0,l.Z)(["\n  font-size: 0.8rem;\n"]))),k=r(184),z=function(n){var e=n.movie,r=e.id,t=e.title,a=e.poster_path,i=e.vote_average,s=e.release_date,o=(0,d.TH)(),c=a?(0,k.jsx)(Z,{src:"https://image.tmdb.org/t/p/w342".concat(a),alt:t}):(0,k.jsxs)(b,{children:[(0,k.jsx)(p._HA,{size:"4rem"})," Sorry, we don't have poster for this movie"]});return(0,k.jsx)("li",{children:(0,k.jsx)(w,{to:"/movies/".concat(r),state:o,children:(0,k.jsxs)(x,{children:[c,(0,k.jsxs)(g,{children:[(0,k.jsx)(y,{children:t}),(0,k.jsxs)(m,{children:[(0,k.jsx)("li",{children:(0,k.jsxs)(j,{children:["Rating: ",i.toFixed(1),"/10"]})}),(0,k.jsx)("li",{children:(0,k.jsxs)(j,{children:["Release year: ",s.substring(0,4)]})})]})]})]})})})}},7856:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t,a=r(4165),i=r(5861),s=r(9439),o=r(4672),c=r(5700),u=r(2791),f=r(7737),p=r(168),d=r(7924).zo.div(t||(t=(0,p.Z)(["\n  margin: 1rem 1rem;\n"]))),l=r(5097),h=r(184),v=function(){var n=(0,u.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],p=(0,u.useState)(!1),v=(0,s.Z)(p,2),x=v[0],g=v[1],m=(0,u.useState)(null),Z=(0,s.Z)(m,2),b=Z[0],w=Z[1];(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,(0,f.Df)();case 4:e=n.sent,t(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),w(n.t0.message);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var y=x&&(0,h.jsx)(l.Z,{}),j=b&&(0,h.jsxs)("h2",{children:['Ooops, something went wrong... Server says: "',b,'". Try reloading the page.']});return(0,h.jsxs)(d,{children:[(0,h.jsx)("h1",{children:"Trending Today"}),y,j,(0,h.jsx)(o.Z,{children:r.map((function(n){return(0,h.jsx)(c.Z,{movie:n},n.id)}))})]})}},7737:function(n,e,r){r.d(e,{Df:function(){return s},Jh:function(){return f},Pg:function(){return c},_r:function(){return u},zi:function(){return o}});var t=r(4165),a=r(5861),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"a57930fa8e3f4bde22e6ba98cb5f89d0"};var s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=856.300b7934.chunk.js.map