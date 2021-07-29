<template>
<div class="anomalyData" :style="{background:stateColor}">
<!-- <button style="float: right; margin-right: 10px; margin-top: 3.5px; color:#c7d0d9;" @click="closeAnomal"><i class="fa fa-times"></i></button>  -->
<span id = "anomalyTitle">Anomaly Detection</span>
<!-- <div id="circle"></div> -->
<!-- <span id="anomalyState" :style="{color:stateTxt}">{{anomalyState}}</span> -->
<p id="anomalyState" :style="{color:stateTxt}">{{anomalyState}}</p>
<!-- <div id="alertBg" :style="{display:alertView}"></div> -->
</div>
</template>

<script>

var dTime = 0
var aTime = 0
export default {

  name: 'anomalyData',
  sockets: {
    alert: function(){
      this.anomalyAlarm();
    },
    anomalyDetection: function(res) {
      let today = new Date();
      dTime = today.getTime();
      if(res=="정상"){
        this.anomalyState = "Nomal"
      }else if(res=="비정상"){
        this.anomalyState = "Abnormal"
      }
      // this.anomalyState = res;
      setTimeout(() => {
        let today = new Date();
        let cTime = today.getTime();
        if (cTime - dTime >= 3000) {
          this.anomalyState = '-';
        }
      }, 3000);
    }
  },
  data(){
    return {
      anomalyState:"-",
      stateColor:"#3F6164",
      stateTxt: "#ffffff"
      // alertView:"none"
    }
  },

  methods:{
    anomalyAlarm () {
      this.stateMessage = false;
      let today = new Date();
      aTime = today.getTime();
      // this.alertView = "block";
      //this.anomalyState = "이상";
      // this.stateColor = "#C4162A";
      this.stateTxt = "#ffffff"
      setTimeout(() => {
        // this.stateColor = "#ffffff";
        this.stateTxt = "#ff0500"
      }, 300);
      setTimeout(() => {
        let today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime >= 2000) {
          //this.anomalyState = "정상";
          // this.stateColor = "#3F6164";
          this.stateTxt = "#ffffff"
          this.stateMessage = true;
          this.$store.dispatch('callAnomaly', { anomalyState: this.stateMessage })
          }
      }, 2000);
      this.$store.dispatch('callAnomaly', { anomalyState: this.stateMessage }) 
    },
    closeAnomal(){
      this.$emit("closeAnomal",4)
    }
  },
}
</script>

<style>
.anomalyData{
  /* height: 100%; */
  color : #c7d0d9;
  text-align: center;
}
#anomalyTitle{
  font-weight: bold;
  color: #c7d0d9;
  font-size: 14px;
  position: relative;
  left: 10px
}
#anomalyState{
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
  color: white;
}
/* #alertBg{
  height: 92px;
  position: relative;
  top: -76px;
  background: red;
  opacity: 0.8;
} */
#circle{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2E8B57;
  display: inline-block;
  position: relative;
  top: 10px;
  right: 10px;
  box-shadow: 1px 1px 3px 1px #0e4e2b;
}
</style>
