import classNames from 'classnames'
import { FC } from 'react'

import styles from './MenuButton.module.scss'
import { IMenuButtonProps } from './MenuButton.types'

const MenuButton: FC<IMenuButtonProps> = (props) => {
  const { className = '', isMenuOpened, onClick } = props

  const wrapperClasses = classNames({
    [styles.wrapper]: true,
    [className]: true,
  })

  const menuLinesClasses = classNames({
    [styles.menuLines]: true,
    [styles['menuLines--burger']]: !isMenuOpened,
    [styles['menuLines--close']]: isMenuOpened,
  })

  return (
    <span className={wrapperClasses} onClick={onClick}>
      <span className={menuLinesClasses}></span>
    </span>
  )
}

export default MenuButton
