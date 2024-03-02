<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
useHead({
  title: props.figure.name,
})
const sceneHtml = ref<HTMLElement>()
onMounted(() => {
  const renderManager = new RenderManager(props.figure)
  renderManager.mountRenderer(sceneHtml.value!)
})
</script>
<template>
  <div class="wrapper">
    <div class="figure_name">
      <p class="text-h5 font-weight-bold">
        {{ props.figure.name }}
      </p>
    </div>
    <div class="toolbar_info">
      <figure-web-gl-info :figure="props.figure" />
    </div>
    <div ref="sceneHtml" class="sceneHtml"> </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.figure_name {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
}
.toolbar_info {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}

.sceneHtml {
  width: 100%;
  height: 95%;
}
</style>
