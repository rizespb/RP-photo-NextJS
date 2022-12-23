import { Slider } from '@components'

import { mainPagePhotos } from './MainPage.constants'
import styles from './MainPage.module.scss'

const MainPage = () => (
  <section className={styles.wrapper}>
    <Slider photos={mainPagePhotos} slideImageMode="cover" />
  </section>
)

export default MainPage
