<template>
  <div class="PredicChart">
    <p class="setChartInterval">{{sel}}초</p>
    <iframe v-bind:src="iframeSource" width="100%" height="200px" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  name: 'PredicChart',
  created(){
    this.iframeSource = this.iframeSource + this.$store.state.interval
  },
  updated(){
    this.iframeSource = this.iframeSource.slice(0,91) + this.$store.state.interval
  },
  data(){
    return {
      iframeSource:"http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&from=now-5m&to=now&panelId=20&refresh=",
    }
  },
  computed:{
    sel(){
      var selData = this.$store.state.interval
      selData = selData.slice(0,-1)
      return selData
    },
  }
}
</script>

<style scoped>
.setChartInterval{
  font-size: 18px;
  margin-left: 15px;
  margin-bottom:15px;
  color: rgba(255,255,255,0.7);
  font-weight: bold;
}
h2{
  margin-bottom: 20px;
  margin-top: 0px;
}
.PredicChart{
  background: #141619;
  padding: 20px;
  margin-top: 0px;
}
</style>
