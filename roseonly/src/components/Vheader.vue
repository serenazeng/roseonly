<template>
  <div class="header">
    <div class="head">
      <div class="div_lang">
        <label>内地</label>
        <ul>
          <li class="hk">
            <a href="javascript:void(0);">Hong Kong</a>
          </li>
          <li class="cn">
            <a href="javascript:void(0);">内地</a>
          </li>
        </ul>
      </div>
      <a href="javascript:void(0);" class="roseonly-logo" id="tag_roseonly" @click="gohome"></a>
      <a href="javascript:void(0);" class="larose-logo" id="tag_zhuanai"></a>
      <a href="javascript:void(0);" class="wedding-logo">婚礼定制</a>
      <div class="top_ewm">
        <img src="http://www.roseonly.com.cn/upload/syspic_new/15178310992873054.png" alt="" />
      </div>
      <div class="logo_line"></div>
      <div class="logo_line2"></div>
      <div class="right">
        <a href="javascript:void(0);" class="unlogin" rel="nofollow" @click="gologin">
          <span id="h_font" class="h_font">登录</span>
          <span class="h_line">|</span>
        </a>
        <a href="javascript:void(0);" class="unlogin" rel="nofollow" @click="goreg">
          <span id="h_font" class="h_font">注册</span>
          <span class="h_line">|</span>
        </a>
        <a style="display:none" href="javascript:void(0);" class="login" target="_blank" rel="nofollow">
          <span class="h_font">个人中心</span>
          <span class="h_line">|</span>
        </a>
        <a style="display:none" href="javascript:void(0);" onclick="logout();" class="login" rel="nofollow">
          <span class="h_font">退出</span>
          <span class="h_line">|</span>
        </a>
        <a href="javascript:void(0);" class="right-shop" rel="nofollow"></a>
        <span id="cartNum" class="cartNum">(0)</span>
      </div>
      <a href="javascript:void(0);" target="_blank" class="std">
        <label>专卖店</label>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      gologin(){
        this.$router.push('/login');
      },
      goreg(){
        this.$router.push('/reg');
      },
      gohome(){
        this.$router.push('./home');
      }
    }
  }
</script>
