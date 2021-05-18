<template>
<div class="Loss1m">
    <p id = "loss1mTitle">오차율 / 1분<!-- <button @click="productEvt" id="productEvt">Click</button> --></p>
    <p id="loss1mVal" :style="{color:loss1mValColor}">{{loss1mVal}}</p>
    </div>
</template>

<script>
export default {
  name: 'Loss10s',
  created() { 
    this.$socket.emit('set1mLoss')
    this.set1mLoss()
  },
  sockets: {
    loss1m: function(loss) {
      if (typeof(loss) == 'number') {
        this.loss1mVal = loss.toFixed(3)
      }
      else {
        this.loss1mVal = '-'
      }
    }
  },
  data(){
    return {
      loss1mVal:"-",
      loss1mValColor:"#C0D8FF"
    }
  },

  methods:{
    set1mLoss(){
      setInterval(() => {
        this.$socket.emit('set1mLoss');
      },60000);
    }
  }
}
</script>
<style>
#loss1mTitle{
    margin:0px;
    line-height: 28px;
}
.Loss1m{
    height: 94px;
    color : #c7d0d9;
}
#loss1mVal{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}
</style>
