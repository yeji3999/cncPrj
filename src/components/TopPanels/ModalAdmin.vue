<template>
<div>
  <div id="admin-panel" :style="{display:adminDisplay}">
      <div class="admin-panel-wrapper" style="float:right">
        <div class="admin-panel-container" :style="{left: adminPosition}" style="float:right">
          <div class="admin-panel-header">
            <slot name="header"> <span id="adminModelChangeTitle">Admin Model Change</span> </slot>
            <button style="float:right; font-size:23px; cursor:pointer"><i class="fa fa-times" @click="adminPanelClose"></i></button>
          </div>
          <div class="admin-panel-body">
            <v-data-table
              v-model="adminModelSelected"
              :headers="headers"
              :items="adminModelList"
              :single-select="singleSelect"
              item-key="model"
              show-select
              class="elevation-1"
              dark
              hide-default-footer
              disable-pagination
            >
            <template v-slot:[`item.modelState`]="{item}">
              <v-chip
              :color="getColor(item.modelState)"
              dark
              >
              {{ item.modelState }}
              </v-chip>
            </template>
            </v-data-table>
            <div id="modelChangeSbmitArea">
            <button id="modelChangeSubmit" @click="modelChangeEvt" :disabled="modelChangeBtn" :style="{background:applyState}"><p>{{modalChangeSubmitTxt}}</p></button>
          </div>
          </div>
        </div>
      </div>
      <div id="closeModelAdmin" :style="{right: closeModelAdmin }" @click="adminPanelClose" ></div>
  </div>
    
</div>
</template>

<script>
export default {
  props: {
    adminPosition: String,
    closeModelAdmin: String,
    adminDisplay: String
  },
  created(){
    this.$socket.emit('currentModelInfo'); 
    // this.adminPosition = "800px"
  },
    sockets: {
    nowModelInfo: function(data) {
      this.currentModel = data.model
      this.checkModel = data.model
      if(data != null){
          this.applyState = "#e04c38"
          this.modalChangeSubmitTxt = "Stop"
      }
      // this.adminModelList.push({model:"1"})
      if(this.checkModel=="prediction_bi"){
        this.adminModelList[0].modelState = "Running"
        this.adminModelList[1].modelState = "Stop"
        this.adminModelSelected.push(this.adminModelList[0])
      }else if(this.checkModel == "prediction_conv2d"){
        this.adminModelList[1].modelState = "Running"
        this.adminModelList[0].modelState = "Stop"
        this.adminModelSelected.push(this.adminModelList[1])
      }
    }
    },
   data: function () {
     return{
       message:"",
       modelChangeBtn: false,
       currentModel:"",
       checkModel : "",
       modalChangeSubmitTxt:"Apply",
       applyState: "#38e09a",
       singleSelect: true,
       adminmodelSubmit:[],
       adminModelSelected: [],
        headers: [
          {
            text: 'Model',
            sortable: false,
            value: 'model',
          },
          { text: 'Processes', value: 'processCnt' },
          { text: 'Model State', value: 'modelState' },
        ],
        adminModelList: [
          {
            model: 'BI_LSTM',
            processCnt: 3,
            modelState: "Stop"
          },
          {
            model: 'CONV2D_LSTM',
            processCnt: 6,
            modelState: "Stop"
          }
        ],
     }
  },
  methods:{
      getColor(modelState) {
        if (modelState == "Stop") return '#de2a33'
        else return '#32a852'
    },
    adminPanelClose(){
      this.$emit("modalAdmin","close")
    },
    modelChangeEvt(){
      this.adminmodelSubmit = this.adminModelSelected[0]
      
        if(this.adminmodelSubmit.model == "BI_LSTM"){
        this.currentModel = 'prediction_bi'
        }else if(this.adminmodelSubmit.model == "CONV2D_LSTM"){
        this.currentModel = 'prediction_conv2d'
        }

      if(this.adminmodelSubmit.modelState == "Stop"){
        if(this.modalChangeSubmitTxt == "Stop"){
          alert("현재 동작 중인 모델을 종료 해주세요.")
          return false
        }else{
          this.adminmodelSubmit.modelState = 'Running'
          console.log(this.adminmodelSubmit)
          this.applyState = "#e04c38"
          this.modalChangeSubmitTxt = "Stop"
          this.$socket.emit('modelStart', this.currentModel)
          }
        
      }else if(this.adminmodelSubmit.modelState == "Running"){
        this.adminmodelSubmit.modelState = 'Stop'
         this.applyState = "#38e09a"
         this.modalChangeSubmitTxt = "Apply"
         this.adminModelSelected = []
        this.$socket.emit('modelStop', this.currentModel); 
      }
    }

  }
}

</script>

<style>
#closeModelAdmin{
    position: fixed;
    top: 50%;
    margin-top: -26px;
    width: 26px;
    height: 52px;
    z-index: 9999;
    background: url('../../assets/close_modal.jpg') no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    /* transition: all .5s */
}
#modelChangeSbmitArea{
  text-align: center;
  margin-top: 30px
}
#modelChangeSubmit{
  width: 60%;
  height: 35px;
  margin: auto;
  color:#fff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
}
#adminModelChangeTitle{
  color: #fff;
  font-size: 30px;
  line-height: 25px;
  font-weight: 800;
}
#admin-panel{
  /* width: 100%; */
  height: 100%;
  position: fixed;
  /* left: 0; */
  top: 50px;
  right:0
}

.admin-panel-mask {
  /* display: table; */
  position: relative;
  top: 6%;
  margin: auto;
  float: right;
}

.admin-panel-wrapper {
  display: table-cell;
  vertical-align: middle;
  /* width: 100%;  */
  height: 100%;
}
.admin-panel-header {
  margin-top: 30px;
  color: #fff;
  font-size: 25px;
  line-height: 25px;
}
.admin-panel-body {
  margin: 15px 0;
}
.admin-panel-default-button {
  float: right;
}
.admin-panel-enter {
  opacity: 0;
}
.admin-panel-leave-active {
  opacity: 0;
}
.admin-panel-enter .admin-panel-container,
.admin-panel-leave-active .admin-panel-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.admin-panel-body,
.admin-panel {
  color: #666 !important;
}
.admin-panel-container{
  width: 600px;
  height: 100vh;
  padding: 20px 30px;
  background-color: #111217;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  z-index: 0;
  position: relative;
}
.v-data-footer__select{
  display:none
}
.v-data-table__wrapper {
  /* height: 200px; */
  margin: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.v-data-table__wrapper::-webkit-scrollbar {
  background-color: #1E1E1E;
  width: 8px;
}
.v-data-table__wrapper::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 10px;
}
.v-data-table__wrapper::-webkit-scrollbar-track {
  background-color: #1E1E1E;
}
</style>