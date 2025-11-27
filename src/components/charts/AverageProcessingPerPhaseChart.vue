<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['New Ins.', 'Application Filed', 'Publication', 'Subs. Exam', 'Certificate'],
  datasets: [
    {
      data: [280, 150, 480, 400, 480],
      backgroundColor: ['#388E3C', '#2E7D32', '#43A047', '#66BB6A', '#4CAF50']
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
      max: 600,
      ticks: {
        stepSize: 150
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
}
</script>
