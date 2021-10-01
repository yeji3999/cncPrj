<template>
<div>
    <Modal v-if="showPRModal" @closeModal="closeModalEvt">
    <h3 slot="header">
      <span class="ModalTitle">Production History</span>
      <button style="float:right; font-size:23px; cursor:pointer"><i class="fa fa-times closeModalBtn" @click="modalPr"></i></button>
    </h3>
    
    <div slot="body">
      <v-card dark >
        <v-tabs fixed-tabs>
          <v-tab>
            Daily
          </v-tab>
          <v-tab>
            Weekly
          </v-tab>
          <v-tab>
            Monthly
          </v-tab>
          
          <v-tab-item>
            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="day"
                :sort-by="['date']"
                :sort-desc="[true]"
                class="elevation-1"
                dark
                hide-default-footer
                disable-filtering
                disable-pagination
              ></v-data-table>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="weekly"
                :sort-by="['date']"
                :sort-desc="[true]"
                class="elevation-2"
                dark
                hide-default-footer
                disable-pagination
                disable-filtering
              ></v-data-table>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="monthly"
                :sort-by="['date']"
                :sort-desc="[true]"
                class="elevation-3"
                dark
                hide-default-footer
                disable-pagination
                disable-filtering
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
import Modal from "./Modal.vue";


export default({
  components: {
    Modal
  },
  created(){
    this.$socket.emit('setCount1Day')
    this.$socket.emit('setCount1Week')
    this.$socket.emit('setCount1Month')
  },
  sockets: {
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
  data: () => ({
      startlist:"",
      endlist:"",
      doItem: "",
      headers: [
          {
            text: 'Date',
            align: 'end',
            value: 'date',
          },
          { text: 'Count', value: 'count' },
      ],
      day: [],
      weekly: [],
      monthly: [],
      showPRModal: true
  }),
  
  methods: {
    modalPr() {
      this.$emit("modalPr","false")
      },
    closeModalEvt:function(message){
      if(message == "false"){
        this.$emit("modalPr","false")
      }
    }
  }
})
</script>

<style>
.ModalTitle{
  margin-left:15px;
  margin-top: 0;
  color: #38e09a;
  font-size: 25px;
  line-height: 25px;
}
</style>
