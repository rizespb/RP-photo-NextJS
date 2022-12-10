/* eslint-disable-next-line import/no-unresolved */
import 'swiper/css'
import Image from 'next/image'
import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { sliderPhotos } from './MainPage.data'

SwiperCore.use([Autoplay])

const MainPage = () => {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      {sliderPhotos.map(({ id, link }) => (
        <SwiperSlide
          key={id}
          style={{
            height: '90vh',
          }}
        >
          <Image
            src={link}
            alt=""
            fill={true}
            style={{
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MainPage
