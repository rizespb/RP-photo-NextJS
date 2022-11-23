import { TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string
  error?: string
  rows?: number
}
