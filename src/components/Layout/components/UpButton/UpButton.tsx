import React, { FC, useEffect, useState } from 'react'

import { EIcons } from '@constants'

import { Icon } from '../../../ui'
import styles from './UpButton.module.scss'

const UpButton: FC = () => {
  const [isUpButtonVisible, setIsUpButtonVisible] = useState(false)
  const isBrowser = typeof window !== 'undefined'

  useEffect(() => {
    const handleScroll = () => {
      isBrowser && window.scrollY > 150 && setIsUpButtonVisible(true)
      isBrowser && window.scrollY <= 150 && setIsUpButtonVisible(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    isBrowser &&
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      })
  }

  return isUpButtonVisible ? (
    <Icon name={EIcons.Up} size="large" className={styles.upButton} onClick={scrollToTop} />
  ) : null
}

export default UpButton
