<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
useHead({
  title: props.figure.name,
})
const sceneHtml = ref<HTMLElement>()
const renderManager = new RenderManager({ setOrbitControls: true })
onMounted(() => {
  renderManager.mountRenderer(sceneHtml.value!)
  renderManager.startAnimation()
})
</script>
<template>
  <div ref="sceneHtml" class="sceneHtml"> </div>
</template>

<style scoped>
.sceneHtml {
  width: 100%;
  height: 90%;
}
</style>
