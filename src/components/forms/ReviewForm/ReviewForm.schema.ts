import * as yup from 'yup'

const EMAIL_ERROR_MESSAGE = 'Возможно, вы допустили ошибку при вводе email'
const REQUIRED_FIELD_ERROR_MESSAGE = 'Заполните это поле, пожалуйста'
const NAME_MIN_LENGTH_ERROR_MESSAGE = 'Минимальная длина имени - 3 символа'
const NAME_MAX_LENGTH_ERROR_MESSAGE = 'Максимальная длина имени - 33 символа'

export const reviewFormValidationSchema = yup.object().shape({
  email: yup.string().email(EMAIL_ERROR_MESSAGE).required(REQUIRED_FIELD_ERROR_MESSAGE),
  name: yup
    .string()
    .min(3, NAME_MIN_LENGTH_ERROR_MESSAGE)
    .max(33, NAME_MAX_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
})
