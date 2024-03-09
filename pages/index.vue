<script setup lang="ts">
useHead({
  title: 'AR.School',
})
const figures = await getAllFigures()
</script>
<template>
  <v-container>
    <div class="main_wrapper">
      <ar-school-welcome />
      <figures-container :figures="figures || []" />
    </div>
  </v-container>
</template>
<style scoped>
.main_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
