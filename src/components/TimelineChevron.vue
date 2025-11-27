<template>
  <div class="timeline-wrapper">
    <!-- Timeline Chevrons -->
    <div class="chevron-container">
      <template v-for="(step, index) in steps" :key="index">
        <div 
          class="chevron-item"
          :class="getChevronClass(step.status)"
          :style="getChevronStyle(index)"
        >
          <span class="chevron-text">{{ step.label }}</span>
        </div>
      </template>
    </div>

    <!-- Status Bubble -->
    <div v-if="statusBubble" :style="bubblePosition" class="bubble-wrapper">
      <div class="bubble-line-vertical"></div>
      <div class="bubble-dot"></div>
      <div class="bubble-horizontal-group">
        <div class="bubble-line-horizontal"></div>
        <div class="bubble-text">{{ statusBubble }}</div>
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

const getChevronClass = (status) => {
  if (status === 'active') return 'chevron-active'
  if (status === 'completed') return 'chevron-completed'
  return 'chevron-pending'
}

const getChevronStyle = (index) => {
  const isLast = index === props.steps.length - 1
  if (isLast) {
    return {
      clipPath: 'none',
      marginLeft: '-2px'
    }
  }
  return {
    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)',
    marginLeft: index === 0 ? '0' : '-2px'
  }
}

const bubblePosition = computed(() => {
  const activeIndex = props.steps.findIndex(step => step.status === 'active')
  if (activeIndex === -1 || !props.statusBubble) return {}
  
  const stepWidth = 100 / props.steps.length
  const leftPosition = (activeIndex * stepWidth) + (stepWidth / 2)
  
  return {
    left: `calc(${leftPosition}% - 1px)`
  }
})
</script>

<style scoped>
.timeline-wrapper {
  position: relative;
  padding-bottom: 100px;
}

.chevron-container {
  display: flex;
  align-items: stretch;
  height: 50px;
}

.chevron-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  position: relative;
}

.chevron-text {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  z-index: 1;
}

.chevron-active {
  background-color: #455a64;
  color: white;
}

.chevron-completed {
  background-color: #66bb6a;
  color: white;
}

.chevron-pending {
  background-color: #e0e0e0;
  color: #757575;
}

.bubble-wrapper {
  position: absolute;
  top: 50px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bubble-line-vertical {
  width: 2px;
  height: 35px;
  background-color: #9c27b0;
  margin-left: 0;
}

.bubble-dot {
  width: 10px;
  height: 10px;
  background-color: #9c27b0;
  border-radius: 50%;
  margin-left: -4px;
  margin-top: -2px;
  margin-bottom: -2px;
}

.bubble-horizontal-group {
  display: flex;
  align-items: center;
  margin-left: -4px;
}

.bubble-line-horizontal {
  width: 250px;
  height: 2px;
  background-color: #9c27b0;
}

.bubble-text {
  background-color: #9c27b0;
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 13px;
  white-space: nowrap;
  margin-left: -1px;
}
</style>
