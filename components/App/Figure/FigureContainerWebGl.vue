<script setup lang="ts">
const { figure } = defineProps<{
  figure: Figure
}>()

const canvasScene = ref<HTMLDivElement>()

function injectWebGl() {
  const { renderer, animate } = useRenderScene(figure)
  if (canvasScene.value !== undefined) {
    canvasScene.value.appendChild(renderer.domElement)
    animate()
  }
}
onMounted(() => {
  injectWebGl()
})
</script>
<template>
  <v-responsive>
    <div class="wrapper-canvas">
      <div ref="canvasScene" class="canvas" />
    </div>
  </v-responsive>
</template>

<style>
.wrapper-canvas {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
