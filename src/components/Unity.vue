<template>
<div class="unity">
  <unity src="../../../Build/Build_Web.json" unityLoader="../../../Build/UnityLoader.js" ref="gameInstance" id="gameContainer"></unity>  
</div>
</template>

<script>
import Unity from 'vue-unity-webgl'
export default {
  components: { Unity },
  data: () => ({
      inputFacNum: Number(this.stepNum)
  }),
  props:{
    stepNum : String,
  },
  watch: {
    'stepNum': function(){
      this.inputFacNum  = Number(this.stepNum) //props로 받은 데이터를 자식 컴포넌트에서 직접 사용하지 않고 변경하면 에러 뜸
      this.$refs.gameInstance.gameInstance.SendMessage("MainController", "Get_StepNumberFromWebPage", this.inputFacNum);
      }
  },
  methods:{
    unityRefreshEvt(){
      this.inputFacNum  = Number(this.stepNum)
      this.$refs.gameInstance.gameInstance.SendMessage("MainController", "Get_StepNumberFromWebPage", this.inputFacNum );
    }
  }
}
</script>

<style scoped>
.unity{
  width:100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.unity #gameContainer{
  height: 100%;
  width: 100%;
}
</style>