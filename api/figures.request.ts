export async function getFiguresRequest() {
  const figures = (await $fetch('/api/v1/figure')) as { data: Figure[] }
  return figures.data
}

export async function getFigureBySlug(slug: string) {
  const figure = (await $fetch(`/api/v1/figure/${slug}`)) as { data: Figure }
  return figure.data
}
