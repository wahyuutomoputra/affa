<template>
  <DashboardLayout>
    <v-card elevation="1">
      <v-card-text>
        <h1 class="text-h5 mb-6">Dashboard</h1>

        <!-- Trademark Project Section -->
        <v-card class="mb-6" elevation="0">
          <div 
            class="d-flex align-center px-4 py-3" 
            @click="trademarkExpanded = !trademarkExpanded" 
            style="cursor: pointer; background-color: #f5f5f5; border-radius: 4px;"
          >
            <v-icon size="small" class="mr-2">{{ trademarkExpanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
            <span style="font-weight: 600; font-size: 18px;">Trademark Project</span>
          </div>
      
      <v-expand-transition>
        <v-card-text v-show="trademarkExpanded">
          <!-- Registration by Month Chart -->
          <v-card class="mb-4" color="cyan lighten-4">
            <v-card-title class="text-subtitle-1">
              Registration by Month
            </v-card-title>
            <v-card-text>
              <div style="height: 300px;">
                <RegistrationByMonthChart />
              </div>
            </v-card-text>
          </v-card>

          <!-- Two Column Charts -->
          <v-row class="mb-4">
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Registration by Country
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <div style="height: 220px;">
                        <RegistrationByCountryChart />
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div style="height: 220px;">
                        <CountryPieChart />
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Registration by Goods/Services
                </v-card-title>
                <v-card-text>
                  <div style="height: 250px;">
                    <RegistrationByGoodsServicesChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Two Column Charts -->
          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Registration by Priority/Non Priority
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <RegistrationByPriorityChart />
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <PriorityComparisonChart />
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card color="green lighten-4">
                <v-card-title class="text-subtitle-1">
                  Registration by Progress
                </v-card-title>
                <v-card-text class="d-flex justify-center align-center">
                  <div style="height: 200px; width: 300px;">
                    <RegistrationByProgressChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-expand-transition>
    </v-card>

    <!-- Business Growth Section -->
    <v-card elevation="0">
      <div 
        class="d-flex align-center px-4 py-3" 
        @click="businessExpanded = !businessExpanded" 
        style="cursor: pointer; background-color: #f5f5f5; border-radius: 4px;"
      >
        <v-icon size="small" class="mr-2">{{ businessExpanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
        <span style="font-weight: 600; font-size: 18px;">Business Growth</span>
      </div>
      
      <v-expand-transition>
        <v-card-text v-show="businessExpanded">
          <v-row class="mb-4">
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Client Acquisition by Country & Years
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <CountryPieChart />
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <ClientAcquisitionBarChart />
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Repeat Order in 3 Years
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <RepeatOrderBarChart />
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <CountryPieChart />
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Churned Rate in 3 Years
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <CountryPieChart />
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div style="height: 200px;">
                        <ChurnedRateBarChart />
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Revenue by Years
                </v-card-title>
                <v-card-text>
                  <div style="height: 250px;">
                    <RevenueByYearsChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-expand-transition>
    </v-card>

    <!-- Project Management Section -->
    <v-card elevation="0" class="mt-6">
      <div 
        class="d-flex align-center px-4 py-3" 
        @click="projectExpanded = !projectExpanded" 
        style="cursor: pointer; background-color: #f5f5f5; border-radius: 4px;"
      >
        <v-icon size="small" class="mr-2">{{ projectExpanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
        <span style="font-weight: 600; font-size: 18px;">Project Management</span>
      </div>
      
      <v-expand-transition>
        <v-card-text v-show="projectExpanded">
          <v-row class="mb-4">
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Average Processing Time by Month (From Inst. to Cert.)
                </v-card-title>
                <v-card-text>
                  <div style="height: 250px;">
                    <AverageProcessingTimeChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Average Processing per Phase by Month
                </v-card-title>
                <v-card-text>
                  <div style="height: 250px;">
                    <AverageProcessingPerPhaseChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Backlog Amount per Phase
                </v-card-title>
                <v-card-text>
                  <div style="height: 250px;">
                    <BacklogAmountChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="text-subtitle-1">
                  Success Rate by Year
                </v-card-title>
                <v-card-text>
                  <div style="height: 250px;">
                    <SuccessRateChart />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-expand-transition>
    </v-card>

    <!-- Fidelity Section -->
    <v-card elevation="0" class="mt-6">
      <div 
        class="d-flex align-center px-4 py-3" 
        @click="fidelityExpanded = !fidelityExpanded" 
        style="cursor: pointer; background-color: #f5f5f5; border-radius: 4px;"
      >
        <v-icon size="small" class="mr-2">{{ fidelityExpanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
        <span style="font-weight: 600; font-size: 18px;">Fidelity</span>
      </div>
      
      <v-expand-transition>
        <v-card-text v-show="fidelityExpanded">
          <v-card>
            <v-card-title class="text-subtitle-1">
              Top 5 Client by Order & Payment
            </v-card-title>
            <v-card-text>
              <div style="height: 300px;">
                <Top5ClientChart />
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-expand-transition>
    </v-card>
      </v-card-text>
    </v-card>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import RegistrationByMonthChart from '@/components/charts/RegistrationByMonthChart.vue'
import RegistrationByCountryChart from '@/components/charts/RegistrationByCountryChart.vue'
import CountryPieChart from '@/components/charts/CountryPieChart.vue'
import RegistrationByGoodsChart from '@/components/charts/RegistrationByGoodsChart.vue'
import RegistrationByGoodsServicesChart from '@/components/charts/RegistrationByGoodsServicesChart.vue'
import RegistrationByPriorityChart from '@/components/charts/RegistrationByPriorityChart.vue'
import PriorityComparisonChart from '@/components/charts/PriorityComparisonChart.vue'
import RegistrationByProgressChart from '@/components/charts/RegistrationByProgressChart.vue'
import ClientAcquisitionBarChart from '@/components/charts/ClientAcquisitionBarChart.vue'
import RepeatOrderBarChart from '@/components/charts/RepeatOrderBarChart.vue'
import ChurnedRateBarChart from '@/components/charts/ChurnedRateBarChart.vue'
import RevenueByYearsChart from '@/components/charts/RevenueByYearsChart.vue'
import AverageProcessingTimeChart from '@/components/charts/AverageProcessingTimeChart.vue'
import AverageProcessingPerPhaseChart from '@/components/charts/AverageProcessingPerPhaseChart.vue'
import BacklogAmountChart from '@/components/charts/BacklogAmountChart.vue'
import SuccessRateChart from '@/components/charts/SuccessRateChart.vue'
import Top5ClientChart from '@/components/charts/Top5ClientChart.vue'

const trademarkExpanded = ref(true)
const businessExpanded = ref(true)
const projectExpanded = ref(true)
const fidelityExpanded = ref(true)
</script>
