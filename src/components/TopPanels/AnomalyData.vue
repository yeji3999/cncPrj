<template>
<div class="anomalyData">  
<p id = "anomalyTitle">Anomaly Detection</p>
<p id="anomalyState" :style="{color:stateColor}">{{anomalyState}}</p>
<div id="alertBg" :style="{display:alertView}"></div>
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
      anomalyState:"정상",
      stateColor:"#7acacd",
      alertView:"none"
    }
  },

  methods:{
    anomalyAlarm () {
      this.stateMessage = false;
      var today = new Date();
      aTime = today.getTime();
      this.alertView = "block";
      this.anomalyState = "이상";
      this.stateColor = "#E02F44";
      setTimeout(() => {
        this.alertView = "none";
      }, 300);
      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime > 3000) {
          this.anomalyState = "정상";
          this.stateColor = "#7acacd";
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
  height: 94px;
  color : #c7d0d9;
}
#anomalyTitle{
  margin:0px;
  line-height: 28px;
  font-weight: bold;
}
#anomalyState{
  font-size: 33px;
  margin-top: 5px;
  font-weight: bold;
  color: #C0D8FF;
}
/* #alertBg{
  height: 92px;
  position: relative;
  top: -76px;
  background: red;
  opacity: 0.8;
} */

</style>
