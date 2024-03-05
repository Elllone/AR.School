<script setup lang="ts">
definePageMeta({
  middleware: ['is-figure-exsist'],
})
const {
  params: { slug },
} = useRoute('figure-slug')
const { getFigureBySlug } = useFiguresStore()
const figure = getFigureBySlug(slug) as Figure // Явно присваиваем переменной тип Figure, чтобы избавиться от undefined
useHead({
  title: figure.name,
})
</script>
<template>
  <v-container>
    <figure-container :figure="figure" />
  </v-container>
</template>
