<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
</script>
<template>
  <v-row>
    <v-col cols="12" md="6">
      <figure-view-image :figure="props.figure" />
    </v-col>
    <v-col cols="12" md="6">
      <figure-view-description :figure="figure" />
    </v-col>
  </v-row>
</template>
