<template>
<div class="opsituation" :style="{background:stateColor}">
<p id = "opsituationTitle">Running Status</p>
<p id="opsituationState">{{op}}</p>
</div>
</template>

<script>
var aTime = 0;
export default {
  name: 'opsituation',
  created() {
    this.$socket.emit('setWork');
  },
  sockets: {
    isWork: function() {
      var today = new Date();
      aTime = today.getTime();
      this.op = "가동";
      this.stateColor = "#465942";

      setTimeout(() => {
        var today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime >= 3000) {
        this.op = "비가동";
        this.stateColor = "#C4162A";
          }
      }, 3000);
    }
  },
  data(){
    return {
      op:"비가동",
      stateColor:"#C4162A"
    }
  }
}
</script>

<style>
.opsituation{
    height: 100px;
    color : #c7d0d9;
}
#opsituationTitle{
    margin:0px;
    line-height: 28px;
    font-weight: bold;
}
#opsituationState{
    font-size: 38px;
    /* margin-top: 10px; */
    line-height: 70px;
    font-weight: bold;
    color: white;
}

</style>
