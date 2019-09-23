<template>
<div class="appcontent">
      <h1>123</h1>
      <!----头部部分--->
      <mt-header fixed title="vue是我的第一次尝试"></mt-header>
      <!----中间部分--->
       <mt-tabbar v-model="selected">
            <mt-tab-item id="tab1">
            <img slot="icon" src="">
            tab1
            </mt-tab-item>
            <mt-tab-item id="tab2">
            <img slot="icon" src="">
            tab2
            </mt-tab-item>
            <mt-tab-item id="tab3">
            <img slot="icon" src="">
            tab3
            </mt-tab-item>
            <mt-tab-item id="tab4">
            <img slot="icon" src="">
            tab4
            </mt-tab-item>
      </mt-tabbar>

      <!----底部部分--->

</div>


</template>

<script>
// export default {
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.appcontent{
      padding-top:40px;
}

</style>
