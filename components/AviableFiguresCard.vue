<script setup lang="ts">
function navigateToFigure() {
  navigateTo('/figure')
}
</script>

<template>
  <v-card color="white" min-width="280px" max-width="300px">
    <v-card-title>
      <v-img
        rounded="lg"
        width="280px"
        height="280px"
        src="/images/figurePlaceholder.png"
      />
    </v-card-title>
    <v-divider />
    <v-container>
      <p class="text-h5 font-weight-bold">Фигура</p>
    </v-container>
    <v-divider />
    <v-card-title>
      <div class="d-flex justify-end">
        <v-btn
          icon="mdi-rotate-3d"
          size="48"
          @click="() => navigateToFigure()"
        />
      </div>
    </v-card-title>
  </v-card>
</template>
