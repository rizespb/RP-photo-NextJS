import type { NextPage } from 'next'

import { Header, Modal, ReviewsList } from '@components'
import { ReviewForm } from '@components/forms'
import { EIcons } from '@constants'
import { useComponentVisible } from 'hooks'

const ReviewPage: NextPage = () => {
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
