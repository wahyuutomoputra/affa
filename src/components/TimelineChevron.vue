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

    <!-- Status Bubble - Simple Implementation -->
    <div v-if="statusBubble" class="bubble-container" :style="bubblePosition">
      <div class="vertical-line"></div>
      <div class="corner-dot"></div>
      <div class="horizontal-line"></div>
      <div class="status-bubble">{{ statusBubble }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Step {
  label: string
  status: 'active' | 'completed' | 'pending'
}

interface Props {
  steps: Step[]
  statusBubble?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  statusBubble: null
})

const getChevronClass = (status: string): string => {
  if (status === 'active') return 'chevron-active'
  if (status === 'completed') return 'chevron-completed'
  return 'chevron-pending'
}

const getChevronStyle = (index: number): Record<string, string> => {
  const isLast = index === props.steps.length - 1
  const isFirst = index === 0
  
  if (isLast) {
    return {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 25px 50%)',
      marginLeft: '-3px'
    }
  }
  
  if (isFirst) {
    return {
      clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0 100%, 25px 50%)',
      marginLeft: '0'
    }
  }
  
  return {
    clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0 100%, 25px 50%)',
    marginLeft: '-3px'
  }
}

const bubblePosition = computed((): Record<string, string> => {
  const activeIndex = props.steps.findIndex(step => step.status === 'active')
  if (activeIndex === -1 || !props.statusBubble) return { display: 'none' }
  
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
  padding-bottom: 220px;
}

.chevron-container {
  display: flex;
  align-items: stretch;
  height: 55px;
}

.chevron-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;
}

.chevron-text {
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  z-index: 1;
  line-height: 1.2;
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

.bubble-container {
  position: absolute;
  top: 55px;
  z-index: 10;
}

.vertical-line {
  width: 2px;
  height: 200px;
  background-color: #9c27b0;
  position: absolute;
  top: 0;
  left: 0;
}

.corner-dot {
  width: 10px;
  height: 10px;
  background-color: #9c27b0;
  border-radius: 50%;
  position: absolute;
  top: 199px;
  left: -4px;
}

.horizontal-line {
  width: 680px;
  height: 2px;
  background-color: #9c27b0;
  position: absolute;
  top: 204px;
  left: 6px;
}

.status-bubble {
  background-color: #9c27b0;
  color: white;
  padding: 12px 26px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  position: absolute;
  top: 186px;
  left: 680px;
}
</style>
