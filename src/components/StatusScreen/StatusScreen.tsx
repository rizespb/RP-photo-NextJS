import { FC } from 'react'

import styles from './StatusScreen.module.scss'
import { IStatusScreenProps } from './StatusScreen.types'

const StatusScreen: FC<IStatusScreenProps> = ({ children }) => <div className={styles.statusScreen}>{children}</div>

export default StatusScreen
