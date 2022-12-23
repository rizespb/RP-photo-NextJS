import { yupResolver } from '@hookform/resolvers/yup'
import { createRef, FC, useCallback, useRef, useState } from 'react'
import ReCaptcha from 'react-google-recaptcha'
import { Controller, FieldValues, useForm } from 'react-hook-form'

import { Api } from '@api'
import { Loader, StatusScreen } from '@components'
import { Button, Input, TextArea } from '@components/ui'
import { envVars } from '@constants'
import { ERequestStatus } from '@types'

import { TEXTS } from './ReviewForm.constants'
import styles from './ReviewForm.module.scss'
import { reviewFormValidationSchema } from './ReviewForm.schema'
import { IReviewFormProps } from './ReviewForm.types'

const captchaRef = createRef<ReCaptcha>()

const ReviewForm: FC<IReviewFormProps> = ({ closeModal }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, formState, handleSubmit, register, reset, setValue } = useForm({
    // Запускать валидацию и при первой потере фокуса onBlur и при вводе данных
    mode: 'onTouched',
    resolver: yupResolver(reviewFormValidationSchema),
  })

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(true)
  const [requestState, setRequestState] = useState<ERequestStatus | null>(null)
  const [statusScreenHeigth, setStatusScreenHeigth] = useState<number>(0)

  const formRef = useRef<HTMLFormElement>(null)

  const isError = requestState === ERequestStatus.Error
  const isLoading = requestState === ERequestStatus.Loading
  const isSuccess = requestState === ERequestStatus.Success

  const handleFormSubmit = async (values: FieldValues): Promise<void> => {
    setRequestState(ERequestStatus.Loading)
    const token = captchaRef.current?.getValue()

    if (!token) {
      return
    }

    const dataToSend = { ...values, messageType: TEXTS.messageType }

    const response = await Api.sendMessage(dataToSend, token)

    const formHeigth = formRef.current?.clientHeight

    formHeigth && setStatusScreenHeigth(formHeigth)

    if (response.status === ERequestStatus.Success) {
      reset()
      setRequestState(ERequestStatus.Success)
    } else {
      setRequestState(ERequestStatus.Error)
    }

    captchaRef.current?.reset()
  }

  const handleRecaptchaChange = useCallback((token: string | null) => {
    if (token) {
      setIsSubmitButtonDisabled(false)
    } else {
      setIsSubmitButtonDisabled(true)
    }
  }, [])

  return (
    <>
      {isLoading && <Loader />}

      {!isSuccess && (
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
          <Controller
            name="name"
            control={control}
            // @TODO для экспериментов. Удалить перед деплоем
            /* eslint-disable @typescript-eslint/no-unused-vars */
            render={({ field, fieldState, formState }) => {
              const { name, onBlur, onChange, ref, value } = field
              const { error, invalid, isDirty, isTouched } = fieldState
              /* eslint-enable @typescript-eslint/no-unused-vars */

              return (
                <Input
                  {...field}
                  type="text"
                  labelText={TEXTS.inputNameLabel}
                  error={error?.message}
                  labelBGColor="white"
                  autoComplete="off"
                />
              )
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => {
              const { error } = fieldState

              return (
                <Input
                  {...field}
                  type="text"
                  labelText={TEXTS.inputEmailLabel}
                  error={error?.message}
                  labelBGColor="white"
                  autoComplete="off"
                />
              )
            }}
          />

          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => {
              const { error } = fieldState

              return (
                <TextArea
                  {...field}
                  labelText={TEXTS.textAreaMessageLabel}
                  error={error?.message}
                  labelBGColor="white"
                />
              )
            }}
          />

          <div className={styles.form__bottom}>
            <Button text={TEXTS.sendButton} type="submit" disabled={isSubmitButtonDisabled} isBordered />

            <div className={styles.form__reCaptchaWrapper}>
              <ReCaptcha sitekey={envVars.RECAPTCHA_SITE_KEY} ref={captchaRef} onChange={handleRecaptchaChange} />
            </div>
          </div>

          {isError && <span className={styles.form__submitError}>{TEXTS.submitFormError}</span>}
        </form>
      )}

      {isSuccess && (
        <StatusScreen height={statusScreenHeigth}>
          <div className={styles.successContent}>
            <p className={styles.successContent__text}>{TEXTS.successMessage1}</p>
            <p className={styles.successContent__text}>{TEXTS.successMessage2}</p>

            <Button
              text={TEXTS.finishButton}
              disabled={isSubmitButtonDisabled}
              className={styles.successContent__button}
              onClick={closeModal}
              isBordered
            />
          </div>
        </StatusScreen>
      )}
    </>
  )
}

export default ReviewForm
