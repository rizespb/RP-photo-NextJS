import classNames from 'classnames'
import { FC, FocusEventHandler, forwardRef, useImperativeHandle, useRef, useState } from 'react'

import styles from './Input.module.scss'
import { IInputProps, TLabelPosition } from './Input.types'

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { className, labelText, onBlur, onFocus, value = '', ...rest } = props

  const [labelPosition, setLabelPosition] = useState<TLabelPosition>(() => (value ? 'top' : 'centered'))

  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event): void => {
    setLabelPosition('top')
    onFocus && onFocus(event)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event): void => {
    !value && setLabelPosition('centered')
    onBlur && onBlur(event)
  }

  const hadleLabelClick = () => {
    inputRef.current?.focus()
  }

  const labelClasses = classNames({
    [styles.label]: true,
    [styles['label--top']]: labelPosition === 'top',
    [styles['label--centered']]: labelPosition === 'centered',
  })

  return (
    <fieldset className={styles.wrapper}>
      <input
        {...rest}
        className={classNames(styles.input, className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        ref={inputRef}
      />
      {labelText && (
        <label className={labelClasses} onClick={hadleLabelClick}>
          {labelText}
        </label>
      )}
    </fieldset>
  )
})

Input.displayName = 'Input'

export default Input
