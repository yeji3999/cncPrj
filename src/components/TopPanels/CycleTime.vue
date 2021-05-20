<template>
<div class="CycleTime"  v-on:mousemove="positionSet" v-on:mouseout="CTOut" v-on:mouseover="CTOver">
>>>>>>> sprint1
    <p id = "cycleTimeTitle">평균 CT </p>
    <p id="cycleTimeval" :style="{color:cycleTimeValColor}">{{cycleTimeVal}}</p>
    <div id="avgCT" :style="{display:avgCTView , left:avgCTLeft +'px', top:avgCTTop+'px' }">
      <p id="avgCTtitle">Cycle Time</p>
      <p id="avgCTVal">{{ctAvgVal}}</p>
    </div>
</div>
</template>

<script>

export default {
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setMeanProcessTime');
  },
  sockets: {
 processMeanTime: function(miliTime) {
      let sec = miliTime/1000;
      let min = sec // 60;
      sec = sec % 60;
      let avgTime = '';
      if (min > 0) {
        avgTime = min + '분';
      }
      if (sec > 0 ) {
        avgTime = ' ' + sec + '초';
      }
      this.cycleTimeVal = avgTime;
    }
  },
  data(){
      return {
      cycleTimeVal:"-",
      cycleTimeValColor:"#C0D8FF",
      ctAvgVal : "hello",
      avgCTView: "none",
      avgCTLeft: "0",
      avgCTTop: "0"
      
    }
  },
  methods: {
    positionSet(event) {
        // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
        console.log(event.clientX); // x coordinate
        console.log(event.clientY); // y coordinate
        this.avgCTLeft = event.clientX - 1600
        this.avgCTTop = event.clientY -200
        // his.avgCTView = "inline-block"t

        // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
        // console.log(event.pageX); 
        // console.log(event.pagey); 
        

        // screenX/Y gives the coordinates relative to the screen in device pixels.
        // console.log(event.screenX);
        // console.log(event.screenY);
    },
    CTOut(){
      this.avgCTView = "none"
    },
    CTOver(){
      this.avgCTView = "inline-block"
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
#cycleTimeval{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}
#avgCT{
  z-index: 999;
  background: #343B43;
  height: 150px;
  width: 60%;
  position: relative;
  /* bottom: 5px; */
  opacity: 0.8;
  display: none;
}
#avgCTtitle{
  color:white;
  font-weight: bold;
}
/* #cycleTimeval:hover + #avgCT{
  display: inline-block;
} */
#avgCTVal{
  margin-top: 5px;
}

</style>
