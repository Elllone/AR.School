import { type Figure, FiguresNameEnum } from '~/types/figures'
import { RusifedFiguresNameEnum } from '~/constants/figures'

export const figures: Figure[] = [
  {
    pathUrl: FiguresNameEnum.triangle,
    name: RusifedFiguresNameEnum.triangle,
    description: 'Треугольник',
  },
  {
    pathUrl: FiguresNameEnum.square,
    name: RusifedFiguresNameEnum.square,
    description: 'Квадрат',
  },
  {
    pathUrl: FiguresNameEnum.pentagon,
    name: RusifedFiguresNameEnum.pentagon,
    description: 'Пятиугольник',
  },
  {
    pathUrl: FiguresNameEnum.hexagon,
    name: RusifedFiguresNameEnum.hexagon,
    description: 'Шестиугольник',
  },
]
