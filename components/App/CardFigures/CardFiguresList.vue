<script setup lang="ts">
import { figures } from '~/mock/figures'

const searchField = ref('')
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
        :items="figures"
        :items-per-page="-1"
        :search="searchField"
      >
        <template #default="{ items }">
          <v-row>
            <v-col v-for="{ raw: figure } in items" :key="figure">
              <v-card
                min-width="200"
                min-height="200"
                color="green"
                @click="
                  navigateTo({
                    path: figure.url,
                  })
                "
              >
                <v-container> {{ figure.name }} </v-container>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-col>
  </v-row>
</template>
