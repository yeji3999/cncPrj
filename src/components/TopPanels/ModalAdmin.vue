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
            <input type="radio" name="modelSelRadio" value="prediction_bi" @click="changeModelBi" class="changeModelRadio" :checked="checkModel == 'prediction_bi'">
            <p class="ModelChangeTitle">BI_LSTM</p>
            <p class="ModelProcess">Number of processes :
            <vue-slider v-model="value" v-bind="options" />
            <!-- <select v-model="selectBIProcessNum" class ="modelSelOption">
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
            </select> -->
            </p>
            <p class="modelState">Model State: {{biState}}</p>
            </div>

            <div id="changemodel2">
            <input type="radio" name="modelSelRadio" value="prediction_conv2d" @click="changeModelConv2d"  class="changeModelRadio" :checked="checkModel == 'prediction_conv2d'">
            <p class="ModelChangeTitle">CONV2D_LSTM</p>
            <p class="ModelProcess">Number of processes :
             <select v-model="selectConv2dProcessNum" class ="modelSelOption">
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
            <p class="modelState">Model State: {{con2dState}}</p>
            </div>

            <div>
              <p id="modelChangeComment">{{modelChangeMsg}}</p>
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
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'


export default({
  components: {
    Modal,
    VueSlider
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

      }else if(this.checkModel=="prediction_conv2d"){
        this.selectConv2dProcessNum = data.processCnt
        this.currentProcessCnt = this.selectConv2dProcessNum
        this.con2dState = "Running"
      }
    },
    modelChangeRes: function(msg){
      console.log(msg)
      
      if(msg.state == "Model Changed"){
        this.currentModel = this.changeModel
        this.modelChangeMsg = "Done"

        if(this.currentModel == "prediction_bi" ){
          this.biState = "Running"
        }else if(this.currentModel == "prediction_conv2d"){
          this.con2dState = "Running"
        }
      }else{
      this.modelChangeMsg = "Fail"
      }
    }
  },
  data: function () {
    return {
      value: 0,
      options: {
        dotSize: 10,
        min:0,
        max: 10,
        width: 300,
        height: 4
      },
      checkModel: "",
      currentProcessCnt: "",
      selectBIProcessNum: "",
      selectConv2dProcessNum: "",
      showPRModal: true,
      modelInUse: "",
      changeModelValues: "",
      changeModel: "",
      applyState:"#38e09a",
      modelChangeBtn : false,
      updateProcessCnt :"",
      currentModel: "",
      modelChangeMsg: "",
      biState:"killed",
      con2dState:"killed",
      modelChangeSuccess: ""
    }
  },
  methods: {
    changeModelBi(){
      this.changeModel = "prediction_bi"
      if(this.currentModel == this.checkModel){
        this.applyState = "gray"
        this.modelChangeBtn = true
      }
        this.applyState = "#38e09a"
        this.modelChangeBtn = false
    },
    changeModelConv2d(){
      this.changeModel = "prediction_conv2d"
        if(this.currentModel == this.checkModel){
        this.applyState = "gray"
        this.modelChangeBtn = true
      }
        this.applyState = "#38e09a"
        this.modelChangeBtn = false
    },
    modalAdmin() {
      this.showAdminModal = false;
      this.$emit("modalAdmin","false")
      },
    modelChangeEvt(){
        if (this.changeModel == 'prediction_bi') {
          this.updateProcessCnt = this.selectBIProcessNum
          this.modelChangeMsg = "Change~~~"
          this.con2dState = "killed"

        } else if (this.changeModel == 'prediction_conv2d') {
          this.updateProcessCnt = this.selectConv2dProcessNum
          this.modelChangeMsg = "Change~~~"
          this.biState = "killed"
        }  
        if(this.updateProcessCnt == ""){
            alert("Please select the number of processes")
            return false
          }
        this.$socket.emit('changeModel', {model:this.changeModel, processCnt: this.updateProcessCnt}); 
        // this.$emit("modalAdmin","false")
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
#modelChangeComment{
  font-size: 2em;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
.modelSelOption{
  width: 50px;
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
  height: 120px;
}
.changeModelRadio{
  width: 15px;
  height: 15px;
  position: relative;
  top: 25px;
  left: 10px;
}
</style>
