<script setup lang="ts">
import { routs } from '~/constants/routs'
</script>
<template>
  <v-bottom-navigation grow mode="shift">
    <v-btn
      v-for="rout in routs"
      :key="rout.routerPushObject.name"
      :to="rout.routerPushObject"
    >
      <v-icon :icon="rout.icon" />
      {{ rout.title }}
    </v-btn>
  </v-bottom-navigation>
</template>
