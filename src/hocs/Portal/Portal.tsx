import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { IPortalProps } from './Portal.types'

const Portal: FC<IPortalProps> = ({ children, portalContainerId }) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalContainer(document.getElementById(portalContainerId))
  }, [portalContainerId])

  return portalContainer ? createPortal(children, portalContainer) : null
}

export default Portal
