<script setup>
useHead({
  title: 'AR.School',
})
</script>
<template>
  <v-container>
    <div class="main_wrapper">
      <ar-school-welcome />
      <aviable-figures-block />
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
