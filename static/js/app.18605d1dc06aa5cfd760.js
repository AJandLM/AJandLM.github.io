webpackJsonp([1],{"8FeS":function(t,e){},"8pvL":function(t,e){},AIZq:function(t,e,n){t.exports=n.p+"static/img/002.8a10dea.jpg"},Da9q:function(t,e,n){t.exports=n.p+"static/img/abc001.1fb05f4.jpg"},Fvui:function(t,e,n){t.exports=n.p+"static/img/new.5e53ef9.jpg"},"GXL/":function(t,e){},HodE:function(t,e,n){t.exports=n.p+"static/img/new4.4e50ced.jpg"},KSht:function(t,e,n){t.exports=n.p+"static/img/abd001.7523cc8.jpg"},Lcsm:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("kV13"),s={name:"App",data:function(){return{screenWidth:document.body.clientWidth,timer:!1}},watch:{screenWidth:function(t){if(!this.timer){this.screenWidth=t,this.timer=!0;var e=this;setTimeout(function(){e.screenWidth<1e3?document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px":document.documentElement.style.fontSize="62.5%",e.timer=!1},200)}}},created:function(){console.log("createdApp");this.screenWidth<1e3?document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px":document.documentElement.style.fontSize="62.5%"},mounted:function(){var t=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(t.screenWidth=window.screenWidth)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("audio",{staticStyle:{display:"none"},attrs:{autoplay:"",controls:"",src:"../static/汪苏泷&By2-有点甜.mp3",id:"audiomp3",loop:""}}),this._v(" "),e("div",{staticStyle:{height:"inherit"}},[e("router-view")],1)])},staticRenderFns:[]};var a=n("C7Lr")(s,r,!1,function(t){n("XAyZ")},null,null).exports,o=n("5inH"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mobileIndex"}},[n("div",{staticClass:"mobilebgcolor"}),t._v(" "),n("div",{staticClass:"imgrotate",on:{click:function(e){return t.$router.push("homeList")}}},[n("div",{staticClass:"headimg"})])])},staticRenderFns:[]};var c={name:"pcIndex",data:function(){var t=this;return{ruleForm:{pass:""},rules:{pass:[{validator:function(e,n,i){""===n?i(new Error("请输入密码")):(""!==t.ruleForm.pass&&"babyily"!=t.ruleForm.pass&&i(new Error("请输入正确密码")),i())},trigger:"blur"}]}}},methods:{login:function(){"babyily"==this.pwd&&this.$router.push("dataList")},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$router.push("dataList")})},resetForm:function(t){this.$refs[t].resetFields()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pcIndex"}},[n("div",{staticClass:"logdiv"},[n("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules}},[n("el-form-item",{attrs:{prop:"pass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Login ..."},on:{change:function(e){return t.submitForm("ruleForm")}},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1)],1)],1)])},staticRenderFns:[]};var m={name:"home",components:{mobileIndex:n("C7Lr")({name:"mobileIndex",data:function(){return{}},created:function(){}},l,!1,function(t){n("Um9F")},null,null).exports,pcIndex:n("C7Lr")(c,u,!1,function(t){n("hObP")},"data-v-5471c892",null).exports},data:function(){return{screenWidth:document.body.clientWidth,timer:!1}},watch:{},created:function(){},mounted:function(){}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"pc"},[e("pcIndex")],1),this._v(" "),e("div",{staticClass:"mobile"},[e("mobileIndex")],1)])},staticRenderFns:[]};var v=n("C7Lr")(m,d,!1,function(t){n("dMer")},"data-v-fdab5bba",null).exports,p=n("4YfN"),h=n.n(p),f={data:function(){return{currentTime:{}}},mounted:function(){var t=this;setInterval(function(){var e=t.diffDate("2020-02-20 13:54:00",t.getNowFormatDate());t.currentTime=e},1e3)},methods:{diffDate:function(t,e){var n=new Date(t),i=new Date(e);if(n>i){var s=n;n=i,i=s,!0}var r=n.getDate(),a=n.getMonth()+1,o=n.getFullYear(),l=i.getDate(),c=i.getMonth()+1,u=i.getFullYear(),m=void 0,d=void 0,v=void 0,p=0,h=0;l>=r?v=l-r:(p=-1,v=function(t,e){return 2==e&&(t%400==0||t%4==0&&t%100!=0)?29:[0,31,28,31,30,31,30,31,31,30,31,30,31][e]}(o,a)+l-r),c+p>=a?d=c+p-a:(h=-1,d=12+c+p-a);(m=u+h-o)>0?(("0"+d).substr(-2),("0"+v).substr(-2)):d>0&&("0"+v).substr(-2);var f=new Date(t).getTime(),_=new Date(e).getTime()-f,g=(parseInt(_/864e5),_%864e5),y=parseInt(g/36e5),w=g%36e5,b=parseInt(w/6e4),x=parseInt(w%6e4/1e3),T=0,C=0,D=0,F=0;4==(m=m.toString()).length?(T=m.substr(0,1),C=m.substr(1,2),D=m.substr(2,3),F=m.substr(3,4)):3==m.length?(C=m.substr(0,1),D=m.substr(1,2),F=m.substr(2,3)):2==m.length?(D=m.substr(0,1),F=m.substr(1,2)):1==m.length&&(F=m.substr(0,1));var I=0,L=0;2==(d=d.toString()).length?(I=d.substr(0,1),L=d.substr(1,2)):1==d.length&&(L=d.substr(0,1));var S=0,$=0;2==(v=v.toString()).length?(S=v.substr(0,1),$=v.substr(1,2)):1==v.length&&($=v.substr(0,1));var O=0,E=0;2==(y=y.toString()).length?(O=y.substr(0,1),E=y.substr(1,2)):1==y.length&&(E=y.substr(0,1));var k=0,W=0;2==(b=b.toString()).length?(k=b.substr(0,1),W=b.substr(1,2)):1==b.length&&(W=b.substr(0,1));var B=0,z=0;return 2==(x=x.toString()).length?(B=x.substr(0,1),z=x.substr(1,2)):1==x.length&&(z=x.substr(0,1)),{yearOne:parseInt(T),yearTwo:parseInt(C),yearThree:parseInt(D),yearFour:parseInt(F),mouthOne:parseInt(I),mouthTwo:parseInt(L),dateOne:parseInt(S),dateTwo:parseInt($),hourOne:parseInt(O),hourTwo:parseInt(E),minuteOne:parseInt(k),minuteTwo:parseInt(W),secondOne:parseInt(B),secondTwo:parseInt(z)}},getNowFormatDate:function(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),s>=0&&s<=9&&(s="0"+s),r>=0&&r<=9&&(r="0"+r),t.getFullYear()+"-"+e+"-"+n+" "+i+":"+s+":"+r},getBefore:function(t){return"step"+t}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timer"}},[n("div",[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearFour>0,expression:"currentTime.yearFour>0"}],staticStyle:{display:"inline-block"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearOne>0,expression:"currentTime.yearOne>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearOne)}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearTwo>0,expression:"currentTime.yearTwo>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearTwo)}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearThree>0,expression:"currentTime.yearThree>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearThree)}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentTime.yearFour>0,expression:"currentTime.yearFour>0"}],staticClass:"wheel",class:t.getBefore(t.currentTime.yearFour)}),t._v(" "),n("span",[t._v(" 年")])]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.mouthOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.mouthTwo)}),t._v(" "),n("span",[t._v(" 月")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.dateOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.dateTwo)}),t._v(" "),n("span",[t._v(" 日")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.hourOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.hourTwo)}),t._v(" "),n("span",[t._v(" 时")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.minuteOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.minuteTwo)}),t._v(" "),n("span",[t._v(" 分")]),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.secondOne)}),t._v(" "),n("div",{staticClass:"wheel",class:t.getBefore(t.currentTime.secondTwo)}),t._v(" "),n("span",[t._v(" 秒 ")])])])])},staticRenderFns:[]};var g=n("C7Lr")(f,_,!1,function(t){n("8FeS")},null,null).exports,y=n("upvi"),w={name:"storyListDetail",data:function(){return{nodeData:{}}},created:function(){this.getInit()},methods:{getInit:function(){var t=this.$route.query.id;this.cont;this.nodeData=this.cont[t]}},computed:h()({},Object(y.b)({cont:function(t){return t.content.cont}}))},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"storyListDetail"}},[n("div",{staticClass:"storyListDetail-title"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.nodeData.titleImg,expression:"nodeData.titleImg"}],staticStyle:{width:"100%",height:"100%","border-radius":"0.1rem"},attrs:{src:t.nodeData.titleImg,alt:"123"}}),t._v(" "),n("div",{staticClass:"storyListDetail-mc"},[n("div",{staticClass:"storyListDetail-mc-div"},[n("div",{staticStyle:{"margin-top":"0.3rem","font-size":"0.34rem"}},[t._v("\n          "+t._s(t.nodeData.title)+"\n        ")]),t._v(" "),n("div",{staticStyle:{"margin-top":"0.3rem","font-size":"0.30rem"}},[t._v("\n          "+t._s(t.nodeData.startTime)+" 至 "+t._s(t.nodeData.endTime)+"\n        ")])]),t._v(" "),n("span",{staticStyle:{position:"absolute",left:"6%",bottom:"4%",color:"#fff","font-size":"0.20rem"}},[n("i",{staticClass:"el-icon-user",staticStyle:{"font-size":"0.28rem"}}),t._v(" "),n("span",[t._v(t._s(t.nodeData.num))]),t._v("人\n      ")]),t._v(" "),n("span",{staticStyle:{position:"absolute",right:"6%",bottom:"4%",color:"#fff","font-size":"0.20rem"}},[n("i",{staticClass:"el-icon-time",staticStyle:{"font-size":"0.28rem"}}),t._v(" "),n("span",[t._v("1")]),t._v("天 记录时间："),n("span",[t._v(t._s(t.nodeData.createTime))])])])]),t._v(" "),n("div",{staticStyle:{"text-indent":"0.4rem","text-align":"left","margin-top":"0.4rem","line-height":"0.34rem","letter-spacing":"0.03rem","font-size":"0.28rem"}},[n("span",{staticStyle:{"font-size":"0.4rem"}},[t._v(t._s(t.nodeData.text.substr(0,2)))]),t._v(t._s(t.nodeData.text.substr(2,t.nodeData.text.length))+"\n  ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center",color:"#999999","padding-top":"1rem","font-size":"0.1rem"}},[t._v("\n   ----------"+t._s(t.nodeData.author)+"----------\n  ")])])},staticRenderFns:[]};var x=n("C7Lr")(w,b,!1,function(t){n("Lcsm")},"data-v-d636b7e2",null).exports,T={data:function(){return{fineTextArr:[{name:"美"},{name:"好"},{name:"时"},{name:"光"},{name:"海"},{name:"苔"}],storyData:[],imgList:[{url:n("Fvui")},{url:n("SsWI")}]}},components:{timer:g,cont:x},computed:h()({},Object(y.b)({cont:function(t){return t.content.cont}})),methods:{goListDetail:function(t,e){this.$router.push({name:"storyListDetail",query:{id:e}})}},created:function(){this.storyData=this.cont}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"homeList"}},[n("div",{staticClass:"carousel"},[n("el-carousel",{attrs:{trigger:"click",height:"150px","indicator-position":"none"}},t._l(t.storyData,function(t,e){return n("el-carousel-item",{key:e},[n("div",{staticStyle:{height:"100%",width:"100%"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.importUrl,expression:"item.importUrl"}],staticStyle:{height:"100%",width:"100%","border-radius":"0.1rem"},attrs:{src:t.importUrl,alt:"img"}})])])}),1)],1),t._v(" "),n("div",{staticClass:"fine margin2"},t._l(t.fineTextArr,function(e,i){return n("div",{key:i,staticClass:"fineText"},[t._v("\n      "+t._s(e.name)+"\n    ")])}),0),t._v(" "),n("div",{staticClass:"timerDiv margin2"},[n("timer")],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"storyList margin2"},t._l(t.storyData,function(e,i){return n("div",{key:i,staticClass:"stotyOutdiv",on:{click:function(n){return t.goListDetail(e,i)}}},[n("div",{staticClass:"storydiv"},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.importUrl,expression:"item.importUrl"}],staticStyle:{height:"100%",width:"100%","border-radius":"0.1rem"},attrs:{src:e.importUrl,alt:"img"}})]),t._v(" "),n("div",{staticClass:"storydesc"},[t._v("\n        "+t._s(e.desc)+"\n      ")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"storyTittle"},[e("span",[this._v("Stories")])])}]};var D=n("C7Lr")(T,C,!1,function(t){n("YzxT"),n("TJBD")},"data-v-64f68d50",null).exports,F={name:"dataList",data:function(){return{name:"123456"}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dataList"}},[n("div",{staticClass:"leftside"},[n("div",{staticStyle:{"text-align":"center","line-height":"4rem"}},[t._v("\n      嘻嘻嘻嘻嘻\n    ")]),t._v(" "),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("导航一")])]),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.$router.push("storylist")}}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1),t._v(" "),n("div",{staticClass:"rightcont"},[n("div",{staticClass:"contheader"}),t._v(" "),n("div",{staticClass:"contmain"},[n("router-view")],1),t._v(" "),n("div",{staticClass:"contfooter"})])])},staticRenderFns:[]};var L=n("C7Lr")(F,I,!1,function(t){n("8pvL")},"data-v-6f2cc50f",null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"storylist"}},[this._v("\n"+this._s(this.name)+"\n")])},staticRenderFns:[]};var $=n("C7Lr")({name:"storylist",data:function(){return{name:"改表"}}},S,!1,function(t){n("T6iK")},null,null).exports;i.default.use(o.a);var O=new o.a({routes:[{path:"/",name:"home",component:v},{path:"/homeList",name:"homeList",component:D},{path:"/storyListDetail",name:"storyListDetail",component:x},{path:"/dataList",name:"dataList",component:L,children:[{path:"/storylist",name:"storylist",component:$}]}]}),E=n("c+XW"),k=n.n(E),W={state:{cont:[{title:"特别的爱给特别的你",desc:"想念乖乖的每天",id:6,importUrl:n("rWwN"),titleImg:n("AIZq"),createTime:"2020-05-07",startTime:"2020-05-07",endTime:"2020-05-07",text:"来自乖乖远程投食的麻辣鲫鱼，来了姨妈照吃不误的乖乖一点也不听话，还拿手去扣痘痘，今天罚左手不准吃饭饭，长长记性。小吃货下午肚子饿了专门发消息过来给俊哥说想吃猪肉饼了，之前给乖乖买的时候乖乖就说挺好吃的，没想到回来成都还想吃猪肉饼，然后还要俊哥给乖乖做，不做还要生气，真是一个小吃货，俊哥怕做失败了到时候把自己给坑了,结果给乖乖打视频过去还一脸不高兴,说是不给做猪肉饼才不高兴的,笑得我肚子痛,乖乖喜欢那个饼的面,那我去好好学习一下,下次争取给乖乖做得很好吃!爱乖乖!",num:2,author:"俊哥日记"},{title:"爱家",desc:"兴高采烈去我家",id:166,importUrl:n("OvgF"),titleImg:n("HodE"),createTime:"2020-05-11",startTime:"2020-05-10",endTime:"2020-05-10",text:"昨天乖乖一大早就起床收拾去我家，坐车挺累的吧，因为姨妈还没有过，本来是让乖乖睡晚点再去的，没想到乖乖起那么早，俊哥好感动。俊哥怕乖乖不知道怎么走，就给乖乖开视频带着乖乖走，乖乖这次记住路了吗？以后都是住这边乖乖可要记住咯哦，我们的家家。中午，乖乖带着我们家的第二个懒猪猪去吃米线然后还去逛街，乖乖和妹妹相处感觉怎么样呢？我也想和乖乖一起逛街，下午，乖乖在家和妹妹看电视玩，我很想你，想起了我们第一次在家里依偎着看电视的场景，乖乖还陪妈妈去买菜，做了一大桌好吃的，没想到乖乖还亲自做了鱼摆摆，我也好喜欢鱼摆摆的，乖乖说下次要做给俊哥吃，俊哥记着的哦。晚上，你们吃完饭饭乖乖跑去洗碗，让俊哥心里不太舒服，本来乖乖是来家里玩的，还做洗碗的活，我有点不开心，乖乖是俊哥的宝贝，不想乖乖做事，只想乖乖享受被爱的感觉。乖乖，俊哥很爱你",num:2,author:"俊哥日记"},{title:"爱俊哥",desc:"乖乖的回应",id:166,importUrl:n("Da9q"),titleImg:n("KSht"),createTime:"2020-05-14",startTime:"2020-05-14",endTime:"2020-05-14",text:"麻辣鲫鱼也是俊哥说的让乖乖吃鱼，然后乖乖才想到鲫鱼的，乖乖不会做鲫鱼汤，要让俊哥做给乖乖喝。去到俊哥家的时候，阿姨一大早就做了鸡汤，还让我蒸猪儿粑吃，我和妹妹都不想吃哈哈，是因为觉得腻，和妹妹逛街吃饭聊天很开心，有个妹妹真好，给妹妹买了碎碎冰，俊哥和妹妹都爱吃冰冰的，阿姨下班特别累了，做了饭吃了，之后我去洗碗也没什么，觉得阿姨特别累了，身体也不舒服。不让妹妹洗碗是想让妹妹觉得有人宠着真好，不会轻易认为别人对她很好，以后找老公就要找宠她的呀。俊哥说，每天每时每刻都要想俊哥，乖乖确实是时时刻刻都在想着俊哥呀，好想好想俊哥，想俊哥在身边，一直在一起，爱俊哥",num:2,author:"乖乖"}],show:!1},mutations:{Cont:function(t,e){t.cont=e}},actions:{Acont:function(t,e){t.commit("Cont",e)}},getters:{not_show:function(t){return t.cont+"abc"}}};i.default.use(y.a);var B=new y.a.Store({modules:{heade:{state:{count:0},mutations:{Count:function(t){t.count=1}},actions:{Acount:function(t){t.commit("Count ")}}},content:W}});n("GXL/"),n("Xcu2"),n("RFxO"),n("muQq");var z={getNowFormatDate:function(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),s>=0&&s<=9&&(s="0"+s),r>=0&&r<=9&&(r="0"+r),t.getFullYear()+"-"+e+"-"+n+" "+i+":"+s+":"+r}};i.default.use(k.a),i.default.config.productionTip=!1,i.default.prototype.$utils=z,new i.default({el:"#app",router:O,store:B,components:{App:a},template:"<App/>"})},OvgF:function(t,e,n){t.exports=n.p+"static/img/new3.effdae0.jpg"},RFxO:function(t,e){},SsWI:function(t,e,n){t.exports=n.p+"static/img/newdog.bb01bdb.jpg"},T6iK:function(t,e){},TJBD:function(t,e){},Um9F:function(t,e){},XAyZ:function(t,e){},Xcu2:function(t,e){},YzxT:function(t,e){},dMer:function(t,e){},hObP:function(t,e){},muQq:function(t,e){},rWwN:function(t,e,n){t.exports=n.p+"static/img/001.118fc96.jpg"}},["NHnr"]);
//# sourceMappingURL=app.18605d1dc06aa5cfd760.js.map