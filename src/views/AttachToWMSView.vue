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
              <v-card class="attach-form-card" elevation="0">
                <v-card-text class="pa-6">
                  <!-- Form Two Columns -->
                  <v-row>
                    <!-- Left Column -->
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.projectCategory"
                        label="Project Category"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-chevron-down"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.associateName"
                        label="Associate Name"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-chevron-down"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.ourReferenceNumber"
                        label="Our Reference Number"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.mailDate"
                        label="Mail Date"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-calendar"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.mailType"
                        label="Mail Type"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-chevron-down"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.mailSubject"
                        label="Mail Subject"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <div class="d-flex align-center mb-4">
                        <span class="text-body-2 mr-2">Further Next Action</span>
                        <v-radio
                          v-model="formData.furtherNextAction"
                          value="yes"
                          hide-details
                          density="compact"
                        ></v-radio>
                      </div>
                    </v-col>

                    <!-- Right Column -->
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.from"
                        label="From"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-chevron-down"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.company"
                        label="Company"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-chevron-down"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.clientReferenceNumber"
                        label="Client Reference Number"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.receiptDate"
                        label="Receipt Date"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-calendar"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.applicationType"
                        label="Application Type"
                        variant="outlined"
                        density="comfortable"
                        append-inner-icon="mdi-chevron-down"
                        readonly
                        hide-details
                        class="mb-4"
                      ></v-text-field>

                      <div class="d-flex align-center mb-4">
                        <span class="text-body-2 mr-4">Urgent</span>
                        <v-switch
                          v-model="formData.urgent"
                          hide-details
                          color="primary"
                          density="compact"
                        ></v-switch>
                      </div>

                      <v-textarea
                        v-model="formData.mailDescription"
                        label="Mail Description"
                        variant="outlined"
                        density="comfortable"
                        rows="6"
                        hide-details
                        class="mb-4"
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <v-divider class="my-6"></v-divider>

                  <!-- Application Type Selection -->
                  <div class="mb-6">
                    <div class="instruction-label mb-3">If New Instruction</div>
                    <div class="d-flex align-center ga-4">
                      <div class="d-flex align-center">
                        <span class="text-body-2 mr-3">Single Application</span>
                        <v-switch
                          v-model="formData.singleApplication"
                          hide-details
                          color="primary"
                          density="compact"
                        ></v-switch>
                      </div>
                      <div class="d-flex align-center">
                        <span class="text-body-2 mr-3">Multiple Application</span>
                        <v-switch
                          v-model="formData.multipleApplication"
                          hide-details
                          color="primary"
                          density="compact"
                        ></v-switch>
                      </div>
                    </div>
                  </div>

                  <!-- Application Details Table -->
                  <div class="mb-6">
                    <v-table class="application-table">
                      <thead>
                        <tr>
                          <th class="text-left">No</th>
                          <th class="text-left">Our Reference Number</th>
                          <th class="text-left">Class</th>
                          <th class="text-left">Priority Number</th>
                          <th class="text-left">Priority Date</th>
                          <th class="text-left">Deadline</th>
                          <th class="text-left">Country</th>
                          <th class="text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(app, index) in applications" :key="index" class="table-row">
                          <td>{{ index + 1 }}.</td>
                          <td>{{ app.ourReferenceNumber || '' }}</td>
                          <td>{{ app.class || '' }}</td>
                          <td>{{ app.priorityNumber || '' }}</td>
                          <td>{{ app.priorityDate || '' }}</td>
                          <td>{{ app.deadline || '' }}</td>
                          <td>{{ app.country || '' }}</td>
                          <td>
                            <div class="d-flex align-center ga-2">
                              <v-btn
                                icon
                                size="small"
                                variant="text"
                                color="error"
                                @click="removeApplication(index)"
                              >
                                <v-icon size="small">mdi-delete</v-icon>
                              </v-btn>
                              <v-btn
                                icon
                                size="small"
                                variant="text"
                                color="primary"
                                @click="addApplication"
                              >
                                <v-icon size="small">mdi-plus</v-icon>
                              </v-btn>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>

                  <!-- File Upload Section -->
                  <div class="mb-6">
                    <div class="upload-section d-flex align-center" @click="triggerFileUpload">
                      <v-icon class="mr-2">mdi-arrow-up</v-icon>
                      <span class="text-body-2">Upload File</span>
                    </div>
                    <input
                      ref="fileInput"
                      type="file"
                      multiple
                      style="display: none;"
                      @change="handleFileUpload"
                    />
                  </div>

                  <!-- Save Button -->
                  <div class="d-flex justify-start">
                    <v-btn
                      color="primary"
                      class="text-none"
                      variant="elevated"
                      size="large"
                      @click="saveForm"
                    >
                      Save
                    </v-btn>
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
// import { useRoute } from 'vue-router' // Unused for now
import DashboardLayout from '@/layouts/DashboardLayout.vue'

