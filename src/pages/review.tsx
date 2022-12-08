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
        <Modal close={() => setIsComponentVisible(false)} ref={ref}>
          <ReviewForm />
        </Modal>
      )}
    </div>
  )
}

export default ReviewPage
