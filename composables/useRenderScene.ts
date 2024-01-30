import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function getTHREEGeometryObject(figure: Figure) {
  const material = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
  switch (figure.pathUrl) {
    case FiguresNameEnum.triangle:
      return new THREE.Mesh(new THREE.ConeGeometry(1, 10, 10), material)
    case FiguresNameEnum.square:
      return new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
    case FiguresNameEnum.pentagon:
      return new THREE.Mesh(new THREE.IcosahedronGeometry(1), material)
    case FiguresNameEnum.hexagon:
      return new THREE.Mesh(new THREE.DodecahedronGeometry(1), material)
  }
}

export function useRenderScene(figure: Figure) {
  const W = 960
  const H = 540
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x212121)
  const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000)

  const canvasElement = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
  })
  renderer.setSize(W, H)
  new OrbitControls(camera, canvasElement)
  const geometryObject = getTHREEGeometryObject(figure)
  scene.add(geometryObject)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)

    geometryObject.rotation.x += 0.01
    geometryObject.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  return {
    animate,
    renderer,
  }
}
