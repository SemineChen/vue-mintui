<template>
<div>
  <!----轮播图----->
<mt-swipe :auto="4000" class="homeswiper">
  <mt-swipe-item><img src="../assets/images/img1.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../assets/images/img2.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../assets/images/img3.jpg"></mt-swipe-item>
</mt-swipe>
<!-- 四宫格 -->
 <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		        </ul> 

</div>


</template>

<script>
export default{
  // data(){
  //   return{

  //   }
  // },
  // created(){
  //   this.getlunbo()
  // },
  // methods:{
  //   getlunbo(){
  //        this.$http.get('https://source.unsplash.com/random').then(
  //          function(result){
  //             console.log(result.body)
  //          }
         
  //          )
  //   }
 
  // }
}


</script>

<style lang="scss" scoped>
.homeswiper{
  height: 200px;
  background: red;
}

</style>
