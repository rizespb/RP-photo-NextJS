import React, { FC } from 'react'

import { Header, Modal } from '@components'
import { EIcons } from '@constants'
import { useComponentVisible } from '@hooks'

import { ReviewForm, ReviewsList } from './components'
import { TEXTS } from './constants'

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

      <ReviewsList />

      {isComponentVisible && (
        <Modal close={closeModal} ref={ref}>
          <ReviewForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  )
}

export default ReviewPage
