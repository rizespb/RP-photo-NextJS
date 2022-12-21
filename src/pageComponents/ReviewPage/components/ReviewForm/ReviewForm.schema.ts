import * as yup from 'yup'

import {
  EMAIL_ERROR_MESSAGE,
  NAME_MAX_LENGTH_ERROR_MESSAGE,
  NAME_MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_FIELD_ERROR_MESSAGE,
  REVIEW_MESSAGE_MAX_LENGTH_ERROR_MESSAGE,
  REVIEW_MESSAGE_MIN_LENGTH_ERROR_MESSAGE,
} from '@constants'

export const reviewFormValidationSchema = yup.object().shape({
  email: yup.string().email(EMAIL_ERROR_MESSAGE).required(REQUIRED_FIELD_ERROR_MESSAGE),
  name: yup
    .string()
    .min(3, NAME_MIN_LENGTH_ERROR_MESSAGE)
    .max(33, NAME_MAX_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  reviewMessage: yup
    .string()
    .min(13, REVIEW_MESSAGE_MIN_LENGTH_ERROR_MESSAGE)
    .max(1000, REVIEW_MESSAGE_MAX_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
})
