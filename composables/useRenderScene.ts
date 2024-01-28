import * as THREE from 'three'

export function useRenderScene() {
  const W = 200
  const H = 200
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000)

  const canvasElement = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
  })
  renderer.setSize(W, H)
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    console.log('12')
    renderer.render(scene, camera)
  }

  return {
    animate,
    renderer,
  }
}
