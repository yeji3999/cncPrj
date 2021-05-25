<template>
  
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'PlanetChart',
  sockets: {
    ctLineHistory: function(history) {
      console.log('history:::::',history)
      this.ctLineData.data.label = history[0];
      this.ctLineData.data.datasets[0].data = history[1];
    }
  },
  data() {
    return {
      ctLineData: {type: "line",data: {labels: [], datasets: [{label: "Cycle Time",data:[], borderColor: "#7acacd", borderWidth: 3}]}, options: { responsive: true, lineTension: 1, scales: { yAxes: [{ ticks: { beginAtZero: true, padding: 25}}]}}}
    }
  },
    mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.ctLineData);
  }
}
</script>