import { figures as _figures } from '~/mock/figure'

//Делаем через стору, чтобы в будущем легко перевести получение фигур через API
export const useFiguresStore = defineStore('figuresStore', () => {
  const figures = ref<Figure[]>(_figures)
  return {
    figures,
  }
})
