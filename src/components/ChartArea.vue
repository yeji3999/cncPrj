<template>
  <div class="ChartArea" style="height:100%">
    <iframe  v-bind:src="iframeSource" width="100%" height="100%" frameborder="0"></iframe>
 </div>
</template>

<script>
export default {
  name: 'ChartArea',
  props: {
    iframeSource: String
  }
}

</script>
<style scoped>
.ChartArea{
  margin: auto;
}
</style>
