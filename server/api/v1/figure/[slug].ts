import { figures } from '~/server/mock/figures'

export default defineEventHandler(async (event) => {
  const figure = figures.find(
    (figure) => figure.slug === event.context.params?.slug
  )
  if (figure) {
    return {
      data: figure,
    }
  }
  throw createError({
    statusCode: 404,
    message: 'Я не знаю такой url :-[',
  })
})
