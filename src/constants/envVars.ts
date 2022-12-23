export const envVars = {
  CONTACTS_EMAIL: process.env.NEXT_PUBLIC_CONTACTS_EMAIL as string,
  CONTACTS_TEL: process.env.NEXT_PUBLIC_CONTACTS_TEL as string,
  CONTACTS_VK: process.env.NEXT_PUBLIC_CONTACTS_VK as string,
  RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY as string,
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
  SENDEMAIL_DEFAULT_SERVICE: process.env.NEXT_PUBLIC_SENDEMAIL_DEFAULT_SERVICE as string,
  SENDEMAIL_MESSAGE_TEMPLATE_ID: process.env.NEXT_PUBLIC_SENDEMAIL_MESSAGE_TEMPLATE_ID as string,
  SENDEMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_SENDEMAIL_PUBLIC_KEY as string,
}
