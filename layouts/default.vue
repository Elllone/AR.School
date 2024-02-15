<template>
  <v-app-bar rounded="lg" class="blur_background app_bar">
    <template #prepend>
      <h1 class="ma-1 text-blue cursor" @click="navigateTo('/')"> AR.School</h1>
    </template>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-spacer />
      <v-responsive max-width="196">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Поиск"
          rounded="lg"
          density="compact"
          variant="solo-filled"
          single-line
          hide-details
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
  <v-main class="main_layout">
    <slot />
  </v-main>

  <v-footer class="blur_background">
    <v-container class="d-flex justify-space-between">
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <p class="text-h5 font-weight-bold">
            Изучайте, открывайте и осваиваете мир геометрии с
            <span class="text-blue">AR.School</span>
          </p></v-col
        >
        <v-col cols="12" md="6">
          <div class="float-right">
            <p>
              © {{ new Date().getFullYear() }}
              <span class="text-blue">AR.School</span>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<style scoped>
.cursor {
  cursor: pointer;
}

.app_bar {
  view-timeline-name: app-bar;
}
.blur_background {
  background-color: transparent !important ;
  backdrop-filter: blur(8px);
}
.main_layout {
  background: linear-gradient(-45deg, #040516, #070423);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
