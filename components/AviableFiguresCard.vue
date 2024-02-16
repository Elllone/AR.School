<script setup lang="ts">
import type { StyleValue } from 'vue'

const props = defineProps<{ figure: string }>() //Заглушка

const styleValueImg = ref<StyleValue>()

function navigateToFigure() {
  styleValueImg.value = { viewTransitionName: props.figure }
  navigateTo({ name: 'figure-figure', params: { figure: props.figure } })
}
</script>

<template>
  <v-card color="white" min-width="280px" max-width="300px">
    <v-card-title>
      <v-img
        :style="styleValueImg"
        rounded="lg"
        width="280px"
        height="280px"
        src="/images/figureExample.png"
      />
    </v-card-title>
    <v-divider />
    <v-container>
      <p class="text-h5 font-weight-bold">{{ figure }}</p>
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
