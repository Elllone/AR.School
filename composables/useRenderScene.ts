import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three'
export function useRenderScene() {
  const W = window.innerWidth
  const H = window.innerHeight
  const scene = new Scene()
  const camera = new PerspectiveCamera(75, W / H, 0.1, 1000)
  const canvas = document.createElement('canvas')
  canvas.id = 'canvasScene'
  const renderer = new WebGLRenderer({ antialias: true, canvas })

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return {
    renderer,
    animate,
  }
}
