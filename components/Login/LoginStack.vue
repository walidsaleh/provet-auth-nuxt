<script setup lang="ts">
import SignUpFormLink from './SignUpFormLink.vue'
import LoginForm from './LoginForm.vue'

const { t } = useI18n()
</script>

<template>
  <provet-stack style="margin: var(--n-space-xl) auto" padding="l">
    <provet-card>
      <h1 slot="header" class="n-font-size-l">{{ t('login.title') }}</h1>
      <provet-stack>
        <p>{{ t('login.subtitle') }}</p>
        <LoginForm />
      </provet-stack>
    </provet-card>
    <SignUpFormLink />
  </provet-stack>
</template>
