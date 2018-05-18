<template>
  <div class="reg">
    <div class="container">

      <!-- 左半边图片 -->
      <div style="" class="login_bj">
        <div class="zc_cur_bj">
          <a href="javascript:void(0);" class="qixi_tz"></a>
          <!--注册内容 开始-->
          <form action="/pages/Login/login.htm" method="post" id="registerForm">
            <input type="hidden" id="randKey" name="randKey" value="ff808081621e327901621f0f0598008f" />
            <div class="register">
              <div class="register_nav">
                <select class="register_text indent" style="border: solid 1px #b3b3b3;" id="countryPrefixs"></select>
              </div>

              <div class="register_nav">
                <input type="text" id= "username" name="username" maxlength="11" placeholder="请输入手机号" class="register_text" v-model="umsg" />
                <div class="register_nav_86" id="prefixC">+86</div>
                <div class="reminder validate">
                  &nbsp;
                </div>
              </div>
              <div class="register_nav" id="mailway">
                <input type="text" name="rand" placeholder="图片验证码" maxlength="4" class="register_yzm" id="rand_yzm" />
                <div class="register_yzmimg">
                  <img id="imgRand" src='http://orders.roseonly.com.cn/newImage.jsp?randKey=ff808081621e327901621f0f0598008f' width="100" height="46" alt="验证码" title="验证码" onclick="javascript:refreshRand();" />
                </div>

                <div class="reminder validate">
                  &nbsp;
                </div>
                <a href="javascript:void(0);" class="register_yzmnext">换一张</a>
              </div>

              <div class="clear"></div>
              <div class="register_nav" id="mobileway">
                <input type="text" name="smscode" id="smscode" maxlength="4" class="register_yzm" placeholder="短信验证码" />
                <span>
							<div class="sms_button">
								<a href="javascript:void(0);" class="background2" id="getSmsCode">发送验证码</a>
							</div> </span>
                <div class="reminder validate">
                  &nbsp;
                </div><div style="display:none;" ><p class="register_yyzm" id = "getVoiceCode">没收到短信验证码？请使用<label>语音验证码</label></p></div>

              </div>
              <div class="register_nav" style="margin-bottom:0;height:45px">
                <input type="password" name="password" id="password" placeholder="6-16位数字或字母" class="register_password" v-model="pmsg" />
                <div class="reminder validate">
                  &nbsp;
                </div>
              </div>
              <div class="register_p">
                <p class="register_yyzh"><a href="javascript:void(0);">已有账号</a></p>

              </div>

              <div class="register_button">
                <a href="javascript:void(0);" class="background2"  name="regSubmitBtn" id="registerSubmit" @click="goreg">创建账号</a>
              </div>
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
  import axios from 'axios';
  export default {
    data(){
      return{
        umsg:'',
        pmsg:''
      }
    },
    methods:{
      goreg(){
        var _this=this;
        axios.post('http://localhost:3000/reg', {
          u: _this.umsg,
          p: _this.pmsg
        })
          .then(function (response) {
            console.log(response);
            if (response.data=="ok"){
              alert("注册成功！")

              _this.$route.push("/login");
            }else {
              alert("用户名已存在！")
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
  .reg{
    background: url(/src/assets/img/wjk.jpg) no-repeat center;
    height: 673px;
    width: 100%;
    position: relative;
    background-size: cover;
    overflow: hidden;
  }

</style>
