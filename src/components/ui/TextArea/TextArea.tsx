import classNames from 'classnames'
import { FocusEventHandler, forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { TLabelPosition } from '@types'

import styles from './TextArea.module.scss'
import { ITextAreaProps } from './TextArea.types'

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>((props, ref) => {
  const { className, error, labelText, onBlur, onFocus, rows = 5, value = '', ...rest } = props

  const [labelPosition, setLabelPosition] = useState<TLabelPosition>(() => (value ? 'top' : 'centered'))

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useImperativeHandle(ref, () => textAreaRef.current as HTMLTextAreaElement)

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = (event): void => {
    setLabelPosition('top')
    onFocus && onFocus(event)
  }

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event): void => {
    !value && setLabelPosition('centered')
    onBlur && onBlur(event)
  }

  const hadleLabelClick = () => {
    textAreaRef.current?.focus()
  }

  const labelTextClasses = classNames({
    [styles.labelText]: true,
    [styles['labelText--top']]: labelPosition === 'top',
    [styles['labelText--centered']]: labelPosition === 'centered',
    [styles['labelText--error']]: !!error,
  })

  const textAreaClasses = classNames({
    [styles.textArea]: true,
    [styles['textArea--error']]: !!error,
  })

  return (
    <fieldset className={styles.wrapper}>
      {labelText && (
        <label className={styles.label} onClick={hadleLabelClick}>
          <textarea
            {...rest}
            className={classNames(textAreaClasses, className)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            ref={textAreaRef}
            rows={rows}
          />
          <span className={labelTextClasses}>{labelText}</span>
        </label>
      )}

      {error && <span className={styles.error}>{error}</span>}
    </fieldset>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
