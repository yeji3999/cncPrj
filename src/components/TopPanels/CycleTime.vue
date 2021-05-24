<template>
<div class="CycleTime">
    <p id = "cycleTimeTitle">평균 CT </p>
    <p id="cycleVal" :style="{color:cycleTimeValColor}">{{cycleTimeVal}}</p>
    <div id="avgCT">
      <p id="avgCTtitle">최근 5개 CT 리스트</p>
      <p class="avgCTVal">{{ctAvgVal}}</p>
    </div>
</div>
</template>

<script>

export default {
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setMeanCycleTime');
  },
  sockets: {
    cycleTimeMean: function(miliTime) {
      let avgTime = this.numToMS(miliTime);
      this.cycleTimeVal = avgTime;
    },
    cycleTimeHistory: function(history) {
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
      let min = sec / 60;
      sec = sec % 60;
      let avgTime = '';
      if (min > 0) {
        avgTime = parseInt(min) + '분';
      }
      if (sec > 0 ) {
        avgTime = avgTime + ' ' + parseInt(sec) + '초';
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
    font-weight: bold;
}
#cycleVal{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}
#avgCT{
  z-index: 999;
  background: black;
  height: auto;
  min-height: 150px;
  width: 100%;
  position: relative;
  opacity: 0.8;
  display: none;
  padding-bottom:5px;

}
#avgCTtitle{
  margin-top: 5px;
  color:white;
  font-weight: bold;
}
.CycleTime:hover  #avgCT{
  display: inline-block;
}
.avgCTVal{
  margin-top: 5px;
  white-space: pre-line;
  font-weight: bold;
}

</style>
