<template>
<div class="opsituation" :style="{background:stateColor}">
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
      let today = new Date();
      aTime = today.getTime();
      this.op = "Running";
      this.stateColor = "#465942";

      setTimeout(() => {
        let today = new Date();
        let bTime = today.getTime();
        if (bTime - aTime >= 3000) {
        this.op = "Stop";
        this.stateColor = "#C4162A";
          }
      }, 3500);
    }
  },
  data(){
    return {
      op:"Stop",
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
