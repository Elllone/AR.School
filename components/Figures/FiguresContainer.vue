<script setup lang="ts">
defineProps<{ figures: Figure[] }>()
</script>
<template>
  <v-card color="transparent">
    <v-card-title>
      <div class="title_block">
        <p class="text-h3 font-weight-bold">
          Выбери фигуру и <span class="text-blue"> начни </span>
        </p>
      </div>
    </v-card-title>
    <v-container>
      <figures-list :figures="figures" />
    </v-container>
  </v-card>
</template>
<style scoped>
.title_block {
  white-space: normal;
}
</style>
