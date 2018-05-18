<template>
  <div class="login">
    <div class="container">
      <!--导航 开始-->
      <!-- 左半边图片 -->
      <div class="login_bj">
        <div class="zc_cur_bj">
          <a href="javascript:void(0);" class="qixi_tz"></a>
          <form action="/pages/Login/login.htm" method="post" id="loginForm1">
            <div class="register register_pass">
              <!--<div class="signin_tit">登录</div>
                  --><div class="register_nav">
              <select class="register_text indent" style="border: solid 1px #b3b3b3;" id="countryPrefixs"></select>
            </div>
              <div class="register_nav">
                <input type="text" placeholder="请输入手机号" name="username" id="username" maxlength="30" class="register_text text_p" v-model="umsg" />
                <div class="register_nav_86" id="prefixC">+86</div>
                <div class="reminder validate">
                  &nbsp;
                </div>
              </div>
              <div class="register_nav">
                <input type="password" name="password" placeholder="请输入密码" id="password" maxlength="16" class="register_password" v-model="pmsg" />
                <div class="reminder validate">
                  &nbsp;
                </div>
              </div>
              <div class="signin_a">
                <a href="javascript:void(0);" class="signin_zc">快速注册</a>
                <a href="javascript:void(0);" class="signin_forget">忘记密码？</a>
              </div>

              <a href="javascript:;" id="login-btn-submit" class="signin_button" @click="gologin">登录</a>
              <div class="register_bottom">
                roseonly支持门店城市同城速递服务!
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import axios from 'axios';
  export default {
    data(){
      return{
        umsg:'',
        pmsg:''
      }
    },
    methods:{
      ...mapActions(['actimp','actyhm']),
      gologin(){
        var _this=this;
        axios({
          method: 'post',
          url: 'http://localhost:3000/login',
          withCredentials:true,
          data: {
            u:_this.umsg,
            p:_this.pmsg
          }
        })
          .then(function (response) {
            console.log(response);
            if (response.data!="no"){
              alert("登陆成功！");
              _this.actimp(response.data);
              _this.actyhm(_this.umsg);
              _this.$router.push('/home');
            }else {
              alert("账号密码错误！");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
<style>
  .login{
    background: url(/src/assets/img/wjk.jpg) no-repeat center;
    height: 673px;
    width: 100%;
    position: relative;
    background-size: cover;
  }

</style>
