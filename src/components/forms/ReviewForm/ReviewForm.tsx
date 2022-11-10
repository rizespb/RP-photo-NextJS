import React, { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input } from '@components/ui'

import styles from './ReviewForm.module.scss'
import { IReviewFormProps } from './ReviewForm.types'

const ReviewForm: FC<IReviewFormProps> = () => {
  const { control, handleSubmit, register, setValue } = useForm()

  const handleFormSubmit: SubmitHandler<FieldValues> = (data, event) => {
    console.log(data, event)
  }

  const customHandleChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: ChangeEventHandler<HTMLInputElement>,
  ): void => {
    console.log(event.target.value)

    onChange(event)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        name="name"
        control={control}
        // @TODO для экспериментов. Удалить перед деплоем
        /* eslint-disable */
        render={({ field, fieldState, formState }) => {
          const { name, onBlur, onChange, ref, value } = field
          const { error, invalid, isDirty, isTouched } = fieldState
          /* eslint-enable */

          return (
            <Input {...field} type="text" labelText="Имя" onChange={(event) => customHandleChange(event, onChange)} />
          )
        }}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => {
          return <Input {...field} type="email" labelText="Email" />
        }}
      />

      <Button text="Отправить" type="submit" />
    </form>
  )
}

export default ReviewForm
