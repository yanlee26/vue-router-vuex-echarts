<template>
  <div class="main">
    <div v-for="i in option.length" :class="['vue-echarts','a'+i]">
    	
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'echartsComponent',
    props:['option']
}
</script>

<style lang="scss" >

@import "../assets/charts";

</style>