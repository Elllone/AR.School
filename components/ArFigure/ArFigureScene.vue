<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
</script>
<template>
  <div class="wrapper">
    <div class="figure_container">
      <!-- <vr-figure-webgl :figure="props.figure" /> -->
    </div>
    <div class="camera_container">
      <ar-figure-web-camera />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
}
.figure_container {
  position: absolute;
  max-width: 720px;
  z-index: 18;

  height: 100%;
  width: 100%;
}
.camera_container {
}
</style>
