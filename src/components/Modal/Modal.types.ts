import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
  close: () => void
  className?: string
}
