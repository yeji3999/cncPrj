<template>
  <div>
    <div class="Product"  @keyup.esc="showModal = false">
    <span id = "productTitle">Total Production </span>
    <div style="float: right; margin-right: 10px; margin-top: 3.5px;">
      <button @click="addTodo" id="productEvt"><img src="../../assets/info.png" style="width:16px; z-index: 8;"></button>
    </div>
    <p id="totalproductVal">{{productVal}}</p>
  </div>

      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          생산 현황
          <i class="fa fa-times closeModalBtn" @click="showModal = false" style="float:right; font-size:23px"></i>
        </h3>
        <div slot="body">
          <p class="productMdTitle">일 누적 생산량</p>
          <v-data-table
          :headers="headers"
          :items="day"
          class="elevation-1"
          :items-per-page="2"
          dark
          ></v-data-table>

          <p class="productMdTitle">주간 누적 생산량</p>
          <v-data-table
          :headers="headers"
          :items="weekly"
          :items-per-page="2"
          class="elevation-2"
          dark
          ></v-data-table>

          <p class="productMdTitle">월간 누적 생산량</p>
          <v-data-table
          :headers="headers"
          :items="monthly"
          :items-per-page="2"
          class="elevation-3"
          dark
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
      this.uptime = ""
      this.productVal = cnt;
    },
    days: function(d) {
      console.log(d)
      this.day = d;
    },
    weeklys: function(w) {
      this.weekly = w;
    },
    monthlys: function(m) {
      this.monthly = m;
    }
  },
  data: function () {
    return {
      productVal:"-",
      startlist:"",
      endlist:"",
      uptime:"",
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
      this.showModal = true;
    },
    clearInput() {
      this.doItem = "";
    },
  },
};
</script>

<style>
.closeModalBtn {
  color: #42b983;
}
.Product{
  height: 100px;
  color : #c7d0d9;
  background: #465942;
}
#productTitle{
  margin-left:20px;
  line-height: 28px;
  font-weight: bold;
}
#totalproductVal{
  font-size: 38px;
  margin-top: 10px;
  font-weight: bold;
  color: white;
}
.productMdTitle{
  margin-top: 10px;
  color: white;
  font-weight: bold;
}
</style>