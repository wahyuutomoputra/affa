<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :permanent="$vuetify.display.mdAndUp"
      color="primary"
      dark
      width="200"
    >
      <v-list>
        <v-list-item class="pa-4">
          <div class="d-flex align-center">
            <v-img src="/favicon.ico" max-width="40" max-height="40"></v-img>
            <div class="ml-3">
              <h2 class="text-accent mb-0" style="font-size: 20px; font-weight: 300; letter-spacing: 1px; line-height: 1.2;">affa</h2>
              <p class="text-caption mb-0" style="font-size: 10px; opacity: 0.8; line-height: 1.2;">Intellectual Property Rights</p>
            </div>
          </div>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          color="white"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark elevation="0">
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-chip class="ml-4">
        <v-icon start>mdi-circle</v-icon>
        Hello, Admin
      </v-chip>

      <v-btn icon class="ml-2">
        <v-avatar color="grey-lighten-1" size="32">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-6">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
  title: string
  icon: string
  to: string
}

const drawer = ref<boolean>(true)

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
  { title: 'My Task', icon: 'mdi-clipboard-text', to: '/my-task' },
  { title: 'Trademark', icon: 'mdi-trademark', to: '/trademark' },
  { title: 'Patent', icon: 'mdi-file-document', to: '/patent' },
  { title: 'Design', icon: 'mdi-palette', to: '/design' },
  { title: 'Copyrights', icon: 'mdi-copyright', to: '/copyrights' },
  { title: 'Upload Document', icon: 'mdi-cloud-upload', to: '/upload-document' },
  { title: 'Report', icon: 'mdi-chart-box', to: '/report' },
  { title: 'Master Data', icon: 'mdi-database', to: '/master-data' },
  { title: 'Logout', icon: 'mdi-logout', to: '/' },
]
</script>

<style scoped>
.text-accent {
  color: #d4af37;
}
</style>
