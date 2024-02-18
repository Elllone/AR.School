import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  DirectionalLight,
  AmbientLight,
  type Renderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

interface RenderManagerInitArgs {
  scene?: Scene
  camera?: PerspectiveCamera
  setOrbitControls?: boolean
}

export class RenderManager {
  #scene: Scene
  #camera: PerspectiveCamera
  #renderer: Renderer

  #tanFov: number
  #firstHeight: number | null = null

  constructor({ scene, camera, setOrbitControls }: RenderManagerInitArgs = {}) {
    this.#scene = scene ?? new Scene()
    this.#camera = camera ?? new PerspectiveCamera()

    this.#tanFov = Math.tan(((Math.PI / 180) * this.#camera.fov) / 2)

    this.#initCamera()
    this.#renderer = this.#createRenderer()

    if (setOrbitControls) {
      new OrbitControls(this.#camera, this.#renderer.domElement)
    }
    this.#addPointLight()
  }

  #createRenderer() {
    const canvas = document.createElement('canvas')
    const renderer = new WebGLRenderer({ antialias: true, canvas })
    return renderer
  }

  #setSizeRendererScene({ width, height }: { width: number; height: number }) {
    this.#camera.aspect = width / height
    this.#camera.fov =
      (360 / Math.PI) * Math.atan(this.#tanFov * (width / this.#firstHeight!))

    this.#camera.updateProjectionMatrix()
    this.#camera.lookAt(this.#scene.position)
    this.#renderer.setSize(width, height)
  }

  #initCamera() {
    this.#camera.position.set(0, 0, 2)
    this.#camera.lookAt(this.#scene.position)
  }

  #addPointLight() {
    const light1 = new DirectionalLight(0xffffff, 3)
    const light2 = new AmbientLight(0x404040)
    light1.position.set(10, 10, 4)
    this.#scene.add(light1)
    this.#scene.add(light2)
  }

  #initResizeObserver(el: HTMLElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      if (this.#firstHeight === null) {
        this.#firstHeight = height
      }
      this.#setSizeRendererScene({
        width: Math.floor(width),
        height: Math.floor(height),
      })
    })
    resizeObserver.observe(el)
  }

  addMeshObject(mesh: Mesh) {
    this.#scene.add(mesh)
  }

  mountRenderer(el: HTMLElement) {
    const { width, height } = el.getBoundingClientRect()
    this.#initResizeObserver(el)
    this.#setSizeRendererScene({ width, height })
    el.appendChild(this.#renderer.domElement)
  }

  startAnimation() {
    const animateFunction = () => {
      this.#renderer.render(this.#scene, this.#camera)
      requestAnimationFrame(animateFunction)
    }
    animateFunction()
  }
}
