webpackJsonp([2],{"68fh":function(t,a){},M65W:function(t,a){},OKNB:function(t,a,s){"use strict";var i={created:function(){this.getData()},props:["text"],data:function(){return{navBlock:[],showFlag:!1}},methods:{getData:function(){var t=this;this.$axios.get("../../../static/mock/index.json").then(function(a){!0===a.data.ret&&(t.navBlock=a.data.data.navBlock)})},showNavBlock:function(){this.showFlag=!this.showFlag}},components:{navBlock:s("Ohnz").a}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("router-link",{staticClass:"home",attrs:{tag:"div",to:"/home"}},[s("i",{staticClass:"iconfont icon-home logo-img"})]),t._v(" "),s("div",{staticClass:"input"},[t._v("\n\t\t"+t._s(t.text)+"\n\t")]),t._v(" "),s("router-link",{staticClass:"user",attrs:{tag:"div",to:"/center"}},[s("i",{staticClass:"iconfont icon-yonghuzhongxin"})]),t._v(" "),s("div",{staticClass:"nav",on:{click:t.showNavBlock}},[t._v("\n\t\t导航\n\t\t"),s("div",{staticClass:"arrow-wrapper",class:{rotate:t.showFlag}},[s("i",{staticClass:"iconfont icon-iconfontjiantou"})])]),t._v(" "),s("navBlock",{attrs:{navBlock:t.navBlock,showFlag:t.showFlag}})],1)},staticRenderFns:[]};var e=s("vSla")(i,n,!1,function(t){s("zFqJ")},"data-v-a20f5b90",null);a.a=e.exports},dJKN:function(t,a){},gs68:function(t,a){},lFou:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("OKNB"),n=s("4YfN"),e=s.n(n),o=s("9rMa"),c=s("flXH"),r={mixins:[c.a],props:["productDetail"],methods:e()({buy:function(){var t=this;this.loginStatus?(this.setProduct(this.productDetail),this.$router.push({path:"/pay"})):(this.$toast({message:"请先登录再预订",duration:800}),setTimeout(function(){t.$router.push({path:"/login"})},900))}},Object(o.d)({setProduct:"setProduct"})),computed:e()({},Object(o.c)(["loginStatus"]))},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bottom-bar border-top"},[s("div",{staticClass:"price"},[t._v("\n\t\t总价："),s("span",[t._v("￥"),s("em",[t._v(t._s(t.productDetail.price))])])]),t._v(" "),s("div",{staticClass:"online border-left",on:{click:t.none}},[s("i",{staticClass:"iconfont icon-zixunguwen"}),t._v(" "),s("p",[t._v("在线客服")])]),t._v(" "),s("div",{staticClass:"phone border-left",on:{click:t.none}},[s("i",{staticClass:"iconfont icon-buoumaotubiao02"}),t._v(" "),s("p",[t._v("电话客服")])]),t._v(" "),s("div",{staticClass:"buy",on:{click:t.buy}},[t._v("立即预订")])])},staticRenderFns:[]};var v=s("vSla")(r,l,!1,function(t){s("68fh")},"data-v-6fff63fa",null).exports,d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"gallery",on:{click:function(a){return a.stopPropagation(),t.handleClick(a)}}},[s("div",{staticClass:"wrapper"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.galleryImgs,function(t,a){return s("swiper-slide",{key:a},[s("img",{staticClass:"pic",attrs:{src:t}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var u={props:["productDetail"],data:function(){return{showFlag:!1}},methods:{toggle:function(){this.showFlag=!this.showFlag}},components:{Gallery:s("vSla")({props:["productDetail","showFlag"],data:function(){return{galleryImgs:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534484887503&di=7753e4826d2dc236de6161e3bdd03d1d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180130%2F82d878d64bb3494fba18fd5ec7bac7fc.jpeg"],swiperOption:{pagination:{el:".swiper-pagination",type:"fraction",observeParents:!0,observer:!0}}}},methods:{initData:function(){this.galleryImgs.unshift(this.productDetail.imgUrl)},handleClick:function(){this.$emit("toggle")}},watch:{productDetail:function(){this.initData()}}},d,!1,function(t){s("dJKN")},"data-v-2c4cebf0",null).exports}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"banner",on:{click:t.toggle}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.productDetail.imgUrl}})]),t._v(" "),s("div",{staticClass:"desc"},[s("p",[t._v(t._s(t.productDetail.title))])]),t._v(" "),s("Gallery",{attrs:{productDetail:t.productDetail,showFlag:t.showFlag},on:{toggle:t.toggle}})],1)},staticRenderFns:[]};var _=s("vSla")(u,p,!1,function(t){s("gs68")},"data-v-3a8377a2",null).exports,f={props:["productDetail"],mixins:[c.a]},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-box",on:{click:t.none}},[s("div",{staticClass:"title-box"},[s("div",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(t.productDetail.desc)+"\n\t\t")]),t._v(" "),s("div",{staticClass:"price"},[s("p",[t._v("途牛价格 ￥"),s("em",[t._v(t._s(t.productDetail.price))]),t._v("起")])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"remark-box"},[s("div",{staticClass:"remark-profile border-bottom"},[s("span",[t._v("游客点评"),s("i",[t._v("("),s("em",[t._v(t._s(t.productDetail.satisfy)+"%")]),t._v("满意度)")])]),t._v(" "),s("span",{staticClass:"count"},[t._v(t._s(t.productDetail.count)+"个点评")]),t._v(" "),s("i",{staticClass:"iconfont icon-iconfontjiantou-copy"})]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"discount-box"},[s("div",{staticClass:"activity border-bottom"},[s("span",[t._v("优惠信息")]),t._v(" "),s("span",{staticClass:"item"},[t._v("返现优惠")]),t._v(" "),s("span",{staticClass:"item"},[t._v("点评返现")]),t._v(" "),s("span",{staticClass:"count"},[t._v("2个")]),t._v(" "),s("i",{staticClass:"iconfont icon-iconfontjiantou-copy"})]),t._v(" "),s("div",{staticClass:"coupon"},[s("span",[t._v("领券活动")]),t._v(" "),s("span",{staticClass:"item"},[t._v("40元")]),t._v(" "),s("span",{staticClass:"item"},[t._v("300元")]),t._v(" "),s("span",{staticClass:"item"},[t._v("500元")]),t._v(" "),s("span",{staticClass:"item"},[t._v("100元")]),t._v(" "),s("span",{staticClass:"count"},[t._v("2个")]),t._v(" "),s("i",{staticClass:"iconfont icon-iconfontjiantou-copy"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"remark-detail"},[s("div",{staticClass:"item"},[t._v("\n\t\t\t\t行程安排\n\t\t\t\t"),s("span",{staticClass:"percent"},[t._v("95%")])]),t._v(" "),s("div",{staticClass:"item"},[t._v("\n\t\t\t\t餐饮住宿\n\t\t\t\t"),s("span",{staticClass:"percent"},[t._v("89%")])]),t._v(" "),s("div",{staticClass:"item"},[t._v("\n\t\t\t\t旅行交通\n\t\t\t\t"),s("span",{staticClass:"percent"},[t._v("96%")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"detail-box"},[a("h1",[this._v("这是详情blablabla...")])])}]};var m=s("vSla")(f,h,!1,function(t){s("pFnL")},"data-v-b54bc19e",null).exports,g={name:"detail",created:function(){this.getData()},data:function(){return{productDetail:{}}},methods:{getData:function(){var t=this;this.$axios.get("../../static/mock/index.json").then(function(a){if(console.log(t.$route.params.id),!0===a.data.ret){var s=a.data.data,i=t.$route.params.id;t.initData(s.recommendList,i)}})},initData:function(t,a){for(var s=0;s<t.length;s++)if(t[s].id==a){this.productDetail=t[s];break}}},components:{Header:i.a,BottomBar:v,Banner:_,textBox:m}},C={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Header",{attrs:{text:"产品详情"}}),this._v(" "),a("Banner",{attrs:{productDetail:this.productDetail}}),this._v(" "),a("textBox",{attrs:{productDetail:this.productDetail}}),this._v(" "),a("BottomBar",{attrs:{productDetail:this.productDetail}})],1)},staticRenderFns:[]};var b=s("vSla")(g,C,!1,function(t){s("M65W")},"data-v-c0d060c2",null);a.default=b.exports},pFnL:function(t,a){},zFqJ:function(t,a){}});
//# sourceMappingURL=2.a29ce3e98083bbc38dcf.js.map