<template>
  <div>
    <Header></Header>
    <Menu @closeNav="closeNavEvt" ></Menu>
    <div :style="{padding: mainPpadding}" >
    <div class="Breadcrumbs">
    <img src="../../assets/Unauthorized-page.png">
    <div class="warning">
		<p class="warning-sorry">죄송합니다 :(</p>
        <p class="warning-text">접근 권한이 없는 페이지<a class="warning-sorry">를 요청하셨습니다!</a></p>
        <br><br>
        <p class="warning-info">관리자에게 문의하시길 바랍니다.</p>
        <p class="warning-info">관리자: 1234-1234</p>

        
	</div>
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
    mainPpadding:"10px 30px 30px 200px",
    }),
    methods: {
    closeNavEvt: function(message) {
      if(message =="true"){
        this.mainPpadding = "10px 30px 30px 0";
      }
      else if(message =="false"){
        this.mainPpadding = "10px 30px 30px 200px";
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
  img {
    margin-top: 50px;
    position: absolute;
    height: 100vh;
    width: 90%;
  }
  .warning {
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate( -50%, -50% );
    color: red;
  }
  .warning-text {
    font-weight: bolder;
    font-size: 58px;
  }
  .warning-sorry {
    font-weight: 20;
    font-size: 35px;
  }
  .warning-info {
    font-size: 20px;
  }
</style>
