<script setup lang="ts">
const route = useRoute('figure-figure')
</script>
<template>
  <v-container>
    <v-img
      :style="{
        viewTransitionName: route.params.figure,
      }"
      width="400px"
      src="/images/figureExample.png"
      rounded
    />
  </v-container>
</template>
