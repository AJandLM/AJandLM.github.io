(function(e){function t(t){for(var r,o,a=t[0],c=t[1],s=t[2],d=0,l=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},u=[];function a(e){return c.p+"static/js/"+({about:"about",index:"index"}[e]||e)+"."+{about:"06c3ac75",index:"22986924"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={index:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({about:"about",index:"index"}[e]||e)+"."+{about:"31d6cfe0",index:"bc6dba42"}[e]+".css",i=c.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===i))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],d=s.getAttribute("data-href");if(d===r||d===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("ee1a"),o=n.n(r);o.a},"4e07":function(e,t,n){e.exports=n.p+"static/media/钢琴-梦中的婚礼.db504145.mp3"},5143:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("a133"),n("ed0d"),n("f09c"),n("e117");var r=n("0261"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("audio",{staticStyle:{display:"none"},attrs:{autoplay:"",controls:"",src:n("4e07"),id:"audiomp3",loop:""}}),r("div",{attrs:{id:"audioBox"}}),r("keep-alive",[r("router-view")],1)],1)},i=[],u={name:"app",components:{},data:function(){return{screenWidth:document.body.clientWidth,timer:!1}},watch:{screenWidth:function(e){if(!this.timer){this.screenWidth=e,this.timer=!0;var t=this;setTimeout((function(){t.screenWidth<1e3?t.$router.push("mobileIndex"):t.$router.push("pcIndex"),t.timer=!1}),200)}}},created:function(){var e=this;e.screenWidth<1e3?e.$router.push("mobileIndex"):e.$router.push("pcIndex")},mounted:function(){var e=this;window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,e.screenWidth=window.screenWidth}()}},methods:{}},a=u,c=(n("034f"),n("e90a")),s=Object(c["a"])(a,o,i,!1,null,null,null),d=s.exports,l=n("9fad");r["default"].use(l["a"]);var p=new l["a"].Store({state:{},mutations:{},actions:{},modules:{}}),f=(n("e18c"),n("1bee"));r["default"].use(f["a"]);var h=[{path:"/mobileIndex",name:"mobileIndex",component:function(){return n.e("index").then(n.bind(null,"c96b"))}},{path:"/homeList",name:"homeList",component:function(){return n.e("index").then(n.bind(null,"e350"))}},{path:"/pcIndex",name:"pcIndex",component:function(){return n.e("about").then(n.bind(null,"8ab4"))}}],m=new f["a"]({mode:"history",routes:h,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),b=m,v=n("a3c5"),y=n.n(v);n("b9b6");r["default"].use(y.a);n("5143");r["default"].config.productionTip=!1,r["default"].use(f["a"]);var g=f["a"].prototype.push;f["a"].prototype.push=function(e){return g.call(this,e).catch((function(e){return e}))},new r["default"]({store:p,router:b,render:function(e){return e(d)}}).$mount("#app")},ee1a:function(e,t,n){}});
//# sourceMappingURL=app.76e98587.js.map