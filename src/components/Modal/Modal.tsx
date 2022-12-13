import classNames from 'classnames'
import { forwardRef, useMemo } from 'react'

import { EIcons, MODAL_DIV_ID, RIGHT_SIDE_MODAL_DIV_ID } from '@constants'
import { Portal } from '@hocs'
import { Icon } from '@ui'

import styles from './Modal.module.scss'
import { IModalProps } from './Modal.types'

const Modal = forwardRef<HTMLDivElement, IModalProps>(function Modal(props, ref) {
  const { children, className = '', close, isStyled, mode } = props

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

  const modalClasses = classNames({
    [styles.modal]: true,
    [styles['modal--decorated']]: isStyled,
    [className]: true,
  })

  return (
    <Portal portalContainerId={portalContainerId}>
      <div className={containerClasses}>
        <div className={modalClasses} ref={ref}>
          <Icon name={EIcons.Close} className={styles.close} onClick={close} />

          {children}
        </div>
      </div>
    </Portal>
  )
})

export default Modal
