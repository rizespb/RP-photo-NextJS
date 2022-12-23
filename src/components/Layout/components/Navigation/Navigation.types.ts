import { ENavItems } from '@types'

export interface INavItem {
  id: number
  title: ENavItems | string
  link?: string
  subItems?: INavItem[]
}

export type TNavItemProps = Omit<INavItem, 'id'>

export type TCollapsableItemProps = Required<Pick<INavItem, 'title' | 'subItems'>>
