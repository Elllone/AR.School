<script setup lang="ts">
definePageMeta({
  middleware: ['is-figure-exsist'],
  layout: 'ar3d',
})
const {
  params: { figureSlug },
} = useRoute('figure-figureSlug')
const { getFigureBySlug } = useFiguresStore()
const figure = getFigureBySlug(figureSlug) as Figure
</script>

<template>
  <v-container>
    <client-only>
      <figure-web-gl-scene :figure="figure" />
    </client-only>
  </v-container>
</template>
