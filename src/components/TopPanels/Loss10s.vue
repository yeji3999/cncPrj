<template>
<div class="Loss10s">
    <p id = "loss10sTitle">오차율 / 10초</p>
    <p id="loss10sVal" :style="{color:loss10sValColor}">{{loss}}</p>
    <div id="upLoss10s">
      <p id="upLoss10sTitle">최신 오차율 리스트</p>
      <p id="uplossVal">{{uploss}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Loss10s',
  created() { 
    this.$socket.emit('set10sLoss')
    this.set10sLoss()
  },
  sockets: {
    loss10s: function(loss) {
      if (typeof(loss) == 'number') {
        this.loss = loss.toFixed(3)
      }
      else {
        this.loss = '-'
      }
    }
  },
    data(){
    return {
      loss: "-",
      loss10sValColor:"#C0D8FF",
      uploss:"hello"      
    }
  },
  methods:{
    set10sLoss(){
      setInterval(() => {
        this.$socket.emit('set10sLoss');
      },10000);
    }
  }
}
</script>
<style>
#loss10sTitle{
    margin:0px;
    line-height: 28px;
}
.Loss10s{
    height: 94px;
    color : #c7d0d9;
}
#loss10sVal{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}
#upLoss10s{
  z-index: 999;
  background: #343B43;
  height: 150px;
  width: 100%;
  position: relative;
  /* bottom: 5px; */
  opacity: 0.8;
  display: none;
}
#upLoss10sTitle{
  color:white;
  font-weight: bold;
}
#loss10sVal:hover + #upLoss10s{
  display: inline-block;
}
#uplossVal{
  margin-top: 5px;
}
</style>