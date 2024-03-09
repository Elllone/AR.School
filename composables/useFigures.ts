import { getFigureBySlug } from '~/api/figures.request'

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
