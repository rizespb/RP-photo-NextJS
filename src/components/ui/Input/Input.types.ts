import { InputHTMLAttributes } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  error?: string
}

export type TLabelPosition = 'top' | 'centered'
