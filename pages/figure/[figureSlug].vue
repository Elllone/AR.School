<script setup lang="ts">
import { figures } from '~/mock/figures'
definePageMeta({
  validate: async (route) => {
    const figure = (route.params as { figureSlug: string })
      .figureSlug as FiguresNameEnumType
    return Object.values(FiguresNameEnum).includes(figure)
  },
})
const route = useRoute('figure-figureSlug')
const figure = figures.find((el) => {
  return el.pathUrl === route.params.figureSlug
})
</script>
<template>
  <app-figure-container v-if="figure" :figure="figure" />
</template>
