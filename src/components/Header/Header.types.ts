import { EIcons } from '@constants'

export interface IHeaderProps {
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
  buttonIcon?: EIcons
}
