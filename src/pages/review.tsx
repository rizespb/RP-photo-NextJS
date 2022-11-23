import type { NextPage } from 'next'
import { FieldValues } from 'react-hook-form'

import { Header, Modal, ReviewsList } from '@components'
import { ReviewForm } from '@components/forms'
import { EIcons } from '@constants'
import { useComponentVisible } from 'hooks'

const ReviewPage: NextPage = () => {
  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false)

  const handleAddReviewClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const handleFormSubmit = (event: FieldValues): void => {
    console.log('Form submitted!')
    console.log('event', event)
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
          <ReviewForm onSubmit={handleFormSubmit} />
        </Modal>
      )}
    </div>
  )
}

export default ReviewPage
