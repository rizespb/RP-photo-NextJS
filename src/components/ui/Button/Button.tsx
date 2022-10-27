import classNames from 'classnames'
import { FC } from 'react'

import { EIcons } from '@constants'

import Icon from '../Icon'
import styles from './Button.module.scss'
import { IButtonProps } from './Button.types'

const Button: FC<IButtonProps> = (props) => {
  const { className, icon, text, ...rest } = props

  return (
    <button {...rest} className={classNames(styles.button, className)}>
      {text}

      {icon && <Icon size="small" name={EIcons.ArrowRight} />}
    </button>
  )
}

export default Button
