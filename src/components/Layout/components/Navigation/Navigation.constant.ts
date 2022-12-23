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
    link: '/review',
    title: ENavItems.Reviews,
  },
  {
    id: 2,
    link: '/contacts',
    title: 'Контакты',
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
    ],
    title: 'Меню 3!!!',
  },
  {
    id: 4,
    subItems: [
      {
        id: 40,
        link: '/menu40',
        title: 'Меню 40',
      },
      {
        id: 41,
        link: '/menu41',
        title: 'Меню 41',
      },
      {
        id: 42,
        link: '/menu42',
        title: 'Меню 42',
      },
      {
        id: 43,
        link: '/menu43',
        title: 'Меню 43',
      },
      {
        id: 44,
        link: '/menu44',
        title: 'Меню 44',
      },
      {
        id: 45,
        link: '/menu45',
        title: 'Меню 45',
      },
    ],
    title: 'Меню 4!!!',
  },
  {
    id: 5,
    link: '/menu5',
    title: 'Меню 5',
  },
  {
    id: 6,
    link: '/menu6',
    title: 'Меню 6',
  },
]
