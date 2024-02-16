<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-card color="white">
      <v-card-title>
        <p class="text-h5 font-weight-bold">{{ props.figure.name }}</p>
      </v-card-title>
      <v-divider />
      <v-container>
        <p class="text-h6 font-weight-bold">{{ props.figure.description }}</p>
      </v-container>
    </v-card>
  </div>
</template>
