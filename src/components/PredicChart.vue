<template>
  <div class="lossChart">
    <h2>그래프</h2>
        <iframe v-bind:src="iframeSource" width="100%" height="220px" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'LossChart',
    data(){
    return {
      iframeSource:"http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&from=now-5s&to=now&panelId=20"
    }
  }
}
</script>

<style scoped>

h2{
  margin-bottom: 20px;
  margin-top: 0px;
}
.lossChart{
  background: #141619;
  padding: 20px;
  margin-top:35px
}
</style>
