<template>
  <div class="anomalyData" :style="{background:stateColor}">
    <span id = "anomalyTitle">Anomaly Detection</span>
    <p id="anomalyState" :style="{color:stateTxt}">{{anomalyState}}</p>
  </div>
</template>

<script>

var socketComparisonTime = 0
var colorChangeComparisonTime = 0
export default {

  name: 'anomalyData',
  sockets: {
    alert: function(){
      this.anomalyAlarm();
    },
    anomalyDetection: function(res) {
      let today = new Date();
      socketComparisonTime = today.getTime();
      if(res=="정상"){
        this.anomalyState = "Nomal"
      }else if(res=="비정상"){
        this.anomalyState = "Abnormal"
      }
      setTimeout(() => {
        let today = new Date();
        let socketCurrentTime = today.getTime();
        if (socketCurrentTime - socketComparisonTime >= 3000) {
          this.anomalyState = '-';
        }
      }, 3000);
    }
  },
  data: () => ({
      anomalyState:"-",
      stateColor:"#3F6164",
      stateTxt: "#ffffff"
  }),
  
  methods:{
    anomalyAlarm () {
      this.stateMessage = false;
      let today = new Date();
      colorChangeComparisonTime = today.getTime();
      this.stateTxt = "#ffffff"
      setTimeout(() => {
        this.stateTxt = "#ff0500"
      }, 300);
      setTimeout(() => {
        let today = new Date();
        let colorChangeCurrentTime = today.getTime();
        if (colorChangeCurrentTime - colorChangeComparisonTime >= 2000) {
          this.stateTxt = "#ffffff"
          this.stateMessage = true;
          this.$store.dispatch('callAnomaly', { anomalyState: this.stateMessage })
          }
      }, 2000);
      this.$store.dispatch('callAnomaly', { anomalyState: this.stateMessage }) 
    },
    // closeAnomal(){
    //   this.$emit("closeAnomal",4)
    // }
  },
}
</script>

<style>
.anomalyData{
  /* height: 100%; */
  color : #c7d0d9;
  text-align: center;
  margin-top: 17px; 
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
