import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { Header, Icon, Modal, Slider } from '@components'
import { EIcons } from '@constants'
import { useComponentVisible } from '@hooks'
import { getTemplatedString } from '@utils'

import PhotoGallery from './components/PhotoGallery'
import { TEXTS } from './GalleryPage.constants'
import styles from './GalleryPage.module.scss'
import { IGalleryPageProps } from './GalleryPage.types'

const GalleryPage: FC<IGalleryPageProps> = (props) => {
  const { description, parentCategory, photos, title } = props
  const router = useRouter()

  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false)
  const [initialSlideIndex, setInitialSlideIndex] = useState(0)

  const closeModal = (): void => {
    setInitialSlideIndex(0)
    setIsComponentVisible(false)
  }

  const handleBackButtonClick = (): void => {
    router.push(parentCategory.link)
  }

  const handlePhotoClick = (id: number): void => {
    const photoIndex = photos.findIndex((photo) => photo.id === id)

    setInitialSlideIndex(photoIndex)
    setIsComponentVisible(true)
  }

  return (
    <>
      <Header
        title={title}
        description={description}
        buttonText={getTemplatedString(TEXTS.backButton, { parentPage: parentCategory.title })}
        onButtonClick={handleBackButtonClick}
        buttonIcon={EIcons.ArrowRight}
      />

      <section>
        <PhotoGallery photos={photos} onPhotoClick={handlePhotoClick} />
      </section>

      {isComponentVisible && (
        <Modal mode="rightSide" ref={ref} contentWrapperClassName={styles.contentWrapper}>
          <Slider
            photos={photos}
            initialSlideIndex={initialSlideIndex}
            className={styles.slider}
            slideImageMode="contain"
          />

          <Icon name={EIcons.Close} className={styles.close} onClick={closeModal} />
        </Modal>
      )}
    </>
  )
}

export default GalleryPage
