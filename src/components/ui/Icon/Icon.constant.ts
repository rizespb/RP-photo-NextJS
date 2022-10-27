import { FC } from 'react'

import ArrowDown from '@assets/icons/arrow-down.svg'
import ArrowLeft from '@assets/icons/arrow-left.svg'
import ArrowRight from '@assets/icons/arrow-right.svg'
import ArrowUp from '@assets/icons/arrow-up.svg'
import Email from '@assets/icons/email.svg'
import Phone from '@assets/icons/phone.svg'
import Vk from '@assets/icons/vk.svg'
import { EIcons } from '@constants'

export const iconsMap: Record<EIcons, FC> = {
  [EIcons.VK]: Vk,
  [EIcons.Phone]: Phone,
  [EIcons.Email]: Email,
  [EIcons.ArrowRight]: ArrowRight,
  [EIcons.ArrowLeft]: ArrowLeft,
  [EIcons.ArrowDown]: ArrowDown,
  [EIcons.ArrowUp]: ArrowUp,
}
