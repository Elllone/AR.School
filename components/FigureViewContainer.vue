<script setup lang="ts">
import { useDisplay } from 'vuetify'

const props = defineProps<{ figure: Figure }>()
const { mobile } = useDisplay()
</script>
<template>
  <v-row>
    <v-col cols="12" md="6">
      <div class="d-flex justify-center align-center">
        <img
          :src="props.figure.image"
          :style="{
            viewTransitionName: props.figure.slug,
            maxWidth: mobile ? '300px' : '600px',
          }"
          class="figure_img"
        />
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="d-flex justify-center align-center">
        <v-card color="white">
          <v-card-title>
            <p class="text-h5 font-weight-bold">{{ props.figure.name }}</p>
          </v-card-title>
          <v-divider />
          <v-container>
            <p class="text-h6 font-weight-bold">{{
              props.figure.description
            }}</p>
          </v-container>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.figure_img {
  width: 100%;
  border-radius: 4px;
}
</style>
