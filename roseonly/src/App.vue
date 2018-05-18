<template>
  <div id="app">
    <Vheader></Vheader>

    <div class="logo-container">
      <a href="javascript:void(0);" class="logo_nbtn">
        <img title="roseonly官网" alt="roseonly官网" src="http://www.roseonly.com.cn/upload/syspic_new/14871272268992899.jpg" />
      </a>
    </div>
    <Vnav></Vnav>
    <router-view></router-view>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
  import '../node_modules/vue-swipe/dist/vue-swipe.css'

  import Vheader from './components/Vheader'
  import Vfooter from './components/Vfooter'
  import Vnav from './components/Vnav'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      Vheader,Vfooter,Vnav
    }
  }
</script>

<style>

</style>
