import React, { FC } from 'react'

import { Input } from '@components/ui'

import styles from './ReviewForm.module.scss'
import { IReviewFormProps } from './ReviewForm.types'

const ReviewForm: FC<IReviewFormProps> = () => {
  return (
    <form className={styles.form}>
      <Input type="text" labelText="Имя" />
      {/* <Input type="email" labelText="Email" /> */}
    </form>
  )
}

export default ReviewForm
