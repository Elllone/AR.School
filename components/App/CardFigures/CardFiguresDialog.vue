<script setup lang="ts">
const isDialogVisible = ref(false)
</script>
<template>
  <v-dialog v-model="isDialogVisible" width="1024">
    <template #activator="{ props }">
      <slot name="activator" :props="props"></slot>
    </template>
    <template #default>
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          <p> Фигура: </p>
          <v-btn variant="text" @click="isDialogVisible = false" color="gray">
            <v-icon icon="mdi-close" />
          </v-btn>
        </v-card-title>
        <v-container> </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>
