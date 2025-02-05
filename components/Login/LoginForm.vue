<template>
  <form @submit.prevent="handleSubmit">
    <provet-stack>
      <provet-input
        id="login-email-input"
        v-model="loginForm.email"
        :label="t('login.email.label')"
        :placeholder="t('login.email.placeholder')"
        expand
        type="email"
        required
        :disabled="isLoading"
        :error="loginFormErrors.email"
      />

      <provet-button
        type="submit"
        variant="primary"
        :disabled="!isValidForm"
        :loading="isLoading"
      >
        {{ isLoading ? t('login.loginButton.loading') : t('login.loginButton.default') }}
      </provet-button>
    </provet-stack>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { LOADING_TIMEOUT } from '@/constants'
import type { LoginFormData, LoginFormErrors } from '@/types/auth'
import type { ToastMessage } from '@/types/toast'

const emit = defineEmits(['success', 'error'])
const { t } = useI18n()

const loginForm = ref<LoginFormData>({
  email: '',
})

const loginFormErrors = ref<LoginFormErrors>({
  email: undefined,
})

const isLoading = ref<boolean>(false)

const emailTrimmed = computed(() => loginForm.value.email.trim())

// validation for the email, not empty for now
const isValidForm = computed(() => emailTrimmed.value)

const handleSubmit = async () => {
  if (!isValidForm.value) return

  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, LOADING_TIMEOUT))

    emit('success', {
      email: emailTrimmed.value,
    })
  } catch (error) {
    const errorMessage = (error as Error).message || t('login.validation.emailRequired')
    displayToast?.({
      message: errorMessage,
      variant: 'danger',
    })
    emit('error', errorMessage)
  } finally {
    isLoading.value = false
  }
}

const displayToast = inject<(toast: ToastMessage) => void>('displayToast')
</script>
