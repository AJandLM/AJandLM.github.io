webpackJsonp([1],{"33Tt":function(t,e){},"83jx":function(t,e,n){"use strict";var i=n("HCn3"),s=n.n(i),r=n("btAx");var a=function(t){n("LbUs")},o=n("C7Lr")(s.a,r.a,!1,a,null,null);e.default=o.exports},"8FeS":function(t,e){},AIZq:function(t,e,n){t.exports=n.p+"static/img/002.8a10dea.jpg"},Fvui:function(t,e,n){t.exports=n.p+"static/img/new.5e53ef9.jpg"},"GXL/":function(t,e){},HCn3:function(t,e){},HXoe:function(t,e){},HodE:function(t,e,n){t.exports=n.p+"static/img/new4.4e50ced.jpg"},JpvW:function(t,e){},LbUs:function(t,e){},MbtM:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("kV13"),s={name:"App",data:function(){return{screenWidth:document.body.clientWidth,timer:!1}},watch:{screenWidth:function(t){if(!this.timer){this.screenWidth=t,this.timer=!0;var e=this;setTimeout(function(){e.screenWidth<1e3?document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px":document.documentElement.style.fontSize="62.5%",e.timer=!1},200)}}},created:function(){this.screenWidth<1e3?document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px":document.documentElement.style.fontSize="62.5%"},mounted:function(){var t=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(t.screenWidth=window.screenWidth)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("audio",{staticStyle:{display:"none"},attrs:{autoplay:"",controls:"",src:"../static/汪苏泷&By2-有点甜.mp3",id:"audiomp3",loop:""}}),this._v(" "),e("div",{staticStyle:{padding:"0.3rem",height:"inherit"}},[e("router-view")],1)])},staticRenderFns:[]};var a=n("C7Lr")(s,r,!1,function(t){n("WZVB")},null,null).exports,o=n("5inH"),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mobileIndex"}},[n("div",{staticClass:"mobilebgcolor"}),t._v(" "),n("div",{staticClass:"imgrotate",on:{click:function(e){return t.$router.push("homeList")}}},[n("div",{staticClass:"headimg"})])])},staticRenderFns:[]};var u={name:"home",components:{mobileIndex:n("C7Lr")({name:"mobileIndex",data:function(){return{}},created:function(){}},c,!1,function(t){n("MbtM")},null,null).exports,pcIndex:n("83jx").default},data:function(){return{screenWidth:document.body.clientWidth,timer:!1}},watch:{},created:function(){},mounted:function(){}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"pc"},[e("pcIndex")],1),this._v(" "),e("div",{staticClass:"mobile"},[e("mobileIndex")],1)])},staticRenderFns:[]};var d=n("C7Lr")(u,l,!1,function(t){n("dMer")},"data-v-fdab5bba",null).exports,m=n("4YfN"),v=n.n(m),f={data:function(){return{currentTime:{}}},mounted:function(){var t=this;setInterval(function(){var e=t.diffDate("2020-02-20 13:54:00",t.getNowFormatDate());t.currentTime=e},1e3)},methods:{diffDate:function(t,e){var n=new Date(t),i=new Date(e);if(n>i){var s=n;n=i,i=s,!0}var r=n.getDate(),a=n.getMonth()+1,o=n.getFullYear(),c=i.getDate(),u=i.getMonth()+1,l=i.getFullYear(),d=void 0,m=void 0,v=void 0,f=0,h=0;c>=r?v=c-r:(f=-1,v=function(t,e){return 2==e&&(t%400==0||t%4==0&&t%100!=0)?29:[0,31,28,31,30,31,30,31,31,30,31,30,31][e]}(o,a)+c-r),u+f>=a?m=u+f-a:(h=-1,m=12+u+f-a);(d=l+h-o)>0?(("0"+m).substr(-2),("0"+v).substr(-2)):m>0&&("0"+v).substr(-2);var p=new Date(t).getTime(),g=new Date(e).getTime()-p,_=(parseInt(g/864e5),g%864e5),w=parseInt(_/36e5),y=_%36e5,b=parseInt(y/6e4),T=parseInt(y%6e4/1e3),x=0,C=0,D=0,I=0;4==(d=d.toString()).length?(x=d.substr(0,1),C=d.substr(1,2),D=d.substr(2,3),I=d.substr(3,4)):3==d.length?(C=d.substr(0,1),D=d.substr(1,2),I=d.substr(2,3)):2==d.length?(D=d.substr(0,1),I=d.substr(1,2)):1==d.length&&(I=d.substr(0,1));var S=0,F=0;2==(m=m.toString()).length?(S=m.substr(0,1),F=m.substr(1,2)):1==m.length&&(F=m.substr(0,1));var L=0,W=0;2==(v=v.toString()).length?(L=v.substr(0,1),W=v.substr(1,2)):1==v.length&&(W=v.substr(0,1));var O=0,B=0;2==(w=w.toString()).length?(O=w.substr(0,1),B=w.substr(1,2)):1==w.length&&(B=w.substr(0,1));var E=0,j=0;2==(b=b.toString()).length?(E=b.substr(0,1),j=b.substr(1,2)):1==b.length&&(j=b.substr(0,1));var N=0,$=0;return 2==(T=T.toString()).length?(N=T.substr(0,1),$=T.substr(1,2)):1==T.length&&($=T.substr(0,1)),{yearOne:parseInt(x),yearTwo:parseInt(C),yearThree:parseInt(D),yearFour:parseInt(I),mouthOne:parseInt(S),mouthTwo:parseInt(F),dateOne:parseInt(L),dateTwo:parseInt(W),hourOne:parseInt(O),hourTwo:parseInt(B),minuteOne:parseInt(E),minuteTwo:parseInt(j),secondOne:parseInt(N),secondTwo:parseInt($)}},getNowFormatDate:function(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),s>=0&&s<=9&&(s="0"+s),r>=0&&r<=9&&(r="0"+r),t.getFullYear()+"-"+e+"-"+n+" "+i+":"+s+":"+r},getBefore:function(t){return"step"+t}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timer"}},[n("div",[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearFour>0,expression:"currentTime.yearFour>0"}],staticStyle:{display:"inline-block"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearOne>0,expression:"currentTime.yearOne>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearOne)}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearTwo>0,expression:"currentTime.yearTwo>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearTwo)}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearThree>0,expression:"currentTime.yearThree>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearThree)}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearFour>0,expression:"currentTime.yearFour>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearFour)}),t._v(" "),n("span",[t._v(" 年")])]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.mouthOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.mouthTwo)}),t._v(" "),n("span",[t._v(" 月")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.dateOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.dateTwo)}),t._v(" "),n("span",[t._v(" 日")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.hourOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.hourTwo)}),t._v(" "),n("span",[t._v(" 时")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.minuteOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.minuteTwo)}),t._v(" "),n("span",[t._v(" 分")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.secondOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.secondTwo)}),t._v(" "),n("span",[t._v(" 秒 ")])])])])},staticRenderFns:[]};var p=n("C7Lr")(f,h,!1,function(t){n("8FeS")},null,null).exports,g=n("upvi"),_={name:"storyListDetail",data:function(){return{nodeData:{}}},created:function(){this.getInit()},methods:{getInit:function(){var t=this.$route.query.id;this.cont;this.nodeData=this.cont[t]}},computed:v()({},Object(g.b)({cont:function(t){return t.content.cont}}))},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"storyListDetail"}},[n("div",{staticClass:"storyListDetail-title"},[n("img",{staticStyle:{width:"100%",height:"100%","border-radius":"0.1rem"},attrs:{src:t.nodeData.titleImg,alt:"123"}}),t._v(" "),n("div",{staticClass:"storyListDetail-mc"},[n("div",{staticClass:"storyListDetail-mc-div"},[n("div",{staticStyle:{"margin-top":"0.3rem","font-size":"0.34rem"}},[t._v("\n          "+t._s(t.nodeData.title)+"\n        ")]),t._v(" "),n("div",{staticStyle:{"margin-top":"0.3rem","font-size":"0.30rem"}},[t._v("\n          "+t._s(t.nodeData.startTime)+" 至 "+t._s(t.nodeData.endTime)+"\n        ")])]),t._v(" "),n("span",{staticStyle:{position:"absolute",left:"6%",bottom:"4%",color:"#fff","font-size":"0.20rem"}},[n("i",{staticClass:"el-icon-user",staticStyle:{"font-size":"0.28rem"}}),t._v(" "),n("span",[t._v(t._s(t.nodeData.num))]),t._v("人\n      ")]),t._v(" "),n("span",{staticStyle:{position:"absolute",right:"6%",bottom:"4%",color:"#fff","font-size":"0.20rem"}},[n("i",{staticClass:"el-icon-time",staticStyle:{"font-size":"0.28rem"}}),t._v(" "),n("span",[t._v("1")]),t._v("天 记录时间："),n("span",[t._v(t._s(t.nodeData.createTime))])])])]),t._v(" "),n("div",{staticStyle:{"text-indent":"0.4rem","text-align":"left","margin-top":"0.4rem","line-height":"0.34rem","letter-spacing":"0.03rem","font-size":"0.28rem"}},[n("span",{staticStyle:{"font-size":"0.4rem"}},[t._v(t._s(t.nodeData.text.substr(0,2)))]),t._v(t._s(t.nodeData.text.substr(2,t.nodeData.text.length))+"\n  ")])])},staticRenderFns:[]};var y=n("C7Lr")(_,w,!1,function(t){n("yKVu")},"data-v-388bf804",null).exports,b={data:function(){return{fineTextArr:[{name:"美"},{name:"好"},{name:"时"},{name:"光"},{name:"海"},{name:"苔"}],storyData:[],imgList:[{url:n("Fvui")},{url:n("SsWI")}]}},components:{timer:p,cont:y},computed:v()({},Object(g.b)({cont:function(t){return t.content.cont}})),methods:{goListDetail:function(t,e){this.$router.push({name:"storyListDetail",query:{id:e}})}},created:function(){this.storyData=this.cont}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"homeList"}},[n("div",{staticClass:"carousel"},[n("el-carousel",{attrs:{trigger:"click",height:"150px","indicator-position":"none"}},t._l(t.storyData,function(t,e){return n("el-carousel-item",{key:e},[n("div",{staticStyle:{height:"100%",width:"100%"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.importUrl,expression:"item.importUrl"}],staticStyle:{height:"100%",width:"100%","border-radius":"0.1rem"},attrs:{src:t.importUrl,alt:"img"}})])])}),1)],1),t._v(" "),n("div",{staticClass:"fine margin2"},t._l(t.fineTextArr,function(e,i){return n("div",{key:i,staticClass:"fineText"},[t._v("\n      "+t._s(e.name)+"\n    ")])}),0),t._v(" "),n("div",{staticClass:"timerDiv margin2"},[n("timer")],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"storyList margin2"},t._l(t.storyData,function(e,i){return n("div",{key:i,staticClass:"stotyOutdiv",on:{click:function(n){return t.goListDetail(e,i)}}},[n("div",{staticClass:"storydiv"},[n("img",{staticStyle:{height:"100%",width:"100%","border-radius":"0.1rem"},attrs:{src:e.importUrl,alt:"img"}})]),t._v(" "),n("div",{staticClass:"storydesc"},[t._v("\n        "+t._s(e.decs)+"\n      ")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"storyTittle"},[e("span",[this._v("Stories")])])}]};var x=n("C7Lr")(b,T,!1,function(t){n("JpvW"),n("TvUv")},"data-v-6fc1ec94",null).exports;n("mfoo");i.default.use(o.a);var C=new o.a({routes:[{path:"/",name:"home",component:d},{path:"/homeList",name:"homeList",component:x},{path:"/storyListDetail",name:"storyListDetail",component:y}]}),D=n("c+XW"),I=n.n(D),S={state:{cont:[{title:"特别的爱给特别的你",decs:"想念乖乖的每天",id:6,importUrl:n("rWwN"),titleImg:n("AIZq"),createTime:"2020-05-07",startTime:"2020-05-07",endTime:"2020-05-07",text:"来自乖乖远程投食的麻辣鲫鱼，来了姨妈照吃不误的乖乖一点也不听话，还拿手去扣痘痘，今天罚左手不准吃饭饭，长长记性。小吃货下午肚子饿了专门发消息过来给俊哥说想吃猪肉饼了，之前给乖乖买的时候乖乖就说挺好吃的，没想到回来成都还想吃猪肉饼，然后还要俊哥给乖乖做，不做还要生气，真是一个小吃货，俊哥怕做失败了到时候把自己给坑了,结果给乖乖打视频过去还一脸不高兴,说是不给做猪肉饼才不高兴的,笑得我肚子痛,乖乖喜欢那个饼的面,那我去好好学习一下,下次争取给乖乖做得很好吃!爱乖乖!",num:2},{title:"成都一日游",decs:"兴高采烈去我家",id:166,importUrl:n("OvgF"),titleImg:n("HodE"),createTime:"2020-05-11",startTime:"2020-05-10",endTime:"2020-05-10",text:"昨天乖乖一大早就起床收拾去我家，坐车挺累的吧，因为姨妈还没有过，本来是让乖乖睡晚点再去的，没想到乖乖起那么早，俊哥好感动。俊哥怕乖乖不知道怎么走，就给乖乖开视频带着乖乖走，乖乖这次记住路了吗？以后都是住这边乖乖可要记住咯哦，我们的家家。中午，乖乖带着我们家的第二个懒猪猪去吃米线然后还去逛街，乖乖和妹妹相处感觉怎么样呢？我也想和乖乖一起逛街，下午，乖乖在家和妹妹看电视玩，我很想你，想起了我们第一次在家里依偎着看电视的场景，乖乖还陪妈妈去买菜，做了一大桌好吃的，没想到乖乖还亲自做了鱼摆摆，我也好喜欢鱼摆摆的，乖乖说下次要做给俊哥吃，俊哥记着的哦。晚上，你们吃完饭饭乖乖跑去洗碗，让俊哥心里不太舒服，本来乖乖是来家里玩的，还做洗碗的活，我有点不开心，乖乖是俊哥的宝贝，不想乖乖做事，只想乖乖享受被爱的感觉。乖乖，俊哥很爱你",num:2}],show:!1},mutations:{Cont:function(t,e){t.cont=e}},actions:{Acont:function(t,e){t.commit("Cont",e)}},getters:{not_show:function(t){return t.cont+"abc"}}};i.default.use(g.a);var F=new g.a.Store({modules:{heade:{state:{count:0},mutations:{Count:function(t){t.count=1}},actions:{Acount:function(t){t.commit("Count ")}}},content:S}});n("GXL/"),n("Xcu2"),n("RFxO"),n("muQq");var L={getNowFormatDate:function(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),s>=0&&s<=9&&(s="0"+s),r>=0&&r<=9&&(r="0"+r),t.getFullYear()+"-"+e+"-"+n+" "+i+":"+s+":"+r}};i.default.use(I.a),i.default.config.productionTip=!1,i.default.prototype.$utils=L,new i.default({el:"#app",router:C,store:F,components:{App:a},template:"<App/>"})},OvgF:function(t,e,n){t.exports=n.p+"static/img/new3.effdae0.jpg"},RFxO:function(t,e){},SsWI:function(t,e,n){t.exports=n.p+"static/img/newdog.bb01bdb.jpg"},TvUv:function(t,e){},WZVB:function(t,e){},Xcu2:function(t,e){},Yrkj:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n\t123456\n")])},staticRenderFns:[]};e.a=i},btAx:function(t,e,n){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("pcIndex")])])}]};e.a=i},dMer:function(t,e){},mfoo:function(t,e,n){"use strict";var i=n("HXoe"),s=n.n(i),r=n("Yrkj");var a=function(t){n("33Tt")};n("C7Lr")(s.a,r.a,!1,a,null,null).exports},muQq:function(t,e){},rWwN:function(t,e,n){t.exports=n.p+"static/img/001.118fc96.jpg"},yKVu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c8f01f679d4d82dd0a5d.js.map