interface FormData {
  projectCategory: string
  associateName: string
  ourReferenceNumber: string
  mailDate: string
  mailType: string
  mailSubject: string
  furtherNextAction: string | null
  from: string
  company: string
  clientReferenceNumber: string
  receiptDate: string
  applicationType: string
  urgent: boolean
  mailDescription: string
  singleApplication: boolean
  multipleApplication: boolean
}

interface Application {
  ourReferenceNumber: string
  class: string
  priorityNumber: string
  priorityDate: string
  deadline: string
  country: string
}

// const route = useRoute() // Unused for now, will be used when fetching mail data
const activeTab = ref<string>('mail')
const fileInput = ref<HTMLInputElement | null>(null)

const formData = ref<FormData>({
  projectCategory: 'New Project',
  associateName: 'IPP MASTER',
  ourReferenceNumber: '',
  mailDate: 'November 10, 2025',
  mailType: 'New Instruction',
  mailSubject: 'Please file new our applicaiton',
  furtherNextAction: null,
  from: 'Associate',
  company: 'PT. AFFA',
  clientReferenceNumber: 'client123567',
  receiptDate: 'November 10, 2025',
  applicationType: 'Foreign Application (LN)',
  urgent: false,
  mailDescription: '',
  singleApplication: true,
  multipleApplication: false
})

const applications = ref<Application[]>([
  {
    ourReferenceNumber: '',
    class: '',
    priorityNumber: '',
    priorityDate: '',
    deadline: '',
    country: ''
  }
])

const addApplication = (): void => {
  applications.value.push({
    ourReferenceNumber: '',
    class: '',
    priorityNumber: '',
    priorityDate: '',
    deadline: '',
    country: ''
  })
}

const removeApplication = (index: number): void => {
  if (applications.value.length > 1) {
    applications.value.splice(index, 1)
  }
}

const triggerFileUpload = (): void => {
  fileInput.value?.click()
}

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const files = target.files
  // Handle file upload logic here
  console.log('Files selected:', files)
}

const saveForm = (): void => {
  // Handle save logic here
  console.log('Form data:', formData.value)
  console.log('Applications:', applications.value)
}

onMounted(() => {
  // In a real app, fetch mail data based on route params and populate form
  // const mailId = route.params.id
  // For now, using mock data that matches the mail detail
})
</script>

<style scoped>
.attach-form-card {
  border: 1px solid #e0e0e0;
  background-color: white;
}

.application-table {
  border: 1px solid #e0e0e0;
}

.application-table thead {
  background-color: #2c3e50;
}

.application-table thead th {
  color: white;
  font-weight: 600;
  padding: 12px 16px;
}

.application-table tbody td {
  padding: 12px 16px;
}

.application-table tbody tr {
  border-bottom: 1px solid #e0e0e0;
}

.instruction-label {
  display: inline-block;
  padding: 8px 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #424242;
}

.application-table tbody tr.table-row {
  background-color: #e3f2fd;
}

.application-table tbody tr.table-row:nth-child(even) {
  background-color: #e3f2fd;
}

.application-table tbody td {
  padding: 12px 16px;
  color: #424242;
}

.upload-section {
  padding: 16px;
  border: 2px dashed #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.upload-section:hover {
  border-color: #2c3e50;
  background-color: #f5f5f5;
}
</style>

