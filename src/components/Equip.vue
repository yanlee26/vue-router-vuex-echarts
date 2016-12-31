<template>
    <div>  
    <aside>
      <nav>           
        <ul>
          <li><router-link to='/equip'>主页</router-link></li>
          <li><router-link to='/equip/e1'>使用效益</router-link></li>
          <li><router-link to='/equip/e2'>成本效益</router-link></li>
        </ul>               
      </nav>
    </aside>
    <article>
       <keep-alive>
        <transition name="slide-fade">       
            <router-view></router-view>       
        </transition> 
      </keep-alive>       
    </article>
  </div>
</template>

<script type="text/javascript">
export default {
    name:'equip',
    data(){
    return{
    }
  }
            
}
</script>
<style type="text/css">

</style>
