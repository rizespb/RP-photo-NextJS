import classNames from 'classnames'
import { FC } from 'react'

import styles from './MenuButton.module.scss'
import { IMenuButtonProps } from './MenuButton.types'

const MenuButton: FC<IMenuButtonProps> = (props) => {
  const { className = '', onClick, state = 'burger' } = props

  const wrapperClasses = classNames({
    [styles.menuButton]: true,
    [className]: true,
  })

  const menuLinesClasses = classNames({
    [styles.menuLines]: true,
    [styles['menuLines--burger']]: state === 'burger',
    [styles['menuLines--close']]: state === 'close',
  })

  return (
    <span className={wrapperClasses} onClick={onClick}>
      <span className={menuLinesClasses}></span>
    </span>
  )
}

export default MenuButton
