<template>
  <div>
    <Header></Header>
    <Menu @closeNav="closeNavEvt"></Menu>
    <!-- <Menu @closeNav="closeNavEvt" @menuStepInfo ="menuStepInfoEvt"></Menu> -->
    <div id="content" :style="{padding: mainPpadding}">
    <!-- <div id="content"> -->
      <TopMenu @modalAdmin="modalAdminEvt" @changeLayout="changeLayoutEvt"  ></TopMenu>
    <div class="Breadcrumbs" >
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt">{{headerLine}}</span> <span class="headerTitleTxt" style="border:none">{{headerOP}}</span></div>    
  </div>
  <div style="margin-top:15px">
    <div style="display: flex;">
    <button class="hideShowBtn" :style="{display:hideOpShow}" @click="hideOp = !hideOp; topPaneNum++"> Running Status</button>
    <button class="hideShowBtn" :style="{display:hideTpShow}" @click="hideTp = !hideTp; topPaneNum++"> Total Production</button>
    <button class="hideShowBtn" :style="{display:hideCtShow}" @click="hideCt = !hideCt; topPaneNum++"> Cycle Time</button>
    <button class="hideShowBtn" :style="{display:hideMaeShow}" @click="hideMae = !hideMae; topPaneNum++"> Mae</button>
    <button class="hideShowBtn" :style="{display:hideAnomalyShow}" @click="hideAnomaly = !hideAnomaly; topPaneNum++"> Anomaly Detection</button>
    <!-- <button class="hideChartBtn" :style="{display:hideRealtimeChartShow}" @click="hideRealtimeChart = !hideRealtimeChart">RealTime Load and Ai Predict Chart</button>
    <button class="hideChartBtn" :style="{display:hideMaeChartShow}" @click="hideMaeChart = !hideMaeChart">Mae Chart</button> -->
    </div>
    <div class="grid-widget">
    <smart-widget-grid :layout="layout" :resizable="false" :draggable="false">
      <smart-widget slot="0" simple title="Running Status">

      <div ref="topDragElement" class="topDragElements">
                        <!-- <splitpanes> -->

          <div id="opWidget" :style="{background:stateColor, width:topPaneWidth}" v-if="!hideOp">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('op')"><i class="fa fa-times"></i></button>
              <Opsituation></Opsituation>
            </div>
          </div>
          <div id="prWidget" style="background: #465942;"  v-if="!hideTp" :style="{width:topPaneWidth}">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('tp')"><i class="fa fa-times"></i></button>
              <Product @modalPr="modalPrEvt"></Product>
            </div>
          </div>
          <div id="ctWidget"  style="background: #465942;" v-if="!hideCt" :style="{width:topPaneWidth}">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('ct')"><i class="fa fa-times"></i></button>
              <CycleTime @modalCT="modalCTEvt"></CycleTime>
            </div>
          </div>
          <div id="maeWidget"  style="background: #3F6164;" v-if="!hideMae" :style="{width:topPaneWidth}">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('mae')"><i class="fa fa-times"></i></button>
              <Mae></Mae>
            </div>
          </div>
          <div id="anomalyWidget"  style="background: #3F6164;" v-if="!hideAnomaly" :style="{width:topPaneWidth}">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('anomaly')"><i class="fa fa-times"></i></button>
              <AnomalyData></AnomalyData>
            </div>
          </div>
<!-- </splitpanes> -->
</div>

      </smart-widget>
      <smart-widget slot="1" simple >
      <div ref="leftDragElement" class="topDragElements">
          <pane id="opWidget" :style="{background:stateColor}" v-if="!hideOp">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('op')"><i class="fa fa-times"></i></button>
              <Opsituation></Opsituation>
            </div>
          </pane>
          <pane id="prWidget" style="background: #465942;"  v-if="!hideTp">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('tp')"><i class="fa fa-times"></i></button>
              <Product @modalPr="modalPrEvt"></Product>
            </div>
          </pane>
          <pane id="ctWidget"  style="background: #465942;" v-if="!hideCt">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('ct')"><i class="fa fa-times"></i></button>
              <CycleTime @modalCT="modalCTEvt"></CycleTime>
            </div>
          </pane>
          <pane id="maeWidget"  style="background: #3F6164;" v-if="!hideMae">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('mae')"><i class="fa fa-times"></i></button>
              <Mae></Mae>
            </div>
          </pane>
          <pane id="anomalyWidget"  style="background: #3F6164;" v-if="!hideAnomaly">
            <div class="paneContent">
              <button class="paneCloseBtn" @click="hideEvt('anomaly')"><i class="fa fa-times"></i></button>
              <AnomalyData></AnomalyData>
            </div>
          </pane>
