import { yupResolver } from '@hookform/resolvers/yup'
import React, { createRef, FC, useCallback, useState } from 'react'
import ReCaptcha from 'react-google-recaptcha'
import { Controller, FieldValues, useForm } from 'react-hook-form'

import { Api, ERequestStatus } from '@api'
import { Button, Input, TextArea } from '@components/ui'
import { envVars } from '@constants'

import styles from './ReviewForm.module.scss'
import { reviewFormValidationSchema } from './ReviewForm.schema'

const captchaRef = createRef<ReCaptcha>()

const ReviewForm: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, formState, handleSubmit, register, setValue } = useForm({
    // Запускать валидацию и при первой потере фокуса onBlur и при вводе данных
    mode: 'onTouched',
    resolver: yupResolver(reviewFormValidationSchema),
  })

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(true)
  const [sendFormError, setSendFormError] = useState<string>('')

  const handleFormSubmit = async (values: FieldValues): Promise<void> => {
    setSendFormError('')
    const token = captchaRef.current?.getValue()

    if (!token) {
      return
    }

    const response = await Api.sendReview(values, token + 's')

    if (response.status === ERequestStatus.Success) {
      captchaRef.current?.reset()
    } else {
      setSendFormError('Что-то пошло не так. Попробуйте отправить отзыв позже')
    }
  }

  const handleRecaptchaChange = useCallback((token: string | null) => {
    if (token) {
      setIsSubmitButtonDisabled(false)
    } else {
      setIsSubmitButtonDisabled(true)
    }
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
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

      <div className={styles.form__bottom}>
        <Button text="Отправить" type="submit" disabled={isSubmitButtonDisabled} />

        <ReCaptcha
          sitekey={envVars.RECAPTCHA_SITE_KEY}
          ref={captchaRef}
          onChange={handleRecaptchaChange}
          size="invisible"
        />
      </div>

      {sendFormError && <span className={styles.form_submitError}>{sendFormError}</span>}
    </form>
  )
}

export default ReviewForm
