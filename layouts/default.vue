<template>
  <core-default-layout-top-app-bar />
  <v-main class="main_layout">
    <slot />
  </v-main>
  <core-default-layout-bottom-app-footer />
</template>
<style scoped>
.main_layout {
  background: linear-gradient(-45deg, #040516, #070423);
  background-size: 400% 400%;
}
</style>
