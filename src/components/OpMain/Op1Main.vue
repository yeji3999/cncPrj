<template>
  <div>
    <Header></Header>
    <Menu @closeNav="closeNavEvt"></Menu>
    <div id="content" :style="{padding: mainPpadding}">
      <HeaderMenu @modalAdmin="modalAdminEvt" @changeLayout="changeLayoutEvt"  ></HeaderMenu>
    <div class="Breadcrumbs" >
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt">{{headerLine}}</span> <span class="headerTitleTxt" style="border:none">{{headerOP}}</span></div>    
  </div>
  
  <div style="margin-top:10px">
    <div class="grid-widget">
    <smart-widget-grid :layout="layout" :resizable="false" :draggable="false">
      <smart-widget slot="0" simple title="Running Status" id="opWidget" :style="{background:stateColor}"  >
        <div class="layout-center">
          <Opsituation></Opsituation>
        </div>
      </smart-widget>
      <smart-widget slot="1" simple title="Total Production" id="prWidget" style="background: #465942;">
        <div class="layout-center">
          <Product @modalPr="modalPrEvt"></Product>
        </div>
      </smart-widget>
      <smart-widget slot="2" simple title="Full Screen" id="ctWidget"  style="background: #465942;">
        <div class="layout-center">
          <CycleTime @modalCT="modalCTEvt"></CycleTime>
        </div>
      </smart-widget>
      <smart-widget slot="3" simple title="Full Screen" id="maeWidget" style="background: #3F6164;">
        <div class="layout-center">
          <Mae></Mae>
        </div>
      </smart-widget>
      <smart-widget slot="4" simple title="Full Screen" id="anomalWidget" style="background: #3F6164;">
        <div class="layout-center">
           <AnomalyData></AnomalyData>
        </div>
      </smart-widget>
      <smart-widget slot="5" simple title="Full Screen" id="realTimeWidget" style="background: #111217;">
        <div class="layout-center">
           <RealTimeChart></RealTimeChart>
        </div>
      </smart-widget>
      <smart-widget slot="6" simple title="Full Screen" id="chartWidget" style="background: #111217;">
        <div class="layout-center">
           <ChartArea :iframeSource="grafanaURL"></ChartArea>
        </div>
      </smart-widget>
      <smart-widget slot="7" simple title="Full Screen" id="realTimeWidget" style="background: #111217;">
        <div class="layout-center">
           <RealTimeChart></RealTimeChart>
        </div>
      </smart-widget>
    </smart-widget-grid>
  </div>

  </div>
    <ModalTP v-if="showPRModal"  @modalPr="modalPrEvt"></ModalTP>
    <ModalCT v-if="showCTModal" @modalCT="modalCTEvt"></ModalCT>
    <ModalAdmin v-if="showAdminModal" @modalAdmin="modalAdminEvt" ></ModalAdmin>

    
   </div>
  </div>
</template>

<script>
var aTime = 0;
import Header from '../Header.vue'
import Menu from '../Menu.vue'
import Opsituation from '../TopPanels/Opsituation.vue'
import Product from '../TopPanels/Product.vue'
import CycleTime from '../TopPanels/CycleTime.vue'
import Mae from '../TopPanels/Mae.vue'
import AnomalyData from '../TopPanels/AnomalyData.vue'
import ModalTP from "../TopPanels/ProductionHistory.vue"
import ModalCT from "../TopPanels/CtHistory.vue"
import ModalAdmin from "../TopPanels/ModalAdmin.vue"
import HeaderMenu from '../HeaderMenu.vue'
import ChartArea from '../ChartArea.vue'
import RealTimeChart from '../RealTime.vue'

