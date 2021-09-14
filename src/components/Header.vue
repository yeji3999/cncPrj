<template>
  <div class="Header">
    <router-link to="/">
      <img alt="logo" src="../assets/logo.png">
    </router-link>
    <div id="headerTitle">{{ headerTitle }}</div>
    <button v-on:click="loginOutEvt" id="loginout">{{signinOut}}</button>
    <span id="currentTime">{{today}}</span>
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
    } else {
      this.signinOut = 'Logout';
    }
  },
  mounted(){
    setInterval(this.currentTime, 1000)
  },
  data(){
    return {
     headerTitle: "CNC Tool Load Monitoring",
     signinOut: 'Login',
     today: dayjs().format("YYYY-MM-DD ddd HH:mm:ss")
    }
  },
    methods:{
      currentTime(){
        this.today = dayjs().format("YYYY-MM-DD ddd HH:mm:ss")
      },
      indexMove(){
        location.href = '/'
      },
      loginOutEvt(){
        if (this.signinOut == 'Login') {
          this.$keycloak.login();
        } else if(this.signinOut == 'Logout'){
          this.$keycloak.logout();
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
      font-weight: 800;
    }
    #currentTime{
      float:right;
      color:white;
      line-height: 62px;
      font-weight: 400;
      margin-right: 20px;
    }

</style>