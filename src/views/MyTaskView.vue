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
          <!-- Mail Management Tab -->
          <v-window-item value="mail">
            <div class="d-flex mail-container">
              <!-- Sidebar -->
              <div class="sidebar">
                <div class="pa-3">
                  <v-list bg-color="transparent" class="pa-0">
                    <v-list-item
                      v-for="folder in mailFolders"
                      :key="folder"
                      :value="folder"
                      :active="selectedFolder === folder"
                      @click="selectedFolder = folder"
                      class="mail-folder-item"
                      :class="{ 'active-folder': selectedFolder === folder }"
                    >
                      <v-list-item-title class="text-white">{{ folder }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </div>

              <!-- Main Content -->
              <div class="flex-grow-1 pa-4 mail-content">
                <div class="mb-4">
                  <div class="d-flex align-center mb-2 flex-wrap ga-2">
                    <v-btn
                      prepend-icon="mdi-pencil"
                      color="primary"
                      class="text-none"
                      variant="elevated"
                      size="small"
                    >
                      Compose
                    </v-btn>
                    
                  <v-btn
                    prepend-icon="mdi-refresh"
                    color="primary"
                    class="text-none"
                    variant="elevated"
                      size="small"
                  >
                    Refresh
                  </v-btn>
                  
                  <v-text-field
                    v-model="searchKeyword"
                    placeholder="Enter Keywords..."
                    density="compact"
                    variant="outlined"
                    append-inner-icon="mdi-magnify"
                    hide-details
                      class="search-field"
                  ></v-text-field>

                  <v-spacer></v-spacer>

                  <v-btn
                      prepend-icon="mdi-pencil"
                    color="primary"
                    class="text-none"
                    variant="elevated"
                      size="small"
                  >
                    Create Mail from Another
                  </v-btn>
                  </div>
                  
                  <div class="d-flex justify-end mt-1">
                    <div class="d-flex align-center pagination-controls">
                      <span class="text-caption mr-2 text-grey-darken-1">10 -1000</span>
                      <v-btn icon size="small" variant="text" density="compact" color="grey-darken-1">
                        <v-icon size="small">mdi-chevron-left</v-icon>
                    </v-btn>
                      <v-btn icon size="small" variant="text" density="compact" color="grey-darken-1">
                        <v-icon size="small">mdi-chevron-right</v-icon>
                    </v-btn>
                    </div>
                  </div>
                </div>

                <div class="mail-table-wrapper">
                  <v-table class="mail-table" density="compact">
                  <tbody>
                    <tr
                      v-for="(mail, index) in mails"
                      :key="index"
                      class="mail-row"
                        @click="openMailDetail(mail)"
                    >
                        <td style="width: 40px;" @click.stop>
                          <v-checkbox hide-details density="compact" color="primary"></v-checkbox>
                      </td>
                      <td style="width: 180px;">
                          <span class="font-weight-bold text-body-2">{{ mail.from }}</span>
                      </td>
                      <td>
                          <span class="text-body-2">{{ mail.subject }}</span>
                      </td>
                      <td style="width: 180px;" class="text-right">
                          <span class="text-body-2 text-grey-darken-1">{{ mail.date }}</span>
                      </td>
                      <td style="width: 40px;">
                          <v-btn icon size="small" variant="text" density="compact">
                            <v-icon size="small">mdi-chevron-right</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                      <!-- Empty rows untuk spacing -->
                      <tr v-for="i in 5" :key="'empty-' + i" class="empty-row">
                        <td colspan="5" style="height: 48px; border-bottom: 1px solid #e0e0e0;"></td>
                      </tr>
                  </tbody>
                </v-table>
                </div>
              </div>
            </div>
          </v-window-item>

          <!-- Task Management Tab -->
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

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const router = useRouter()
const activeTab = ref('mail')
const selectedFolder = ref('Inbox')
const searchKeyword = ref('')

const mailFolders = ['Inbox', 'Sent', 'Drafts', 'Spam']

const mails = [
  {
    id: 1,
    from: 'IPP MASTER',
    subject: 'Please file our new applicaiton',
    date: 'November 10, 2025',
    body: 'Please file our new application for trademark registration.'
  }
]

const openMailDetail = (mail) => {
  router.push(`/my-task/mail/${mail.id}`)
}
</script>

<style scoped>
.mail-container {
  min-height: calc(100vh - 280px);
  height: calc(100vh - 280px);
}

.sidebar {
  width: 210px;
  background-color: #3f5167;
  color: white;
  border-right: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.mail-folder-item {
  padding: 8px 16px !important;
  margin-bottom: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.mail-folder-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.mail-folder-item.active-folder {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.mail-content {
  background-color: #ffffff;
  overflow-y: auto;
}

.search-field {
  max-width: 280px;
}

.pagination-controls {
  gap: 4px;
}

.mail-table-wrapper {
  border: 1px solid #e0e0e0;
  background-color: white;
}

.mail-table {
  background-color: white;
}

.mail-row {
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s;
}

.mail-row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.mail-row td {
  padding: 12px 16px;
}

.empty-row {
  border-bottom: 1px solid #e0e0e0;
}

.empty-row:hover {
  background-color: transparent !important;
  cursor: default;
}
</style>
