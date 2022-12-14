import * as yup from 'yup'

import {
  CONTACTS_MESSAGE_MAX_LENGTH_ERROR_MESSAGE,
  CONTACTS_MESSAGE_MIN_LENGTH_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  NAME_MAX_LENGTH_ERROR_MESSAGE,
  NAME_MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_FIELD_ERROR_MESSAGE,
} from '@constants'

export const contactFormValidationSchema = yup.object().shape({
  email: yup.string().email(EMAIL_ERROR_MESSAGE).required(REQUIRED_FIELD_ERROR_MESSAGE),
  message: yup
    .string()
    .min(13, CONTACTS_MESSAGE_MIN_LENGTH_ERROR_MESSAGE)
    .max(1000, CONTACTS_MESSAGE_MAX_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  name: yup
    .string()
    .min(3, NAME_MIN_LENGTH_ERROR_MESSAGE)
    .max(33, NAME_MAX_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
})
