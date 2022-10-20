import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

export type TLinkPath = 'relative' | 'absolute'

export interface ILinkProps {
  children: ReactNode
  color?: 'green'
  link: string
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  isNextLink?: boolean
  target?: HTMLAttributeAnchorTarget
}
