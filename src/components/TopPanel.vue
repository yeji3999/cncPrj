<template>
<div class="TopPanel">
    <div id="panel" :style="{display:panelView}">
    <div id="opsituation"><Opsituation></Opsituation></div>
    <div id="anomalyData"><AnomalyData></AnomalyData></div> 
    <div id="loss1s"><Loss1s></Loss1s></div>
    <div id="product"><Product></Product></div>
    <div id="cycleTime"><CycleTime></CycleTime></div>
    </div>
</div>    
</template>

<script>
import Loss1s from './TopPanels/Loss1s.vue'
import Opsituation from './TopPanels/Opsituation.vue'
import Product from './TopPanels/Product.vue'
import CycleTime from './TopPanels/CycleTime.vue'
import AnomalyData from './TopPanels/AnomalyData.vue'

export default {
  name: 'TopPanel',
    components: {
        Loss1s,
        Opsituation,
        Product,
        CycleTime,
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
#loss1s, #opsituation, #product, #cycleTime, #anomalyData{
    display: inline-block;
    width:20%;
    text-align: center;
    height: 100%;
    background: #141619;
    margin: 5px 0px;
    margin-left: 15px;   
}
#opsituation{
    margin-left: 0px;
}
#cycleTime{
    float: right;
}
#panel{
    justify-content: center;
    display: flex;
}
#topPanelBtn{
    padding: 12px;
    display: flex;
    background: #141619;
    justify-content: flex-end;
    cursor: pointer;
}

#topPanelTitle{
    position: relative;
    top: 38px;
    left: 20px;
    font-size: 23px;
    font-weight: bold;
}
#topPanelclose,#topPanelopen{
    padding-right: 10px;
    border:none;
    color: white;
    opacity: 0.8;
    background:transparent;
    position: relative;
    cursor: pointer;
}
</style>