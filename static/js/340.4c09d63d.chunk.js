"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[340],{3340:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(8152),a=n(2791),c=n(3504),u=n(2690),o="Home_home_header__QEXQp",i="Home_movie_title__tPFut",s="Home_movie_list__mT20B",f=n(184),p=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],p=t[1];return(0,a.useEffect)((function(){(0,u.wr)().then((function(e){p(e.results)}))}),[]),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h2",{className:i,children:"Trending today"}),(0,f.jsx)("ul",{className:s,children:n&&n.map((function(e){var t=e.id,n=e.title,r=e.name;return(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"/movies/".concat(t),children:n||r})},t)}))})]})}},2690:function(e,t,n){n.d(t,{M1:function(){return l},TP:function(){return p},wr:function(){return s},z1:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),i="90fc78e66cc89a0a00dfef80ac9f3880";o().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("trending/all/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("search/movie?query=".concat(t,"&api_key=").concat(i,"&include_adult=false&page=1&language=en-US"));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=340.4c09d63d.chunk.js.map