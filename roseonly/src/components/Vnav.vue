<template>
  <div class="nav">
    <div class="margin">
      <ul>
        <li @click="gogoods">爱礼推荐</li>
        <li>鲜花玫瑰</li>
        <li>永生玫瑰</li>
        <li>玫瑰珠宝</li>
        <li>玫瑰饰品</li>
        <li>玫瑰香氛</li>
        <li>高端定制</li>
        <li>诺誓世界</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      gogoods(){
        this.$router.push('/goods');
      }
    }
  }
</script>

<style>
  .nav{height: 40px;background-color: #414141;}
  .nav .margin{height: 40px;width: 1240px;margin: 0 auto;}
  .nav .margin ul{display: flex;}
  .nav .margin ul li{width: 95px;height: 40px;line-height: 40px;text-align: center;margin: 0 32px 0 32px;font-size: 14px;color: white;}
  .nav .margin ul li:hover{background-color: #c71f2c}
</style>
