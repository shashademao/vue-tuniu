webpackJsonp([4],{Cz6v:function(t,i){},OKNB:function(t,i,s){"use strict";var n={created:function(){this.getData()},props:["text"],data:function(){return{navBlock:[],showFlag:!1}},methods:{getData:function(){var t=this;this.$axios.get("../../../static/mock/index.json").then(function(i){!0===i.data.ret&&(t.navBlock=i.data.data.navBlock)})},showNavBlock:function(){this.showFlag=!this.showFlag}},components:{navBlock:s("Ohnz").a}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"header"},[s("router-link",{staticClass:"home",attrs:{tag:"div",to:"/home"}},[s("i",{staticClass:"iconfont icon-home logo-img"})]),t._v(" "),s("div",{staticClass:"input"},[t._v("\n\t\t"+t._s(t.text)+"\n\t")]),t._v(" "),s("router-link",{staticClass:"user",attrs:{tag:"div",to:"/center"}},[s("i",{staticClass:"iconfont icon-yonghuzhongxin"})]),t._v(" "),s("div",{staticClass:"nav",on:{click:t.showNavBlock}},[t._v("\n\t\t导航\n\t\t"),s("div",{staticClass:"arrow-wrapper",class:{rotate:t.showFlag}},[s("i",{staticClass:"iconfont icon-iconfontjiantou"})])]),t._v(" "),s("navBlock",{attrs:{navBlock:t.navBlock,showFlag:t.showFlag}})],1)},staticRenderFns:[]};var e=s("vSla")(n,a,!1,function(t){s("zFqJ")},"data-v-a20f5b90",null);i.a=e.exports},gJ8x:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("OKNB"),a=s("4YfN"),e=s.n(a),c=s("9rMa"),o={mixins:[s("flXH").a],data:function(){return{nickname:"登陆 / 注册"}},activated:function(){this.checkLogin()},methods:e()({allList:function(){this.$router.push("/alllist")},unDepart:function(){this.$router.push("/undepart")},checkLogin:function(){var t=window.localStorage.getItem("username");t?(this.nickname=t,this.setLoginStatus(!0)):this.nickname="登陆 / 注册"},loginOrOut:function(){this.loginStatus?this.$router.push({path:"/user"}):this.$router.push({path:"/login"})}},Object(c.d)({setLoginStatus:"setLoginStatus"})),computed:e()({undepartCount:function(){return this.undepartOrderList.length},alllistCount:function(){return this.orderList.length}},Object(c.c)(["loginStatus","username","undepartOrderList","orderList"]))},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"center"},[s("div",{staticClass:"center-center"},[t._m(0),t._v(" "),s("a",{staticClass:"user-nickname",on:{click:t.loginOrOut}},[t._v("\n\t\t\t"+t._s(t.nickname)+"\n\t\t")]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"center-myorder"},[t._m(2),t._v(" "),s("div",{staticClass:"myorder-bottom"},[s("div",{staticClass:"item",on:{click:t.none}},[s("i",{staticClass:"iconfont icon-daifukuan"}),t._v(" "),s("p",[t._v("待付款")])]),t._v(" "),s("div",{staticClass:"item",on:{click:t.unDepart}},[s("i",{staticClass:"iconfont icon-jiaoyin"}),t._v(" "),s("p",[t._v("待出行")]),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.undepartCount,expression:"undepartCount"}],staticClass:"badge"},[t._v(t._s(t.undepartCount))])]),t._v(" "),s("div",{staticClass:"item",on:{click:t.none}},[s("i",{staticClass:"iconfont icon-dianping"}),t._v(" "),s("p",[t._v("待点评")])]),t._v(" "),s("div",{staticClass:"item",on:{click:t.allList}},[s("i",{staticClass:"iconfont icon-quanbudingdan"}),t._v(" "),s("p",[t._v("全部订单")]),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.alllistCount,expression:"alllistCount"}],staticClass:"badge"},[t._v(t._s(t.alllistCount))])])])]),t._v(" "),s("div",{staticClass:"center-mywallet",on:{click:t.none}},[t._m(3)]),t._v(" "),s("div",{staticClass:"center-first-pay",on:{click:t.none}},[t._m(4)]),t._v(" "),s("div",{staticClass:"center-mymenu",on:{click:t.none}},[t._m(5),t._v(" "),s("div",{staticClass:"mymenu-bottom",on:{click:t.none}},[t._m(6)]),t._v(" "),t._m(7)]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"user-pic",attrs:{href:"#"}},[i("img",{attrs:{src:"http://img2.tuniucdn.com/site/wap/img/member/newhome/msite/avatar.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"icon-recommend",attrs:{href:"#"}},[i("img",{attrs:{src:"https://m.tuniucdn.com/fb2/t1/G3/M00/2A/53/Cii_Lllcmo2ISzFqAAAUFDK4JroAACnEQJFY2wAABQs740.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"myorder-header"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"iconfont icon-quanbudingdan"}),this._v(" "),i("em",[this._v("我的订单")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mywallet-header"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"iconfont icon-qianbao"}),this._v(" "),i("em",[this._v("我的钱包")]),this._v(" "),i("i",{staticClass:"iconfont icon-iconfontjiantou-copy"})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mywallet-header"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"iconfont icon-shuye"}),this._v(" "),i("em",[this._v("首付出发")]),this._v(" "),i("i",{staticClass:"iconfont icon-iconfontjiantou-copy"}),this._v(" "),i("span",{staticClass:"text"},[this._v("立即开通")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mymenu-header border-bottom"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"iconfont icon-xinniantubiao-shangchuantubiaoku-"}),this._v(" "),i("em",[this._v("邀请新伙伴 返1%旅游券")]),this._v(" "),i("img",{staticClass:"mark",attrs:{src:"https://m3.tuniucdn.com/fb2/t1/G5/M00/47/3B/Cii-s1pm2bSIEKjmAAARvAPBn5MAACviAP_nhYAABHU879.png"}})])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box border-bottom"},[s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-zixunguwen"}),t._v(" "),s("p",[t._v("咨询顾问")])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-huangguan"}),t._v(" "),s("p",[t._v("会员俱乐部")])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-41"}),t._v(" "),s("p",[t._v("常用信息")])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-dianping"}),t._v(" "),s("p",[t._v("我的点评")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mymenu-bottom"},[s("div",{staticClass:"box"},[s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-buoumaotubiao02"}),t._v(" "),s("p",[t._v("社区")])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-shoucang"}),t._v(" "),s("p",[t._v("收藏")])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-qianzheng"}),t._v(" "),s("p",[t._v("签证进度")])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"iconfont icon-gengduo"}),t._v(" "),s("p",[t._v("更多")])])])])}]};var l=s("vSla")(o,r,!1,function(t){s("Cz6v")},"data-v-10154ef1",null).exports,v={components:{Header:n.a,Center:l}},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("Header",{attrs:{text:"会员中心"}}),this._v(" "),i("Center")],1)},staticRenderFns:[]};var _=s("vSla")(v,u,!1,function(t){s("sgX0")},"data-v-54c80f10",null);i.default=_.exports},sgX0:function(t,i){},zFqJ:function(t,i){}});
//# sourceMappingURL=4.a8f2363ade47844c6dfa.js.map