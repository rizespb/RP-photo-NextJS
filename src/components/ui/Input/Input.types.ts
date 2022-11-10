import { InputHTMLAttributes } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

export type TLabelPosition = 'top' | 'centered'
