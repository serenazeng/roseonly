<template>
  <div class="bycar">
    <div class="container">
      <div>
        <div class="nav-container">
          <div class="main_view_line2"></div>
        </div>
      </div>
      <div class="order" id="efg">
        <div class="shopping">
          <div class="shop-a">
            <div class="shop-left" style="width:800px">我的购物车</div>
            <a href="javascript:void(0);" class="shop-right" id="cart_del_all">清空购物车</a>
          </div>
          <table class="shopping_cart" border="0" cellspacing="0" cellpadding="0" data-shopid="0">
            <tr class="shopping_cart_title">
              <td width="110">序号</td>
              <td width="110">品牌</td>
              <td width="420">商品名称</td>
              <td width="120">单价</td>
              <td width="13"></td>
              <td width="60">数量</td>
              <td width="13"></td>
              <td>操作</td>
            </tr>
            <tr v-if="false">没数据</tr>

            <tr height="120" class="wg_cart_list" data-price="2399.0" id="cart_tr_2064" data-id="2064"   v-for="(ms,index) of msg" v-else>
              <td>{{index+1}}</td>
              <td>
                roseonly</td>
              <td >
                <img :src="ms.src" class="shopping_cart_img" alt="产品图" style="cursor:pointer;"/>
                <div class="shopping_cart_name">
                  {{ms.p1}}</div>
              </td>
              <td class="td_price_2064">{{ms.pr}}</td>
              <td>
                <a href="javascript:void(0)" class="cart_down"><img border="0" class="jia_jian" alt="" src="http://orders.roseonly.com.cn/resources/images/cart02.png" @click="jian(ms._id),jianx(index)"/></a>
              </td>
              <td>
                <input type="text" id="cart_count_2064" maxlength="4" data-num="3" class="shopping_cart_sl" :value="ms.sl" />
              </td>
              <td align="right"><a href="javascript:void(0);" class="cart_up"><img border="0" class="jia_jian" alt="" src="http://orders.roseonly.com.cn/resources/images/cart03.png" @click="jia(ms._id),jiax(index)" /></a></td>
              <td><a href="javascript:void(0)" class="cart_del" @click="del(ms._id),delx(index)">删除</a></td>
            </tr>
            <!-- 显示赠品 -->
          </table>
          <div class="cart_total">合计：￥<font id="cart_total">{{reversedMessage}}</font>
            <input type="button" class="cart_button1" value="去结算" id="cart_pay" @click="tb"/>
          </div>

        </div>
        <div class="clear"></div>

        <!--4月珠宝季活动  -->
        <div class="help-right">
          <div class="help-nav">订单帮助</div>
          <p>热线电话：400-1314-520</p>
          <p>客服邮箱：<a href="javascript:void(0);">service@roseonly.com</a>&nbsp;&nbsp;客服工作时间：周一至周日9:00-21:00</p>
          <p>如果您在下单过程中遇到问题，请与我们联系。因为鲜花商品对配送时效有特殊要求，订购后请随时登录查询物流状态。</p>
        </div>

      </div>
      <div class="main_view_line2"></div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data(){
      return{
        msg:false
      }
    },
    methods:{
      ...mapActions(['jia','jian','del']),
      jiax(index){
        this.msg[index].sl++;
      },
      jianx(index){
        this.msg[index].sl--;
      },
      delx(index){
        this.msg.splice(index,1)
      },
      tb(){
        var _this=this;
        axios({
          method: 'POST',
          url: 'http://localhost:3000/upimp',
          data: {
            'upimp':_this.getimp,
            'yhm':_this.getyhm
          }
        })
          .then(function (response) {
            console.log(response);
            alert("同步到数据库！")

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    computed:{
      ...mapGetters(['getall','getimp']),
      reversedMessage: function () {
        // `this` 指向 vm 实例
        if (this.msg){
          var he=0;
          for (var i=0;i<this.msg.length;i++){
            he=he+this.msg[i].pr.slice(1)*this.msg[i].sl;
          }
          return he;
        }
      }
    },
    mounted(){
      var arr=[];
      for (var j=0;j<this.getimp.length;j++){
        for (var i=0;i<this.getall.length;i++){
          if(this.getall[i]._id==this.getimp[j]._id){
            console.log(i);
            arr.push(this.getall[i]);
          }
        }
      }

      var arrx=[]
      for(var h=0;h<arr.length;h++){
        var obj={'_id':this.getimp[h]._id,'sl':this.getimp[h].sl,'p1':arr[h].p1,'pr':arr[h].pr,'src':arr[h].src}
        arrx.push(obj);
      }

      console.log(arrx);

      this.msg=arrx;
    }
  }

</script>

<style>

</style>
