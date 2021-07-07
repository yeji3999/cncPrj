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
            <input type="radio" name="modelSelRadio" value="prediction_bi" @click="changeModelBi" class="changeModelRadio" v-bind:checked="checkModel == 'prediction_bi'">
            <p class="ModelChangeTitle">BI_LSTM</p>
            <p class="ModelProcess">Number of processes
             <select v-model="selectBIProcessNum" style="width:50px; background:white">
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
              <option :value="5">5</option>
              <option :value="6">6</option>
              <option :value="7">7</option>
              <option :value="8">8</option>
              <option :value="9">9</option>
              <option :value="10">10</option>
            </select>
            </p>
            </div>

            <div id="changemodel2">
            <input type="radio" name="modelSelRadio" value="prediction_conv2d" @click="changeModelConv2d"  class="changeModelRadio" v-bind:checked="checkModel == 'prediction_conv2d'">
            <p class="ModelChangeTitle">CONV2D_LSTM</p>
            <p class="ModelProcess">Number of processes
             <select v-model="selectConv2dProcessNum" style="width:50px; background:white">
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
              <option :value="5">5</option>
              <option :value="6">6</option>
              <option :value="7">7</option>
              <option :value="8">8</option>
              <option :value="9">9</option>
              <option :value="10">10</option>
            </select>
            </p>
            </div>
        </div>
        <div style="text-align:center;">
        <button id="modelChangeSubmit" @click="modelChangeEvt" :style="{background:applyState}" :disabled="modelChangeBtn" >Apply</button>
        <button id="modelChangeCancel" @click="modalAdmin">Cancel</button>
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
    this.$socket.emit('currentModelInfo'); 
  },
  sockets: {
    nowModelInfo: function(data) {
      console.log(data)
      this.checkModel = data.model
      this.applyState = "gray"
      if(this.checkModel=="prediction_bi"){
        this.selectBIProcessNum = data.processCnt
        this.currentProcessCnt = this.selectBIProcessNum

      }else if(this.checkModel=="prediction_conv2d"){
        this.selectConv2dProcessNum = data.processCnt
        this.currentProcessCnt = this.selectConv2dProcessNum 
      }

  
    },
  },
  data: function () {
    return {
      checkModel: "",
      currentProcessCnt: "",
      selectBIProcessNum: "",
      selectConv2dProcessNum: "",
      showPRModal: true,
      modelInUse: "",
      changeModelValues: "",
      changeModel: "",
      applyState:"#38e09a",
      modelChangeBtn : false
    }
  },
  methods: {
    changeModelBi(){
      this.changeModel = "prediction_bi"
    },
    changeModelConv2d(){
      this.changeModel = "prediction_conv2d"
    },
    modalAdmin() {
      this.showAdminModal = false;
      this.$emit("modalAdmin","false")
      },
    modelChangeEvt(){
        // alert(this.changeModel)
        let updateProcessCnt = ''
        if(this.changeModel == this.checkModel){
          alert("NONONONONN")
          return false
        }
        this.applyState = "#38e09a"
        if (this.changeModel == 'prediction_bi') {
          updateProcessCnt = this.selectBIProcessNum
        } else if (this.changeModel == 'prediction_conv2d') {
          updateProcessCnt = this.selectConv2dProcessNum
        }
        this.$socket.emit('changeModel', {model:this.changeModel, processCnt: updateProcessCnt}); 
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
    color: black;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border-radius: 5px;
    margin-top: 30px;
}
#modelChangeCancel{
    background: #e04c38;
    color: black;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border-radius: 5px;
    margin-top: 30px;
    margin-left: 30px;
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
  background: #292c31;
  height: 150px;
}
.changeModelRadio{
  width: 15px;
  height: 15px;
}
</style>
