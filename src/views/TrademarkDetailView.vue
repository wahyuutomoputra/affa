<template>
  <DashboardLayout>
    <v-card elevation="1">
      <v-card-text class="pa-0">
        <div class="pa-4 pb-0">
          <h1 class="text-h6 mb-4">Trademark - Overview Ref Number: {{ refNumber }}</h1>
        </div>

        <v-tabs v-model="activeTab" color="primary" height="48" class="px-4">
          <v-tab value="status" class="text-none">Status</v-tab>
          <v-tab value="details" class="text-none">Details</v-tab>
          <v-tab value="documents" class="text-none">Documents</v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <v-window v-model="activeTab">
          <v-window-item value="status">
            <div class="status-container">
              <div class="status-header">
                <span class="status-label">Status</span>
              </div>
              <div class="status-content-wrapper">
                <TimelineChevron 
                  :steps="statusStages" 
                  :status-bubble="currentStatusBubble"
                />
              </div>
            </div>
          </v-window-item>

          <v-window-item value="details">
            <div class="pa-8 text-center">
              <p class="text-grey">Details - Coming Soon</p>
            </div>
          </v-window-item>

          <v-window-item value="documents">
            <div class="pa-8 text-center">
              <p class="text-grey">Documents - Coming Soon</p>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </DashboardLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import TimelineChevron from '@/components/TimelineChevron.vue'

const route = useRoute()
const activeTab = ref('status')
const refNumber = ref('')

const statusStages = ref([
  {
    label: 'New Instruction',
    status: 'active'
  },
  {
    label: 'Application Filed',
    status: 'pending'
  },
  {
    label: 'Publication',
    status: 'pending'
  },
  {
    label: 'Substantive Examination',
    status: 'pending'
  },
  {
    label: 'Registered',
    status: 'pending'
  }
])

const currentStatusBubble = computed(() => {
  const activeStage = statusStages.value.find(stage => stage.status === 'active')
  if (activeStage?.label === 'New Instruction') {
    return 'Waiting for final instruction'
  }
  return null
})


onMounted(() => {
  // Get ref number from route params
  refNumber.value = route.params.refNumber || route.query.refNumber || 'xxxxxxxx'
})
</script>

<style scoped>
.status-container {
  position: relative;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0;
  margin: 0;
}

.status-header {
  background-color: #e0e0e0;
  padding: 10px 16px;
  border-radius: 4px 4px 0 0;
}

.status-label {
  font-size: 13px;
  font-weight: 600;
  color: #212121;
}

.status-content-wrapper {
  padding: 20px;
  background-color: white;
  border-radius: 0 0 4px 4px;
}
</style>


