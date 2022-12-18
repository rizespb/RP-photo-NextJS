import { FC, useState } from 'react'

import { Header, Modal, Slider } from '@components'
import { EIcons } from '@constants'
import { useComponentVisible } from '@hooks'

import PhotoGallery from './components/PhotoGallery'
import styles from './GalleryPage.module.scss'
import { IGalleryPageProps } from './GalleryPage.types'

const GalleryPage: FC<IGalleryPageProps> = ({ photos }) => {
  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false)
  const [initialSlideIndex, setInitialSlideIndex] = useState(0)

  const closeModal = (): void => {
    setInitialSlideIndex(0)
    setIsComponentVisible(false)
  }

  const handleBackButtonClick = (): void => {
    console.log('Back button was clicked')
  }

  const handlePhotoClick = (id: number): void => {
    const photoIndex = photos.findIndex((photo) => photo.id === id)

    setInitialSlideIndex(photoIndex)
    setIsComponentVisible(true)
  }

  return (
    <>
      <Header
        title="Галереря фото"
        description="Какое-то описание галереии"
        buttonText="Назад к разделу"
        onButtonClick={handleBackButtonClick}
        buttonIcon={EIcons.ArrowRight}
      />

      <section>
        <PhotoGallery photos={photos} onPhotoClick={handlePhotoClick} />
      </section>

      {isComponentVisible && (
        <Modal
          mode="rightSide"
          close={closeModal}
          isStyledcontentArea={false}
          ref={ref}
          contentAreaClassName={styles.modalContentArea}
        >
          <Slider photos={photos} initialSlideIndex={initialSlideIndex} className={styles.slider} />
        </Modal>
      )}
    </>
  )
}

export default GalleryPage
