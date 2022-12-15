import { FC } from 'react'

import { Header } from '@components'

import GalleryPreview from './components/GalleryPreview'
import styles from './GalleriesListPage.module.scss'
import { IGalleriesListPageProps } from './GalleriesListPage.types'

const GalleriesListPage: FC<IGalleriesListPageProps> = (props) => {
  const { description, galleries, title } = props

  return (
    <>
      <Header title={title} description={description} />

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
    </>
  )
}

export default GalleriesListPage
