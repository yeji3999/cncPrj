<template>
  <div>
    <div class="Breadcrumbs">
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt">{{headerLine}}</span> <span class="headerTitleTxt" style="border:none">{{headerOP}}</span></div>    
  </div>
    <v-expansion-panels
      v-model="panel"
      multiple
      dark
    >
      <v-expansion-panel style="max-width:60%; padding:5px">
        <v-expansion-panel-header>가동 현황</v-expansion-panel-header>
        <v-expansion-panel-content>
          <StatusPanel></StatusPanel>
        </v-expansion-panel-content>
      </v-expansion-panel>

        <v-expansion-panel id="aiPanel" style="max-width:40%; padding:5px" :style="{background:Aibackground}">
        <v-expansion-panel-header>AI 판정</v-expansion-panel-header>
        <v-expansion-panel-content>
          <AIPanel></AIPanel>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-content>
          <ChartArea></ChartArea>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>
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
  sockets: {
      alert: function(){
      this.Aibackground = "red"
    }
  },
  data: () => ({
    panel: [0,1,2],
    disabled: false,
    readonly: false,
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
</style>
