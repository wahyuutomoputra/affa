<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartData = {
  labels: ['0', '1', '2', '3', '4'],
  datasets: [
    {
      data: [100, 95, 100, 100, 95],
      borderColor: '#5C6BC0',
      backgroundColor: '#5C6BC0',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#5C6BC0'
    },
    {
      data: [5, 8, 5, 5, 8],
      borderColor: '#4CAF50',
      backgroundColor: '#4CAF50',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#4CAF50'
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20
      }
    },
    x: {
      grid: {
        display: true
      }
    }
  }
}
</script>
