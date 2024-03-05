<script setup lang="ts">
import { useDisplay } from 'vuetify'
const props = defineProps<{ figure: Figure }>()
const { mobile } = useDisplay()
</script>
<template>
  <div class="d-flex justify-center align-center">
    <img
      :src="props.figure.image"
      :style="{
        viewTransitionName: props.figure.slug,
        maxWidth: mobile ? '300px' : '600px',
      }"
      class="figure_img"
    />
  </div>
</template>
<style scoped>
.figure_img {
  width: 100%;
  border-radius: 4px;
}
</style>