</div>
      </smart-widget>
      <smart-widget slot="2" simple style="height:100%">
        <ProductQuality></ProductQuality>
      </smart-widget>

      <smart-widget slot="5" simple>
        <splitpanes class="default-theme" horizontal>
          <pane id="realTimeWidget" style="background: #111217;" v-if="!hideRealtimeChart">
            <div class="paneContent" style="height:90%">
              <!-- <button class="paneCloseBtn" @click="hideEvt('realtimeChart')"><i class="fa fa-times"></i></button> -->
              <RealTimeChart></RealTimeChart>
            </div>
          </pane>
          <pane style="background: #111217;" v-if="!hideMaeChart">
            <div class="paneContent" style="height:90%">
              <!-- <button class="paneCloseBtn" @click="hideEvt('maeChart')"><i class="fa fa-times"></i></button> -->
              <RealTimeChart></RealTimeChart>
            </div>          
          </pane>
        </splitpanes>

      </smart-widget>

      <smart-widget slot="6" simple id="chartWidget" style="background: #111217;">
        <div class="layout-center">
           <ChartArea :iframeSource="grafanaURL"></ChartArea>
        </div>
      </smart-widget>

      <smart-widget slot="7" simple>
        <splitpanes class="default-theme" >
          <pane id="realTimeWidget" style="background: #111217;" v-if="!hideRealtimeChart">
            <div class="paneContent" style="height:90%">
              <!-- <button class="paneCloseBtn" @click="hideEvt('realtimeChart')"><i class="fa fa-times"></i></button> -->
              <RealTimeChart></RealTimeChart>
            </div>
          </pane>
          <pane style="background: #111217;" v-if="!hideMaeChart">
            <div class="paneContent" style="height:90%">
              <!-- <button class="paneCloseBtn" @click="hideEvt('maeChart')"><i class="fa fa-times"></i></button> -->
              <RealTimeChart></RealTimeChart>
            </div>          
          </pane>
        </splitpanes>
      </smart-widget>
    </smart-widget-grid>
  </div>
  </div>
    <ModalTP v-if="showPRModal"  @modalPr="modalPrEvt"></ModalTP>
    <ModalCT v-if="showCTModal" @modalCT="modalCTEvt"></ModalCT>
    <ModalAdmin  @modalAdmin="modalAdminEvt" :adminPosition="adminPositionValue" :adminDisplay="adminDisplayValue" :closeModelAdmin="closeModelAdminValue"></ModalAdmin>
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
import TopMenu from '../TopMenu.vue'
import ChartArea from '../ChartArea.vue'
import RealTimeChart from '../RealTime.vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import dragula from 'dragula'
import ProductQuality from '../ProductQuality.vue'


