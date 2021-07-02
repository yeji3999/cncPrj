<template>
  <div class="Header">
    <router-link to="/">
      <img alt="logo" src="../assets/logo.png">
    </router-link>
    <div id="headerTitle">{{ headerTitle }}</div>
    <button v-on:click="loginOutEvt" id="loginout">{{signinOut}}</button>  
    <button @click="modalAdmin" id="modelChange"><i class="fa fa-cog fa-lg"></i></button>    
  </div>
</template>

<script>
export default {
  name: 'Header',
  created() { 
    console.log(this.$keycloak.authenticated, " @@@@@@@@@@@@@@@@@@@@@@@@")
    if(!this.$keycloak.authenticated) {
      this.signinOut = 'Login';
    } else {
      this.signinOut = 'Logout';
    }
  },
  data(){
    return {
     headerTitle: "CNC 툴 부하 모니터링",
     signinOut: 'Login'
    }
  },
    methods:{
      loginOutEvt(){
        if (this.signinOut == 'Login') {
          this.$keycloak.login();
        } else if(this.signinOut == 'Logout'){
          this.$keycloak.logout();
        }
      },
      modalAdmin(){
        this.$emit("modalAdmin","true")
      }
    }
}
</script>

<style scoped>
  .Header {
      background-color:#3c4852;
      min-width: 1280px;
      width: 100%;
      line-height: 80px;
      height: 60px;
      position: fixed;
      top: 0px;
      left: 0px;
      z-index: 9999;
      padding-left: 80px;
      padding-right: 32px;
      margin: 0px;
      font-size: 20px;
      
    }
    #headerTitle{
      display:inline; 
      position:relative; 
      top:-10px; 
      margin-left:75px; 
      font-size: 25px;
      font-weight: bold;
      color:white;
    }
    #loginout{
      float:right;
      color:white;
      line-height: 60px;
    }
    #modelChange{
      color: white;
      float: right;
      line-height: 55px;
      margin-right: 10px;
    }
</style>