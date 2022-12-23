import { EIcons } from '@constants'
import { TStringOrElement } from '@types'

export interface IHeaderProps {
  title: TStringOrElement
  description: TStringOrElement
  buttonText?: TStringOrElement
  onButtonClick?: () => void
  buttonIcon?: EIcons
}
