import { yupResolver } from '@hookform/resolvers/yup'
import { createRef, FC, useCallback, useRef, useState } from 'react'
import ReCaptcha from 'react-google-recaptcha'
import { Controller, FieldValues, useForm } from 'react-hook-form'

import { Api } from '@api'
import { Loader, StatusScreen } from '@components'
import { Button, Input, TextArea } from '@components/ui'
import { envVars } from '@constants'
import { ERequestStatus } from '@types'

import { TEXTS } from './ContactForm.constant'
import styles from './ContactForm.module.scss'
import { contactFormValidationSchema } from './ContactsPage.schema'

const captchaRef = createRef<ReCaptcha>()

const ContactForm: FC = () => {
  const { control, handleSubmit, reset } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(contactFormValidationSchema),
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
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form} ref={formRef}>
          <fieldset className={styles.form__credentials}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => {
                const { error } = fieldState

                return (
                  <Input
                    {...field}
                    type="text"
                    labelText={TEXTS.inputNameLabel}
                    error={error?.message}
                    labelBGColor="beige"
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
                    labelBGColor="beige"
                    autoComplete="off"
                  />
                )
              }}
            />
          </fieldset>

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
                  labelBGColor="beige"
                />
              )
            }}
          />

          <div className={styles.form__bottom}>
            <Button text={TEXTS.sendButton} type="submit" disabled={isSubmitButtonDisabled} isBordered />

            <div>
              <ReCaptcha sitekey={envVars.RECAPTCHA_SITE_KEY} ref={captchaRef} onChange={handleRecaptchaChange} />
            </div>
          </div>

          {isError && <span className={styles.form__submitError}>{TEXTS.submitFormError}</span>}
        </form>
      )}

      {isSuccess && <StatusScreen height={statusScreenHeigth}>{TEXTS.submitFormSuccess}</StatusScreen>}
    </>
  )
}

export default ContactForm
