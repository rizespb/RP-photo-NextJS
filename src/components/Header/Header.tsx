import { FC } from 'react'

import { Button } from '@ui'

import styles from './Header.module.scss'
import { IHeaderProps } from './Header.types'

const Header: FC<IHeaderProps> = (props) => {
  const { buttonIcon, buttonText, description, onButtonClick, title } = props

  return (
    <div className={styles.header}>
      <div className={styles.header__text}>
        <h1 className={styles.header__title}>{title}</h1>
        <span className={styles.header__description}>{description}</span>
      </div>

      {buttonText && <Button text={buttonText} onClick={onButtonClick} icon={buttonIcon} className={styles.button} />}
    </div>
  )
}

export default Header
