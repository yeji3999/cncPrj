<template>
  <div class="Main">
    <div id="chartArea">
      <RealtimeChart message="iframeSource"></RealtimeChart>
      <LossChart message="iframeSource"></LossChart>
      <PredicChart message="iframeSource"></PredicChart>
      </div>
  </div>
</template>

<script>
import RealtimeChart from './RealtimeChart.vue'//컴포넌트를 임포트
import LossChart from './LossChart.vue'//컴포넌트를 임포트
import PredicChart from './PredicChart.vue'//컴포넌트를 임포트


export default {
  name: 'Main',
    components: {
   RealtimeChart,
   LossChart,
   PredicChart
  }
}
</script>

<style>
  .Main {
    background-color: #262D35;
      position: relative;
      height: 100%;
      box-sizing: border-box;
      margin-top: 15px;
      width: 100%
    }
    #chartArea{
      width: 100%;
      display: inline-block;
    }
</style>