<template>
  <div class="Product">
    <p id = "productTitle">총 생산량 <!-- <button @click="productEvt" id="productEvt">Click</button> --> </p>
    <p id="totalproductVal" :style="{color:productValColor}">{{productVal}}</p>
      <div id="ProductTime">
      <p id="totalProductTitle">최근 생산 리스트</p>
      <p id="uptimeVal">{{uptime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  created() { 
    this.$socket.emit('setCount');
  },
  sockets: {
    count: function(cnt) {
      this.uptime = ""
      this.productVal = cnt;
      this.$socket.emit('countStartList')
    },
    start: function(s) {
      this.startlist = s
      this.$socket.emit('countEndList')
    },
    end: function(last) {
      this.endlist = last
      this.setUptime()
      console.log(last)
    },
  },
  data(){
    return {
      productVal:"",
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
  background: #343B43;
  height: 150px;
  width: 100%;
  position: relative;
  opacity: 0.8;
  display: none;
}
#totalProductTitle{
  color:white;
  font-weight: bold;
}
#totalproductVal:hover + #ProductTime{
  display: inline-block;
}
#uptimeVal{
  margin-top: 5px;
  white-space: pre-line;
}

</style>
