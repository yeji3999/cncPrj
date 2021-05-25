<template>
<div class="opsituation" :style="{background:stateColor}">
<p id = "opsituationTitle">Running Status</p>
<p id="opsituationState">{{op}}</p>
</div>
</template>

<script>
export default {
  name: 'opsituation',
  sockets: {
    isWork: function(work) {
      if (work == "start") {
        this.op = "가동";
        // this.stateColor = "#C0D8FF";
        this.stateColor = "#465942";

      }
      else {
        this.op = "비가동";
        // this.stateColor = "#E02F44";
        this.stateColor = "#C4162A";

      }
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
    margin-top: 10px;
    font-weight: bold;
    color: white;
}

</style>
