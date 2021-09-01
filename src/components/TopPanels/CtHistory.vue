<template>
  <div>
    <Modal v-if="showCTModal" @closeModal="closeModalEvt">
      <h3 slot="header" style="margin-top:20px">
        <span class="ModalTitle">Cycle Time History</span>
        <button style="float:right; font-size:23px; cursor:pointer"><i class="fa fa-times closeModalBtn" @click="modalCT" ></i></button>
      </h3>
      <div slot="body">
        <PlanetChart style="margin-bottom:15px"></PlanetChart>
          <p id="ct100">Cycle Time(Latest 100)</p>
          <v-data-table
            :headers="headers"
            :items="this.$store.state.ctAvg"
            class="elevation-1"
            :sort-by="['start']"
            :sort-desc="[true]"
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
  sockets: {

  },
  data(){
      return {
      ctAvgVal : [],
      showCTModal: true,
      headers: [
          {
            text: 'Start Time',
            align: 'center',
            sortable: true,
            value: 'start',
          },
          { text: 'End Time', value: 'end' },
          { text: 'Cycle Time', value: 'ct' },
        ],
      }
  },
  methods:{
    modalCT() {
      this.$emit("modalCT","false")
      },
    closeModalEvt:function(message){
      if(message == "false"){
      this.$emit("modalCT","false")
      }
    }
  }
}
</script>

<style>
.text-center, .text-start, .text-end{
  text-align: center;
}
</style>