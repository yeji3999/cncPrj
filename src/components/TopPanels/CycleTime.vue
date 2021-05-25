<template>
<div class="CycleTime"  @keyup.esc="showModal = false">
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
    // console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;',)
    this.$socket.emit('setMeanCycleTime');
    this.$socket.emit('setCycleTimeList');
  },
  props:{

  },
  sockets: {
    cycleTimeMean: function(miliTime) {
      let avgTime = this.numToMS(miliTime);
      this.cycleTimeVal = avgTime;
    },
    cycleTimeHistory: function(history) {
      this.ctAvgVal = history
    },
    ctChart: function(history) {
      let tmp = this.$store.state.ctLineData
      tmp.data.labels = history[0];
      tmp.data.datasets[0].data = history[1];
      console.log("11111111111111111111111111111111111111",tmp)
      this.$store.dispatch('callCTHistory', { ctHistory: tmp }) 
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
      //ctLineData: {type: "bar",data: {labels: [], datasets: [{label: "Cycle Time",data:[], borderColor: "#7acacd", borderWidth: 3}]}, options: { responsive: true, lineTension: 1, scales: { yAxes: [{ ticks: { beginAtZero: true, padding: 25}}]}}},
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
      this.showModal = true
    }
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
</style>
