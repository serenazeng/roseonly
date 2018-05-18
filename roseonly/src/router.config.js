import Vhome from './components/Vhome';
import Vlogin from './components/Vlogin';
import Vreg from './components/Vreg';
import Vgoods from './components/Vgoods';
import Vdetails from './components/Vdetails';
import Vbycar from './components/Vbycar';

const routes = [
  {path:'/home',name:'home',component:Vhome},
  {path:'/login',name:'login',component:Vlogin},
  {path:'/reg',name:'reg',component:Vreg},
  {path:'/goods',name:'goods',component:Vgoods},
  {path:'/details',name:'details',component:Vdetails},
  {path:'/bycar',name:'details',component:Vbycar},
  {path:'/',redirect:'./home'},
  {path:'*',redirect:'./home'}
]

export default {
  routes
}
