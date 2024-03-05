export default defineNuxtRouteMiddleware(async (to) => {
  const { slug } = to.params as { slug: string }
  const { getFigureBySlug } = useFiguresStore()
  if (!getFigureBySlug(slug)) {
    return abortNavigation({
      statusCode: 404,
      message: 'Такой фигуры нет',
    })
  }
})
