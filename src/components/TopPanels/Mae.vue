<template>
<div class="Loss1s" :style="{background:lossStateColor}">
    <span id = "loss1sTitle">MAE(s)</span>
    <!-- <button style="float: right; margin-right: 10px; margin-top: 3.5px; color:#c7d0d9;" @click="closeMae"><i class="fa fa-times"></i></button> -->

  <p id="loss1sVal" :style="{color:lossTxtColor}">{{loss}}</p>
</div>
</template>

<script>
var aTime = 0;
export default {
  name: 'Loss1s',
  sockets: {
    realtimeLoss: function(res) {
      // console.log(res)
      if (res.includes('n')) {
        this.loss = "-"
      } else {
        this.loss = parseFloat(res).toFixed(4)
      }
      //if (typeof(res) == 'string') {
      //  this.loss = res.toFixed(4)
     // }
     // else {
     //   this.loss = '-'
     // }
    },
    alert: function(){
      this.anomalyAlarm();
    }
  },
    data(){
    return {
      loss: "-",
      // loss1sValColor:"#7acacd",
      lossStateColor:"#3F6164",
      lossTxtColor:"#ffffff"
      // lossList:"-" 
    }
  },
    methods:{
     anomalyAlarm () {
      this.stateMessage = false;
      var today = new Date();
      aTime = today.getTime();
      // this.alertView = "block";
      //this.anomalyState = "이상";
      // this.lossStateColor = "#C4162A";
      this.lossTxtColor = "#ffffff"
      setTimeout(() => {
        // this.lossStateColor = "#ffffff";
        this.lossTxtColor = "#ff0500"
      }, 300);
      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime >= 2000) {
          //this.anomalyState = "정상";
          // this.lossStateColor = "#3F6164";
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
}
.Loss1s{
  height: 100%;
  color : #c7d0d9;
  text-align: center;
}
#loss1sVal{
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
  color: white;
}
</style>