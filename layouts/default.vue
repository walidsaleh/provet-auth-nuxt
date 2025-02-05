<template>
  <main class="n-stack-horizontal">
    <provet-stack
      class="sign-up-stack"
      direction="vertical"
      align-items="center"
      justify-content="center"
    >
      <img
        class="provet-cloud-logo"
        :alt="t('general.layout.logo.alt')"
        src="/provet_cloud_new_logo_570x80.png"
      />
      <slot />
    </provet-stack>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>

<style scoped>
.sign-up-stack {
  inline-size: 90%;
  max-inline-size: 600px;
  margin: var(--n-space-xl) auto;
  row-gap: var(--n-space-xl);
}

.provet-cloud-logo {
  max-block-size: var(--n-space-xl);
}
</style>
