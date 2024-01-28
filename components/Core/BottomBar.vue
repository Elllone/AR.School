<script setup lang="ts">
import { navBarRouts } from '~/constants/routs'
</script>
<template>
  <v-bottom-navigation grow>
    <v-btn
      v-for="rout in navBarRouts"
      :key="rout.routerPushObject.name"
      :to="rout.routerPushObject"
    >
      <v-icon :icon="rout.icon" />
      {{ rout.title }}
    </v-btn>
  </v-bottom-navigation>
</template>
