<template>
  <div class="Product">
    <p id = "productTitle">총 생산량 <!-- <button @click="productEvt" id="productEvt">Click</button> --> </p>
    <p id="productVal" :style="{color:productValColor}">{{productVal}}</p>
      <div id="ProductTime">
      <p id="totalProductTitle">최신 생산 리스트</p>
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
      this.productVal = cnt;
      this.$socket.emit('setCountStart');
    },
    start: function(s) {
      this.uptime = this.$moment(s).format('YYYY/MM/DD HH:mm:ss');
    },
    end: function(last) {
      this.uptime = this.uptime + ' ~ ' + this.$moment(last).format('YYYY/MM/DD HH:mm:ss');
    },
  },
    data(){
    return {
      productVal:"",
      uptime:"",
      productValColor:"#C0D8FF"
    }
  },
  methods:{
    productEvt(){
      this.productVal = 'result'
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
#productVal{
    font-size: 33px;
    /* margin-top: 5px; */
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
  /* bottom: 5px; */
  opacity: 0.8;
  display: none;
}
#totalProductTitle{
  color:white;
  font-weight: bold;
}
#productVal:hover + #ProductTime{
  display: inline-block;
}
#uptimeVal{
  margin-top: 5px;
}

</style>
