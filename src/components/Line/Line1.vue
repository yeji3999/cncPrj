<template>
  <div>
  <Header></Header>
    <Menu @closeNav="closeNavEvt" @menuWorkshop ="facEvt" @menuline="lineEvt"></Menu>
    <div  :style="{padding: mainPpadding}">
    <div class="Breadcrumbs">
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt"  style="border:none">{{headerLine}}</span></div>    
  </div>
  <button @click="click">btn1</button>
    <button @click="click2">btn2</button>

  <Unity :style="{display:unityShow}"></Unity>
  <!-- <Op1Main :style="{display:opShow}"></Op1Main> -->
</div>
  </div>
</template>

<script>
import Header from '../Header.vue'
import Menu from '../Menu.vue'
import Unity from '../Unity.vue'
// import Op1Main from '../OpMain/Op1Main.vue'


export default {
  components: {
    Header,
    Menu,Unity
    // ,Op1Main
  },
  data: () => ({
    test : "",
    mainPpadding:"80px 30px 30px 230px",
    headerFac:"View All Workshops",
    headerLine: "",
    unityShow: "block",
    opShow:"none",
    }),
    methods: {
    closeNavEvt: function(message) {
      if(message===true){
        this.mainPpadding = "80px 30px 30px 40px";
      }
      else{
        this.mainPpadding = "80px 30px 30px 230px";
      }
    },
    facEvt: function(fac){
      this.headerFac = fac
    },
    lineEvt: function(line){
      this.headerLine = line
    },
    click(){
      // this.unityShow = "none"
      // this.opShow = "block"
      document.getElementById("chkTest").innerText = 2
    },
    click2(){
      this.unityShow = "block"
      this.opShow = "none"
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
