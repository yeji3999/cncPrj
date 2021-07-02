<template>
<div>
        <Modal v-if="showCTModal" @closeModal="closeModalEvt">
        <h3 slot="header" style="margin-top:20px">
         <span class="ModalTitle">Cycle Time History</span>
          <i class="fa fa-times closeModalBtn" @click="modalCT" style="float:right; font-size:23px cursor:pointer"></i>
        </h3>
        <div slot="body">
          <PlanetChart style="margin-bottom:15px"></PlanetChart>
          <p id="ct100">Cycle Time(Latest 100)</p>
          <v-data-table
          :sort-by="['start', 'end', 'ct']"
          :sort-desc="['true', 'false', 'false']"
          :headers="headers"
          :items="ctAvgVal"
          class="elevation-1"
          dark
          hide-default-footer
          disable-pagination
          ></v-data-table>
        </div>
      </Modal>
</div>
    
</template>

<script>
import PlanetChart from './BarChart.vue'
import Modal from "./Modal";

export default {
  components: {
    Modal,
    PlanetChart
  },
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setMeanCycleTime');
  },
  sockets: {
    cycleTimeMean: function(miliTime) {
      let avgTime = this.numToMS(miliTime);
      this.cycleTimeVal = avgTime;
      //this.$socket.emit('setCycleTimeList');
    },
    cycleTimeHistory: function(history) {
      // console.log(history)
      //this.ctAvgVal = history
      let tmp = []
      for (let i =0; i<history.length; i++) {
        if(typeof(history[i]) != 'undefined') {
          tmp.push(history[i])
        }
      }
      this.ctAvgVal = tmp
    },
    ctChart: function(history) {
      let tmp = this.$store.state.ctLineData
      tmp.data.labels = history[0];
      tmp.data.datasets[0].data = history[1];
      for (var i = 0 ; i < tmp.data.labels.length; i++) {
        if (typeof(tmp.data.labels[i]) != 'undefined') {
          tmp.data.labels[i] = tmp.data.labels[i].split(' ')[1];
        }
      }
      this.$store.dispatch('callCTHistory', { ctHistory: tmp }) 
    }

  },
  data(){
      return {
      ctAvgVal : "-",
      doItem: "",
      showCTModal: true,
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
      this.showModal = true
    },
    modalCT() {
      this.showCTModal = false;
      this.$emit("modalCT","false")
      },
    closeModalEvt:function(message){
      alert("22")
      if(message == "false"){
      this.$emit("modalCT","false")
      }
    }
  }
}
</script>