export default {
  components: {
    Header, Menu, Opsituation,Product,CycleTime,AnomalyData,Mae,ModalTP,ModalCT,ModalAdmin,HeaderMenu,ChartArea,RealTimeChart
  },
  created() {
    this.$socket.emit('setWork');
  },
  sockets: {
    isWork: function() {
      var today = new Date();
      aTime = today.getTime();
      this.stateColor = "#465942";

      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime >= 3000) {
        this.stateColor = "#C4162A";
          }
      }, 3000);
    }
  },
  data: () => ({
    headerFac:"제 1 공장",
    headerLine: "1 라인",
    headerOP: "공정 1",
    stateColor:"#C4162A",
    showPRModal: false,
    showCTModal: false,
    showAdminModal: false,
    close: "none",
    adminPositionValue:"600px",
    display: "none",
    mainPpadding:"80px 30px 30px 230px",
    grafanaURL: "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv",
  layout: [
      { x: 0, y: 0, w: 1, h: 2, i: "0" },
      { x: 1, y: 0, w: 1, h: 2, i: "1" },
      { x: 2, y: 0, w: 2, h: 2, i: "2" },
      { x: 4, y: 0, w: 2, h: 2, i: "3" },
      { x: 6, y: 0, w: 2, h: 2, i: "4" },
      { x: 0, y: 0, w: 8, h: 13, i: "5" },
      { x: 8, y: 0, w: 4, h: 15, i: "6" },
     ]
  }),
    methods: {

      changeLayoutEvt(num){
        switch(num){
          case 1:
            this.layout = []
            this.layout.push(
      { x: 0, y: 0, w: 1, h: 2, i: "0" },
      { x: 1, y: 0, w: 1, h: 2, i: "1" },
      { x: 2, y: 0, w: 2, h: 2, i: "2" },
      { x: 4, y: 0, w: 2, h: 2, i: "3" },
      { x: 6, y: 0, w: 2, h: 2, i: "4" },
      { x: 0, y: 0, w: 8, h: 13, i: "5" },
      { x: 8, y: 0, w: 4, h: 15, i: "6" },
            );
            this.grafanaURL = "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv";
            break;
          case 2:
            this.layout = []
            this.layout.push(
              { x: 0, y: 0, w: 2, h: 2, i: "0" },
              { x: 2, y: 0, w: 2, h: 2, i: "1" },
              { x: 4, y: 0, w: 2, h: 2, i: "2" },
              { x: 6, y: 0, w: 3, h: 2, i: "3" },
              { x: 9, y: 0, w: 3, h: 2, i: "4" },
              { x: 0, y: 0, w: 12, h: 6, i: "5" },
              { x: 0, y: 0, w: 12, h: 7, i: "6" },
            );
            this.grafanaURL = "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv"
            break;
        case 3:
          this.layout = []
          this.layout.push(    
              { x: 0, y: 0, w: 1, h: 2, i: "0" },
              { x: 1, y: 0, w: 1, h: 2, i: "1" },
              { x: 0, y: 0, w: 2, h: 2, i: "2" },
              { x: 0, y: 0, w: 1, h: 2, i: "3" },
              { x: 1, y: 0, w: 1, h: 2, i: "4" },
              { x: 2, y: 0, w: 10, h: 6, i: "5" },
              { x: 0, y: 0, w: 12, h: 9, i: "6" }
            );
            this.grafanaURL = "http://9.8.100.156:3000/d/JQjsnRm7k/for-height?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv"
            break;
          }
        },
      
      closeNavEvt: function(message) {
      if(message===true){
        this.mainPpadding = "80px 30px 30px 40px";
      }
      else{
        this.mainPpadding = "80px 30px 30px 230px";
      }
    },
      modalPrEvt: function(message){
        if(message == "true"){
          this.showPRModal = true;
        }else if (message == "false"){
        this.showPRModal = false;
        }
      },
      modalCTEvt: function(message){
        if(message == "true"){
          this.showCTModal = true;
        }else if (message == "false"){
          this.showCTModal = false;
        }
      },
      modalAdminEvt: function(message){
        if(message == "open"){
          this.adminPositionValue = "0px"
          this.showAdminModal = true
        }else if(message == "close"){
          this.adminPositionValue = "600px"
          this.showAdminModal = false
        }
      },
    } 
  }
</script>

<style scoped>

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
  font-size:16px;
  border-right: 1px dashed rgba(255,255,255,0.3);
  font-weight: 500;
}
.Breadcrumbs{
  line-height: 30px;
  margin-left: 7px;
  position: relative;
  top: 8px;
  width: 500px;
}
.widget-body__content{
  padding: 0px;
}
#opWidget, #prWidget, #ctWidget, #maeWidget, #anomalWidget, #chartWidget, #realTimeWidget{
  border: 1px solid #454545;
  overflow: hidden;
}
.layout-center{
  height: 100%;
}
.vue-grid-item, .vue-resizable{
  overflow: hidden;
}
.layoutChange{
  color: white;
  background: slategray;
  width: 60px;
  margin-right: 10px;
  font-weight: 600;
  border-radius: 5px;
  height: 30px;
}
</style>
