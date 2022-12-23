import classNames from 'classnames'
import { FC } from 'react'

import Icon from '../Icon'
import styles from './Button.module.scss'
import { IButtonProps } from './Button.types'

const Button: FC<IButtonProps> = (props) => {
  const { className = '', icon, isBordered = false, text, ...rest } = props

  const buttonClasses = classNames({
    [styles.button]: true,
    [styles['button--bordered']]: isBordered,
    [className]: true,
  })

  return (
    <button {...rest} className={buttonClasses}>
      {text}

      {icon && <Icon size="small" name={icon} />}
    </button>
  )
}

export default Button
