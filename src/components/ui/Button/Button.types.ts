import { ButtonHTMLAttributes } from 'react'

import { EIcons } from '@constants'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: EIcons
}
