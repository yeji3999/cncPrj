<template>
  <div class="LogPanel">
    <h2>메모리 사용량</h2>
        <iframe v-bind:src="iframeSource" width="100%" height="250px" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'LossChart',
    data(){
    return {
      iframeSource:"http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&left=%5B%22now-1h%22,%22now%22,%22InfluxDBv2%22,%7B%7D%5D&from=1620782919019&to=1620783219020&panelId=14"
    }
  }
}
</script>

<style scoped>
.LogPanel{
    padding-left: 20px;
    position: relative;
    bottom: 69px;
}
textarea{
    width: 100%;
    background: rgb(20,22,25);
    resize: none;
    height: 591px;
    border: none;
    color:white;
}

</style>
