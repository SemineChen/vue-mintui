import Vue from 'vue'

//按需导入mint-ui的header部分(这个需要在引入组件之前)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入mint-ui底部部分
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//导入自己编写的组件
import App from './components/App.vue'


var Vm = new Vue({
    el: '#app',
    // data: {
    //     msg: 'nicaicacdwa'
    // },
    render: h => h(App) //通过render函数渲染到页面中去
})