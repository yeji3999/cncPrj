<template>
  <div class="ChartArea">
    <iframe  v-bind:src="iframeSource" width="100%"  height="565px" frameborder="0"></iframe>
 </div>
</template>

<script>
export default {
  name: 'ChartArea',
    data(){
    return {
      iframeSource: "http://9.8.100.156:3000/d/-Vt3X0qGk/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-2m&to=now&refresh=5s&kiosk=tv",
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
  background: #141619;
  padding: 15px 20px 15px 20px;
  margin-top: 0px;
}
</style>
