import {
  AmbientLight,
  DirectionalLight,
  DoubleSide,
  Mesh,
  MeshPhongMaterial,
  NearestFilter,
  PlaneGeometry,
  PointLight,
  RepeatWrapping,
  SRGBColorSpace,
  TextureLoader,
  WebGLRenderer,
} from 'three'
export function createRenderer() {
  const canvas = document.createElement('canvas')
  const renderer = new WebGLRenderer({ canvas })
  return renderer
}

export function createPlane(size: number = 20) {
  const planeSize = size
  const loader = new TextureLoader()
  const texture = loader.load('/images/textures/plane.png')
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.magFilter = NearestFilter
  texture.colorSpace = SRGBColorSpace
  const repeats = planeSize / 2
  texture.repeat.set(repeats, repeats)

  const planeGeo = new PlaneGeometry(planeSize, planeSize)
  const planeMat = new MeshPhongMaterial({
    map: texture,
    side: DoubleSide,
  })
  const mesh = new Mesh(planeGeo, planeMat)
  mesh.rotation.x = Math.PI * -0.5
  return mesh
}

export function createLights() {
  const directionalLight = new DirectionalLight(0xffffff, 150)
  const ambientLight = new AmbientLight(0xffffff, 1)
  const pointLight = new PointLight(0xffffff, 150)
  return {
    directionalLight,
    ambientLight,
    pointLight,
  }
}
