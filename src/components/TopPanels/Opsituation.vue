<template>
<div class="opsituation" :style="{background:stateColor}">
<!-- <button style="float: right; margin-right: 10px; margin-top: 3.5px; color:#c7d0d9;" @click="closeOP"><i class="fa fa-times"></i></button> -->
<span id = "opsituationTitle">Running Status</span>
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
  },
  methods:{
    closeOP(){
      this.$emit("closeOP",0)
    }
  }
}
</script>

<style>
.opsituation{
  height: 100%;
  color : #c7d0d9;
  text-align: center;
}
#opsituationTitle{
  font-weight: bold;
  color: #c7d0d9;
  font-size: 14px;
}
#opsituationState{
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
  color: white;
}

</style>
