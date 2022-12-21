import { InputHTMLAttributes } from 'react'

import { TLabelBGColor } from '@types'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  error?: string
  labelBGColor: TLabelBGColor
}
