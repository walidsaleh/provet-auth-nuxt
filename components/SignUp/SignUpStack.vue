<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '#imports'
import { useRegistration } from '@/composables/useRegistration'
import LoginFormLink from './LoginFormLink.vue'
import type { SignUpFormData } from '@/types/auth'

const { t } = useI18n()
const { setRegistrationData } = useRegistration()

const isSuccess = ref<boolean>(false)
const formData = ref<SignUpFormData | null>(null)
const errorMessage = ref<string | null>(null)

const handleFormSuccess = async (data: SignUpFormData) => {
  formData.value = data
  errorMessage.value = null
  setRegistrationData(data)
  await navigateTo('/registration/thanks', {
    replace: false,
  })
}

const handleFormError = (error: string) => {
  isSuccess.value = false
  formData.value = null
  errorMessage.value = error
}
</script>

<template>
  <provet-stack style="max-inline-size: 340px; margin: var(--n-space-xl) auto" padding="l">
    <provet-card>
      <h1 slot="header" class="n-font-size-l">{{ t('signup.title') }}</h1>
      <provet-stack>
        <p>{{ t('signup.subtitle') }}</p>
        <SignUpForm @success="handleFormSuccess" @error="handleFormError" />
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </provet-stack>
    </provet-card>
    <LoginFormLink />
  </provet-stack>
</template>
