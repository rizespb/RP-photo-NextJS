import classNames from 'classnames'
import Image from 'next/image'
import React, { FC } from 'react'

import { Icon } from '@components/ui'
import { EIcons } from '@constants'

import styles from './Review.module.scss'
import { IReviewProps } from './Review.types'

const Review: FC<IReviewProps> = (props) => {
  const { author, image, imagePosition, text, title } = props

  const reviewClasses = classNames({
    [styles.review]: true,
    [styles['review--imageLeft']]: imagePosition === 'left',
  })

  return (
    <article className={reviewClasses}>
      <div className={styles.textContent}>
        <h3 className={styles.textContent__title}>{title}</h3>

        <p className={styles.textContent__text}>{text}</p>

        <p className={styles.textContent__author}>
          <Icon name={EIcons.Feather} size="small" />
          {author}
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          fill={true}
          src={image}
          alt={author}
          className={styles.image}
          sizes="(max-width: 768px) 100vw,
              50vw"
          priority={true}
        />
      </div>
    </article>
  )
}

export default Review
