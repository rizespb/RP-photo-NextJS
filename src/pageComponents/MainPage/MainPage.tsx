import { Slider } from '@components'

import { mainPagePhotos } from './MainPage.data'
import styles from './MainPage.module.scss'

const MainPage = () => (
  <div className={styles.wrapper}>
    <Slider photos={mainPagePhotos} />
  </div>
)

export default MainPage
