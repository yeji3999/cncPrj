<template>
<div class="unity">
    <!-- <iframe v-bind:src="unityTest" width="100%" height="100%" frameborder="0"></iframe> -->
    <!-- <div id="gameContainer"></div> -->
  <unity src="../../../Build/Build_Web.json" unityLoader="../../../Build/UnityLoader.js" ref="gameInstance" id="gameContainer"></unity>  
</div>
</template>

<script>
import Unity from 'vue-unity-webgl'
export default {
  components: { Unity },
  data(){
    return {
      inputFacNum:""
    }
  },
  props:{
    stepNum : String
  },
  watch: {
    'stepNum': function(){
      this.inputFacNum  = Number(this.stepNum) //props로 받은 데이터를 자식 컴포넌트에서 직접 사용하지 않고 변경하면 에러 뜸
      this.$refs.gameInstance.gameInstance.SendMessage("MainController", "Get_StepNumberFromWebPage", this.inputFacNum);
  }
  }
}
</script>