<template>
  <div class="ChartArea" style="height:100%">
      <!-- <button style="float: right; margin-right: 10px; margin-top: 3.5px; color:#c7d0d9;" @click="closeChart"><i class="fa fa-times"></i></button> -->
    <iframe  v-bind:src="iframeSource" width="100%" height="100%" frameborder="0"></iframe>
 </div>
</template>

<script>
export default {
  name: 'ChartArea',
    data(){
    return {
      iframeSource: "http://9.8.100.156:3000/d/-Vt3X0qKa/hninc-cnc-tul-buha-moniteoring-solrusyeon?orgId=1&from=now-30m&to=now&refresh=5s&kiosk=tv",
      
    }
  },
  methods:{
    closeChart(){
      this.$emit("closeChart",6)
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
  margin: auto;
}
</style>
