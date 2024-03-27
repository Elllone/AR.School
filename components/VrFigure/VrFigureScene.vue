<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()

function openInAR() {
  navigateTo({
    name: 'figure-slug-ar',
    params: {
      slug: props.figure.slug,
    },
  })
}
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
    <vr-figure-webgl :figure="props.figure" />
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
</style>
