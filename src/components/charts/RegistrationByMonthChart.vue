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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'New',
      data: [650, 600, 680, 620, 590, 640, 610, 650, 670, 690, 720, 680],
      backgroundColor: 'rgba(34, 139, 34, 0.5)',
      borderColor: 'rgba(34, 139, 34, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    },
    {
      label: 'Renew',
      data: [350, 360, 320, 380, 410, 390, 400, 380, 360, 340, 320, 420],
      backgroundColor: 'rgba(0, 100, 0, 0.5)',
      borderColor: 'rgba(0, 100, 0, 1)',
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
    },
    title: {
      display: false
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
