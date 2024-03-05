<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
useHead({
  title: props.figure.name,
})
const sceneHtml = ref<HTMLElement>()

function openInAR() {
  navigateTo({
    name: 'figure-slug-ar',
    params: {
      slug: props.figure.slug,
    },
  })
}

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
        <v-btn @click="openInAR"> Открыть в AR </v-btn>
      </p>
    </div>
    <div class="toolbar_info">
      <vr-figure-info :figure="props.figure" />
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
