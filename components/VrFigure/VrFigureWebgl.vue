<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
const sceneHtml = ref<HTMLElement>()
onMounted(() => {
  const renderManager = new RenderManager(props.figure)
  renderManager.mountRenderer(sceneHtml.value!)
})
</script>
<template>
  <div ref="sceneHtml" class="sceneHtml"> </div>
</template>

<style scoped>
.sceneHtml {
  width: 100%;
  height: 95%;
}
</style>
