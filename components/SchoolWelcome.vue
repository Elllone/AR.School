<script setup lang="ts"></script>

<template>
  <v-main class="wrap">
    <v-container class="h-100 d-flex justify-center align-center">
      <v-card color="transparent">
        <v-container class="text-center">
          <p class="text-md-h1 text-h2 ma-1">
            <span class="text-green"> AR.</span>School
          </p>
          <v-divider />
          <p class="text-h5 ma-1 text-medium-emphasis"
            >Пройдите курс школьной стереометрии с использованием технологий
            дополненной реальности</p
          >
          <v-btn
            append-icon="mdi-rocket-launch"
            variant="tonal"
            color="green"
            size="large"
          >
            Начать
          </v-btn>
        </v-container>
      </v-card>
    </v-container>
  </v-main>
</template>

<style scoped lang="scss">
.wrap {
  background: linear-gradient(270deg, #040722, #150f35, #261d5a);
  background-size: 400% 400%;
  -webkit-animation: gradient 30s ease infinite;
  animation: gradient 30s ease infinite;
}

.text-30 {
  padding: 10px;
  font-size: 30px;
}

@-webkit-keyframes gradient {
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
