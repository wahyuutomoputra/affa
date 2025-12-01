<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = {
  labels: ['Priority1', 'Priority2', 'Priority3', 'Priority4', 'Priority5', 'Priority6', 'Priority7', 'Priority8'],
  datasets: [
    {
      data: [12, 14, 10, 13, 15, 11, 13, 12],
      backgroundColor: [
        '#E91E63',
        '#2196F3',
        '#FFEB3B',
        '#4CAF50',
        '#9C27B0',
        '#FF5722',
        '#795548',
        '#607D8B'
      ]
    }
  ]
}

const chartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}
</script>
