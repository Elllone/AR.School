<template>
  <v-card color="grey-darken-4">
    <v-container>
      <div class="figure_list">
        <aviable-figures-card v-for="i in 3" :key="i" />
      </div>
    </v-container>
  </v-card>
</template>

<style scoped>
.figure_list {
  display: flex;
  flex-direction: row;
  gap: 12px;
  overflow-x: scroll;
}
</style>
