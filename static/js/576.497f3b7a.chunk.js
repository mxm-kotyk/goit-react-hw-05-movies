"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[576],{1576:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,s,a,i,c,o,u,p,d=r(4165),l=r(5861),f=r(9439),h=r(2791),x=r(7689),v=r(7737),m=r(168),g=r(7924),Z=r(1087),j=g.zo.div(t||(t=(0,m.Z)(["\n  margin: 1rem 1rem;\n"]))),w=(0,g.zo)(Z.rU)(s||(s=(0,m.Z)(["\n  padding: 0.5rem 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  background-color: rgb(5, 10, 24);\n  border: 1px solid rgb(5, 10, 24);\n  color: #fff;\n  transition: 0.14s ease-out;\n  &:hover,\n  &:focus-visible {\n    background-color: #fff;\n    color: rgb(5, 10, 24);\n    transform: translate(-0.25rem, -0.25rem);\n    box-shadow: 0.25rem 0.25rem 0 rgb(5, 10, 24);\n  }\n"]))),b=g.zo.div(a||(a=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),y=(0,g.zo)(w)(i||(i=(0,m.Z)(["\n  position: absolute;\n  top: 16px;\n  left: 270px;\n  padding: 0.75rem 1rem;\n"]))),k=g.zo.div(c||(c=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),_=g.zo.img(o||(o=(0,m.Z)(["\n  display: block;\n  width: 500px;\n  height: 100%;\n"]))),z=g.zo.span(u||(u=(0,m.Z)(["\n  font-weight: 700;\n"]))),S=g.zo.div(p||(p=(0,m.Z)(["\n  min-width: 500px;\n  aspect-ratio: 0.67;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  text-align: center;\n  border: 1px solid rgb(5, 10, 24);\n"]))),C=r(7322),U=r(5097),A=r(184),O=function(){var n,e=(0,h.useState)({}),r=(0,f.Z)(e,2),t=r[0],s=r[1],a=(0,h.useState)([]),i=(0,f.Z)(a,2),c=i[0],o=i[1],u=(0,h.useState)([]),p=(0,f.Z)(u,2),m=p[0],g=p[1],Z=(0,h.useState)(""),O=(0,f.Z)(Z,2),D=O[0],G=O[1],H=(0,h.useState)(!1),L=(0,f.Z)(H,2),P=L[0],R=L[1],T=(0,h.useState)(null),q=(0,f.Z)(T,2),B=q[0],E=q[1],I=(0,x.UO)().movieId,J=(0,x.TH)();(0,h.useEffect)((function(){M(I)}),[I]);var M=function(){var n=(0,l.Z)((0,d.Z)().mark((function n(e){var r;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return R(!0),n.prev=1,n.next=4,(0,v.Pg)(e);case 4:r=n.sent,s(r),o(r.genres),G(r.release_date),g(r.production_countries),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),E(n.t0.message);case 14:return n.prev=14,R(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}(),N=t.title,F=t.poster_path,K=t.vote_average,Q=t.overview,V=t.runtime,W=t.tagline,X=null!==(n=J.state)&&void 0!==n?n:"/movies",Y=D.substring(0,4),$=Math.floor(10*K),nn=c.map((function(n){return n.name})).join(", "),en=m.map((function(n){return n.name})).join(", "),rn=F?(0,A.jsx)(_,{src:"https://image.tmdb.org/t/p/w500".concat(F),alt:N,width:"500px"}):(0,A.jsxs)(S,{children:[(0,A.jsx)(C._HA,{size:"4rem"})," Sorry, we don't have poster for this movie"]}),tn=P&&(0,A.jsx)(U.Z,{}),sn=B&&(0,A.jsxs)("h2",{children:['Ooops, something went wrong... Server says: "',B,'". Try reloading the page.']});return(0,A.jsxs)(j,{children:[(0,A.jsx)(y,{to:X,children:"Go Back"}),tn,sn,(0,A.jsxs)(k,{children:[rn,(0,A.jsxs)("div",{children:[(0,A.jsx)("h1",{children:"".concat(N," (").concat(Y,")")}),""!==W&&(0,A.jsxs)("p",{children:['"',W,'"']}),(0,A.jsxs)("p",{children:[(0,A.jsx)(z,{children:"User Score: "}),$,"%"]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(z,{children:"Duration: "}),V," min."]}),(0,A.jsx)("h2",{children:"Overview"}),(0,A.jsx)("p",{children:Q}),(0,A.jsx)("h2",{children:"Genres"}),(0,A.jsx)("p",{children:nn}),(0,A.jsx)("h2",{children:"Countries"}),(0,A.jsx)("p",{children:0===en.length?(0,A.jsx)("span",{children:"N/A"}):en}),(0,A.jsxs)("div",{children:[(0,A.jsx)("h2",{children:"Additional information"}),(0,A.jsxs)(b,{children:[(0,A.jsx)(w,{to:"cast",state:X,children:"Cast"}),(0,A.jsx)(w,{to:"reviews",state:X,children:"Reviews"})]}),(0,A.jsx)(h.Suspense,{fallback:(0,A.jsx)("h1",{children:"Loading..."}),children:(0,A.jsx)(x.j3,{})})]})]})]})]})}},7737:function(n,e,r){r.d(e,{Df:function(){return i},Jh:function(){return p},Pg:function(){return o},_r:function(){return u},zi:function(){return c}});var t=r(4165),s=r(5861),a=r(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"a57930fa8e3f4bde22e6ba98cb5f89d0"};var i=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=576.497f3b7a.chunk.js.map