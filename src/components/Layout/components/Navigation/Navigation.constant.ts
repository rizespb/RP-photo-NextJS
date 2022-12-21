import { ENavItems } from '@types'

import { INavItem } from './Navigation.types'

export const navItemsData: INavItem[] = [
  {
    id: 0,
    subItems: [],
    title: ENavItems.Portfolio,
  },
  {
    id: 1,
    subItems: [
      {
        id: 10,
        link: '/menu10',
        title: 'Меню 10',
      },
      {
        id: 11,
        link: '/menu11',
        title: 'Меню 11',
      },
      {
        id: 12,
        link: '/menu12',
        title: 'Меню 12',
      },
    ],
    title: 'Меню 1!!!',
  },
  {
    id: 2,
    link: '/review',
    title: ENavItems.Reviews,
  },
  {
    id: 3,
    subItems: [
      {
        id: 30,
        link: '/menu30',
        title: 'Меню 30',
      },
      {
        id: 31,
        link: '/menu31',
        title: 'Меню 31',
      },
      {
        id: 32,
        link: '/menu32',
        title: 'Меню 32',
      },
      {
        id: 33,
        link: '/menu33',
        title: 'Меню 33',
      },
      {
        id: 34,
        link: '/menu34',
        title: 'Меню 34',
      },
      {
        id: 35,
        link: '/menu35',
        title: 'Меню 35',
      },
    ],
    title: 'Меню 3!!!',
  },
  {
    id: 4,
    link: '/menu4',
    title: 'Меню 4',
  },
  {
    id: 5,
    link: '/menu5',
    title: 'Меню 5',
  },
  {
    id: 6,
    link: '/contacts',
    title: 'Контакты',
  },
]
