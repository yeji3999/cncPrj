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
    width:50%;
    text-align: center;
    height: 100%;
    background: #181b1f;
    margin: 5px 0px;
    margin-left: 10px; 
    border-radius: 4px;  
    border: 1px solid rgba(201, 209, 217, 0.08);
    overflow: hidden;
    min-width: 200px;
}
#anomalyData{
    margin-right: 5px;
}
#panel{
    justify-content: center;
    display: flex;
    overflow: hidden;
}
</style>