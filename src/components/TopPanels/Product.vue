<template>
  <div>
    <div class="Product">
      <div style="text-align:center">
      <button style="float: right; margin-right: 10px; margin-top: 3.5px; color:#c7d0d9;" @click="closePR"><i class="fa fa-times"></i></button>
      <span id = "productTitle">Total Production</span>
      </div>
      <p id="totalproductVal">{{productVal}} <button @click="modalPr" id="productEvt"><img class="infoImg" src="../../assets/info.png"></button></p> 
  </div>

</div>
</template>

<script>
export default {
  created(){
    this.$socket.emit('setCount')
  },
  sockets: {
    count: function(cnt) {
      this.productVal = cnt;
    },  
  },
  data: function () {
    return {
      productVal:"-",
    }  
  },
  methods: {
    productEvt(){
      this.productVal = 'result'
    },
    modalPr() {
      this.$emit("modalPr","true")
    },
    closePR(){
      this.$emit("closePR",1)
    }
  },
};
</script>

<style>

.Product{
  height: 100%;
  text-align: center;
}
#productTitle{
  margin-left: 20px;
  line-height: 28px;
  font-weight: bold;
  color: #c7d0d9;

}
#totalproductVal{
  font-size: 2.3em;
  /* margin-top: 16px; */
  line-height: 70px;
  font-weight: bold;
  color: white;
}
.theme--light.v-tabs-items{
  background: #1E1E1E;
}
.v-data-table{
  margin-top: 0px
}
.v-tabs-items{
  /* height: 300px;  */
  /* overflow-y: auto; */
    height: 300px;
}
.v-window__container{
  position: relative;
  bottom: 50px;

}
/* .v-tabs-items::-webkit-scrollbar {
  background-color: #1E1E1E;
  width: 8px;
}
.v-tabs-items::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 10px;
}
.v-tabs-items::-webkit-scrollbar-track {
  background-color: #1E1E1E;
} */
.v-tab{
  border-top-right-radius: 200px 300px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  background:#282c2a;
}
.v-tab--active{
  background: #2E8B57;
  color: white;
}
.infoImg{
  width: 16px;
  position: relative;
  bottom: 5px;
}
</style>