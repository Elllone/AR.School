<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
</script>
<template>
  <v-row>
    <v-col cols="12" md="6">
      <figure-image :figure="props.figure" />
    </v-col>
    <v-col cols="12" md="6">
      <figure-description :figure="figure" />
    </v-col>
  </v-row>
</template>
