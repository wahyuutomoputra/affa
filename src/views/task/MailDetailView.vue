<template>
  <DashboardLayout>
    <v-card elevation="1">
      <v-card-text class="pa-0">
        <div class="pa-4 pb-0">
          <h1 class="text-h6 mb-4">Trademark - My Task</h1>
        </div>

        <v-tabs v-model="activeTab" color="primary" height="48" class="px-4">
          <v-tab value="mail" class="text-none">Mail Management</v-tab>
          <v-tab value="task" class="text-none">
            Task Management
            <span class="text-red ml-1">(1)</span>
          </v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <v-window v-model="activeTab">
          <v-window-item value="mail">
            <div class="pa-6">
              <v-card class="mail-detail-card" elevation="0">
                <v-card-text class="pa-6">
                  <div class="d-flex justify-space-between align-start mb-4">
                    <div class="flex-grow-1">
                      <div class="mb-3">
                        <span class="text-body-2 text-grey-darken-1">From : </span>
                        <span class="text-body-1 font-weight-bold">{{ mailData.from }}</span>
                      </div>
                      <div>
                        <span class="text-body-2 text-grey-darken-1">Subject Email : </span>
                        <span class="text-body-1">{{ mailData.subject }}</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="d-flex align-center justify-end mb-2 attach-wms" @click="goToAttachWMS">
                        <v-icon class="mr-2">mdi-file-import</v-icon>
                        <span class="text-body-2">Attach to WMS</span>
                      </div>
                      <div class="text-body-2 text-grey-darken-1">{{ mailData.date }}</div>
                    </div>
                  </div>

                  <v-divider class="my-4"></v-divider>

                  <div class="mail-body-area">
                    <div class="text-center text-grey-darken-1 mb-2">Body Email</div>
                    <div class="text-body-2" style="white-space: pre-wrap; min-height: 400px;">
                      {{ mailData.body || 'No message content available.' }}
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-window-item>

          <v-window-item value="task">
            <div class="pa-8 text-center">
              <p class="text-grey">Task Management - Coming Soon</p>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

interface MailData {
  from: string
  subject: string
  date: string
  body: string
}

const route = useRoute()
const router = useRouter()
const activeTab = ref<string>('mail')

const mailData = ref<MailData>({
  from: 'IPP MASTER',
  subject: 'Please file our new applicaiton',
  date: 'November 10, 2025',
  body: 'Please file our new application for trademark registration.'
})

const goToAttachWMS = (): void => {
  router.push(`/my-task/mail/${route.params.id}/attach`)
}

onMounted(() => {
  // In a real app, fetch mail data based on route params
  const mailId = route.params.id
  // For now, using mock data
})
</script>

<style scoped>
.mail-detail-card {
  border: 1px solid #e0e0e0;
  background-color: white;
}

.mail-body-area {
  min-height: 400px;
  padding: 16px;
  background-color: #fafafa;
  border-radius: 4px;
}

.attach-wms {
  cursor: pointer;
}

.attach-wms:hover {
  opacity: 0.7;
}
</style>

