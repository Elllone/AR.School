<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
useHead({
  title: props.figure.name,
})
const sceneDom = ref<HTMLDivElement>()
function setupScene() {
  const { renderer, animate } = useRenderScene()
  sceneDom.value?.appendChild(renderer.domElement)
  animate()
}
onMounted(() => setupScene())
</script>
<template>
  <div ref="sceneDom"> </div>
</template>

<style>
#canvasScene {
  width: 100%;
}
</style>
