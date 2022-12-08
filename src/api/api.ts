import { send } from '@emailjs/browser'
import { FieldValues } from 'react-hook-form'

import { envVars } from '@constants'
import { ERequestStatus } from '@types'

import { ISendReviewResponse } from './api.types'

class Api {
  static sendReview = async (values: FieldValues, token: string): Promise<ISendReviewResponse> => {
    try {
      await send(
        envVars.SENDEMAIL_DEFAULT_SERVICE,
        envVars.SENDEMAIL_REVIEW_TEMPLATE_ID,
        {
          ...values,
          'g-recaptcha-response': token,
        },
        envVars.SENDEMAIL_PUBLIC_KEY,
      )

      return {
        status: ERequestStatus.Success,
      }
    } catch {
      return {
        status: ERequestStatus.Error,
      }
    }
  }
}

export default Api
