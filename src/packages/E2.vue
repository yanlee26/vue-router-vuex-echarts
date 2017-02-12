<template>
  <div>
    <echarts-component :option='option'></echarts-component>
  </div>
</template>
<script>
import echarts from 'echarts'
import echartsComponent from '../components/Echarts'

export default {
    name:'e2',
    data() {
        var option=[];
        return {
          msg1:'hello',
            chart: null,
            option:this.$store.state.e2,
        }
    },
    components:{
      echartsComponent
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
