import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
  close: () => void
  contentAreaClassName?: string
  mode: 'fullscreen' | 'rightSide'
  isStyledcontentArea: boolean
}
