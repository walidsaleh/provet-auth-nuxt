<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>

<template>
  <provet-card class="n-align-center">
    {{ t('login.notRegistered') }}
    <NuxtLink :to="t('general.navigation.signup.url')" :title="t('general.navigation.signup.title')">
      {{ t('general.navigation.signup.label') }}
    </NuxtLink>
  </provet-card>
</template>
