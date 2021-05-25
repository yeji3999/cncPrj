<template>
<div class="anomalyData" :style="{background:stateColor}">  
<p id = "anomalyTitle">Anomaly Detection</p>
<p id="anomalyState">{{anomalyState}}</p>
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
    }
  },
  data(){
    return {
      anomalyState:"-",
      stateColor:"#3F6164",
      // alertView:"none"
    }
  },

  methods:{
    anomalyAlarm () {
      this.stateMessage = false;
      var today = new Date();
      aTime = today.getTime();
      // this.alertView = "block";
      this.anomalyState = "이상";
      this.stateColor = "#C4162A";
      // setTimeout(() => {
      //   this.alertView = "none";
      // }, 300);
      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime > 3000) {
          this.anomalyState = "정상";
          this.stateColor = "#3F6164";
          this.stateMessage = true;
          this.$store.dispatch('callMutation', { newMsg: this.stateMessage })
          }
      }, 3000);
      this.$store.dispatch('callMutation', { newMsg: this.stateMessage }) 
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

</style>
