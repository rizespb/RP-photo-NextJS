import { INavItem } from './Navigation.types'

export const navItems: INavItem[] = [
  {
    id: 0,
    link: '/menu0',
    title: 'Меню 0',
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
    title: 'Меню 1',
  },
  {
    id: 2,
    link: '/menu2',
    title: 'Меню 2',
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
    title: 'Меню 3',
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
    link: '/menu6',
    title: 'Меню 6',
  },
  // {
  //   id: 7,
  //   subItems: [
  //     {
  //       id: 70,
  //       link: '/menu70',
  //       title: 'Меню 70',
  //     },
  //     {
  //       id: 71,
  //       link: '/menu71',
  //       title: 'Меню 71',
  //     },
  //     {
  //       id: 72,
  //       link: '/menu72',
  //       title: 'Меню 72',
  //     },
  //   ],
  //   title: 'Меню 7',
  // },
  // {
  //   id: 8,
  //   subItems: [
  //     {
  //       id: 80,
  //       link: '/menu80',
  //       title: 'Меню 80',
  //     },
  //     {
  //       id: 81,
  //       link: '/menu81',
  //       title: 'Меню 81',
  //     },
  //   ],
  //   title: 'Меню 8',
  // },
  // {
  //   id: 9,
  //   link: '/menu9',
  //   title: 'Меню 9',
  // },
]
