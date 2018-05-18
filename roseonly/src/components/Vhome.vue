<template>
  <div class="home">
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
      <swipe-item class="slide4"></swipe-item>
    </swipe>
  </div>
</template>
<script>
  import {Swipe,SwipeItem} from 'vue-swipe'
  export default {
    components:{
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }
  }
</script>
<style>
  .my-swipe {
    width: 1240px;
    height: 450px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
    background-image: url("/src/assets/img/swipe1.jpg");
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
    background-image: url("/src/assets/img/swipe2.jpg");
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
    background-image: url("/src/assets/img/swipe3.jpg");
  }
  .slide4 {
    background-color: #ff2d4b;
    color: #fff;
    background-image: url("/src/assets/img/swipe4.jpg");
  }


  .mint-swipe-indicator{opacity:1;background-color: #6b6b6b;width: 20px;height: 6px;border-radius: 0}
  .is-active{background-color: white;}
</style>
