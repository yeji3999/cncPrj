<template>
  <div>
    <canvas id="planet-chart" height="180"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
  name: 'PlanetChart',
  mounted() {
    const ctx = document.getElementById('planet-chart');
    Chart.defaults.global.defaultFontColor = '#D3D3D3';
    Chart.plugins.register(ChartDataLabels);
    new Chart(ctx, this.$store.state.ctLineData); 
  }
}
</script>