<template>
<div class="TopPanel">
    <!-- <div id="top">
        <sapn id="topPanelTitle">모니터링 대시보드</sapn>
        <div id="topPanelBtn">
        <button id="topPanelclose" @click="topPanelclose" :style="{display:closeBtn}"><i class="fa fa-minus"></i></button>
        <button id="topPanelopen" @click="topPanelopen" :style="{display:openBtn}"><i class="fa fa-plus"></i></button>
        </div>
    </div> -->
    <div id="panel" :style="{display:panelView}">
    <div id="opsituation"><Opsituation></Opsituation></div>
    <div id="loss10s"><Loss10s></Loss10s></div>
    <!-- <div id="loss1m"><Loss1m></Loss1m></div> -->
    <div id="product"><Product></Product></div>
    <div id="cycleTime"><CycleTime></CycleTime></div> 
    </div>
</div>    
</template>

<script>
// import Loss1m from './TopPanels/Loss1m.vue'
import Loss10s from './TopPanels/Loss10s.vue'
import Opsituation from './TopPanels/Opsituation.vue'
import Product from './TopPanels/Product.vue'
import CycleTime from './TopPanels/CycleTime.vue'

export default {
  name: 'TopPanel',
    components: {
        // Loss1m,
        Loss10s,
        Opsituation,
        Product,
        CycleTime
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

#loss10s, #opsituation, #product, #cycleTime{
    display: inline-block;
    width:25%;
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