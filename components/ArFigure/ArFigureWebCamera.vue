<script setup lang="ts">
const webCameraElement = ref<HTMLVideoElement>()
const mediaStream = ref<MediaStream>()
const isMediaDevicesSupported = computed(() =>
  navigator.mediaDevices ? 'supported' : 'not supported'
)

async function mountWebCamera() {
  if (isMediaDevicesSupported.value === 'supported') {
    mediaStream.value = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment',
      },
      audio: false,
    })
    webCameraElement.value!.srcObject = mediaStream.value
    webCameraElement.value!.play()
  }
}

function unmountWebCamera() {
  if (mediaStream.value) {
    mediaStream.value.getTracks().forEach((track) => track.stop())
  }
}
onMounted(() => {
  mountWebCamera()
})
onUnmounted(() => {
  unmountWebCamera()
})
</script>
<template>
  <div v-if="isMediaDevicesSupported === 'supported'">
    <video ref="webCameraElement" class="webCamera" />
  </div>
  <div v-else>
    <p class="text-h3"> Нет доступа к камере </p>
  </div>
</template>

<style scoped>
.webCamera {
  width: 100% !important;
  height: 80vh !important;
}
</style>
