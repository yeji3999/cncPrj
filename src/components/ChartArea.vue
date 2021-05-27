<template>
  <div class="ChartArea">
    <iframe  v-bind:src="iframeSource" width="100%"  height="700" frameborder="0"></iframe>
 </div>
</template>

<script>
export default {
  name: 'ChartArea',
    data(){
    return {
      iframeSource: "http://9.8.100.156:3000/d/NrAaHQqGk/infludb1-8?orgId=1&from=now-2m&to=now&refresh=5s&kiosk=tv",
    }
  }
}

</script>
<style scoped>

h2{
  margin-bottom: 10px;
  margin-top: 0px;
}
.ChartArea{
  margin-top: 35px;
}
</style>
