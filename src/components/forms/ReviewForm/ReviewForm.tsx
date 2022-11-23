import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button, Input, TextArea } from '@components/ui'

import styles from './ReviewForm.module.scss'
import { reviewFormValidationSchema } from './ReviewForm.schema'
import { IReviewFormProps } from './ReviewForm.types'

const ReviewForm: FC<IReviewFormProps> = ({ onSubmit }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, formState, handleSubmit, register, setValue } = useForm({
    // Запускать валидацию и при первой потере фокуса onBlur и при вводе данных
    mode: 'onTouched',
    resolver: yupResolver(reviewFormValidationSchema),
  })

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        // @TODO для экспериментов. Удалить перед деплоем
        /* eslint-disable @typescript-eslint/no-unused-vars */
        render={({ field, fieldState, formState }) => {
          const { name, onBlur, onChange, ref, value } = field
          const { error, invalid, isDirty, isTouched } = fieldState
          /* eslint-enable @typescript-eslint/no-unused-vars */

          return <Input {...field} type="text" labelText="Имя" error={error?.message} />
        }}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => {
          const { error } = fieldState

          return <Input {...field} type="text" labelText="Email" error={error?.message} />
        }}
      />

      <Controller
        name="reviewMessage"
        control={control}
        render={({ field, fieldState }) => {
          const { error } = fieldState

          return <TextArea {...field} labelText="Ваше сообщение" error={error?.message} />
        }}
      />

      <Button text="Отправить" type="submit" />
    </form>
  )
}

export default ReviewForm
