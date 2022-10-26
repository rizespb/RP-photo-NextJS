import React, { FC } from 'react'

import { iconsMap } from './Icon.constant'
import styles from './Icon.module.scss'
import { IIconProps } from './Icon.types'

const Icon: FC<IIconProps> = ({ name }) => {
  const IconSvg = iconsMap[name]

  return (
    <span className={styles.icon}>
      <IconSvg />
    </span>
  )
}

export default Icon
