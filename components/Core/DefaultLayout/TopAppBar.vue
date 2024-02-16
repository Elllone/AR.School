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
</template>
