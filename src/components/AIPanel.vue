<template>
<div class="AIPanel">
    <div id="panel">
    <div id="loss1s"><MAE></MAE></div>
    <div id="anomalyData"><AnomalyData></AnomalyData></div> 
</div>
</div>    
</template>

<script>
import MAE from './TopPanels/Mae.vue'
import AnomalyData from './TopPanels/AnomalyData.vue'

export default {
  name: 'AIPanel',
    components: {
        MAE,
        AnomalyData
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
    border: 2px solid rgba(201, 209, 217, 0.08);
    overflow: hidden;
    min-width: 220px;
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