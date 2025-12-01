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
  labels: ['Mr. John', 'Mr. Tommy', 'Mrs. Andreas', 'Mr. Key', 'Mrs. Gabriella'],
  datasets: [
    {
      label: 'by Order',
      data: [700, 650, 500, 450, 300],
      backgroundColor: '#5C6BC0',
      barThickness: 20
    },
    {
      label: 'by Payment',
      data: [0, 0, 0, 0, 0],
      backgroundColor: '#EF5350',
      barThickness: 20
    }
  ]
}

const chartOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 12,
        padding: 15,
        usePointStyle: true,
        pointStyle: 'rect'
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return context.dataset.label + ': ' + context.parsed.x
        }
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true,
      max: 800,
      ticks: {
        stepSize: 200
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
}
</script>
