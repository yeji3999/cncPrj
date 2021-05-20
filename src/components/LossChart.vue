<template>
  <div class="lossChart">
    <div id="alertBg"></div>
    <iframe id="losschart" v-bind:src="iframeSource" width="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
var aTime = 0;
export default {
  name: 'LossChart',
  // props:['newMsg'],
    sockets: {

  },
  methods:{
    alarmBtn () {
      this.stateMessage = false;
      var today = new Date();
      aTime = today.getTime();
      document.getElementById("alertBg").style.display = "block";
      this.anomalyData = "이상 데이터";
      this.stateColor = "#E02F44";

      setTimeout(() => {
        document.getElementById("alertBg").style.display = "none";
      }, 300);
      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime > 3000) {
          this.anomalyData = "";
          this.stateMessage = true;
          this.$store.dispatch('callMutation', { newMsg: this.stateMessage })
          }
      }, 3000);
      this.$store.dispatch('callMutation', { newMsg: this.stateMessage }) 
    }
  },
    data(){
    return {
      iframeSource:"http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&from=now-1m&to=now&panelId=8",
      losschartView: "block",
      marginBottom: "20",
      anomalyData:"",
      anomalyColor:"#E02F44",
      alertBgH : "304",
      aletBgT: "320"
    }
  }
}
</script>

<style scoped>
#losschart{
  height: 180px;
}
h2{
  margin-top: 0px;
}
.lossChart{
  background: #141619;
  padding: 15px 20px 15px 20px;
  margin-top: 0px;
}
#losschartclose, #losschartopen{
  color: white;
  opacity: 0.8;
  background:transparent;
  cursor: pointer;
  border:none;
  line-height: 30px;
  position: relative;
  float: right;
}
#anomaly{
  display: inline-block;
  font-size: 30px
}
  #alertBg{
  width: 100%;
  position:absolute;
  /* top: 0px;
  left: 0px; */
  background: #E02F44;
  opacity: 0.5;
  z-index: 999999999999;
  display: none;
  right: 0px;
  bottom: 0px;
  /* margin-bottom: -380; */
  /* height: 480px; */

  }
</style>
