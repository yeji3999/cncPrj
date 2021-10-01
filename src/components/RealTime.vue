<template>
<div class="chart-container" style="height:99%; width: 100%; padding: 7px">
    <iframe v-bind:src="realTimeIframe" width="100%" height="100%" frameborder="0"></iframe>
</div>
</template>
<script>

export default {
  data: () => ({
    realTimeIframe: "http://hn-dev.com:8082/realTime.html",
  })
}
</script>
