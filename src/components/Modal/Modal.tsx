import classNames from 'classnames'
import { forwardRef, useMemo } from 'react'

import { MODAL_DIV_ID, RIGHT_SIDE_MODAL_DIV_ID } from '@constants'
import { Portal } from '@hocs'

import styles from './Modal.module.scss'
import { IModalProps } from './Modal.types'

const Modal = forwardRef<HTMLDivElement, IModalProps>(function Modal(props, ref) {
  const { children, contentWrapperClassName = '', mode } = props

  const isFullscreenModal = mode === 'fullscreen'

  const portalContainerId = useMemo(
    () => (isFullscreenModal ? MODAL_DIV_ID : RIGHT_SIDE_MODAL_DIV_ID),
    [isFullscreenModal],
  )

  const containerClasses = classNames({
    [styles.container]: true,
    [styles['container--fullscreen']]: isFullscreenModal,
    [styles['container--rightSide']]: !isFullscreenModal,
  })

  const contentWrapperClasses = classNames({
    [styles.contentWrapper]: true,
    [contentWrapperClassName]: contentWrapperClassName,
  })

  return (
    <Portal portalContainerId={portalContainerId}>
      <div className={containerClasses}>
        <div ref={ref} className={contentWrapperClasses}>
          {children}
        </div>
      </div>
    </Portal>
  )
})

export default Modal
