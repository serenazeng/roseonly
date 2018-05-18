<template>
  <div class="details">
    <div class="container">
      <div class="contain_details">
        <!--轮播图-->
        <div class="main_jewel">
          <div class="jewel_window">
            <div class="image_reel1">
              <img id="detail_main_img" style="width: 350px;height: 350px;" :src="parLis.src" border="0" alt="经典-许愿" title="经典-许愿"/>
            </div>
          </div>
          <div class="jewel_paging">
            <div class="f1" style="float:left"></div>
            <a href="javascript:void(0);" rel="1" class="img_selected" ><img class="detail_img" border="0" src="http://www.roseonly.com.cn/upload/products/14798703045675230_1.png" data-imgpath="http://www.roseonly.com.cn/upload/products/14798703045675230.png"/></a>
            <a href="javascript:void(0);" rel="2"  ><img class="detail_img" border="0" src="http://www.roseonly.com.cn/upload/products/14713310643957096_1.png" data-imgpath="http://www.roseonly.com.cn/upload/products/14713310643957096.png"/></a>
            <a href="javascript:void(0);" rel="3"  ><img class="detail_img" border="0" src="http://www.roseonly.com.cn/upload/products/14713310644496086_1.png" data-imgpath="http://www.roseonly.com.cn/upload/products/14713310644496086.png"/></a>
            <a href="javascript:void(0);" rel="4"  ><img class="detail_img" border="0" src="http://www.roseonly.com.cn/upload/products/14798703047227717_1.png" data-imgpath="http://www.roseonly.com.cn/upload/products/14798703047227717.png"/></a>
            <div class="fr"></div>
          </div>
        </div>
        <!--轮播图 end-->

        <div class="details_num1_right" v-if="true">
          <div class="right_tit">{{parLis.p1}}</div>
          <div class="right_xxc">{{parLis.p2}}</div>
          <div class="right_pay"><span>价格 :</span>
            {{parLis.pr}}
          </div>
          <!--产品筛选-->
          <div class="right_select">
            <span class="right_font_tit">颜色：</span>
            <div class="p-choose choose-color ">
              <img class="select_color selected detail_img" src="http://www.roseonly.com.cn/upload/products/14798703045675230_2.png"  data-attrid="202" title="许愿"/>
            </div>
          </div>
          <div style="display:none;"><input type="hidden" id="txt_fromtype" value="0" /></div>
          <!--产品筛选 end-->
          <div class="right_select">
            <span class="right_font_tit">数量：</span>
            <input type="text" value="1" class="right_number" maxlength="2" v-model="num" />
            <div class="right_u_d">
              <a href="javascript:void(0);" class="right_up" @click="up"></a>
              <a href="javascript:void(0);" class="right_down" @click="down"></a>
            </div>
            <div class="clear"></div>
          </div>

          <a href="javascript:void(0);" class="button_bar1 unsold" name='for99clickToBuy' @click="gobycar">前往购物车</a>
          <a href="javascript:void(0);" class="button_bar2 unsold"  name='for99clickToCar' @click="check">加入购物车</a>
          <a href="javascript:void(0);" class="button_bar1" id="soldText" style="display:none"></a>

           <!--Baidu Button END-->
          <div class="clear"></div>
          <div class="fwcn_txt">服务承诺：官方正品&nbsp;&nbsp;&nbsp;免邮配送&nbsp;&nbsp;&nbsp;同城速递</div>
        </div>

        <!-- 添加组合 -->
        <div class="clear"></div>
        <div id="groups" class="danpin1"></div>

        <!-- 产品参数 -->
        <div class="div_details xq_description">
          <h1>产品参数</h1>
          <div class="xq_description_left">
            <p><b>适用场景：</b>求婚、纪念日</p>
            <p><b>适用对象：</b>女朋友</p>
            <p><b>适用节日：</b>情人节、520表白日、七夕节</p>							</div>
          <div class="xq_description_left">
            <p><b>鲜花朵数：</b>19支</p>				<p><b>颜色分类：</b>许愿</p>				<p><b>产品规格：</b>81*21*13cm</p>																			</div>
        </div>
        <!--产品参数end-->
        <div class="clear"></div>
        <div><img src="http://www.roseonly.com.cn/assets/roseonly/images/xq_08.png" /></div>
        <!--详情图文信息-->


        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712107974851.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712108687253.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712109154942.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712109608829.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712110187426.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712111103146.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712111564507.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712112131386.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>
        <div class="div_details1">
          <div class="details_img"><img src="http://www.roseonly.com.cn/upload/products/15111712112761545.jpg" alt="经典-许愿" title="经典-许愿"/></div>
        </div>


        <div class="wxts"><img src="http://www.roseonly.com.cn/upload/syspic_new/14823775491713298.jpg"></div>
        <!--详情图文信息end-->

        <div class="danpin">
          <div class="hotPic">
            <p class="item_rmtxt">热卖推荐</p>
            <div class="num">
              <li class="cur">1</li>
              <li>2</li>
            </div>
            <ul class="pic"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  import axios from 'axios'
  export default {
    data(){
      return{
        parLis:false,
        num:1
      }
    },
    methods:{
      ...mapActions(['actchangeimp']),
      up(){
        this.num++;
      },
      down(){
        if (this.num!=0){
          this.num--;
        }
      },
      gobycar(){
        this.$router.push('/bycar');
      },
      check(){
        if (this.getimp==null){
          alert("您还没登录！");
        }else {
          this.actchangeimp([this.num,this.parLis._id]);

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

            })
            .catch(function (error) {
              console.log(error);
            });

        }

      }
      // actchangeimp()
    },
    computed:{
      ...mapGetters(['getimp','getyhm'])
    },
    mounted(){

      this.parLis=this.$route.params;

      console.log(this.parLis);
    }
  }

</script>
<style>

</style>
