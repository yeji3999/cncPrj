<template>
  <div>
  <Header></Header>
    <Menu @closeNav="closeNavEvt" @menuStepInfo ="menuStepInfoEvt"></Menu>
    <div  :style="{padding: mainPpadding}">
    <div class="Breadcrumbs">
    <p id="chkTest"></p>
    <div id="headerTitle"> <span class="headerTitleTxt" id="headerFacInfo" style="padding-left:0px">{{facInfo}}</span></div>    

    <!-- <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt"  style="border:none">{{headerLine}}</span></div>     -->
  </div>

  <!-- <Unity :style="{display:unityShow}"></Unity> -->
  <!-- <Op1Main :style="{display:op1Show}"></Op1Main> -->
</div>
  </div>
</template>

<script>
import Header from '../Header.vue'
import Menu from '../Menu.vue'
// import Unity from '../Unity.vue'
// import Op1Main from '../OpMain/Op1Main.vue'


export default {
  components: {
    Header,
    Menu,
    // Unity
    // ,Op1Main
  },
  created(){
    this.unityShow = ""
  },

  updated(){
    document.getElementById("chkTest").innerText
  },
  data: () => ({
    mainPpadding:"80px 30px 30px 230px",
    headerLine: "",
    unityShow: "block",
    op1Show:"none",
    facInfo:""
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
    menuStepInfoEvt: function(stepNum){
      // alert(stepNum)
  
       this.facInfo = stepNum
      document.getElementById("chkTest").innerText = this.facInfo 


      switch(stepNum){
        case 0:
          document.getElementById("headerFacInfo").innerText = "View All Factory"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 1:
          document.getElementById("headerFacInfo").innerText = "Workshop 1"
          this.unityShow = "block"
          this.op1Show = "none"
          
          break;
        case 2 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 2"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 3 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 3"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 11 :
          document.getElementById("headerFacInfo").innerText = "Workshop 1  |  Line "
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 12 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 1  |  Line 2"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 21 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 2  |  Line 1"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 22 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 2  |  Line 2"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 31 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 3  |  Line 1"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 32 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 3  |  Line 2"
          this.unityShow = "block"
          this.op1Show = "none"
          break;
        case 111 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 1  |  Line 1  |  Operation 1"
          this.unityShow = "none"
          this.op1Show = "block"
          break;
        default:
          document.getElementById("headerFacInfo").innerText = "View All Factory"
          this.unityShow = "block"
          this.op1Show = "none"
        }
    },
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
    /* border-right: 1px dashed rgba(255,255,255,0.3); */
    }
</style>
