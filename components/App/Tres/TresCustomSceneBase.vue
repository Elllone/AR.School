<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
</script>
<template>
  <TresCanvas>
    <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
    <OrbitControls />
    <TresAmbientLight :intensity="1" />
    <slot></slot>
  </TresCanvas>
</template>
