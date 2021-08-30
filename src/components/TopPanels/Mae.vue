<template>
<div class="Loss1s" :style="{background:lossStateColor}">
  <span id = "loss1sTitle">MAE(s)</span>
  <p id="loss1sVal" :style="{color:lossTxtColor}">{{loss}}</p>
</div>
</template>

<script>
var dTime = 0
var aTime = 0
export default {
  name: 'Loss1s',
  sockets: {
    realtimeLoss: function(res) {
      let today = new Date();
      dTime = today.getTime();
      // console.log(res)
      if (res.includes('n')) {
        this.loss = "-"
      } else {
        this.loss = parseFloat(res).toFixed(4)
      }
      setTimeout(() => {
        let today = new Date();
        let cTime = today.getTime();
        if (cTime - dTime >= 3000) {
          this.loss = '-';
        }
      }, 3000);
    },
    alert: function(){
      this.anomalyAlarm();
    }
  },
    data(){
    return {
      loss: "-",
      lossStateColor:"#3F6164",
      lossTxtColor:"#ffffff"
    }
  },
    methods:{
     anomalyAlarm () {
      this.stateMessage = false;
      var today = new Date();
      aTime = today.getTime();
      this.lossTxtColor = "#ffffff"
      setTimeout(() => {
        // this.lossStateColor = "#ffffff";
        this.lossTxtColor = "#ff0500"
      }, 300);
      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime >= 2000) {
          this.lossTxtColor = "#ffffff"
          this.stateMessage = true;
          this.$store.dispatch('callAnomaly', { anomalyState: this.stateMessage })
          }
      }, 2000);
      this.$store.dispatch('callAnomaly', { anomalyState: this.stateMessage }) 
    },
    closeMae(){
      this.$emit("closeMae",3)
    }
  },
}
</script>
<style>

#loss1sTitle{
  font-weight: bold;
  color: #c7d0d9;
  font-size: 14px;
  position: relative;
  left: 10px
}
.Loss1s{
  /* height: 100%; */
  color : #c7d0d9;
  text-align: center;
  margin-top: 20px; 
}
#loss1sVal{
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
  color: white;
}
</style>