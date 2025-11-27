<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = {
  labels: ['RU', 'CH', 'KR', 'UK', 'FR', 'BR', 'JP', 'US', 'TW', 'SE'],
  datasets: [
    {
      data: [15, 12, 10, 13, 8, 11, 14, 9, 6, 2],
      backgroundColor: [
        '#8B4513',
        '#00BCD4',
        '#CDDC39',
        '#9C27B0',
        '#FFC107',
        '#4CAF50',
        '#FF9800',
        '#E91E63',
        '#795548',
        '#607D8B'
      ]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 12,
        font: {
          size: 11
        }
      }
    }
  }
}
</script>
