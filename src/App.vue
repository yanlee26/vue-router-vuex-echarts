<template>
  <div id="app">     
      <header> 
        <h1>医疗指标体系</h1>
         <div class="app">
          <span @click="link" class="btn">{{text}}</span>
          <transition name="move">
            <span class="menu" v-show="show">
                <a href="https://www.facebook.com/yan.frank.96" class="inner inner-1 icon-facebook"></a>
                <a href="https://github.com/yanlee26/vue-router-vuex-echarts" class="inner inner-2 icon-github"></a>
                <a href="https://twitter.com/15026474591Yan" class="inner inner-3 icon-twitter"></a>
            </span>
          </transition>
    </div>
        <nav>           
          <ul>
            <li><router-link to='/'>主页</router-link></li>
            <li>
              <router-link to='/service'>服务</router-link >
            </li>
            <li><router-link to='/equip'>设备</router-link>
            </li>
            <li><router-link to='/science'>科研</router-link></li>
            <li><router-link to='/medicine'>药品</router-link></li>
            <li><router-link to='/finance'>财务</router-link></li>
            <li><router-link to='/outpatient'>门诊</router-link></li>
          </ul>               
        </nav>  
       </header>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
  name:'app',
  data () {
            return {
                show: false
            };
        },
  methods: {
      link () {
          this.show = !this.show;
      }
  },
  computed: {
      text () {
          return !this.show ? 'click' : 'close';
      }
  }
}
</script >

<style lang="scss">
@import "./assets/main";
@import "./assets/icon.css";
</style>

