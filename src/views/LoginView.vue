<template>
  <v-container fluid class="login-container pa-0">
    <v-row no-gutters class="fill-height">
      <!-- Left Section -->
      <v-col cols="12" md="6" class="left-section">
        <div class="left-content">
          <div class="branding">
            <v-img
              src="/favicon.ico"
              max-width="80"
              max-height="80"
              class="logo mb-2"
            ></v-img>
            <h1 class="brand-name">affa</h1>
            <p class="brand-subtitle">Intellectual Property Rights</p>
          </div>

          <div class="welcome-section">
            <h2 class="welcome-title">WELCOME</h2>
            <p class="welcome-text">
              With experience since 1999 in the field of Intellectual Property
              protection, AFFA Intellectual Property Rights has built a strong
              and reliable network worldwide.
            </p>
            <p class="welcome-text">
              Providing accurate advice combined with the latest docking system
              is also a reason why AFFA Intellectual Property Rights has been
              trusted by both local and international clients.
            </p>
          </div>

          <v-btn
            variant="text"
            color="blue"
            class="privacy-link"
            href="#"
          >
            Privacy Policy
          </v-btn>
        </div>
      </v-col>

      <!-- Right Section -->
      <v-col cols="12" md="6" class="right-section">
        <div class="login-form-wrapper">
          <!-- Logo -->
          <div class="text-center mb-6">
            <v-img
              src="/favicon.ico"
              max-width="80"
              max-height="80"
              class="mx-auto wms-icon"
            ></v-img>
          </div>

          <!-- Title -->
          <h2 class="system-title text-center">Work Management System</h2>
          <p class="system-subtitle text-center mb-8">
            AFFA Intellectual Property Rights
          </p>

          <!-- Login Form -->
          <v-form @submit.prevent="handleLogin">
            <div class="mb-6">
              <p class="form-label mb-3">Login</p>

              <v-text-field
                v-model="username"
                placeholder="Administrator"
                variant="outlined"
                density="comfortable"
                hide-details
                class="mb-3"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="**********"
                variant="outlined"
                density="comfortable"
                hide-details
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
              ></v-text-field>
            </div>

            <v-btn
              type="submit"
              color="primary"
              block
              size="large"
              class="mb-4 text-none"
            >
              Sign In
            </v-btn>

            <!-- Divider -->
            <v-divider class="my-4">
              <template v-slot:default>Or</template>
            </v-divider>

            <!-- Google Sign In -->
            <v-btn
              @click="handleGoogleLogin"
              color="#4285f4"
              block
              size="large"
              class="text-none google-btn"
              prepend-icon="mdi-google"
            >
              Sign in with Google Account
            </v-btn>

            <!-- Footer Links -->
            <div class="form-footer d-flex justify-space-between mt-6">
              <v-btn
                variant="text"
                color="blue"
                class="text-none pa-0"
                href="#"
                size="small"
              >
                Reset Password
              </v-btn>
              <v-btn
                variant="text"
                color="blue"
                class="text-none pa-0"
                href="#"
                size="small"
              >
                Create Account
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  // Implementasi login logic di sini
  console.log('Login attempt:', { username: username.value, password: password.value })
  // Redirect ke dashboard
  router.push('/dashboard')
}

const handleGoogleLogin = () => {
  // Implementasi Google OAuth di sini
  console.log('Google login attempt')
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  height: 100%;
}

.fill-height {
  min-height: 100vh;
}

.left-section {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.left-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 500px;
}

.branding {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.logo {
  border-radius: 4px;
}

.brand-name {
  font-size: 64px;
  font-weight: 300;
  margin: 0;
  color: #d4af37;
  letter-spacing: 2px;
}

.brand-subtitle {
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  opacity: 0.9;
  letter-spacing: 1px;
}

.welcome-section {
  max-width: 500px;
}

.welcome-title {
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 24px 0;
  letter-spacing: 1px;
}

.welcome-text {
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 16px 0;
  opacity: 0.9;
  font-weight: 300;
}

.privacy-link {
  justify-content: flex-start;
}

.right-section {
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.login-form-wrapper {
  width: 100%;
  max-width: 440px;
}

.wms-icon {
  border: 2px solid #2c3e50;
  border-radius: 4px;
  padding: 8px;
}

.system-title {
  font-size: 24px;
  font-weight: 600;
  margin: 16px 0 8px 0;
  color: #1a202c;
}

.system-subtitle {
  font-size: 14px;
  color: #718096;
  margin: 0;
}

.form-label {
  font-size: 16px;
  font-weight: 500;
  color: #2d3748;
}

.google-btn {
  border-radius: 24px;
}

.form-footer {
  font-size: 14px;
}

@media (max-width: 960px) {
  .left-section {
    padding: 40px 24px;
    min-height: 50vh;
  }

  .left-content {
    gap: 40px;
  }

  .brand-name {
    font-size: 48px;
  }

  .welcome-title {
    font-size: 24px;
  }

  .right-section {
    padding: 24px;
  }
}
</style>
