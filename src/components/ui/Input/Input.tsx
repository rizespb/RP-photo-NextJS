import classNames from 'classnames'
import { FocusEventHandler, forwardRef, useImperativeHandle, useRef, useState } from 'react'

import styles from './Input.module.scss'
import { IInputProps, TLabelPosition } from './Input.types'

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { className, error, labelText, onBlur, onFocus, value = '', ...rest } = props

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

  const labelTextClasses = classNames({
    [styles.labelText]: true,
    [styles['labelText--top']]: labelPosition === 'top',
    [styles['labelText--centered']]: labelPosition === 'centered',
    [styles['labelText--error']]: !!error,
  })

  const inputClasses = classNames({
    [styles.input]: true,
    [styles['input--error']]: !!error,
  })

  return (
    <fieldset className={styles.wrapper}>
      {labelText && (
        <label className={styles.label} onClick={hadleLabelClick}>
          <input
            {...rest}
            className={classNames(inputClasses, className)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            ref={inputRef}
          />
          <span className={labelTextClasses}>{labelText}</span>
        </label>
      )}

      {error && <span className={styles.error}>{error}</span>}
    </fieldset>
  )
})

Input.displayName = 'Input'

export default Input
