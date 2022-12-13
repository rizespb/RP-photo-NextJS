import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
  close: () => void
  className?: string
  mode: 'fullscreen' | 'rightSide'
  isStyled: boolean
}
