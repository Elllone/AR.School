<script setup lang="ts">
import CardFiguresDialog from './CardFiguresDialog.vue'

const searchField = ref('')
const figuresList = {
  figures: ['треугольник', 'квадрат', 'пятиугольник', 'шестиугольник'],
}
</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        label="Поиск"
        prepend-inner-icon="mdi-magnify"
        v-model="searchField"
      />
    </v-col>
    <v-col cols="12">
      <v-data-iterator
        :items="figuresList.figures"
        :items-per-page="-1"
        :search="searchField"
      >
        <template #default="{ items }">
          <v-row>
            <v-col v-for="{ raw: figure } in items" :key="figure">
              <card-figures-dialog>
                <template #activator="{ props }">
                  <v-card
                    min-width="200"
                    min-height="200"
                    color="green"
                    v-bind="props"
                  >
                    <v-container> {{ figure }} </v-container>
                  </v-card>
                </template>
              </card-figures-dialog>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-col>
  </v-row>
</template>
