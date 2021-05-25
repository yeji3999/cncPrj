<template>
  <div class="Header">
    <router-link to="/">
      <img alt="logo" src="../assets/logo.png">
    </router-link>
    <div id="headerTitle">{{ headerTitle }}</div>    
  </div>
</template>

<script>
export default {
  name: 'Header',
    data(){
    return {
     headerTitle: "HN Inc CNC 툴 부하 모니터링 솔루션"
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
</style>