<script setup lang="ts">
const { figure } = defineProps<{
  figure: Figure
}>()

const canvasScene = ref<HTMLDivElement>()

function injectWebGl() {
  const { renderer, animate } = useRenderScene()
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
  <div>
    <div ref="canvasScene" class="canvas" />
  </div>
</template>

<style>
canvas {
  width: 100%;
}
</style>
