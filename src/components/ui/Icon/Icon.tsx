import classNames from 'classnames'
import React, { FC } from 'react'

import { iconsMap } from './Icon.constant'
import styles from './Icon.module.scss'
import { IIconProps } from './Icon.types'

const Icon: FC<IIconProps> = ({ className = '', name, size = 'medium' }) => {
  const IconSvg = iconsMap[name]

  const iconClasses = classNames({
    [styles.icon]: true,
    [styles.icon__small]: size === 'small',
    [styles.icon__medium]: size === 'medium',
    [styles.icon__large]: size === 'large',
    className: true,
  })

  return (
    <span className={iconClasses}>
      <IconSvg />
    </span>
  )
}

export default Icon