var a = true
// var b = true
export default {
  components: {
    Header, Menu, Opsituation,Product,CycleTime,AnomalyData,Mae,ModalTP,ModalCT,ModalAdmin,TopMenu,ProductQuality,ChartArea,RealTimeChart,Splitpanes,Pane
 },
  created() {
    this.$socket.emit('setWork');
  },

  mounted(){ const {topDragElement} = this.$refs; 
  dragula([ topDragElement//어디서 어디로 옮기는지 
])
  },

  beforeUpdate(){
    if(this.hideOp){
      this.hideOpShow = "block"
    }else if(!this.hideOp){
      this.hideOpShow = "none"
    }
    if(this.hideTp){
      this.hideTpShow = "block"
    }else if(!this.hideTp){
      this.hideTpShow = "none"
    }
    if(this.hideCt){
      this.hideCtShow = "block"
    }else if(!this.hideCt){
      this.hideCtShow = "none"
    }
    if(this.hideMae){
      this.hideMaeShow = "block"
    }else if(!this.hideMae){
      this.hideMaeShow = "none"
    }
    if(this.hideAnomaly){
      this.hideAnomalyShow = "block"
    }else if(!this.hideAnomaly){
      this.hideAnomalyShow = "none"
    }
    if(this.hideOp && this.hideTp && this.hideCt && this.hideMae && this.hideAnomaly){
      this.last =  this.layout.shift()
      a=false
     console.log(this.last)
    }else if(a===false){
      a = true
      this.layout.unshift(this.last)
    }
    this.topPaneWidth = "calc(100%/"+this.topPaneNum+")"
  },
  updated(){
  this.$nextTick(function () {
    // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다. 
    // console.log(this.layout)
  })
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
      }, 3500);
    }
  },
  data: () => ({
    topPaneNum: 5,
    topPaneWidth: "calc(100%/5)",
    last :"",
    chartLayout:"",
    hideOp:false,
    hideTp:false,
    hideCt:false,
    hideMae:false,
    hideAnomaly:false,
    hideOpTp:false,
    hideMaeAnomal:false,
    hideRealtimeChart: false,
    hideMaeChart: false,
    hideOpShow: "none",
    hideTpShow: "none",
    hideCtShow: "none",
    hideMaeShow: "none",
    hideAnomalyShow: "none",
    hideRealtimeChartShow: "none",
    hideMaeChartShow: "none",
    headerFac:"Workshop 1",
    headerLine: "Line 1",
    headerOP: "Operation 1",
    stateColor:"#C4162A",
    showPRModal: false,
    showCTModal: false,
    showAdminModal: false,
    close: "none",
    adminPositionValue:"800px",
    closeModelAdminValue: "-30px",
    adminDisplayValue:"none",
    mainPpadding:"80px 30px 30px 230px",
    grafanaURL: "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv",
    layout: [
      { x: 0, y: 0, w: 8, h: 2, i: "0" },
      { x: 8, y: 0, w: 4, h: 5, i: "2" },
      { x: 8, y: 0, w: 4, h: 11, i: "6" },
      { x: 0, y: 0, w: 8, h: 14, i: "5" },
     ]
  }),
    methods: {
      hideEvt(name){
        switch(name){
          case "op":
            this.hideOp = true
            this.topPaneNum--
            break;
          case "tp":
            this.hideTp = true
            this.topPaneNum--
            break;
          case "ct":
            this.hideCt = true
            this.topPaneNum--
            break;
          case "mae":
            this.hideMae = true
            this.topPaneNum--
            break;
          case "anomaly":
            this.hideAnomaly = true
            this.topPaneNum--
            break;
          // case "realtimeChart":
          //   this.hideRealtimeChart = true
          //   break;
          // case "maeChart":
          //   this.hideMaeChart = true
          //   break;
          default:

        }
        
      },
      changeLayoutEvt(num){
        switch(num){
          case 1:
            this.layout = []
            this.layout.push(
              { x: 0, y: 0, w: 8, h: 2, i: "0" },
              { x: 8, y: 0, w: 4, h: 5, i: "2" },
              { x: 8, y: 0, w: 4, h: 11, i: "6" },
              { x: 0, y: 0, w: 8, h: 14, i: "5" },
            );
            this.grafanaURL = "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv";
            break;
          case 2:
            this.layout = []
            this.layout.push(
              { x: 0, y: 0, w: 12, h: 2, i: "0" },
              { x: 0, y: 0, w: 3, h: 6, i: "2" },
              { x: 0, y: 0, w: 12, h: 8, i: "6" },
              { x: 3, y: 0, w: 9, h: 6, i: "7" },
            );
            this.grafanaURL = "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv"
            break;
        case 3:
          this.layout = []
          this.layout.push(    
              { x: 0, y: 0, w: 5, h: 2, i: "0" },
              { x: 0, y: 0, w: 5, h: 6, i: "2" },
              { x: 0, y: 6, w: 12, h: 8, i: "6" },
              { x: 5, y: 0, w: 7, h: 8, i: "5" },
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
          this.adminDisplayValue = "block"
          setTimeout(() => {
          this.adminPositionValue = "0px"
          this.closeModelAdminValue = "600px"
          }, 100);
        }else if(message == "close"){
          this.adminPositionValue = "800px"
          this.closeModelAdminValue = "-30px"
          setTimeout(() => {
          this.adminDisplayValue = "none"
          }, 500);
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

#opWidget, #prWidget, #ctWidget, #maeWidget, #anomalyWidget, #chartWidget, #realTimeWidget{
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
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  background: gray;
}
.paneCloseBtn{
  color: rgb(199, 208, 217);
  position: relative;
  float: right;
  right: 10px;
  bottom: 17px;
}
.paneContent{
  width: 100%;
}
.hideShowBtn{
  border-radius: 5px;
  border: 1px solid rgb(122, 167, 167);
  background: #454545;
  color: rgb(141, 253, 253);
  padding: 7px;
  margin-left: 9px;
  font-weight: 500;
  font-size: 14px;
}
.hideChartBtn{
  border-radius: 5px;
  border: 1px solid rgb(122, 167, 167);
  background: #454545;
  color: rgb(141, 253, 253);
  padding: 7px;
  margin-left: 9px;
  font-weight: 500;
  font-size: 14px;
}
.topDragElements{
  display: flex;
  height: 100%;
}
</style>
