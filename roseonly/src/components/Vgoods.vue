<template>
  <div class="bycar">
    <div class="container">
      <div class="series" style="background: url(http://www.roseonly.com.cn/upload/menupic/15006089373645457.jpg) no-repeat scroll 0 0;background-size:100% 100%;">
      </div>
      <div class="rose_select">
        <a href="javascript:void(0);" id="initpage" class="sort sort_add">综合</a>
        <a href="javascript:void(0);" id="salenum" class="sort">销量</a>
        <a href="javascript:void(0);" id="newest" class="sort">最新</a>
        <a href="javascript:void(0);" id="pay" data-flag="1" class="sort1">价格</a>

        <input class="rose_select_input sortprice" value="" id="minprice" min="0" placeholder="¥" type="number" />
        <span class="rose_select_span">—</span>
        <input class="rose_select_input sortprice" value="" id="maxprice" min="0" placeholder="¥" type="number" />
      </div>


      <!--面包屑，筛选结束-->

      <ul class="ul" id="productList">
        <li v-for="(li,index) of lis" @click="godetails(index)" v-if="true">
          <img :src="li.src" alt="">
          <p>{{li.p1}}</p>
          <p>{{li.p2}}</p>
          <p>{{li.pr}}</p>
        </li>

      </ul>
      <div id="mydiv"></div>

    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import {mapActions} from 'vuex';
  export default {
    data (){
      return{
        lis:false

      }
    },
    created(){
      var _this = this;
      axios.get('http://localhost:3000/getgoods')
        .then(function (response) {
          console.log(response);
          _this.lis = response.data;
          _this.actall(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods:{
      ...mapActions(['actall']),
      godetails(index){
        this.$router.push({name:'details',params:this.lis[index]});
      }
    }
  }
</script>
<style>
#app #productList li{width: 310px;height: 415px;}
#app #productList li img{width: 266px;height: 266px;}
  .te{width: 500px;height: 500px;background-color: red;}
</style>
