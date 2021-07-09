<template>
<div>
  <div id="admin-panel">
    <div class="admin-panel-mask" > 
      <div class="admin-panel-wrapper">
        <div class="admin-panel-container" :style="{left: adminPosition}">
          <div class="admin-panel-header">
            <slot name="header"> <span id="adminModelChangeTitle" >Admin Model Change</span> </slot>
            <i class="fa fa-times" @click="adminPanelClose" style="float:right; font-size:23px; cursor:point"></i>
          </div>

          <div class="admin-panel-body">
            {{selected}}

                        <v-data-table
    v-model="selected"
    :headers="headers"
    :items="modelInfo"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
    dark
    hide-default-footer
    disable-pagination
  >
    <template >
      <v-switch
        v-model="singleSelect"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>


            
          </div>
        </div>
      </div>
    </div>
  </div>
    
</div>
</template>

<script>
export default {

  props: {
    adminPosition: String
  },
   data: function () {
     return{
       singleSelect:true,
       selected:[],
              headers: [
          {
            text: 'Model',
            align: 'start',
            value: 'modelName',
          },
          { text: 'Process', value: 'processNum' },
          { text: 'State', value: 'processState' },
        ],
        modelInfo: [
          {
            modelName: 'Frozen Yogurt',
            processNum: 1,
            processState: 6.0
          },
                  {
            modelName: 'TESTSET',
            processNum: 2,
            processState: 5.0
          }
        ],
     }

  },
  methods:{
    adminPanelClose(){
      this.adminPosition = "600px"
      this.$emit("modalAdmin","close")
    }

  }
};
</script>

<style>
#adminModelChangeTitle{
  color: #38e09a;
  font-size: 30px;
  line-height: 25px;
  font-weight: 800;
}
#admin-panel{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
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
  width: 100%; 
  height: 100%;
}
.admin-panel-header {
  margin-top: 30px;
  color: #38e09a;
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
  z-index: 999;
  position: relative;
}
.v-data-footer__select{
  display:none
}
.v-data-table__wrapper {
  height: 300px;
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
/* .v-data-footer{
  display: none;
} */
</style>