import Image from 'next/image'
import { FC } from 'react'

import { Link } from '@components'

import styles from './GalleryPreview.module.scss'
import { IGalleryPreviewProps } from './GalleryPreview.types'

const GalleryPreview: FC<IGalleryPreviewProps> = (props) => {
  const { link, previewPhoto, title } = props

  return (
    <Link link={link}>
      <article className={styles.galleryPreview}>
        <Image src={previewPhoto} width={500} height={500} alt={title} className={styles.photo} />

        <h3 className={styles.title}>{title}</h3>
      </article>
    </Link>
  )
}

export default GalleryPreview
