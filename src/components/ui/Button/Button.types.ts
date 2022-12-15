import { ButtonHTMLAttributes } from 'react'

import { EIcons } from '@constants'
import { TStringOrElement } from '@types'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: TStringOrElement
  icon?: EIcons
}
