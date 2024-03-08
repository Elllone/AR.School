import { figures } from '~/server/mock/figures'

export default defineEventHandler(async () => {
  return {
    data: figures,
  }
})
