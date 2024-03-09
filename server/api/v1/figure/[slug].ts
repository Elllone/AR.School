import { figures } from '~/server/mock/figures'
import { figureNotFoundError } from '~/utils/errors.helper'

export default defineEventHandler(async (event) => {
  const figure = figures.find(
    (figure) => figure.slug === event.context.params?.slug
  )

  if (figure) {
    return {
      data: figure,
    }
  }
  throw figureNotFoundError()
})
