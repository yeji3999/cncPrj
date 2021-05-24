<template>
<div class="CycleTime">
    <p id = "cycleTimeTitle">평균 CT <button @click="addTodo" id="productEvt">Click</button></p>
    <p id="cycleVal" :style="{color:cycleTimeValColor}">{{cycleTimeVal}}</p>

          <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          알림!
          <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">
          <p>ss</p>
          <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
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
  name: 'CycleTime',
  created() { 
    this.$socket.emit('setMeanCycleTime');
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
            text: 'Dessert',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
          }
        ],
      }  
  },
  methods:{
    numToMS: function(miliTime) {
      let sec = miliTime/1000;
      let min = sec / 60;
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

</style>
