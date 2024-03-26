<script setup lang="ts">
const props = defineProps<{ figure: Figure }>()
const webCamera = ref<HTMLVideoElement>()
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
    webCamera.value!.srcObject = mediaStream.value
    webCamera.value!.play()
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
  <div class="wrapper">
    <template v-if="!isMediaDevicesSupported">
      <p>
        {{ isMediaDevicesSupported }}
      </p>
    </template>
    <template v-if="isMediaDevicesSupported">
      <div class="camera_container">
        <video ref="webCamera" class="webCamera" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.webCamera {
  height: 100%;
  width: 100%;
}
.camera_container {
  height: 100%;
  width: 100%;
}
</style>
