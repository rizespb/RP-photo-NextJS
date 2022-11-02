import type { NextPage } from 'next'

import { Header, Modal, ReviewsList } from '@components'
import { EIcons } from '@constants'
import { useComponentVisible } from 'hooks'

const ReviewPage: NextPage = () => {
  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false)

  const handleButtonClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <div>
      <Header
        title="Отзывы"
        description="Отзывы довольных клиентов"
        buttonText="Оставить отзыв&nbsp;"
        onButtonClick={handleButtonClick}
        buttonIcon={EIcons.Message}
      />

      <ReviewsList />

      {isComponentVisible && (
        <Modal close={() => setIsComponentVisible(false)} ref={ref}>
          Please add review here. We need more reviews! A-ha-ha-ha-ha-haha-ha-ha-ha-haha-ha-ha-ha-ha!
        </Modal>
      )}
    </div>
  )
}

export default ReviewPage
