<template>
  <div class="Product">
    <p id = "productTitle">총 생산량 <!-- <button @click="productEvt" id="productEvt">Click</button> --> </p>
    <p id="totalproductVal" :style="{color:productValColor}">{{productVal}}</p>
      <div id="ProductTime">
      <p id="totalProductTitle">최근 5개 생산 리스트</p>
      <p id="uptimeVal">{{uptime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  created() { 
    this.$socket.emit('setCount');
    this.$socket.emit('setLast5History');
  },
  sockets: {
    count: function(cnt) {
      this.uptime = ""
      this.productVal = cnt;

      this.$socket.emit('setLast5History');
    },
    processHistory: function(history) {
      this.uptime = history
    },
  },
  data(){
    return {
      productVal:"-",
      startlist:"",
      endlist:"",
      uptime:"",
      productValColor:"#C0D8FF"
    }
  },
  methods:{
    productEvt(){
      this.productVal = 'result'
    },
    setUptime() {
      for (var i =0; i<this.endlist.length; i++) {
        this.uptime = this.uptime + this.startlist[i] + " ~ " + this.endlist[i] + "\n"
      }
    }
  }
}
</script>
<style>
.Product{
    height: 94px;
    color : #c7d0d9;
}
#productTitle{
    margin:0px;
    line-height: 28px;
    font-weight: bold;
}
#totalproductVal{
    font-size: 33px;
    font-weight: bold;
    color: #C0D8FF;
}
#productDate{
  font-size: 14px
}
#ProductTime{
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
#totalProductTitle{
  margin-top: 5px;
  color:white;
  font-weight: bold;
}
#totalproductVal:hover + #ProductTime{
  display: inline-block;
}
#uptimeVal{
  margin-top: 5px;
  white-space: pre-line;
  font-weight: bold;
}

</style>
