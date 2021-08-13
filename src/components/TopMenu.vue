<template>
  <div class="topComponentMenu">
    <router-link to="/">
      <button @click="pageBackEvt" id="pageBackBtn" style="margin-left:5px; margin-right: 30px;"><i class="fa fa-undo fa-2x" aria-hidden="true"></i></button>
    </router-link>
    <button @click="menuDownEvt" class="topComponentBtn" style="margin-left:5px; margin-right: 30px;"><i class="fa fa-th-large fa-2x" aria-hidden="true"></i></button>
    <button @click="modalAdmin" id="modelChange" v-if="isAdmin" ><i class="fa fa-cog fa-2x" aria-hidden="true"></i></button>
    
    <div id="layoutBtn" :style="{display:layoutshow}">
      <div> <span style="margin-left:5px; font-weight:600">Layout</span>
      <button style="float: right; color:#595959; margin:0px" @click="closeLayoutMenu"><i class="fa fa-times"></i></button>
      </div>
      <div id="layoutBtnArea">
        <button @click="layout1" style="margin-left:5px"><img :src="layout1Icon" style="width:30px" alt=""></button>
        <button @click="layout2"><img :src="layout2Icon" style="width:30px" alt=""></button>
        <button @click="layout3" style="margin-right:4px"><img :src="layout3Icon" style="width:30px" alt=""></button>
      </div> 
    </div>
  </div>
</template>

<script>
export default({

data:() =>({
    layoutshow:"none",
    isAdmin: false,
    layout1Icon: require("../../src/assets/click_layout1.png"),
    layout2Icon: require("../../src/assets/layout2.png"),
    layout3Icon: require("../../src/assets/layout3.png")
}),
created() { 
    if(this.$keycloak.authenticated) {
      this.isAdmin = this.checkAdmin();
    } else {
        this.isAdmin = false;
    }
  },
methods:{
  pageBackEvt(){
    
  },
  closeLayoutMenu(){
    this.layoutshow = "none"
  },
  layout1(){
    this.layout1Icon = require("../../src/assets/click_layout1.png")
    this.layout2Icon = require("../../src/assets/layout2.png")  
    this.layout3Icon = require("../../src/assets/layout3.png")
    this.$emit("changeLayout",1);
    this.layoutshow = "none"  
  },
  layout2(){
    this.layout1Icon = require("../../src/assets/layout1.png")
    this.layout2Icon = require("../../src/assets/click_layout2.png")  
    this.layout3Icon = require("../../src/assets/layout3.png")
    this.$emit("changeLayout",2)
    this.layoutshow = "none"   
  },
  layout3(){
    this.layout1Icon = require("../../src/assets/layout1.png")
    this.layout2Icon = require("../../src/assets/layout2.png")  
    this.layout3Icon = require("../../src/assets/click_layout3.png")
    this.$emit("changeLayout",3);
    this.layoutshow = "none"  
  },
    checkAdmin() {
        if (this.$keycloak.authenticated) {
          if (this.$keycloak.hasRealmRole('HNAdmin')) {
            return true;
          }
        }
        return false;    
    },
    menuDownEvt(){
        if(this.layoutshow == "block"){
            this.layoutshow = "none";
        }else if(this.layoutshow == "none"){
            this.layoutshow = "block";
            this.chartmenuShow = "none";``
        }  
    },
    modalAdmin(){
      this.$emit("modalAdmin","open")
    }
}
})
</script>


<style scoped>
#layoutBtnArea{
  margin-top: 10px
}
#layoutBtn{
  background: white;
  border-radius: 5px;
  padding: 7px;
  position: fixed;
  width: 137px;
  z-index: 999;
}
button{
    color: #fff;
    margin-right: 10px; 
}
button:hover{
    color: lightblue;
}
#modelChange:hover{
    color: lightblue;
}
.topComponentMenu{
    position: relative;
    float: right;
    right: 10px;
}
li{
    list-style: none;
    line-height: 38px;
    text-align: center;
    font-weight: 600;
    padding: 3px;
    font-size: 14px;
    background: rgb(240, 246, 255);
    width: 150px;
}
li:hover{
    background: lightblue;
}
    #modelChange{
      color: white;
      float: right;
      /* line-height: 55px;
      margin-right: 10px; */
    }
</style>
