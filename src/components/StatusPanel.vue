<template>
<div class="TopPanel">
    <div id="panel">
    <div id="opsituation"><Opsituation></Opsituation></div>
    <div id="product"><Product></Product></div>
    <div id="cycleTime"><CycleTime></CycleTime></div> 
    </div>
</div>    
</template>

<script>
import Opsituation from './TopPanels/Opsituation.vue'
import Product from './TopPanels/Product.vue'
import CycleTime from './TopPanels/CycleTime.vue'

export default {
  name: 'TopPanel',
    components: {
        Opsituation,
        Product,
        CycleTime
  }
}
</script>

<style scope>
#opsituation, #product, #cycleTime{
    display: inline-block;
    width:32%;
    text-align: center;
    height: 100%;
    background: #181b1f;
    margin: 5px 0px;
    margin-left: 15px;  
    border-radius: 4px; 
    border: 1px solid rgba(201, 209, 217, 0.08);
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