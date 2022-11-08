import type { NextPage } from 'next'
import { FormEvent } from 'react'

import { Header, Modal, ReviewsList } from '@components'
import { ReviewForm } from '@components/forms'
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
          <ReviewForm
            onSubmit={(event: FormEvent) => {
              console.log('Form submitted!')
              console.log('event')
            }}
          />
        </Modal>
      )}
    </div>
  )
}

export default ReviewPage
