<template>
  <div class="main">
    <div v-for="i in option.length" :class="['vue-echarts','a'+i]"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'m3',
    data() {
        var option=[];
        return {
            chart: null,
            option:this.$store.state.m3,
        }
    },
    methods:{
      eRender(){
            for(let i=0,len=this.option.length;i<len;i++){
            this.chart = echarts.init(document.querySelector(`.a${i+1}`));
            this.chart.setOption(this.option[i]);
        }
      }
    },
    mounted() {
        this.$nextTick(
            this.eRender
      )
    }
}
</script>

<style lang="scss" >

@import "../assets/charts";

</style>