<template>
<div class="CycleTime">
    <p id = "cycleTimeTitle">평균 CT </p>
    <p id="cycleVal" :style="{color:cycleTimeValColor}">{{cycleTimeVal}}</p>
    <div id="avgCT">
      <p id="avgCTtitle">최근 CT 리스트</p>
      <p id="avgCTVal">{{ctAvgVal}}</p>
    </div>
</div>
</template>

<script>

export default {
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setMeanProcessTime');
    this.$socket.emit('setLast5ProcessTime');
  },
  sockets: {
    processMeanTime: function(miliTime) {
      let avgTime = this.numToMS(miliTime);
      this.cycleTimeVal = avgTime;
    },
    CTHistory: function(history) {
      this.ctAvgVal = history
    }
  },
  data(){
      return {
      cycleTimeVal:"-",
      cycleTimeValColor:"#C0D8FF",
      ctAvgVal : "-"  
    }
  },
  methods:{
    numToMS: function(miliTime) {
      let sec = miliTime/1000;
      let min = sec // 60;
      sec = sec % 60;
      let avgTime = '';
      if (min > 0) {
        avgTime = min + '분';
      }
      if (sec > 0 ) {
        avgTime = ' ' + parseInt(sec) + '초';
      }
      return avgTime;
    }
  }
}
</script>
<style>
.CycleTime{
    height: 94px;
    color : #c7d0d9;
}
#cycleTimeTitle{
    margin:0px;
    line-height: 28px;
}
#cycleVal{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}
#avgCT{
  z-index: 999;
  background: #343B43;
  height: 150px;
  width: 100%;
  position: relative;
  /* bottom: 5px; */
  opacity: 0.8;
  display: none;
}
#avgCTtitle{
  color:white;
  font-weight: bold;
}
#cycleVal:hover + #avgCT{
  display: inline-block;
}
#avgCTVal{
  margin-top: 5px;
  white-space: pre-line;
}

</style>
