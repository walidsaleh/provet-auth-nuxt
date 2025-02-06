<script setup lang="ts">
import SignUpFormLink from './SignUpFormLink.vue'
import LoginForm from './LoginForm.vue'
import type { LoginFormData } from '@/types/auth'

const { t } = useI18n()

const isEmailSent = ref<boolean>(false)
const emailData = ref<string | null>(null)

const handleFormSuccess = (data: LoginFormData) => {
  isEmailSent.value = true
  emailData.value = data.email
}
</script>

<template>
  <provet-stack style="margin: var(--n-space-xl) auto" padding="l">
    <provet-card>
      <h1 slot="header" class="n-font-size-l">{{ t('login.title') }}</h1>
      <provet-stack>
        <p>{{ t('login.subtitle') }}</p>
        <provet-banner v-if="isEmailSent" shadow variant="success"
          ><b>{{ t('login.authentication.checkEmail') }}</b>
          {{ t('login.authentication.emailSent') }} {{ emailData }}</provet-banner
        >
        <LoginForm @success="handleFormSuccess" />
      </provet-stack>
    </provet-card>
    <SignUpFormLink />
  </provet-stack>
</template>
