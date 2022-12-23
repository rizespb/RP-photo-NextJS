import Image from 'next/image'
import { FC } from 'react'

import styles from './PhotoGallery.module.scss'
import { IPhotoGalleryProps } from './PhotoGallery.types'

const PhotoGallery: FC<IPhotoGalleryProps> = ({ onPhotoClick, photos }) => (
  <ul className={styles.gallery}>
    {photos.map(({ id, link }) => (
      <li key={id} className={styles.gallery__photoWrapper} onClick={() => onPhotoClick && onPhotoClick(id)}>
        <Image
          src={link}
          alt=""
          className={styles.gallery__photo}
          width={400}
          height={600}
          sizes="(max-width: 768px) 100vw,
              50vw"
        />
      </li>
    ))}
  </ul>
)

export default PhotoGallery
