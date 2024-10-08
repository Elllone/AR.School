import { MeshPhongMaterial, Mesh, BoxGeometry, SphereGeometry } from 'three'

export function useMeshFigure(figure: Figure) {
  const material = new MeshPhongMaterial({ color: 'blue' })
  switch (figure.slug) {
    case 'cube': {
      const geometry = new BoxGeometry(1, 1, 1)
      return new Mesh(geometry, material)
    }
    case 'circle': {
      const geometry = new SphereGeometry(1, 32, 32)
      return new Mesh(geometry, material)
    }
    default: {
      return null
    }
  }
}
