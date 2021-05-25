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
  mounted() {
    const ctx = document.getElementById('planet-chart');
    Chart.defaults.global.defaultFontColor = '#D3D3D3';
    new Chart(ctx, this.$store.state.ctLineData);
  }
}
</script>