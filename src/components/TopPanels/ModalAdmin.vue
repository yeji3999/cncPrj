<template>
<div>
    <Modal v-if="showPRModal" @closeModal="closeModalEvt" >
    <h3 slot="header" style="text-align:center">
      <span class="ModalTitle" style="margin-left:0px;">Model Info</span>
      <i class="fa fa-times closeModalBtn" @click="modalAdmin" style="float:right; font-size:23px; cursor:point"></i>
    </h3>
    <div slot="body">
        <div id="predicModelChange" style="width:100%">
            <div class="modalSubTitle">예측 모델 변경</div>
            <div id="changemodel1">
            <input type="radio" name="changeModel" value="Model1" v-model="changeModelValues">
            <p class="ModelChangeTitle">Model1</p>
            <p class="ModelProcess">Number of processes</p>
             <select v-model="selected">
              <option value="1">"1"</option>
              <option value="2">"2"</option>
              <option value="3">"3"</option>
              <option value="4">"4"</option>
              <option value="5">"5"</option>
              <option value="6">"6"</option>
              <option value="7">"7"</option>
              <option value="8">"8"</option>
              <option value="9">"9"</option>
              <option value="10">"10"</option>
            </select>
            <span>{{selected}}</span>
            </div>

            <div id="changemodel2">
            <input type="radio" name="changeModel" value="Model2" v-model="changeModelValues">
            <p class="ModelChangeTitle">Model2</p>
            <p class="ModelPredicRate">예상 예측률: {{Model2predicionRate}}</p>
            </div>
        </div>
        <div style="text-align:center;">
        <button id="modelChangeSubmit" @click="modelChangeVal">Submit</button>
        </div>
  

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
    console.log(this.modelInUse)
  },
  sockets: {

  },
  data: function () {
    return {
      showPRModal: true,
      modelInUse: "Model1",
      Model1predicionRate: "0.11",
      Model2predicionRate: "0.123",
      changeModelValues: "",
    }
    
  },
  methods: {
    modalAdmin() {
      this.showAdminModal = false;
      this.$emit("modalAdmin","false")
      },
    modelChangeVal(){
        alert(this.changeModelValues)
        this.$emit("modalAdmin","false")
      },
    closeModalEvt:function(message){
        if(message == "false"){
          this.$emit("modalAdmin","false")
        }
    }
  }
})
</script>

<style scoped>

.modalSubTitle{
    margin: 15px 0px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(221, 221, 221)
}
.ModelChangeTitle{
    margin-left:10px;
    color: rgb(221, 221, 221);
    font-size: 1.5em;
    font-weight: 600;
}
.ModelProcess{
   margin-left: 20px;
   color: rgb(221, 221, 221)
}
#modelChangeSubmit{
    background: #38e09a;
    color: black;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border-radius: 5px;
    margin-top: 30px;
}
.modalsubText{
  color: rgb(221, 221, 221)
}
#changemodel1{
  float: left;
}
#changemodel2{
  float: right;
}
#changemodel1, #changemodel2{
  width:47%;
  display:inline-block;
  margin: 10px;
  background: #414141;
  height: 200px;
}
</style>
