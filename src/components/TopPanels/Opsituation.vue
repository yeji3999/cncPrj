<template>
<div class="opsituation" :style="{background:stateColor}">
<span id = "opsituationTitle">Running Status</span>
<p id="opsituationState">{{op}}</p>
</div>
</template>

<script>
var socketComparisonTime = 0;
export default {
  name: 'opsituation',
  created() {
    this.$socket.emit('setWork');
  },
  sockets: {
    isWork: function() {
      let today = new Date();
      socketComparisonTime = today.getTime();
      this.op = "Running";
      this.stateColor = "#465942";

      setTimeout(() => {
        let today = new Date();
        let socketCurrentTime = today.getTime();
        if (socketCurrentTime - socketComparisonTime >= 3000) {
        this.op = "Stop";
        this.stateColor = "#C4162A";
          }
      }, 3500);
    }
  },
  data: () => ({
      op:"Stop",
      stateColor:"#C4162A"
  })
}
</script>

<style>
.opsituation{
  margin-top: 17px; 
  color : #c7d0d9;
  text-align: center;
}
#opsituationTitle{
  font-weight: bold;
  color: #c7d0d9;
  font-size: 14px;
  position: relative;
  left: 10px
}
#opsituationState{
  font-size: 28px;
  line-height: 60px;
  font-weight: bold;
  color: white;
}

</style>
