import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 导入组件
import home from './components/home.vue'
import mall from './components/mall.vue'
import shopcar from './components/shopcar.vue'
import mine from './components/mine.vue'

var router = new VueRouter({
    mode: 'histroy',
    routers: [
        { path: '/home', component: home },
        { path: '/mall', component: mall },
        { path: '/shopcar', component: shopcar },
        { path: '/mine', component: mine }
    ],
    linkActiveClass: 'active'
})

export default (router)