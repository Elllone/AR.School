<script setup lang="ts">
const { figures } = storeToRefs(useFiguresStore())
</script>

<template>
  <v-card color="grey-darken-4">
    <v-container>
      <swiper
        :modules="[SwiperNavigation]"
        :navigation="true"
        slides-per-view="auto"
        space-between="30"
      >
        <swiper-slide
          v-for="figure in figures"
          :key="figure.slug"
          class="swiper-width"
        >
          <figures-card :figure="figure" />
        </swiper-slide>
      </swiper>
    </v-container>
  </v-card>
</template>
<style scoped>
.swiper-width {
  max-width: 300px;
}
</style>
