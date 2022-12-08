import { EIcons, envVars } from '@constants'

export const contactsData = [
  { id: 0, link: `mailto:${envVars.CONTACTS_EMAIL}`, text: envVars.CONTACTS_EMAIL, type: EIcons.Email },
  { id: 1, link: `tel:${envVars.CONTACTS_TEL}`, text: envVars.CONTACTS_TEL, type: EIcons.Phone },
  {
    id: 2,
    link: `https://vk.com/${envVars.CONTACTS_VK}`,
    target: '_blank',
    text: `@${envVars.CONTACTS_VK}`,
    type: EIcons.VK,
  },
]
