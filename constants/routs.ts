import type { RoutsInterface } from '~/types/routs'

export const navBarRouts: RoutsInterface[] = [
  {
    icon: 'mdi-home',
    title: 'Главная',
    routerPushObject: { name: 'index' },
  },
  {
    icon: 'mdi-information',
    title: 'О прокте',
    routerPushObject: { name: 'about' },
  },
]
