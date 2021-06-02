<template>
  <div>
    <div class="Product"  @keyup.esc="showModal = false">
    <span id = "productTitle">Total Production </span>
    <div style="float: right; margin-right: 10px; margin-top: 3.5px;">
      <button @click="modalShow" id="productEvt"><img src="../../assets/info.png" style="width:16px; z-index: 8;"></button>
    </div>
    <p id="totalproductVal">{{productVal}}</p>
  </div>
  
  <Modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">
      <span style="margin-left:15px">Production History</span>
      <i class="fa fa-times closeModalBtn" @click="showModal = false" style="float:right; font-size:23px; cursor:point"></i>
    </h3>
    <div slot="body">
      <v-card dark >
        <v-tabs fixed-tabs>
          <v-tab>
            일간 누적 생산량
          </v-tab>
          <v-tab>
            주간 누적 생산량
          </v-tab>
          <v-tab>
            월간 누적 생산량
          </v-tab>
          
          <v-tab-item>
            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="day"
                class="elevation-1"
                dark
                hide-default-footer
                disable-pagination
                :sort-by="['date', 'count']"
                :sort-desc="['true', 'false']"
              ></v-data-table>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="weekly"
                class="elevation-2"
                dark
                hide-default-footer
                disable-pagination
              ></v-data-table>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="monthly"
                class="elevation-3"
                dark
                hide-default-footer
                disable-pagination
              ></v-data-table>
            </v-card>
          </v-tab-item>

      </v-tabs>
    </v-card>

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
    this.$socket.emit('setCount1Day')
    this.$socket.emit('setCount1Week')
    this.$socket.emit('setCount1Month')
    this.$socket.emit('setCount')
  },
  sockets: {
    count: function(cnt) {
      this.productVal = cnt;
    },
    days: function(d) {
      if (typeof(d) == 'number') {
        this.day[this.day.length-1].count = d;
        this.weekly[this.weekly.length-1].count++;
        this.monthly[this.monthly.length-1].count++;
      } else {
        this.day = d;
      }
      this.$socket.emit('setMeanCycleTime');
      this.$socket.emit('setCycleTimeList');
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
    modalShow() {
      this.showModal = true;
    },
    clearInput() {
      this.doItem = "";
    },
  },
};
</script>

<style>

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
</style>