import classNames from 'classnames'
import { FC, FocusEventHandler, useState } from 'react'

import styles from './Input.module.scss'
import { IInputProps, TLabelPosition } from './Input.types'

const Input: FC<IInputProps> = ({ className, labelText, onBlur, onFocus, ...rest }) => {
  const [labelPosition, setLabelPosition] = useState<TLabelPosition>('centered')

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event): void => {
    setLabelPosition('top')
    onFocus && onFocus(event)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event): void => {
    setLabelPosition('centered')
    onBlur && onBlur(event)
  }

  const labelClasses = classNames({
    [styles.label]: true,
    [styles['label--top']]: labelPosition === 'top',
    [styles['label--centered']]: labelPosition === 'centered',
  })

  return (
    <fieldset className={styles.wrapper}>
      <input {...rest} className={classNames(styles.input, className)} onFocus={handleFocus} onBlur={handleBlur} />
      {labelText && <label className={labelClasses}>{labelText}</label>}
    </fieldset>
  )
}

export default Input
