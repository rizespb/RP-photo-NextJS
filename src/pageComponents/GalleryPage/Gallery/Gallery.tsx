import Image from 'next/image'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryProps } from './Gallery.types'

const Gallery: FC<IGalleryProps> = ({ photos }) => (
  <ul className={styles.gallery}>
    {photos.map(({ id, link }) => (
      <li key={id} className={styles.gallery__photoWrapper}>
        <Image
          src={link}
          alt=""
          className={styles.gallery__photo}
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw,
              50vw"
        />
      </li>
    ))}
  </ul>
)

export default Gallery
