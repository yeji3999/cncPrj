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

      <v-expansion-panel>
        <v-expansion-panel-header>모니터링 대시보드</v-expansion-panel-header>
        <v-expansion-panel-content>
          <TopPanel></TopPanel>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>실시간 그래프 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <RealtimeChart></RealtimeChart>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>오차율 그래프</v-expansion-panel-header>
        <v-expansion-panel-content>
          <LossChart></LossChart>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel> 
        <v-expansion-panel-header>예측 그래프</v-expansion-panel-header>
        <v-expansion-panel-content>
          <PredicChart></PredicChart>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>
  </div>
</template>

<script>
import RealtimeChart from '../RealtimeChart.vue'//컴포넌트를 임포트
import LossChart from '../LossChart.vue'//컴포넌트를 임포트
import PredicChart from '../PredicChart.vue'//컴포넌트를 임포트
import TopPanel from '../TopPanel.vue'

export default {
  components: {
    TopPanel,
    RealtimeChart,
    LossChart,
    PredicChart
  },
  data: () => ({
    panel: [0,1,2,3,4],
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
    #headerTitle{
      display:inline; 
      position:relative; 
      top:-10px; 
      /* margin-left:75px;  */
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
