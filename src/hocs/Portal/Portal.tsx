import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { MODAL_DIV_ID } from '@constants'

import { IPortalProps } from './Portal.types'

const Portal: FC<IPortalProps> = ({ children }) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalContainer(document.getElementById(MODAL_DIV_ID))
  }, [])

  return portalContainer ? createPortal(children, portalContainer) : null
}

export default Portal
