<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { SIGNUP_LOADING_TIMEOUT } from '@/constants'

import type { SignUpFormData, SignUpFormErrors } from '@/types/auth'
import type { ToastMessage } from '@/types/toast'

const emit = defineEmits(['success', 'error'])

const { t } = useI18n()

const displayToast = inject<(toast: ToastMessage) => void>('displayToast')

const signUpForm = ref<SignUpFormData>({
  email: '',
  password: '',
  receiveUpdates: false,
})

const signUpFormErrors = ref<SignUpFormErrors>({
  email: undefined,
  password: undefined,
})

const showPassword = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const passwordType = computed(() => (showPassword.value ? 'text' : 'password'))

const emailTrimmed = computed(() => signUpForm.value.email.trim())
const passwordTrimmed = computed(() => signUpForm.value.password.trim())

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const toggleReceiveUpdates = () => {
  signUpForm.value.receiveUpdates = !signUpForm.value.receiveUpdates
}

const validateEmail = () => {
  signUpFormErrors.value.email = emailTrimmed.value
    ? undefined
    : t('signup.validation.emailRequired')
  validateForm()
}

const validatePassword = () => {
  signUpFormErrors.value.password = passwordTrimmed.value
    ? undefined
    : t('signup.validation.passwordRequired')
  validateForm()
}

const isValidForm = ref<boolean>(false)

const validateForm = () => {
  isValidForm.value =
    !signUpFormErrors.value.email &&
    !signUpFormErrors.value.password &&
    !!emailTrimmed.value &&
    !!passwordTrimmed.value &&
    !isLoading.value
}

const handleSubmit = async () => {
  if (!isValidForm.value) return

  showPassword.value = false
  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, SIGNUP_LOADING_TIMEOUT))
    displayToast?.({
      message: t('signup.registration.success'),
      variant: 'default',
    })
    emit('success', signUpForm.value)
  } catch (error) {
    const errorMessage = (error as Error).message || t('signup.registration.error')
    displayToast?.({
      message: errorMessage,
      variant: 'danger',
    })
    emit('error', errorMessage)
  } finally {
    isLoading.value = false
  }
}

defineExpose({
  isValidForm,
  passwordType,
  signUpForm,
  signUpFormErrors,
  validateEmail,
  validatePassword,
  showPassword,
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <provet-stack>
      <provet-input
        id="signup-email-input"
        v-model="signUpForm.email"
        :label="t('signup.email.label')"
        :placeholder="t('signup.email.placeholder')"
        expand
        type="email"
        required
        :disabled="isLoading"
        :error="signUpFormErrors.email"
        @blur="validateEmail"
      ></provet-input>

      <provet-input
        id="signup-password-input"
        v-model="signUpForm.password"
        :label="t('signup.password.label')"
        :placeholder="t('signup.password.placeholder')"
        expand
        :type="passwordType"
        required
        :disabled="isLoading"
        :error="signUpFormErrors.password"
        @blur="validatePassword"
      >
        <provet-icon
          v-show="signUpForm.password"
          class="unmask-icon"
          :name="showPassword ? 'interface-edit-off' : 'interface-edit-on'"
          size="s"
          slot="end"
          @click="togglePasswordVisibility"
        ></provet-icon>
      </provet-input>

      <provet-toggle
        id="signup-keep-updated-toggle"
        :checked="signUpForm.receiveUpdates"
        :label="t('signup.keepUpdated')"
        size="s"
        :disabled="isLoading"
        @change="toggleReceiveUpdates"
      ></provet-toggle>

      <provet-button
        type="submit"
        expand
        variant="primary"
        :disabled="!isValidForm"
        :loading="isLoading"
      >
        {{ isLoading ? t('signup.submitButton.loading') : t('signup.submitButton.default') }}
      </provet-button>
    </provet-stack>
  </form>
</template>

<style scoped>
.unmask-icon {
  cursor: pointer;
  pointer-events: all;
}
</style>
