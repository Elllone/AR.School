<script setup lang="ts">
definePageMeta({
  middleware: ['is-figure-exsist'],
  layout: 'vr-ar',
})
const {
  params: { slug },
} = useRoute('figure-slug')
const { getFigureBySlug } = useFiguresStore()
const figure = getFigureBySlug(slug) as Figure
</script>

<template>
  <v-container class="h-100 d-flex justify-center align-center">
    <client-only>
      <vr-figure-scene :figure="figure" />
    </client-only>
  </v-container>
</template>
