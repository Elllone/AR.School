<script setup lang="ts">
const {
  params: { slug },
} = useRoute('figure-slug')
const figure = await getFigureOr404(slug)
useHead({
  title: figure.value.name,
})
</script>
<template>
  <v-container>
    <figure-container :figure="figure" />
  </v-container>
</template>
