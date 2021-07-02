<template>
  <div :style="{padding: mainPpadding}" id="wrap">
    <Header></Header>
    <Menu @closeNav="closeNavEvt" ></Menu>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
   Header,
   Menu,
  },
  
  data(){
    return {
      mainPpadding:"80px 30px 30px 250px"
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
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: "padding".5s;
  background-color: #2b2d30;
  }
</style>
