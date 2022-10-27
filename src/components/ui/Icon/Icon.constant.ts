import { FC } from 'react'

import ArrowRight from '@assets/icons/arrow-right.svg'
import Email from '@assets/icons/email.svg'
import Phone from '@assets/icons/phone.svg'
import Vk from '@assets/icons/vk.svg'
import { EIcons } from '@constants'

export const iconsMap: Record<EIcons, FC> = {
  [EIcons.VK]: Vk,
  [EIcons.Phone]: Phone,
  [EIcons.Email]: Email,
  [EIcons.ArrowRight]: ArrowRight,
}
