<template>
<div class="TopPanel">
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
  name: 'TopPanel',
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