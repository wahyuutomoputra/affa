<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['2023', '2024', '2025'],
  datasets: [
    {
      label: 'Revenue 1',
      data: [500, 300, 600],
      backgroundColor: '#FDD835'
    },
    {
      label: 'Revenue 2',
      data: [150, 150, 250],
      backgroundColor: '#90CAF9'
    }
  ]
}

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      }
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 1000,
      ticks: {
        stepSize: 250
      }
    }
  }
}
</script>
