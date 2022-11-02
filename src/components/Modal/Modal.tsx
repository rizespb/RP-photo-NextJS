import classNames from 'classnames'
import { forwardRef } from 'react'

import { EIcons } from '@constants'
import { Portal } from '@hocs'
import { Icon } from '@ui'

import styles from './Modal.module.scss'
import { IModalProps } from './Modal.types'

const Modal = forwardRef<HTMLDivElement, IModalProps>(function Modal(props, ref) {
  const { children, className = '', close } = props

  return (
    <Portal>
      <div className={styles.container}>
        <div className={classNames(styles.modal, className)} ref={ref}>
          <Icon name={EIcons.Close} className={styles.close} onClick={close} />

          {children}
        </div>
      </div>
    </Portal>
  )
})

export default Modal
