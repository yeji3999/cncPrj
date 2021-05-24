<template>
  <div class="lossChart">
    <div id="alertBg" :style="{display:alertView}"></div>
    <p id="anomalyTxt">{{anomalyData}}</p>
    <p class="setChartInterval">{{sel}}초</p>
    <iframe id="losschart" v-bind:src="iframeSource" width="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
var aTime = 0;
export default {
  name: 'LossChart',
  sockets: {
    alert: function(){
      this.alarmBtn();
    }
  },
  created(){
    this.iframeSource = this.iframeSource + this.$store.state.interval
  },
  updated(){
    this.iframeSource = this.iframeSource.slice(0,91) + this.$store.state.interval
  },
  computed:{
    sel(){
      var selData = this.$store.state.interval
      selData = selData.slice(0,-1)
      return selData
    },
  },
  methods:{
    alarmBtn () {
      this.stateMessage = false;
      var today = new Date();
      aTime = today.getTime();
      this.alertView = "block";
      this.anomalyData = "이상 데이터 감지";
      this.stateColor = "#E02F44";
      // predic.change method()
      setTimeout(() => {
        this.alertView = "none";
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
      iframeSource:"http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&from=now-1m&to=now&panelId=8&refresh=",
      losschartView: "block",
      marginBottom: "20",
      anomalyData:"",
      anomalyColor:"#E02F44",
      alertView : "none"
    }
  }
}
</script>

<style scoped>
.setChartInterval{
  font-size: 18px;
  margin-left: 15px;
  margin-bottom:15px;
  color: rgba(255,255,255,0.7);
  font-weight: bold;
}
#losschart{
  height: 200px;
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
  height: 100%;
  position:absolute;
  background: #E02F44;
  opacity: 0.5;
  z-index: 999999999999;
  right: 0px;
  bottom: 0px;
}
#anomalyTxt{
  font-weight: bold;
  color: #E02F44;
  font-size: 20px
}
</style>
