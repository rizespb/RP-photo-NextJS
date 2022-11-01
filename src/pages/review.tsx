import type { NextPage } from 'next'
import { useState } from 'react'

import { Header, ReviewsList } from '@components'
import { EIcons } from '@constants'

const ReviewPage: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const handleButtonClick = () => {
    setIsModalVisible(!isModalVisible)
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
    </div>
  )
}

export default ReviewPage
