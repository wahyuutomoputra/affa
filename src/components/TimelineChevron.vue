<template>
  <div class="d-flex flex-column position-relative" style="padding-bottom: 120px;">
    <!-- Timeline menggunakan Vuetify Components -->
    <div class="d-flex align-stretch" style="height: 48px;">
      <template v-for="(step, index) in steps" :key="index">
        <div class="d-flex align-stretch" style="flex: 1; position: relative; z-index: 1;">
          <v-card
            :color="getStepColor(step.status)"
            variant="flat"
            class="d-flex align-center justify-center"
            :style="getStepBoxStyle(index)"
          >
            <span :class="getStepTextClass(step.status)" class="text-caption font-weight-medium">{{ step.label }}</span>
          </v-card>
          <v-card
            v-if="index < steps.length - 1"
            :color="getArrowColor(step.status, index)"
            variant="flat"
            :style="getArrowStyle()"
          ></v-card>
        </div>
      </template>
    </div>

    <!-- Status Bubble menggunakan Vuetify Components -->
    <div v-if="statusBubble" :style="bubblePosition" class="d-flex flex-column align-center position-absolute" style="top: 58px; transform: translateX(-50%); z-index: 10;">
      <v-divider vertical :thickness="2" color="purple" length="18" class="mb-0"></v-divider>
      <div class="d-flex align-center mt-n1">
        <v-avatar size="6" color="purple" class="mr-2"></v-avatar>
        <v-divider :thickness="2" color="purple" length="100" class="mr-2"></v-divider>
        <v-chip
          color="purple"
          size="small"
          class="text-white"
        >
          {{ statusBubble }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => []
  },
  statusBubble: {
    type: String,
    default: null
  }
})

const getStepColor = (status) => {
  if (status === 'active') return '#37474f'
  if (status === 'completed') return '#4caf50'
  return '#e0e0e0'
}

const getStepTextClass = (status) => {
  if (status === 'active') return 'text-white'
  if (status === 'completed') return 'text-white'
  return 'text-grey-darken-1'
}

const getStepBoxStyle = (index) => {
  const isLast = index === props.steps.length - 1
  if (isLast) {
    return {
      flex: 1,
      height: '48px',
      borderRadius: 0,
      marginRight: 0
    }
  }
  return {
    flex: 1,
    height: '48px',
    borderRadius: 0,
    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)',
    marginRight: '-1px'
  }
}

const getArrowColor = (stepStatus, index) => {
  const activeIndex = props.steps.findIndex(s => s.status === 'active')
  if (index < activeIndex) return '#4caf50'
  if (index === activeIndex) return '#37474f'
  return '#e0e0e0'
}

const getArrowStyle = () => {
  return {
    width: '24px',
    height: '48px',
    borderRadius: 0,
    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
    marginLeft: '-1px'
  }
}

const bubblePosition = computed(() => {
  const activeIndex = props.steps.findIndex(step => step.status === 'active')
  if (activeIndex === -1 || !props.statusBubble) return {}
  
  const stepWidth = 100 / props.steps.length
  const leftPosition = (activeIndex * stepWidth) + (stepWidth / 2)
  
  return {
    left: `${leftPosition}%`
  }
})
</script>
