import { Scene, PerspectiveCamera, type Renderer, Object3D } from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export class RenderManager {
  #scene: Scene
  #camera: PerspectiveCamera
  #renderer: Renderer
  #tanFov!: number
  #firstHeight: number | null = null
  #figure: Object3D

  constructor(figure: Figure) {
    this.#scene = new Scene()
    this.#camera = new PerspectiveCamera()
    this.#renderer = createRenderer()
    this.#initCamera()

    this.#figure = useMeshFigure(figure) as unknown as NonNullable<
      ReturnType<typeof useMeshFigure>
    >
    this.#figure.position.y += 1
    const plane = createPlane(8)
    const { pointLight } = createLights()
    pointLight.position.set(1, 6, 3)
    this.#addObjectInScene(this.#figure, plane, pointLight)
  }

  /** Правильное изменение размера рендера (с учетом угла камеры) */
  #setSizeRendererScene({ width, height }: { width: number; height: number }) {
    this.#camera.aspect = width / height
    this.#camera.fov =
      (360 / Math.PI) * Math.atan(this.#tanFov * (width / this.#firstHeight!))

    this.#camera.updateProjectionMatrix()
    this.#camera.lookAt(this.#scene.position)
    this.#renderer.setSize(width, height)
  }

  /** Инициализация камеры и вспомогательных параметров  */
  #initCamera() {
    this.#camera.position.set(0, 3, 5)
    this.#tanFov = Math.tan(((Math.PI / 180) * this.#camera.fov) / 2)
    new OrbitControls(this.#camera, this.#renderer.domElement)
  }

  /** Инициализация наблюдателя изменения размера элемента */
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

  /** Старт анимации */
  #startAnimation() {
    const animateFunction = () => {
      this.#figure.rotation.y += 0.006
      this.#renderer.render(this.#scene, this.#camera)
      requestAnimationFrame(animateFunction)
    }
    animateFunction()
  }

  /** Добавление объекта на сцену */
  #addObjectInScene(...obj: Object3D[]) {
    this.#scene.add(...obj)
  }

  mountRenderer(el: HTMLElement) {
    const { width, height } = el.getBoundingClientRect()
    this.#initResizeObserver(el)
    this.#setSizeRendererScene({ width, height })
    el.appendChild(this.#renderer.domElement)
    this.#startAnimation()
  }
}
