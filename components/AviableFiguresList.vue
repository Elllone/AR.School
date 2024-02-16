<template>
  <v-card color="grey-darken-4">
    <v-container>
      <swiper
        :modules="[SwiperNavigation]"
        :navigation="true"
        slides-per-view="auto"
        space-between="30"
      >
        <swiper-slide v-for="n in 2" :key="n" class="swiper-width">
          <aviable-figures-card :figure="'Figure_' + n" />
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
