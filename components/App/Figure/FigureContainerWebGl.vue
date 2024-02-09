<script setup lang="ts">
import TresCustomSceneBase from '../Tres/TresCustomSceneBase.vue'
import TresMeshSquare from '../Tres/TresMeshSquare.vue'
const { figure } = defineProps<{
  figure: Figure
}>()
</script>
<template>
  <v-responsive>
    <div class="wrapper-canvas">
      <tres-custom-scene-base>
        <tres-mesh-square />
      </tres-custom-scene-base>
    </div>
  </v-responsive>
</template>

<style>
.wrapper-canvas {
  height: 540px;
}
</style>
