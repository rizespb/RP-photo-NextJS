import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
  mode: 'fullscreen' | 'rightSide'
  contentWrapperClassName?: string
}
