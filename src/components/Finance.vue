<template>
 <div>  
    <aside>
      <nav>           
        <ul>
          <li><router-link to='/finance'>主页</router-link></li>
          <li><router-link to='/finance/f1'>收入支出</router-link></li>
          <li><router-link to='/finance/f2'>成本管理</router-link></li>              
          <li><router-link to='/finance/f5'>盈利能力</router-link></li>
          <li><router-link to='/finance/f3'>营运能力</router-link></li>
          <li><router-link to='/finance/f6'>偿债能力</router-link></li>
          <li><router-link to='/finance/f6'>发展能力</router-link></li>
          <li><router-link to='/finance/f6'>其它</router-link></li>
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

<script>
export default {
  name: 'finance',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
