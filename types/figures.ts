enum FiguresNameEnum {
  triangle = 'triangle',
  square = 'square',
  pentagon = 'pentagon',
  hexagon = 'hexagon',
}

export interface Figure {
  pathUrl: FiguresNameEnum
  name: string
  description: string
}

export { FiguresNameEnum }
export type { FiguresNameEnum as FiguresNameEnumType }
