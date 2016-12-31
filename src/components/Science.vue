<template>
    <div>  
    <aside>
      <nav>           
        <ul>
          <li><router-link to='/science'>主页</router-link></li>
          <li><router-link to='/science/sc1'>科研产出</router-link></li>
          <li><router-link to='/science/sc2'>科研投入</router-link></li>          
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
    name:'science',
    data () {
        return {
            msg:'hello navs'
        }
    }
}
</script>

<style lang="scss">

</style>
