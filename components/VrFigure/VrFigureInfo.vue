<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
</script>
<template>
  <v-dialog max-width="1024" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-information" v-bind="props" color="transparent" />
    </template>
    <template #default>
      <figure-description :figure="props.figure" hide-link />
    </template>
  </v-dialog>
</template>
