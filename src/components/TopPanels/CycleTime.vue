<template>
<div class="CycleTime">
  <!-- <button style="float: right; margin-right: 10px; margin-top: 3.5px; color:#c7d0d9;" @click="closeCT"><i class="fa fa-times"></i></button> -->
  <span id = "cycleTimeTitle">Cycle Time(Latest 5) </span>
  <p id="cycleVal">{{cycleTimeVal}} <button @click="modalCT" id="productEvt"><img class="infoImg" src="../../assets/info.png"></button></p>
</div>
</template>

<script>
export default {
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setCycleTimeList');
  },
  sockets: {
    cycleTimeMean: function(miliTime) {
      let avgTime = this.numToMS(miliTime);
      this.cycleTimeVal = avgTime;
      //this.$socket.emit('setCycleTimeList');
    },
    ctHistory: function(history) {
      let tmp = []
      for (let i =0; i<history.length; i++) {
        if(typeof(history[i]) != 'undefined') {
          tmp.push(history[i])
        }
      }
      this.$store.dispatch('callCTAvgVal', { ctAvgVal: tmp })
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
      this.$store.dispatch('callCTHistory', { ctHistory: tmp}) 
    }
  },
  data(){
      return {
      cycleTimeVal:"-",
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
    modalCT() {
      this.$emit("modalCT","true")
    },
    closeCT(){
      this.$emit("closeCT",2)
    }
  }
}
</script>
<style>
.CycleTime{
  height: 100%; 
  text-align: center;
}
#cycleTimeTitle{
  font-weight: bold;
  color: #c7d0d9;
  font-size: 14px;
}
#cycleVal{
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
  color: white;
}
#ct100{
  float: right;
  font-size: 12px;
  line-height: 30px;
  color: #d3d3d3;
}
.v-data-table{
  margin-top: 50px
}
.infoImg{
  width: 16px;
  position: relative;
  bottom: 5px;
}
</style>
