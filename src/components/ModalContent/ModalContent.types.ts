import { ReactNode } from 'react'

export interface IModalContentProps {
  children: ReactNode
  closeModal: () => void
}
