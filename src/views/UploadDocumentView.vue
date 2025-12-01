<template>
  <DashboardLayout>
    <v-card elevation="1">
      <v-card-text class="pa-0">
        <div class="pa-4 pb-0">
          <h1 class="text-h6 mb-4">Upload Document</h1>
        </div>

        <v-divider></v-divider>

        <div class="pa-6">
          <!-- Upload Section -->
          <v-card class="mb-6" elevation="0" outlined>
            <v-card-text class="pa-6">
              <div class="text-center mb-4">
                <v-icon size="64" color="primary" class="mb-4">mdi-cloud-upload</v-icon>
                <h2 class="text-h6 mb-2">Upload Document untuk Extract</h2>
                <p class="text-body-2 text-grey-darken-1 mb-4">
                  Pilih file dokumen yang ingin di-extract (PDF, DOC, DOCX)
                </p>
              </div>

              <div class="upload-area" @click="triggerFileUpload" @dragover.prevent @drop.prevent="handleDrop">
                <input
                  ref="fileInput"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style="display: none;"
                  @change="handleFileSelect"
                />
                <div class="text-center">
                  <v-icon size="48" color="grey-lighten-1" class="mb-2">mdi-file-document</v-icon>
                  <p class="text-body-1 mb-1">
                    <span class="text-primary">Klik untuk upload</span> atau drag & drop file di sini
                  </p>
                  <p class="text-caption text-grey-darken-1">
                    Format yang didukung: PDF, DOC, DOCX
                  </p>
                </div>
              </div>

              <div v-if="selectedFile" class="mt-4">
                <v-alert type="info" variant="tonal" class="mb-4">
                  <div class="d-flex align-center justify-space-between">
                    <div>
                      <strong>File terpilih:</strong> {{ selectedFile.name }}
                      <span class="text-caption ml-2">({{ formatFileSize(selectedFile.size) }})</span>
                    </div>
                    <v-btn icon size="small" variant="text" @click="clearFile">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div>
                </v-alert>

                <div class="text-center">
                  <v-btn
                    color="primary"
                    size="large"
                    :loading="isUploading"
                    :disabled="!selectedFile || isUploading"
                    @click="uploadFile"
                    class="text-none"
                  >
                    <v-icon start>mdi-upload</v-icon>
                    Extract Document
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- Loading State -->
          <v-card v-if="isUploading" class="mb-6" elevation="0" outlined>
            <v-card-text class="pa-6 text-center">
              <v-progress-circular indeterminate color="primary" size="64" class="mb-4"></v-progress-circular>
              <p class="text-body-1">Sedang memproses dokumen...</p>
            </v-card-text>
          </v-card>

          <!-- Error State -->
          <v-card v-if="error" class="mb-6" elevation="0">
            <v-card-text class="pa-6">
              <v-alert type="error" variant="tonal">
                <strong>Error:</strong> {{ error }}
              </v-alert>
            </v-card-text>
          </v-card>

          <!-- Result Section -->
          <v-card v-if="extractedData" elevation="0" outlined>
            <v-card-title class="d-flex align-center justify-space-between">
              <span class="text-h6">Hasil Extract</span>
              <v-btn icon variant="text" @click="clearResult">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-6">
              <div v-if="extractedData.filename" class="mb-4">
                <v-chip color="success" variant="tonal" class="mb-2">
                  <v-icon start>mdi-check-circle</v-icon>
                  File: {{ extractedData.filename }}
                </v-chip>
              </div>

              <v-expansion-panels variant="accordion" class="mb-4">
                <!-- Application Data -->
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-file-document-outline</v-icon>
                    Application Data
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-simple-table>
                      <tbody>
                        <tr v-for="(value, key) in extractedData.data.application_data" :key="String(key)">
                          <td class="font-weight-bold" style="width: 200px;">{{ formatKey(String(key)) }}</td>
                          <td>{{ value }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- Mark Data -->
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-trademark</v-icon>
                    Mark Data
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-simple-table>
                      <tbody>
                        <tr v-for="(value, key) in extractedData.data.mark_data" :key="String(key)">
                          <td class="font-weight-bold" style="width: 200px;">{{ formatKey(String(key)) }}</td>
                          <td>{{ value || '-' }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- Applicant Data -->
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-account</v-icon>
                    Applicant Data
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-simple-table>
                      <tbody>
                        <tr v-for="(value, key) in extractedData.data.applicant_data" :key="String(key)">
                          <td class="font-weight-bold" style="width: 200px;">{{ formatKey(String(key)) }}</td>
                          <td>{{ value }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- Raw Data -->
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-code-json</v-icon>
                    Raw Data
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-simple-table>
                      <tbody>
                        <tr v-for="(value, key) in extractedData.data.raw_data" :key="key">
                          <td class="font-weight-bold" style="width: 200px;">{{ key }}</td>
                          <td>{{ value || '-' }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>

              <!-- JSON View -->
              <v-expansion-panels variant="accordion">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-code-tags</v-icon>
                    JSON Response
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <pre class="json-view">{{ JSON.stringify(extractedData, null, 2) }}</pre>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const isUploading = ref<boolean>(false)
const extractedData = ref<any>(null)
const error = ref<string | null>(null)

const triggerFileUpload = (): void => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    selectedFile.value = file
    error.value = null
    extractedData.value = null
  }
}

const handleDrop = (event: DragEvent): void => {
  event.preventDefault()
  const file = event.dataTransfer?.files[0]
  if (file) {
    selectedFile.value = file
    error.value = null
    extractedData.value = null
  }
}

const clearFile = (): void => {
  selectedFile.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const clearResult = (): void => {
  extractedData.value = null
  error.value = null
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

const formatKey = (key: string): string => {
  return key
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const uploadFile = async (): Promise<void> => {
  if (!selectedFile.value) return

  isUploading.value = true
  error.value = null
  extractedData.value = null

  try {
    const formData = new FormData()
    formData.append('file', selectedFile.value)

    // Gunakan proxy /api untuk menghindari CORS issue di development
    const apiUrl = 'https://ekstrak-gold.vercel.app/extract'
    
    // Tambahkan headers jika diperlukan
    const headers: Record<string, string> = {}
    
    // Jika ada API key di environment variable
    const apiKey = import.meta.env.VITE_API_KEY
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`
      // atau headers['X-API-Key'] = apiKey
    }
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      headers: headers,
      body: formData
    })

    // Cek apakah response berhasil
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('Response data:', data)

    if (data.success) {
      extractedData.value = data
    } else {
      error.value = data.message || 'Gagal mengextract dokumen'
    }
  } catch (err) {
    console.error('Upload error:', err)
    
    // Pesan error yang lebih deskriptif
    const errorMessage = err instanceof Error ? err.message : String(err)
    if (errorMessage === 'Failed to fetch') {
      error.value = 'Gagal terhubung ke server. Kemungkinan:\n• CORS policy blocked\n• API server tidak aktif\n• Koneksi internet bermasalah'
    } else if (errorMessage.includes('HTTP error')) {
      error.value = `Server error: ${errorMessage}`
    } else {
      error.value = errorMessage || 'Terjadi kesalahan saat mengupload file'
    }
  } finally {
    isUploading.value = false
  }
}
</script>

<style scoped>
.upload-area {
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  padding: 48px 24px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fafafa;
}

.upload-area:hover {
  border-color: #2c3e50;
  background-color: #f5f5f5;
}

.json-view {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.5;
  max-height: 400px;
  overflow-y: auto;
}
</style>

