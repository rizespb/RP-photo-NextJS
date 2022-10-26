import { FC } from 'react'

import Email from '@assets/email.svg'
import Phone from '@assets/phone.svg'
import Vk from '@assets/vk.svg'
import { EIcons } from '@types'

export const iconsMap: Record<EIcons, FC> = {
  [EIcons.VK]: Vk,
  [EIcons.Phone]: Phone,
  [EIcons.Email]: Email,
}
