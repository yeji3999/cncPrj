<template>
  <div>
  <Header></Header>
    <Menu @closeNav="closeNavEvt" ></Menu>
    <div :style="{padding: mainPpadding}" >
    <div class="Breadcrumbs">
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt">{{headerLine}}</span> <span class="headerTitleTxt" style="border:none">{{headerOP}}</span></div>    
  </div>
</div>
  </div>
</template>

<script>
import Header from '../Header.vue'
import Menu from '../Menu.vue'

export default {
  components: {
    Header,
    Menu,
  },
  data: () => ({
    mainPpadding:"80px 30px 30px 230px",
    headerFac:"Workshop 2",
    headerLine: "Line 3",
    headerOP: "Operation 5",
    }),
    methods: {
    closeNavEvt: function(message) {
      if(message===true){
        this.mainPpadding = "80px 30px 30px 40px";
      }
      else{
        this.mainPpadding = "80px 30px 30px 230px";
      }
    }
  }
  }
</script>

<style scoped>
    #headerTitle{
      display:inline; 
      position:relative; 
      top:-10px; 
      /* margin-left:75px;  */
      font-size: 14px;
      font-weight: normal;
      color: rgba(255,255,255,0.7);
    }
    .headerTitleTxt{
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px dashed rgba(255,255,255,0.3);
    }
</style>
