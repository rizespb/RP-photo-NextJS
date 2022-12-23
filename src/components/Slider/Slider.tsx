/* eslint-disable-next-line import/no-unresolved */
import 'swiper/css'
import classNames from 'classnames'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { Autoplay, Keyboard, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Icon } from '@components'
import { EIcons } from '@constants'

import styles from './Slider.module.scss'
import { ISliderProps } from './Slider.types'

const Slider: FC<ISliderProps> = (props) => {
  const { className = '', initialSlideIndex = 0, photos, slideImageMode } = props

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const leftArrowIconClasses = classNames({
    [styles.arrowIcon]: true,
    [styles['arrowIcon--left']]: true,
  })

  const rightArrowIconClasses = classNames({
    [styles.arrowIcon]: true,
    [styles['arrowIcon--right']]: true,
  })

  const slideImageClasses = classNames({
    [styles['slideImage--cover']]: slideImageMode === 'cover',
    [styles['slideImage--contain']]: slideImageMode === 'contain',
  })

  return (
    <Swiper
      modules={[Autoplay, Navigation, Keyboard]}
      slidesPerView={1}
      initialSlide={initialSlideIndex}
      loop={true}
      autoplay={{ delay: 3000 }}
      speed={1000}
      spaceBetween={30}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      navigation={{
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation === 'object') {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
        }
      }}
      className={classNames(styles.slider, className)}
    >
      {photos.map(({ id, link }) => (
        <SwiperSlide key={id} className={styles.slide}>
          <Image
            src={link}
            alt=""
            fill={true}
            className={slideImageClasses}
            sizes="(max-width: 768px) 100vw,
              80vw"
          />
        </SwiperSlide>
      ))}

      <Icon name={EIcons.ArrowLeftSlider} size="large" className={leftArrowIconClasses} ref={navigationPrevRef} />
      <Icon name={EIcons.ArrowRightSlider} size="large" className={rightArrowIconClasses} ref={navigationNextRef} />
    </Swiper>
  )
}

export default Slider
