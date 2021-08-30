<template>
<div class="chart-container" style="height:100%; width: 100%">
    <iframe v-bind:src="realTimeIframe" width="100%" height="100%" frameborder="0"></iframe>
</div>
</template>
<script>

export default {
  data(){
  return {
    realTimeIframe: "http://9.8.100.152:8083/realTime.html",
    }
  },
  methods:{
    closeRealChart(){
      this.$emit("closeRealChart",5)
    }
  }
}
</script>
