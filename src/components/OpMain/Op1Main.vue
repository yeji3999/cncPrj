<template>
  <div>
    <div class="Breadcrumbs">
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt">{{headerLine}}</span> <span class="headerTitleTxt" style="border:none">{{headerOP}}</span></div>    
  </div>
  <div id="topPanel">
    <div id="statusArea">
      <div id="statusPTitle" style="color:white"><p class="topPanelTitle">가동 현황</p></div>
      <StatusPanel></StatusPanel>
    </div>
    <div id="aipanelArea">
      <div id="aiPTitle" style="color:white"><p class="topPanelTitle">AI 판정</p></div>
      <AIPanel></AIPanel>
    </div>
  </div>
    <ChartArea></ChartArea>
  </div>
</template>

<script>
import StatusPanel from '../StatusPanel.vue'
import AIPanel from '../AIPanel.vue'
import ChartArea from '../ChartArea.vue'

export default {
  components: {
    StatusPanel,
    ChartArea,
    AIPanel
  },
  data: () => ({
    headerFac:"제 1 공장",
    headerLine: "1 라인",
    headerOP: "공정 1"
    })
  }
</script>

<style scoped>
.v-expansion-panel-header{
  padding-bottom: 8px;
  padding-top: 8px;
  font-size:20px;
  font-weight: bold;
}
.v-expansion-panel-content__wrap{
  padding-bottom: 8px;
}
.v-expansion-panel{
  margin: 10px 0px
}
#statusArea{
  width:62%; 
  display:inline-block; 
  background:#111217;
  padding: 10px;
}
#aipanelArea{
  width:37.5%; 
  display:inline-block; 
  background:#111217; 
  float:right;
  padding: 10px;
}
#headerTitle{
  display:inline; 
  position:relative; 
  top:-10px; 
  font-size: 14px;
  font-weight: normal;
  color: rgba(255,255,255,0.7);
}
.headerTitleTxt{
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px dashed rgba(255,255,255,0.3);
}
.topPanelTitle{
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
}

</style>
