import { FC } from 'react'

import { Icon } from '@components/ui'
import { EIcons } from '@constants'

import styles from './ModalContent.module.scss'
import { IModalContentProps } from './ModalContent.types'

const ModalContent: FC<IModalContentProps> = ({ children, closeModal }) => {
  return (
    <div className={styles.modalContent}>
      <Icon name={EIcons.Close} className={styles.close} onClick={closeModal} />

      {children}
    </div>
  )
}

export default ModalContent
