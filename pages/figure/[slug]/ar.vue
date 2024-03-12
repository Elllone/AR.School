<script setup lang="ts">
definePageMeta({
  layout: 'vr-ar',
})
const {
  params: { slug },
} = useRoute('figure-slug')
const figure = await getFigureOr404(slug)
useHead({
  title: figure.value.name,
})
</script>
<template>
  <v-container class="h-100 d-flex justify-center align-center">
    <client-only>
      <ar-figure-scene :figure="figure" />
    </client-only>
  </v-container>
</template>
