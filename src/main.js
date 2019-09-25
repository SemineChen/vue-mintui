import Vue from 'vue'
//引入icon font文件
import './assets/iconfont/iconfont.css'

//按需导入mint-ui的header部分(这个需要在引入组件之前)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入mint-ui底部部分
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//导入自己编写的组件
import App from './App.vue'
//导入路由
import router from './router.js'


var Vm = new Vue({
    el: '#app',
    // data: {
    //     msg: 'nicaicacdwa'
    // },
    render: h => h(App), //通过render函数渲染到页面中去
    router //挂载路由
})