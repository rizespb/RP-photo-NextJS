/* eslint-disable-next-line import/no-unresolved */
import 'swiper/css'
import classNames from 'classnames'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Icon } from '@components'
import { EIcons } from '@constants'

import styles from './Slider.module.scss'
import { ISliderProps } from './Slider.types'

const Slider: FC<ISliderProps> = (props) => {
  const { className = '', initialSlideIndex = 0, photos } = props

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

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      initialSlide={initialSlideIndex}
      loop={true}
      autoplay={{ delay: 3000 }}
      speed={1000}
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
            className={styles.slideImage}
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