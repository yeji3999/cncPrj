<template>
<div class="AIPanel">
    <div id="panel" :style="{display:panelView}">
    <div id="loss1s"><Loss1s></Loss1s></div>
    <div id="anomalyData"><AnomalyData></AnomalyData></div> 
</div>
</div>    
</template>

<script>
import Loss1s from './TopPanels/Loss1s.vue'
import AnomalyData from './TopPanels/AnomalyData.vue'

export default {
  name: 'AIPanel',
    components: {
        Loss1s,
        AnomalyData
  },
  data(){
      return{
          panelView:"flex",
          openBtn:"none",
          closeBtn:"display"
      }
  }
}
</script>

<style scope>
#loss1s, #anomalyData{
    display: inline-block;
    width:45%;
    text-align: center;
    height: 100%;
    background: #141619;
    margin: 5px 0px;
    margin-left: 15px;   
}
#panel{
    justify-content: center;
    display: flex;
}
</style>