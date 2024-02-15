<template>
  <v-card color="grey-darken-4">
    <v-container>
      <swiper :modules="[SwiperNavigation]" :navigation="true">
        <swiper-slide v-for="n in 2" :key="n">
          <div class="d-flex justify-center">
            <aviable-figures-card />
          </div>
        </swiper-slide>
      </swiper>
    </v-container>
  </v-card>
</template>
