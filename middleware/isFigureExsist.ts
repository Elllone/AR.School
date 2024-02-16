export default defineNuxtRouteMiddleware(async (to) => {
  const { figureSlug } = to.params as { figureSlug: string }
  const { getFigureBySlug } = useFiguresStore()
  if (!getFigureBySlug(figureSlug)) {
    return abortNavigation({
      statusCode: 404,
      message: 'Такой фигуры нет',
    })
  }
})
