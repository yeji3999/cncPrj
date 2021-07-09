<template>
<div>
    <Modal v-if="showPRModal" @closeModal="closeModalEvt" >
    <h3 slot="header" style="text-align:center">
      <span class="ModalTitle" style="margin-left:0px;">Admin Model Change</span>
      <i class="fa fa-times closeModalBtn" @click="modalAdmin" style="float:right; font-size:23px; cursor:point"></i>
    </h3>
    <div slot="body">
        <div id="predicModelChange" style="width:100%">
            <div class="modalSubTitle">Change predict model</div>
            <div id="changemodel1">
            <input type="radio" name="modelSelRadio" value="prediction_bi" @click="changeModelBi" class="changeModelRadio" :checked="checkModel == 'prediction_bi'">
            <p class="ModelChangeTitle">BI_LSTM</p>
            <p class="ModelProcess">Number of processes : 1

            <!-- <vue-slider v-model="selectBIProcessNum" v-bind="options" :tooltip="'always'" :disabled="isBiActive" style="display:inline-block; padding: 5px 10px"/> -->
            <!-- <select v-model="selectBIProcessNum" class ="modelSelOption">

              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3(권장)</option>
              <option :value="4">4</option>
              <option :value="5">5</option>
              <option :value="6">6</option>
              <option :value="7">7</option>
              <option :value="8">8</option>
              <option :value="9">9</option>
              <option :value="10">10</option>
            </select> -->
            </p>
            <p class="modelState">Model State: <span style="font-weight:600" :style="{color:biStateColor}"> {{biState}}</span></p>
            </div>

            <div id="changemodel2">
            <input type="radio" name="modelSelRadio" value="prediction_conv2d" @click="changeModelConv2d"  class="changeModelRadio" :checked="checkModel == 'prediction_conv2d'">
            <p class="ModelChangeTitle">CONV2D_LSTM</p>
            <p class="ModelProcess">Number of processes : 3
            <!-- <vue-slider v-model="selectConv2dProcessNum" v-bind="options" :tooltip="'always'" :disabled="isConv2dActive" style="display:inline-block; padding: 5px 10px"/> -->

             <!-- <select v-model="selectConv2dProcessNum" class ="modelSelOption">
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3(권장)</option>
              <option :value="4">4</option>
              <option :value="5">5</option>
              <option :value="6">6</option>
              <option :value="7">7</option>
              <option :value="8">8</option>
              <option :value="9">9</option>
              <option :value="10">10</option>
            </select> -->
            </p>
            <p class="modelState">Model State: <span style="font-weight:600" :style="{color:con2dStateColor}">{{con2dState}}</span></p>
            </div>

            <div style="width:100%; margin-top:10px">
              <p id="modelChangeComment">{{modelChangeMsg}}</p>
            </div>
        </div>
        <div style="text-align:center;">
        <button id="modelChangeSubmit" @click="modelChangeEvt" :style="{background:applyState}" :disabled="modelChangeBtn" >Apply</button>
        <button id="modelChangeCancel" @click="modalAdmin">Cancel</button>
        </div>
  </div>
  </Modal>
  <Modal v-if="showConfirmModal">
    <h3 slot="header" style="text-align:center">
      <span class="ModalTitle" style="margin-left:0px;">Model Change Confirm</span>
      <i class="fa fa-times closeModalBtn" @click="modalConfirm" style="float:right; font-size:23px; cursor:point"></i>
    </h3>
    <div slot="body">
      <p id ="confirmMsg">Are you sure change to the model?</p>
        <div style="text-align:center;">
        <button id="modelChangeSubmit" @click="ChangeConfirm" :style="{background:applyState}">Confirm</button>
        <button id="modelChangeCancel" @click="modalConfirm">Cancel</button>
        </div>
  </div>
  </Modal>


  </div>
</template>

<script>
import Modal from "./Modal.vue";
// import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'



