<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
//import planetChartData from '../../plugins/chart'

export default {
  name: 'PlanetChart',
  sockets: {
    cybang: function() {
      console.log('hhhhhhhhhhhhhhhhi');
    },
    ctChart: function(history) {
      this.ctLineData.data.labels = history[0];
      this.ctLineData.data.datasets[0].data = history[1];
    }
  },
  data() {
    return {
      ctLineData: {type: "bar",data: {labels: [], datasets: [{label: "Cycle Time",data:[], borderColor: "#7acacd", borderWidth: 3}]}, options: { responsive: true, lineTension: 1, scales: { yAxes: [{ ticks: { beginAtZero: true, padding: 25}}]}}},
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    console.log('when?')
    new Chart(ctx, this.ctLineData);
  }
}
</script>