<template>
  <DashboardLayout>
    <v-card elevation="1">
      <v-card-text class="pa-0">
        <div class="pa-4 pb-0 d-flex align-center justify-space-between">
          <h1 class="text-h6 mb-0">Trademark - Portfolio</h1>
          <v-text-field
            v-model="searchKeyword"
            placeholder="Enter Keywords..."
            density="compact"
            variant="outlined"
            append-inner-icon="mdi-magnify"
            hide-details
            style="max-width: 280px;"
          ></v-text-field>
        </div>

        <v-tabs v-model="activeTab" color="primary" height="48" class="px-4">
          <v-tab value="portfolio" class="text-none">Portfolio</v-tab>
          <v-tab value="new-instruction" class="text-none">New Instruction</v-tab>
          <v-tab value="application-filed" class="text-none">Application Filed</v-tab>
          <v-tab value="publication" class="text-none">Publication</v-tab>
          <v-tab value="substantive" class="text-none">Substantive</v-tab>
          <v-tab value="decision" class="text-none">Decision</v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <v-window v-model="activeTab">
          <v-window-item value="portfolio">
            <div class="pa-4">
              <!-- Advance Search Section -->
              <div class="advance-search-wrapper mb-4">
                <!-- Header -->
                <div 
                  class="advance-search-header d-flex align-center justify-space-between pa-3"
                  @click="toggleAdvanceSearch"
                  style="cursor: pointer;"
                >
                  <div class="d-flex align-center">
                    <span class="text-body-2 text-grey-darken-1">Advance Search</span>
                    <v-icon size="small" class="ml-1">{{ advanceSearchExpanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
                  </div>
                  <div v-if="advanceSearchExpanded" class="d-flex align-center ga-2">
                    <v-btn icon size="small" variant="text" color="success">
                      <v-icon size="small">mdi-file-excel</v-icon>
                    </v-btn>
                    <v-btn icon size="small" variant="text" color="error">
                      <v-icon size="small">mdi-file-pdf-box</v-icon>
                    </v-btn>
                  </div>
                </div>

                <v-divider v-if="advanceSearchExpanded"></v-divider>

                <!-- Content -->
                <v-expand-transition>
                  <div v-show="advanceSearchExpanded" class="advance-search-content pa-3">
                    <div class="d-flex align-center flex-wrap ga-2">
                      <v-text-field
                        v-model="searchField1"
                        density="compact"
                        variant="outlined"
                        hide-details
                        style="max-width: 150px;"
                      ></v-text-field>
                      
                      <v-btn
                        density="compact"
                        variant="outlined"
                        prepend-icon="mdi-calendar"
                        class="text-none"
                        style="max-width: 120px;"
                      >
                        Between
                      </v-btn>
                      
                      <v-text-field
                        v-model="searchDate1"
                        density="compact"
                        variant="outlined"
                        append-inner-icon="mdi-calendar"
                        hide-details
                        readonly
                        style="max-width: 150px;"
                      ></v-text-field>
                      
                      <v-text-field
                        v-model="searchDate2"
                        density="compact"
                        variant="outlined"
                        append-inner-icon="mdi-calendar"
                        hide-details
                        readonly
                        style="max-width: 150px;"
                      ></v-text-field>
                      
                      <v-select
                        v-model="searchField2"
                        :items="[]"
                        density="compact"
                        variant="outlined"
                        append-inner-icon="mdi-chevron-down"
                        hide-details
                        style="max-width: 150px;"
                      ></v-select>
                      
                      <v-select
                        v-model="searchField3"
                        :items="[]"
                        density="compact"
                        variant="outlined"
                        append-inner-icon="mdi-chevron-down"
                        hide-details
                        style="max-width: 150px;"
                      ></v-select>
                      
                      <v-btn
                        density="compact"
                        variant="outlined"
                        prepend-icon="mdi-calendar"
                        class="text-none"
                        style="max-width: 120px;"
                      >
                        Between
                      </v-btn>
                      
                      <v-btn
                        density="compact"
                        variant="outlined"
                        prepend-icon="mdi-calendar"
                        class="text-none"
                        style="max-width: 120px;"
                      >
                        Between
                      </v-btn>
                      
                      <v-select
                        v-model="searchField4"
                        :items="[]"
                        density="compact"
                        variant="outlined"
                        append-inner-icon="mdi-chevron-down"
                        hide-details
                        style="max-width: 150px;"
                      ></v-select>
                      
                      <v-text-field
                        v-model="searchField5"
                        density="compact"
                        variant="outlined"
                        hide-details
                        style="max-width: 150px;"
                      ></v-text-field>
                      
                      <v-select
                        v-model="searchField6"
                        :items="[]"
                        density="compact"
                        variant="outlined"
                        append-inner-icon="mdi-chevron-down"
                        hide-details
                        style="max-width: 150px;"
                      ></v-select>
                    </div>
                  </div>
                </v-expand-transition>
              </div>

              <!-- Data Table -->
              <div class="trademark-table-wrapper">
                <v-table class="trademark-table" density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">No</th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Ref. Number
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Receipt Date
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Associate
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Order Type
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Trademark
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Class
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Filing Date
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Deadline
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          S/M
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          PIC
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left">
                        <div class="d-flex align-center">
                          Status
                          <v-icon size="small" class="ml-1">mdi-sort</v-icon>
                        </div>
                      </th>
                      <th class="text-left"></th>
                      <th class="text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in trademarkData"
                      :key="index"
                      :class="{ 'table-row-even': index % 2 === 1 }"
                      class="table-row"
                      @click="goToTrademarkDetail(item.refNumber)"
                    >
                      <td>{{ item.no }}</td>
                      <td>{{ item.refNumber }}</td>
                      <td>{{ item.receiptDate }}</td>
                      <td>{{ item.associate }}</td>
                      <td>{{ item.orderType }}</td>
                      <td>{{ item.trademark }}</td>
                      <td>{{ item.class }}</td>
                      <td>{{ item.filingDate }}</td>
                      <td :class="{ 'text-error': item.deadlineUrgent }">{{ item.deadline }}</td>
                      <td>{{ item.sm }}</td>
                      <td>{{ item.pic }}</td>
                      <td>{{ item.status }}</td>
                      <td @click.stop>
                        <v-btn icon size="small" variant="text">
                          <v-icon size="small">mdi-dots-vertical</v-icon>
                        </v-btn>
                      </td>
                      <td @click.stop>
                        <v-btn icon size="small" variant="text" @click="goToTrademarkDetail(item.refNumber)">
                          <v-icon size="small">mdi-chevron-right</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>

              <!-- Pagination -->
              <div class="d-flex justify-end align-center mt-4 ga-2">
                <span class="text-body-2 mr-2">Show</span>
                <v-select
                  v-model="itemsPerPage"
                  :items="[25, 50, 100]"
                  density="compact"
                  variant="outlined"
                  hide-details
                  style="max-width: 80px;"
                ></v-select>
                <v-btn icon size="small" variant="text" density="compact">
                  <v-icon size="small">mdi-chevron-double-left</v-icon>
                </v-btn>
                <v-btn icon size="small" variant="text" density="compact">
                  <v-icon size="small">mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  v-for="page in 3"
                  :key="page"
                  size="small"
                  variant="text"
                  :color="currentPage === page ? 'primary' : ''"
                >
                  {{ page }}
                </v-btn>
                <v-btn icon size="small" variant="text" density="compact">
                  <v-icon size="small">mdi-chevron-right</v-icon>
                </v-btn>
                <v-btn icon size="small" variant="text" density="compact">
                  <v-icon size="small">mdi-chevron-double-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-window-item>

          <v-window-item value="new-instruction">
            <div class="pa-8 text-center">
              <p class="text-grey">New Instruction - Coming Soon</p>
            </div>
          </v-window-item>

          <v-window-item value="application-filed">
            <div class="pa-8 text-center">
              <p class="text-grey">Application Filed - Coming Soon</p>
            </div>
          </v-window-item>

          <v-window-item value="publication">
            <div class="pa-8 text-center">
              <p class="text-grey">Publication - Coming Soon</p>
            </div>
          </v-window-item>

          <v-window-item value="substantive">
            <div class="pa-8 text-center">
              <p class="text-grey">Substantive - Coming Soon</p>
            </div>
          </v-window-item>

          <v-window-item value="decision">
            <div class="pa-8 text-center">
              <p class="text-grey">Decision - Coming Soon</p>
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
const activeTab = ref('portfolio')
const searchKeyword = ref('')
const itemsPerPage = ref(25)
const currentPage = ref(1)
const advanceSearchExpanded = ref(false)
const searchField1 = ref('')
const searchDate1 = ref('')
const searchDate2 = ref('')
const searchField2 = ref('')
const searchField3 = ref('')
const searchField4 = ref('')
const searchField5 = ref('')
const searchField6 = ref('')

const toggleAdvanceSearch = () => {
  advanceSearchExpanded.value = !advanceSearchExpanded.value
}

const goToTrademarkDetail = (refNumber) => {
  router.push(`/trademark/${refNumber}`)
}

const trademarkData = ref([
  {
    no: 1,
    refNumber: 'REF001',
    receiptDate: '01-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark A',
    class: '25',
    filingDate: '05-11-2025',
    deadline: '10-11-2035',
    deadlineUrgent: true,
    sm: 'S',
    pic: 'John Doe',
    status: 'Active'
  },
  {
    no: 2,
    refNumber: 'REF002',
    receiptDate: '02-11-2025',
    associate: 'IPP MASTER',
    orderType: 'Renewal',
    trademark: 'Trademark B',
    class: '35',
    filingDate: '06-11-2025',
    deadline: '10-12-2035',
    deadlineUrgent: true,
    sm: 'M',
    pic: 'Jane Smith',
    status: 'Pending'
  },
  {
    no: 3,
    refNumber: 'REF003',
    receiptDate: '03-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark C',
    class: '42',
    filingDate: '07-11-2025',
    deadline: '09-11-2034',
    deadlineUrgent: true,
    sm: 'S',
    pic: 'Bob Johnson',
    status: 'Active'
  },
  {
    no: 4,
    refNumber: 'REF004',
    receiptDate: '04-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark D',
    class: '9',
    filingDate: '08-11-2025',
    deadline: '15-11-2035',
    deadlineUrgent: false,
    sm: 'M',
    pic: 'Alice Brown',
    status: 'Active'
  },
  {
    no: 5,
    refNumber: 'REF005',
    receiptDate: '05-11-2025',
    associate: 'IPP MASTER',
    orderType: 'Renewal',
    trademark: 'Trademark E',
    class: '16',
    filingDate: '09-11-2025',
    deadline: '20-11-2035',
    deadlineUrgent: false,
    sm: 'S',
    pic: 'Charlie Wilson',
    status: 'Pending'
  },
  {
    no: 6,
    refNumber: 'REF006',
    receiptDate: '06-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark F',
    class: '30',
    filingDate: '10-11-2025',
    deadline: '25-11-2035',
    deadlineUrgent: false,
    sm: 'M',
    pic: 'Diana Lee',
    status: 'Active'
  },
  {
    no: 7,
    refNumber: 'REF007',
    receiptDate: '07-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark G',
    class: '5',
    filingDate: '11-11-2025',
    deadline: '30-11-2035',
    deadlineUrgent: false,
    sm: 'S',
    pic: 'Edward Chen',
    status: 'Active'
  },
  {
    no: 8,
    refNumber: 'REF008',
    receiptDate: '08-11-2025',
    associate: 'IPP MASTER',
    orderType: 'Renewal',
    trademark: 'Trademark H',
    class: '12',
    filingDate: '12-11-2025',
    deadline: '05-12-2035',
    deadlineUrgent: false,
    sm: 'M',
    pic: 'Fiona Taylor',
    status: 'Pending'
  },
  {
    no: 9,
    refNumber: 'REF009',
    receiptDate: '09-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark I',
    class: '18',
    filingDate: '13-11-2025',
    deadline: '10-12-2035',
    deadlineUrgent: false,
    sm: 'S',
    pic: 'George Martinez',
    status: 'Active'
  },
  {
    no: 10,
    refNumber: 'REF010',
    receiptDate: '10-11-2025',
    associate: 'IPP MASTER',
    orderType: 'New',
    trademark: 'Trademark J',
    class: '28',
    filingDate: '14-11-2025',
    deadline: '15-12-2035',
    deadlineUrgent: false,
    sm: 'M',
    pic: 'Helen Davis',
    status: 'Active'
  }
])
</script>

<style scoped>
.trademark-table-wrapper {
  border: 1px solid #e0e0e0;
  overflow-x: auto;
}

.trademark-table {
  background-color: white;
}

.trademark-table thead {
  background-color: #2c3e50;
}

.trademark-table thead th {
  color: white;
  font-weight: 600;
  padding: 12px 16px;
  white-space: nowrap;
}

.trademark-table tbody td {
  padding: 12px 16px;
  white-space: nowrap;
}

.trademark-table tbody tr.table-row {
  background-color: white;
}

.trademark-table tbody tr.table-row-even {
  background-color: #e3f2fd;
}

.trademark-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.advance-search-wrapper {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
}

.advance-search-header {
  background-color: #f5f5f5;
  border-radius: 4px 4px 0 0;
}

.advance-search-header:hover {
  background-color: #eeeeee;
}

.advance-search-content {
  background-color: white;
}
</style>

