<template>
<div class="unity">
    <!-- <iframe v-bind:src="unityTest" width="100%" height="100%" frameborder="0"></iframe> -->
    <p id="chkTest"></p>
    <div id="gameContainer"></div>
</div>
</template>

<script>
export default {

  data(){
  return {
    // unityTest: "http://9.8.100.152:8083/test.html",
    }
  },
  methods: {

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