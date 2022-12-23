import { FC } from 'react'

import Spinner from '@assets/spinner.svg'

import styles from './Loader.module.scss'

const Loader: FC = () => (
  <div className={styles.loader}>
    <Spinner />
  </div>
)

export default Loader
