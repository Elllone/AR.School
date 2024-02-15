<template>
  <v-app-bar rounded="lg" class="header_layout">
    <template #prepend>
      <h1 class="ma-1 text-blue"> AR.School</h1>
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
</template>
<style scoped>
.header_layout {
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
