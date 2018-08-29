<h2>项目展示(图片加载较慢，稍等)</h2>

<ul>
  <li>技术栈以及组件库</li>
	<li>vue:用于构建用户界面的MVVM框架</li>
	<li>vue-router：为单页面应用提供的路由系统，使用了按需加载技术来实现异步加载优化性能</li>
	<li>vuex：Vue 集中状态管理，在多个组件共享某些状态时非常便捷</li>
	<li>vue-lazyload：实现图片懒加载，节省用户流量，优化页面加载速度</li>
	<li>better-scroll：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅</li>
	<li>less：css 预编译处理器</li>
	<li>mint-ui: 一款移动端开发的框架</li>
	<li>swiper: 一个强大的滑动特效插件</li>
</ul> 
<ul>
实现主要的几个功能
	<li>登陆退出：
		用户在已登录状态和未登录状态的界面是不同的，有些功能指定要在登录状态下才会有（如添加订单），因此会产生状态的切换，使用了浏览器自带的window.localStorage，vuex 来存储数据和登陆状态</li>
	<li>搜索功能：	
		利用 includes 方法验证数据中是否有 keywords，相应输出结果，没有则切换到另一个找不到的UI界面。</li>
	<li>画廊功能：
		商品详情页点开banner会弹出画廊</li>
	<li>左右联动、上拉刷新：
		利用better-scroll实现城市列表和字母检索表的左右联动,
		主页商品推荐的上拉刷新。</li>
	<li>添加、确认订单：
		如果是在未登录的状态下，那么进行一个router-link路由跳转到登录login页面，如果是已登录的状态下，会进入到一个商品详情页，接着点击立即购买则会跳到付款页面，如果填过地址等信息的，这个时候数据就会利用vuex保存到我的个人页面中的待出行页面中，可以进行确认出行后在全部订单中查看。</li>
</ul> 






</p>

<h3>主页</h3>

![image](https://github.com/shashademao/vue-tuniu/blob/master/screenshot/%E4%B8%BB%E9%A1%B5.gif)

<h3>城市列表页</h3>

![image](https://github.com/shashademao/vue-tuniu/blob/master/screenshot/%E5%9F%8E%E5%B8%82.gif)

<h3>功能展示</h3>

![image](https://github.com/shashademao/vue-tuniu/blob/master/screenshot/%E8%B4%AD%E4%B9%B0.gif)
