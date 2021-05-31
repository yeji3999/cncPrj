<template>
<div class="anomalyData" :style="{background:stateColor}">  
<p id = "anomalyTitle">Anomaly Detection</p>
<!-- <div id="circle"></div> -->
<!-- <span id="anomalyState" :style="{color:stateTxt}">{{anomalyState}}</span> -->
<p id="anomalyState" :style="{color:stateTxt}">{{anomalyState}}</p>
<!-- <div id="alertBg" :style="{display:alertView}"></div> -->
</div>
</template>

<script>

var aTime = 0;
export default {

  name: 'anomalyData',
  sockets: {
    alert: function(){
      this.anomalyAlarm();
    },
    anomalyDetection: function(res) {
      this.anomalyState = res;
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
      var today = new Date();
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
        var today = new Date();
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
    }
  },
}
</script>

<style>
.anomalyData{
  height: 100px;
  color : #c7d0d9;
}
#anomalyTitle{
  margin:0px;
  line-height: 28px;
  font-weight: bold;
}
#anomalyState{
  font-size: 38px;
  margin-top: 10px;
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
