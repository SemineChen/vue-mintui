<template>
<div>
  <!----轮播图----->
<mt-swipe :auto="4000" class="homeswiper">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>

</div>


</template>

<script>
export default{
  data(){
    return{

    }
  },
  created(){
    this.getlunbo()
  },
  methods:{
    getlunbo(){
         this.$http.get('https://source.unsplash.com/random').then(
           function(result){
              console.log(result.body)
           }
         
           )
    }
 
  }
}


</script>

<style lang="scss" scoped>
.homeswiper{
  height: 400px;
  background: red;
}

</style>
