export function figureNotFoundError() {
  return createError({
    statusCode: 404,
    message: 'Такой фигуры не существует',
  })
}
