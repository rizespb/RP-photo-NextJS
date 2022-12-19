import React, { FC } from 'react'

import { Header, Modal } from '@components'
import ModalContent from '@components/ModalContent'
import { EIcons } from '@constants'
import { useComponentVisible } from '@hooks'

import { ReviewForm, ReviewsList } from './components'
import { TEXTS } from './ReviewPage.constants'

const ReviewPage: FC = () => {
  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false)

  const handleAddReviewClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const closeModal = (): void => setIsComponentVisible(false)

  return (
    <>
      <Header
        title={TEXTS.headerTitle}
        description={TEXTS.headerDescription}
        buttonText={TEXTS.headerButtonText}
        onButtonClick={handleAddReviewClick}
        buttonIcon={EIcons.Message}
      />

      <section>
        <ReviewsList />
      </section>

      {isComponentVisible && (
        <Modal mode="fullscreen" ref={ref}>
          <ModalContent closeModal={closeModal}>
            <ReviewForm closeModal={closeModal} />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ReviewPage
