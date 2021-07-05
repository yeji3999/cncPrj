<template>
<div>
    <Modal v-if="showPRModal" @closeModal="closeModalEvt" >
    <h3 slot="header" style="text-align:center">
      <span class="ModalTitle" style="margin-left:0px;">Model Info</span>
      <i class="fa fa-times closeModalBtn" @click="modalAdmin" style="float:right; font-size:23px; cursor:point"></i>
    </h3>
    <div slot="body">
        <div id="predicModelStatus" style="width:100%">
          <div class="modalSubTitle">예측 모델 현황</div>
            <div style=" display:inline-block; width:50%; position:relative; bottom: 75px">  
            <span class="modalsubText">현재 {{modelInUse}} 모델 사용 중 입니다. </span>
            </div>
            <div style=" display:inline-block">   
              <iframe v-bind:src="realTimeIframe" width="100%" height="90%" frameborder="1"></iframe> 
            </div>
        </div>

        <div id="predicModelChange">
            <div class="modalSubTitle">예측 모델 변경</div>
            <div id="changemodel1">
            <input type="radio" name="changeModel" value="Model1" v-model="changeModelValues">
            <span class="ModelChangeTitle">Model1</span>
            <span class="ModelPredicRate">예상 예측률: {{Model1predicionRate}}</span>
            </div>

            <div id="changemodel2">
            <input type="radio" name="changeModel" value="Model2" v-model="changeModelValues">
            <span class="ModelChangeTitle">Model2</span>
            <span class="ModelPredicRate">예상 예측률: {{Model2predicionRate}}</span>
            </div>
        </div>
        <div style="text-align:center">
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
      realTimeIframe: "http://9.8.100.152:8083/realTime.html",
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
#predicModelStatus, #predicModelChange{
    margin-bottom: 30px;
}
.modalSubTitle{
    color: white;
    margin: 15px 0px;
}
.modalSubTitle{
    font-size: 20px;
    font-weight: bold;
    color: rgb(221, 221, 221)
}
.ModelChangeTitle{
    margin-left:10px;
    color: rgb(221, 221, 221)
}
.ModelPredicRate{
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
}
.modalsubText{
  color: rgb(221, 221, 221)
}
</style>
