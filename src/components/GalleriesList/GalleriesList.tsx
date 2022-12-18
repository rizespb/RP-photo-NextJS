import { FC } from 'react'

import GalleryPreview from './components/GalleryPreview'
import styles from './GalleriesList.module.scss'
import { IGalleriesListProps } from './GalleriesList.types'

const GalleriesList: FC<IGalleriesListProps> = ({ galleries }) => {
  return (
    <section>
      <ul className={styles.list}>
        {galleries.map((gallery) => (
          <GalleryPreview
            key={gallery.id}
            previewPhoto={gallery.previewPhoto}
            link={gallery.link}
            title={gallery.title}
          />
        ))}
      </ul>
    </section>
  )
}

export default GalleriesList
