import classNames from 'classnames'
import { FC } from 'react'

import styles from './StatusScreen.module.scss'
import { IStatusScreenProps } from './StatusScreen.types'

const StatusScreen: FC<IStatusScreenProps> = ({ children, className = '', height }) =>
  height ? (
    <div className={classNames(styles.statusScreen, className)} style={{ height }}>
      {children}
    </div>
  ) : null

export default StatusScreen