export default({
  components: {
    Modal,
    // VueSlider,
  },
  created(){
    this.$socket.emit('currentModelInfo'); 
  },
  sockets: {
    nowModelInfo: function(data) {
      console.log(data)
      this.currentModel = data.model
      this.checkModel = data.model
      this.applyState = "gray"
      this.modelChangeBtn = true
      if(this.checkModel=="prediction_bi"){
        this.selectBIProcessNum = data.processCnt
        this.currentProcessCnt = this.selectBIProcessNum
        this.biState = "Running"
        this.biStateColor = "#38e09a"
        this.con2dStateColor = "#e04c38"
        this.selectConv2dProcessNum = 0
        this.isBiActive = true
        this.isConv2dActive = false
      }else if(this.checkModel=="prediction_conv2d"){
        this.selectConv2dProcessNum = data.processCnt
        this.currentProcessCnt = this.selectConv2dProcessNum
        this.con2dState = "Running"
        this.con2dStateColor = "#38e09a"
        this.biStateColor = "#e04c38"
        this.selectBIProcessNum = 0
        this.isBiActive = false
        this.isConv2dActive = true
      }
    },
    modelChangeRes: function(msg){
      console.log(msg)
      if(msg.state == "Model Changed"){
        this.currentModel = this.changeModel
        this.modelChangeMsg = "Predict model is changed."
        this.applyState = "gray"
        this.modelChangeBtn = true
        if(this.currentModel == "prediction_bi" ){
          this.biState = "Running"
          this.selectConv2dProcessNum = 0
          this.isBiActive = true
          this.isConv2dActive = false
          this.biStateColor = "#38e09a"

        }else if(this.currentModel == "prediction_conv2d"){
          this.con2dState = "Running"
          this.selectBIProcessNum = 0
          this.isBiActive = false
          this.isConv2dActive = true
          this.con2dStateColor = "#38e09a"
        }
      }else{
      this.modelChangeMsg = "Fail"
      }
    }
  },
  data: function () {
    return {
      options: {
        dotSize: 10,
        min: 0,
        max: 10,
        width: 100,
        height: 4
      },
      checkModel: "",
      currentProcessCnt: "",
      selectBIProcessNum: 0,
      selectConv2dProcessNum: 0,
      showPRModal: true,
      modelInUse: "",
      changeModelValues: "",
      changeModel: "",
      applyState:"#38e09a",
      modelChangeBtn : false,
      updateProcessCnt :"",
      currentModel: "",
      modelChangeMsg: "",
      biState:"Stop",
      con2dState:"Stop",
      modelChangeSuccess: "",
      isBiActive: true,
      isConv2dActive: true,
      biStateColor:"#e04c38",
      con2dStateColor: "#e04c38",
      showConfirmModal: false
    }
  },
  methods: {
    modalConfirm(){
      this.showConfirmModal = false
    },
    changeModelBi(){
      this.changeModel = "prediction_bi"
      if(this.currentModel == this.changeModel){
        this.applyState = "gray"
        this.modelChangeBtn = true
      }else{
        this.applyState = "#38e09a"
        this.modelChangeBtn = false
      }
    },
    changeModelConv2d(){
      this.changeModel = "prediction_conv2d"
        if(this.currentModel == this.changeModel){
        this.applyState = "gray"
        this.modelChangeBtn = true
      }else{
        this.applyState = "#38e09a"
        this.modelChangeBtn = false
      }
    },
    modalAdmin() {
      this.showAdminModal = false;
      this.$emit("modalAdmin","false")
      },
    modelChangeEvt(){
      this.showConfirmModal = true
        // this.$emit("modalAdmin","false")
    },
    ChangeConfirm(){
      this.showConfirmModal = false
        if (this.changeModel == 'prediction_bi') {
        // this.updateProcessCnt = this.selectBIProcessNum
        this.updateProcessCnt = 1
        if(this.updateProcessCnt == 0){
            alert("Please select the number of processes")
            return false
        }else{
          this.modelChangeMsg = "Predict model is being applied"
          this.con2dState = "Stop"
          this.con2dStateColor = "#e04c38"
        }
      } else if (this.changeModel == 'prediction_conv2d') {
        // this.updateProcessCnt = this.selectConv2dProcessNum
        this.updateProcessCnt = 3
        if(this.updateProcessCnt == 0){
            alert("Please select the number of processes")
            return false
        }else{
          this.modelChangeMsg = "Predict model is being applied"
          this.biState = "Stop"
          this.biStateColor = "#e04c38"
        }
      } 
      this.$socket.emit('changeModel', {model:this.changeModel, processCnt: this.updateProcessCnt}); 

    },
    closeModalEvt:function(message){
        if(message == "false"){
          this.$emit("modalAdmin","false")
        }
    },
    modalAdminEvt: function(message){
      if(message == "true"){
        this.showConfirmModal = true;
      }else if (message == "false"){
        this.showConfirmModal = false;
      }
      },
  }
})
</script>

<style scoped>
select{
  text-align: center;
}
#modelChangeComment{
  font-size: 2em;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
.modelSelOption{
  width: 70px;
  height: 25px;
  line-height: 25px;
  background: white;
}
.modalSubTitle{
    margin: 15px 0px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(221, 221, 221)
}
.ModelChangeTitle{
    margin-left: 35px;
    color: rgb(221, 221, 221);
    font-size: 1.5em;
    font-weight: 600;
}
.ModelProcess, .modelState{
   margin-left: 20px;
   color: rgb(221, 221, 221);
   font-weight: 500;
   font-size: 1.2em;
   line-height: 30px;
}
#modelChangeSubmit{
    color: black;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border-radius: 5px;
    margin-top: 10px;
}
#modelChangeCancel{
    background: #e04c38;
    color: black;
    font-weight: bold;
    height: 30px;
    width: 90px;
    border-radius: 5px;
    margin-top: 10px;
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
  height: 120px;
}
.changeModelRadio{
  width: 15px;
  height: 15px;
  position: relative;
  top: 25px;
  left: 10px;
}
#confirmMsg{
  color: white;
  font-weight: 600;
  font-size: 25px;
  margin: 20px;
}
</style>
