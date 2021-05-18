<template>
  <div class="lossChart">
    <div id="alertBg" :style="{height:alertBgH + 'px', top: aletBgT+'px'}"></div>
    <h2 :style=" { marginBottom: marginBottom + 'px'}">오차율 그래프
      <p id="anomaly" :style="{color:anomalyColor}">{{anomalyData}}</p>
    <button id="losschartclose" @click="losschartclose" :style="{display:closeBtn}"><i class="fa fa-minus"></i></button>
    <button id="losschartopen" @click="losschartopen" :style="{display:openBtn}"><i class="fa fa-plus"></i></button></h2>
    <!-- <button @click="alarmBtn" class="alramBtn">Click</button> -->
        <iframe id="losschart" :style="{display:losschartView}" v-bind:src="iframeSource" width="100%" frameborder="0"></iframe>
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
    losschartclose(){
      this.losschartView = "none";
      this.closeBtn = "none";
      this.openBtn = "block";
      this.marginBottom = "0";
      this.alertBgH = "63";
      this.aletBgT = "80";
      document.getElementById("realchart").style.height = "440px";
    },
    losschartopen(){
      this.losschartView = "block";
      this.closeBtn = "block";
      this.openBtn = "none";
      this.marginBottom = "20";
      this.alertBgH = "524";
      this.aletBgT = "80";
      document.getElementById("realchart").style.height = "220px";
    },
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
      closeBtn: "block",
      openBtn: "none",
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
  height: 220px;
}
h2{
  margin-top: 0px;
}
.lossChart{
  background: #141619;
  padding: 15px 20px 15px 20px;
  margin-top:18px
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
