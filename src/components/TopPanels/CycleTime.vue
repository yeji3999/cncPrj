<template>
<div class="CycleTime">
    <a id = "cycleTimeTitle">평균 CT </a>
    <div style="float: right; margin-right: 10px; margin-top: 3.5px;">
      <button @click="addTodo" id="productEvt"><img src="../../assets/info.png" style="width:16px; z-index: 8;"></button>
    </div>
    <p id="cycleVal">{{cycleTimeVal}}</p>

        <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header" style="margin-top:20px">
          생산 시간 리스트
          <i class="fa fa-times closeModalBtn" @click="showModal = false" style="float:right; font-size:23px"></i>
        </h3>
        <div slot="body">
          <!-- <iframe src="http://9.8.100.156:3000/d-solo/8N32Mb3Gz/new-dashboard-copy?orgId=1&panelId=2" width="100%" height="200" frameborder="0"></iframe> -->
          <PlanetChart></PlanetChart>
          <v-data-table
          :headers="headers"
          :items="ctAvgVal"
          :items-per-page="2"
          class="elevation-1"
          dark
          ></v-data-table>
        </div>
      </Modal>
</div>
</template>

<script>
import PlanetChart from './LineChart.vue'
import Modal from "./Modal";

export default {
  components: {
    Modal,
    PlanetChart
  },
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setMeanCycleTime');
    this.$socket.emit('setCycleTimeList');
  },
  sockets: {
    cycleTimeMean: function(miliTime) {
      let avgTime = this.numToMS(miliTime);
      this.cycleTimeVal = avgTime;
    },
    cycleTimeHistory: function(history) {
      this.ctAvgVal = history
    }
  },
  data(){
      return {
      cycleTimeVal:"-",
      ctAvgVal : "-",
      doItem: "",
      showModal: false,
      headers: [
          {
            text: 'Start Time',
            align: 'start',
            sortable: false,
            value: 'start',
          },
          { text: 'End Time', value: 'end' },
          { text: 'Cycle Time', value: 'ct' },
        ],
      }
  },
  methods:{
    numToMS: function(miliTime) {
      let sec = miliTime/1000;
      let min = parseInt(sec / 60);
      sec = sec % 60;
      let avgTime = '';
      if (min > 0) {
        avgTime = parseInt(min) + '분';
      }
      if (sec > 0 ) {
        avgTime = avgTime + ' ' + parseInt(sec) + '초';
      }
      return avgTime;
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
  }
}
</script>
<style>
.CycleTime{
  height: 100px;
  color : #c7d0d9;
  background: #465942;
}
#cycleTimeTitle{
  margin-left:20px;
  line-height: 28px;
  font-weight: bold;
}
#cycleVal{
  font-size: 38px;
  margin-top: 10px;
  font-weight: bold;
  color: white;
}
.modal-container{

}
/* .v-data-table{
  background-color: #111217;
} */

</style>
