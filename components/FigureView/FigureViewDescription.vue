<script setup lang="ts">
const props = defineProps<{ figure: Figure; hideLink?: boolean }>()

function navigateTo3D_AR() {
  navigateTo({
    name: 'figure-figureSlug-3d',
    params: { figureSlug: props.figure.slug },
  })
}
</script>

<template>
  <v-card color="white">
    <v-card-title>
      <p class="text-h5 font-weight-bold">{{ props.figure.name }}</p>
    </v-card-title>
    <v-divider />
    <v-container>
      <p class="text-h6 font-weight-bold">{{ props.figure.description }}</p>
    </v-container>
    <v-divider />
    <v-card-actions v-if="!props.hideLink">
      <div class="d-flex justify-end w-100">
        <v-btn @click="navigateTo3D_AR()">Открыть в 3D/AR</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
