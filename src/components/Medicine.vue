<template>
  <div>  
    <aside>
      <nav>           
        <ul>
          <li><router-link to='/medicine'>主页</router-link></li>
          <li><router-link to='/medicine/m1'>药品管理</router-link></li>
          <li><router-link to='/medicine/m2'>合理用药</router-link></li>
          <li><router-link to='/medicine/m3'>处方用药</router-link></li>
          <li><router-link to='/medicine/m4'>药费管理</router-link></li>
          <li><router-link to='/medicine/m5'>药物不良反应</router-link></li>
          <li><router-link to='/medicine/m6'>ABC分类法</router-link></li>
        </ul>               
      </nav>
    </aside>
    <article>
      <keep-alive>
        <transition name="slide-fade">       
            <router-view ></router-view>       
        </transition> 
      </keep-alive>     
    </article>
  </div>
</template>

<script>
export default {
    name:'medicine',
}
</script>
<style lang="scss">

</style>
