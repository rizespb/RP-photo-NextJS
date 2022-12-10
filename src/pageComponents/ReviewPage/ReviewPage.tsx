import React, { FC } from 'react'

import { Header, Modal } from '@components'
import { EIcons } from '@constants'
import { useComponentVisible } from '@hooks'

import { ReviewForm, ReviewsList } from './components'

const ReviewPage: FC = () => {
  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false)

  const handleAddReviewClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const closeModal = (): void => setIsComponentVisible(false)

  return (
    <div>
      <Header
        title="Отзывы"
        description="Отзывы довольных клиентов"
        buttonText="Оставить отзыв&nbsp;"
        onButtonClick={handleAddReviewClick}
        buttonIcon={EIcons.Message}
      />

      <ReviewsList />

      {isComponentVisible && (
        <Modal close={closeModal} ref={ref}>
          <ReviewForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  )
}

export default ReviewPage
