<template>
  <div class="main">{{a}}
    <div v-for="i in option.length" :class="['vue-echarts','a'+i]"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'m1',
    data() {
        var option=[];
        return {
            chart: null,
            option:this.$store.state.m1,
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
    created() {
        this.$nextTick(
            this.eRender
      )
    }
}
</script>

<style lang="scss" >

@import "../assets/charts";

</style>