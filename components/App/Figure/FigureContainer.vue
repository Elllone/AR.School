<script setup lang="ts">
import FigureContainerWebGl from './FigureContainerWebGl.vue'
const { figure } = defineProps<{
  figure: Figure
}>()
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="d-flex justify-center">
            <p> Названия фигуры </p>
          </v-card-title>
          <v-container>
            <figure-container-web-gl :figure="figure" />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
