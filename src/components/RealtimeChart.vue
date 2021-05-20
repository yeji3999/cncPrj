<template>
  <div class="RealTimeChart">  
    <select id="realTimeSel" v-model="selected" v-on:input="updateSelect">
      <option value="5s">5초</option>
      <option value="10s">10초</option>
      <option value="15s">15초</option>
      <option value="30s">30초</option>
    </select>
    <iframe id="realchart" :style="{display:realchartView}" v-bind:src="iframeSource" width="100%" frameborder="0"></iframe>
 </div>
</template>

<script>
export default {
  name: 'RealTimeChart',
    data(){
    return {
      iframeSource: "http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&refresh=5s&from=now-1m&to=now&panelId=18",
      iframeSource1:"http://9.8.100.156:3000/d-solo/jMxlJhrGz/cnc?orgId=1&refresh=",
      iframeSource2: "&from=now-1m&to=now&panelId=18",
      selected: '5s',
      refresh: "inline-block",
      updateSel: "inline-block"
    }
  },
    methods: {
    updateSelect:function(event) {
      this.selected = event.target.value;
      this.iframeSource = this.iframeSource1 + this.selected + this.iframeSource2;
    },
    refreshBtn:function(){
      this.selected = "5s"
      this.iframeSource = "";
      setTimeout(() => {
        this.iframeSource = this.iframeSource1 + this.selected + this.iframeSource2;
      }, 100);
    }
  }
}

</script>

<style scoped>
#realchart{
  height: 180px;
}
h2{
  margin-bottom: 10px;
  margin-top: 0px;
}
.RealTimeChart{
  background: #141619;
  padding: 15px 20px 15px 20px;
  margin-top: 0px;
}
#refreshArea{
  text-align: right;
  background: rgb(20,22,25);
  display: inline;
  float: right;
}
#realTimeSel{
  height: 30px;
  border: 1px solid;
  color: rgba(255,255,255,0.7);
  background: rgb(20,22,25);
  opacity: 0.6;
  width: 60px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
  text-align-last:center;
  float: right;
}
#refreshBtn{
  padding: 0px 6px;
  border:none;
  color: white;
  opacity: 0.8;
  background:transparent;
  position: relative;
  bottom: 4px;
  cursor: pointer;
}
#realchartclose, #realchartopen{
  color: white;
  opacity: 0.8;
  background:transparent;
  cursor: pointer;
  border:none;
  line-height: 30px;
  position: relative;
  float: right;
}

</style>
