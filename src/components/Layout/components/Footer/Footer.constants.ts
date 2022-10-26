import { envVars } from '@constants'
import { EIcons } from '@types'

export const contactsData = [
  { id: 0, link: `mailto:${envVars.EMAIL}`, text: envVars.EMAIL, type: EIcons.Email },
  { id: 1, link: `tel:${envVars.TEL}`, text: envVars.TEL, type: EIcons.Phone },
  { id: 2, link: `https://vk.com/${envVars.VK}`, target: '_blank', text: `@${envVars.VK}`, type: EIcons.VK },
]
