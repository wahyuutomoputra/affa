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
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartData = {
  labels: ['2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Goods1',
      data: [300, 450, 650, 800],
      backgroundColor: 'rgba(76, 175, 80, 0.3)',
      borderColor: 'rgba(76, 175, 80, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    },
    {
      label: 'Goods2',
      data: [200, 300, 400, 500],
      backgroundColor: 'rgba(156, 204, 101, 0.3)',
      borderColor: 'rgba(156, 204, 101, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    },
    {
      label: 'Goods3',
      data: [100, 150, 200, 300],
      backgroundColor: 'rgba(205, 220, 57, 0.3)',
      borderColor: 'rgba(205, 220, 57, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 1000,
      ticks: {
        stepSize: 250
      }
    }
  }
}
</script>
