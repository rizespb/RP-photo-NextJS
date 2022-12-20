import classNames from 'classnames'
import { FC } from 'react'

import { Icon, Link } from '@ui'

import { contactsData, TEXTS } from './Footer.constants'
import styles from './Footer.module.scss'
import { IFooterProps } from './Footer.types'

const Footer: FC<IFooterProps> = ({ withInnerPaddings }) => {
  const footerClasses = classNames({
    [styles.footer]: true,
    [styles['footer--paddings']]: withInnerPaddings,
  })

  return (
    <footer className={footerClasses}>
      <span className={styles.footer__text}>{TEXTS.label}</span>

      <div className={styles.contacts}>
        {contactsData.map((contact) => (
          <Link
            key={contact.id}
            link={contact.link}
            isNextLink={false}
            className={styles.contacts__link}
            target={contact.target}
          >
            <Icon name={contact.type} />
            {contact.text}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
