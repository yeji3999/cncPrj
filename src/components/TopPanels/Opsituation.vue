<template>
<div class="opsituation">  
<p id = "opsituationTitle">가동 현황</p>
<p id="opsituationState" :style="{color:stateColor}">{{op}}</p>
</div>
</template>

<script>
export default {
  name: 'opsituation',
  sockets: {
    work: function(work) {
      if (work == "start") {
        this.op = "가동";
        this.stateColor = "#C0D8FF";
      }
      else {
        this.op = "비가동";
        this.stateColor = "#E02F44";
      }
    }
  },
  data(){
    return {
      op:"비가동",
      stateColor:"#E02F44"
    }
  }
}
</script>

<style>
.opsituation{
    height: 94px;
    color : #c7d0d9;
}
#opsituationTitle{
    margin:0px;
    line-height: 28px;
}
#opsituationState{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}

</style>
