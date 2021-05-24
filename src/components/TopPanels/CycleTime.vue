<template>
<div class="CycleTime">
    <p id = "cycleTimeTitle">평균 CT <button @click="addTodo" id="productEvt">Click</button></p>
    <p id="cycleVal" :style="{color:cycleTimeValColor}">{{cycleTimeVal}}</p>

          <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          생산 시간 리스트
          <i class="fa fa-times closeModalBtn" @click="showModal = false" style="float:right"></i>
        </h3>
        <div slot="body">
          <iframe src="http://9.8.100.156:3000/d-solo/8N32Mb3Gz/new-dashboard-copy?orgId=1&panelId=2" width="100%" height="200" frameborder="0"></iframe>
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

import Modal from "./Modal";
// import {Line} from 'vue-chartjs'

export default {
  components: {
    Modal,
    // Line
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
      cycleTimeValColor:"#C0D8FF",
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
    height: 94px;
    color : #c7d0d9;
}
#cycleTimeTitle{
    margin:0px;
    line-height: 28px;
    font-weight: bold;
}
#cycleVal{
    font-size: 33px;
    margin-top: 5px;
    font-weight: bold;
    color: #C0D8FF;
}
#avgCT{
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
#avgCTtitle{
  margin-top: 5px;
  color:white;
  font-weight: bold;
}
.CycleTime:hover  #avgCT{
  display: inline-block;
}
.avgCTVal{
  margin-top: 5px;
  white-space: pre-line;
  font-weight: bold;
}
.modal-container{
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #111217;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.v-data-table{
  background-color: #111217;
}

</style>
