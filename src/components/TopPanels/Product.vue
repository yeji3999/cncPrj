<template>
  <div>
    <div class="md-layout" style="margin: 0.5rem; color: #fff !important">
      <div class="md-layout-item md-size-90">
        <md-field>
          <label>Things To Do</label>
          <md-input v-model="doItem" @keyup.enter="addTodo"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-10" @click="addTodo">
        <i class="fas fa-plus-circle addBtn"></i>
      </div>

      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          알림!
          <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">
          <p>ss</p>
          <v-data-table
          :headers="headers"
          :items="day"
          class="elevation-1"
          ></v-data-table>

          <p>sdfsds</p>
          <v-data-table
          :headers="headers"
          :items="weekly"
          class="elevation-2"
          ></v-data-table>

          <p>sfewfwe</p>
          <v-data-table
          :headers="headers"
          :items="monthly"
          class="elevation-3"
          ></v-data-table>

        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  components: {
    Modal,
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
      console.log(w)
      this.weekly = w;
    },
    monthlys: function(m) {
      console.log(m)
      this.monthly = m;
    }
  },
  data: function () {
    return {
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
    addTodo() {
      if (this.doItem) {
        // this.$emit('이벤트이름', 인자1, 인자2);
        this.$emit("addOne", this.doItem);
        this.clearInput();
      } else {
        this.$socket.emit('counts');
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.doItem = "";
    },
  },
};
</script>

<style>
.md-field,
.md-focused,
.md-input,
.md-textarea,
label {
  background: #365fd9 !important;
  border-style: none;
  border-radius: 5px;
  margin: 0 0 5px 0 !important;
  color: #fff !important;
  -webkit-text-fill-color: #ddd !important;
}
.addBtn {
  vertical-align: middle;
  margin-top: 12px;
  font-size: 24px;
  cursor: pointer;
}
.closeModalBtn {
  color: #42b983;
}
.v-data-table__wrapper{
  height:150px;
  margin: 15px;
}
</style>