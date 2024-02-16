<script setup lang="ts">
import type { StyleValue } from 'vue'

const props = defineProps<{ figure: Figure }>()

const styleValueImg = ref<StyleValue>()

function navigateToFigure() {
  styleValueImg.value = { viewTransitionName: props.figure.slug }
  navigateTo({
    name: 'figure-figureSlug',
    params: { figureSlug: props.figure.slug },
  })
}
</script>

<template>
  <v-card color="white" min-width="280px" max-width="300px">
    <v-card-title class="d-flex justify-center align-center">
      <img :src="figure.image" :style="styleValueImg" class="figure_img" />
    </v-card-title>
    <v-divider />
    <v-container>
      <p class="text-h5 font-weight-bold">{{ figure.name }}</p>
    </v-container>
    <v-divider />
    <v-card-actions>
      <div class="d-flex justify-end w-100">
        <v-btn @click="() => navigateToFigure()">Открыть</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.figure_img {
  width: 280px;
  height: 280px;
  border-radius: 4px;
}
</style>
