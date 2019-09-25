<template>
<div class="appcontent">

  
     <div>
            <mt-header fixed title="vue是我的第一次尝试"></mt-header>
     </div>
     <div class="main">
         <router-view></router-view>
     </div>
       


      <div class="bottom">
            <router-link id="tab1" to='/home'>
            <div>首页</div>
             </router-link>
            <router-link id="tab2" to='/mall'>

            <div>商城</div>
             </router-link>
            <router-link id="tab3" to='/shopcar'>

            <div>购物车</div>
             </router-link>
            <router-link id="tab4" to='/mine'>

            <div>我的</div>
            </router-link>      
    </div>

</div>


</template>

<script>
// export default {
//     name: 'app',
//     data () {
//       return {selected: '首页'}
//     },
//     watch: {
//       selected: function (val, oldVal) {
//         console.log(val)
//         // click后打印出当前mt-tab-item的id
//       }
//     }
//   }
</script>

<style lang="scss" scoped>
.appcontent{
      padding-top:40px;
}
.bottom{
      height: 40px;
      position: fixed;
      bottom:0px;
      background: #f4f4f4;
      width:100%;
}
.bottom div{
    float: left;
    width: 20%;
    text-align: center;
    color:#333
}
.active div{
      color: rebeccapurple;
}
// .main{
//       height: 500px;
//       width: 500px;
//       background: #333;
// }

</style>
