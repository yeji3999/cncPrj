<template>
  <div class="Product">
    <p id = "productTitle">총 생산량 <!-- <button @click="productEvt" id="productEvt">Click</button> --> </p>
    <p id="productVal" :style="{color:productValColor}">{{productVal}}</p>
    <p id="productDate" :style="{color:productValColor}">{{uptime}}</p>
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

</style>
