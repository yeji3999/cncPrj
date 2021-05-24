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
          :items="desserts"
          class="elevation-1"
          ></v-data-table>
          <p>sdfsds</p>
          <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-2"
          ></v-data-table>
          <p>sfewfwe</p>
          <v-data-table
          :headers="headers"
          :items="desserts"
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
  data: function () {
    return {
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
  methods: {
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