<template>
  <div>
    <div class="Product">
    <p id = "productTitle">총 생산량 <button @click="addTodo" id="productEvt">Click</button> </p>
    <p id="totalproductVal" :style="{color:productValColor}">{{productVal}}</p>
  </div>

      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header" >
          생산 현황
          <i class="fa fa-times closeModalBtn" @click="showModal = false" style="float:right"></i>
        </h3>
        <div slot="body">
          <p>ss</p>
          <v-data-table
          :headers="headers"
          :items="day"
          class="elevation-1"
          ></v-data-table>

          <p>sdfsds</p>
          <v-data-table
          :headers="headers"
          :items="weekly"
          class="elevation-2"
          ></v-data-table>

          <v-data-table
          :headers="headers"
          :items="monthly"
          class="elevation-3"
          ></v-data-table>

        </div>
      </Modal>
    </div>
</template>

<script>
import Modal from "./Modal";
export default {
  components: {
    Modal,
  },
  created(){
    this.$socket.emit('counts')
    this.$socket.emit('setCount')
  },
  sockets: {
    count: function(cnt) {
      console.log('ccccccccccccccccccccccccnt', cnt)
      this.uptime = ""
      this.productVal = cnt;
    },
    days: function(d) {
      console.log(d)
      this.day = d;
    },
    weeklys: function(w) {
      console.log(w)
      this.weekly = w;
    },
    monthlys: function(m) {
      console.log(m)
      this.monthly = m;
    }
  },
  data: function () {
    return {
      productVal:"-",
      startlist:"",
      endlist:"",
      uptime:"",
      productValColor:"#C0D8FF",
      doItem: "",
      showModal: false,
      headers: [
          {
            text: 'Date',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          { text: 'Count', value: 'count' },
      ],
      day: '',
      weekly: '',
      monthly: ''
    }
    
  },
  methods: {
    productEvt(){
      this.productVal = 'result'
    },
    setUptime() {
      for (var i =0; i<this.endlist.length; i++) {
        this.uptime = this.uptime + this.startlist[i] + " ~ " + this.endlist[i] + "\n"
      }
    },
    addTodo() {
      if (this.doItem) {
        // this.$emit('이벤트이름', 인자1, 인자2);
        this.$emit("addOne", this.doItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.doItem = "";
    },
  },
};
</script>

<style>
.md-field,
.md-focused,
.md-input,
.md-textarea,
label {
  background: #365fd9 !important;
  border-style: none;
  border-radius: 5px;
  margin: 0 0 5px 0 !important;
  color: #fff !important;
  -webkit-text-fill-color: #ddd !important;
}
.addBtn {
  vertical-align: middle;
  margin-top: 12px;
  font-size: 24px;
  cursor: pointer;
}
.closeModalBtn {
  color: #42b983;
}
.v-data-table__wrapper{
  height:150px;
  margin: 15px;
}
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
    margin-top: 5px;
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
.Product:hover  #ProductTime{
  display: inline-block;
}
#uptimeVal{
  margin-top: 5px;
  white-space: pre-line;
  font-weight: bold;
}
</style>