<template>
  <div :style="{padding: mainPpadding}" id="wrap">
    <Header></Header>
    <Menu @closeNav="closeNavEvt" ></Menu>
    <Breadcrumbs></Breadcrumbs>
    <TopPanel></TopPanel>
    <Main></Main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
import TopPanel from './components/TopPanel.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'

export default {
  name: 'App',
  components: {
   Header,
   Menu,
   Main,
   TopPanel,
  Breadcrumbs
  },
  
  data(){
    return {
      mainPpadding:"80px 30px 30px 250px",
      stateMessage : false,
    }
  },
    methods: {
      closeNavEvt: function(message) {
      if(message =="true"){
        this.mainPpadding = "80px 30px 30px 40px";
      }
      else if(message =="false"){
        this.mainPpadding = "80px 30px 30px 240px";
      }
    }
  }
}
</script>

<style>
  #wrap{
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  transition: "padding".5s;
  background-color: #262D35;
  overflow-y: hidden;
  overflow-x: hidden;
  }


</style>
