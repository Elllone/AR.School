<script setup lang="ts">
definePageMeta({
  middleware: ['is-figure-exsist'],
})
const {
  params: { figureSlug },
} = useRoute('figure-figureSlug')
const { getFigureBySlug } = useFiguresStore()
const figure = getFigureBySlug(figureSlug) as Figure // Явно присваиваем переменной тип Figure, чтобы избавиться от undefined
useHead({
  title: figure.name,
})
</script>
<template>
  <v-container>
    <figure-view-container :figure="figure" />
  </v-container>
</template>
