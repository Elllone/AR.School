<script setup lang="ts">
import CardFiguresList from './CardFiguresList.vue'
</script>
<template>
  <v-card>
    <v-card-title>
      <p> Список доступных фигур </p>
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12">
          <card-figures-list />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
