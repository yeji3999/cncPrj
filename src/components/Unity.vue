<template>
<div class="unity">
    <!-- <iframe v-bind:src="unityTest" width="100%" height="100%" frameborder="0"></iframe> -->
    <!-- <div id="gameContainer" :style="{display:Test}"></div> -->
  <unity src="../../../Build/Build_Web.json" width="1000" height="600" unityLoader="../../../Build/UnityLoader.js" ref="gameInstance"></unity>  
<button @click="yjonClick">btn</button>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Unity from 'vue-unity-webgl'
export default {
  components: { Unity },
  data(){
    return {
    }
  },
  props:{
    stepNum : String
  },
  // created(){alert(this.stepNum)},
  watch: {
    'stepNum': function(){
      this.stepNum  = Number(this.stepNum)
    this.$refs.gameInstance.gameInstance.SendMessage("MainController", "Get_StepNumberFromWebPage", this.stepNum);
  }
  },

  methods: {

      yjonClick () {
        console.log(this.$refs.gameInstance.gameInstance.SendMessage)
    }
  }
}
</script>
<style scoped>
.gameContainer{
  position: absolute; 
  top: 50%; 
  left: 50%;
}

</style>