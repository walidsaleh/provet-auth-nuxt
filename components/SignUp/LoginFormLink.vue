<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <provet-card class="n-align-center">
    {{ t('signup.registration.allreadyRegistered') }}
    <NuxtLink :to="t('general.navigation.login.url')" :title="t('general.navigation.login.title')">
      {{ t('general.navigation.login.label') }}
    </NuxtLink>
  </provet-card>
</template>
