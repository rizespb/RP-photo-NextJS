import { TextareaHTMLAttributes } from 'react'

import { TLabelBGColor } from '@types'

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string
  error?: string
  rows?: number
  labelBGColor: TLabelBGColor
}
