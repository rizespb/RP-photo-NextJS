import { Slider } from '@components'

import { mainPagePhotos } from './MainPage.data'
import styles from './MainPage.module.scss'

const MainPage = () => (
  <section className={styles.wrapper}>
    <Slider photos={mainPagePhotos} />
  </section>
)

export default MainPage
