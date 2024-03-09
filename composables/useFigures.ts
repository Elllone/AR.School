import { getFiguresRequest, getFigureBySlug } from '~/api/figures.request'

/**
 * Возвращает все фигуры
 */
export async function getAllFigures() {
  const {
    data: figures,
    error,
    status,
  } = await useAsyncData('figures', getFiguresRequest)
  if (status.value === 'error' && error.value) throw createError(error.value)
  return figures
}

/**
 *  Возвращает фигуру по slug. Если ее нет, выкидывает ошибку [404]
 */
export async function getSafeFigure(slug: string) {
  const { data: figure_ } = await useAsyncData('figure', async () => {
    return getFigureBySlug(slug)
  })
  if (figure_.value === null) {
    throw figureNotFoundError()
  }
  const figure = computed(() => {
    return figure_.value as Figure
  })
  return figure
}
