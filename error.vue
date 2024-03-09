<script setup lang="ts">
import type { NuxtError } from '#app'
import BaseLayout from './layouts/default.vue'
const props = defineProps({
  error: Object as () => NuxtError,
})

useHead({
  title: props.error?.message,
})
const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <v-app>
    <base-layout>
      <v-container
        class="d-flex h-100 ga-5 justify-center align-center text-center flex-column"
      >
        <p class="text-h1">
          {{ error?.statusCode }}
        </p>
        <p class="text-h2">
          {{ error?.message }}
        </p>
        <v-btn size="large" @click="handleError"> На главную </v-btn>
      </v-container>
    </base-layout>
  </v-app>
</template>
