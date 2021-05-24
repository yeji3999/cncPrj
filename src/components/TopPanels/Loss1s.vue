<template>
<div class="Loss1s">
    <p id = "loss1sTitle">loss(s)</p>
    <p id="loss1sVal" :style="{color:loss1sValColor}">{{loss}}</p>
    <!-- <div id="upLoss1s">
      <p id="upLoss1sTitle">최근 5개 오차율 리스트</p>
      <p id="uplossVal">{{lossList}}</p>
      <line-chart></line-chart>
    </div> -->
</div>
</template>

<script>

export default {
  name: 'Loss1s',
  created() {  
    this.$socket.emit('setLoss')
    // this.$socket.emit('setLast5Loss');
  },
  sockets: {
    loss: function(res) {
      if (typeof(res) == 'number') {
        this.loss = res.toFixed(4)
      }
      else {
        this.loss = '-'
      }
    },
    // last5Loss: function(res) {
    //   this.lossList = res
    //   const n = res.length
    //   for(var i=0; i<n; i++){
    //     lossArr.push(res[i].toFixed(4))
    //     this.lossList = lossArr
    //     this.data = lossArr
    //   }
    //   console.log(lossArr)
    // }
  },
    data(){
    return {
      loss: "-",
      loss1sValColor:"#C0D8FF",
      // lossList:"-" 
    }
  }
}
</script>
<style>

#loss1sTitle{
  font-weight: bold;
  margin:0px;
  line-height: 28px;
}
.Loss1s{
  height: 94px;
  color : #c7d0d9;
}
#loss1sVal{
  font-size: 33px;
  margin-top: 5px;
  font-weight: bold;
  color: #C0D8FF;
}
#upLoss1s{
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
#upLoss1sTitle{
  margin-top: 5px;
  color:white;
  font-weight: bold;
}
.Loss1s:hover #upLoss1s{
  display: inline-block;
}
#uplossVal{
  margin-top: 5px;
  white-space: pre-line;
  font-weight: bold;
}
</style>