import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/border.css'
import './common/css/reset.css'
import './common/css/iconfont.css'
import axios from 'axios'
import store from './store/index.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Toast,MessageBox } from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'


Vue.use(MintUI)
Vue.prototype.$toast = Toast
Vue.prototype.$messageBox= MessageBox

import fastclick from 'fastclick'
fastclick.attach(document.body);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = axios

Vue.use(VueLazyLoad,{
	loading:require('./common/image/timg.jpg'),
	preLoad: 1.3,
	attempt: 1
})



Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
	el: '#app',
	router,
	render: h => h(App),
	store
})