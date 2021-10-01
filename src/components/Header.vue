<template>
  <div class="Header">
    <router-link to="/">
      <img alt="logo" src="../assets/logo.png">
    </router-link>
    <div id="headerTitle">{{ headerTitle }}</div>
    <!-- <button v-on:click="loginOutEvt" id="loginout">{{signinOut}}</button> -->
    <button v-on:click="loginOutEvt" id="logout" :style="{display:logOut}"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i></button>
    <button v-on:click="loginOutEvt" id="login" :style="{display:logIn}"><i class="fa fa-sign-in fa-lg  " aria-hidden="true"></i></button>
    <span id="timeNow">{{currentTime}}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Header',
  component: { dayjs },
  created() { 
    if(!this.$keycloak.authenticated) {
      this.signinOut = 'Login';
      this.logOut = 'none';
      this.logIn = 'block';
    } else {
      this.signinOut = 'Logout';
      this.logOut = 'block';
      this.logIn = 'none';
    }
  },
  mounted(){
    setInterval(this.getCurrentTime, 1000)
  },
  data: () => ({
        headerTitle: "CNC Tool Load Monitoring",
      signinOut: 'Login',
      logOut: "block",
      logIn: "none",
      currentTime: dayjs().format("YYYY-MM-DD ddd HH:mm:ss")
    }),
    methods:{
      getCurrentTime(){
        this.currentTime = dayjs().format("YYYY-MM-DD ddd HH:mm:ss")
      },
      indexMove(){
        location.href = '/'
      },
      loginOutEvt(){
        if (this.signinOut == 'Login') {
          this.$keycloak.login();
          this.logOut = 'none';
          this.logIn = 'block';         
        }else if(this.signinOut == 'Logout'){
          this.$keycloak.logout();
          this.logOut = 'block';
          this.logIn = 'none';
        }
      },
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
      /* padding-left: 80px; */
      padding-left: 40px;
      padding-right: 32px;
      margin: 0px;
      font-size: 20px;
    }
    #headerTitle{
      display:inline; 
      position:relative; 
      top:-10px; 
      /* margin-left:75px;  */
      margin-left: 20px; 
      font-size: 25px;
      font-weight: bold;
      color:white;
    }
    #logout,#login{
      float:right;
      color:white;
      line-height: 53px;
      font-weight: 800;
    }
    #timeNow{
      float:right;
      color: #cedada;
      line-height: 62px;
      font-weight: 400;
      margin-right: 15px;
    }
    #logout:hover, #login:hover{
    color: lightblue;
    }

</style>