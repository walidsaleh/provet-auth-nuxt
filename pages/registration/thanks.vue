<script setup lang="ts">
import { useRegistration } from '@/composables/useRegistration'

const { t } = useI18n()
const { registrationData } = useRegistration()

// Redirect if no registration data
if (!registrationData.value) {
  await navigateTo('/signup')
}
</script>

<template>
  <provet-stack style="max-inline-size: 340px; margin: var(--n-space-xl) auto" padding="l">
    <provet-banner shadow variant="success">
      {{ t('signup.registration.thanks') }}
      <template v-if="registrationData?.receiveUpdates">
        <br />
        {{ t('signup.registration.willUpdate') }}
      </template>
    </provet-banner>
    <provet-card class="n-align-center">
      <NuxtLink :to="t('general.navigation.home.url')" :title="t('general.navigation.home.title')">
        {{ t('general.navigation.home.label') }}
      </NuxtLink>
    </provet-card>
  </provet-stack>
</template>
