import { FC } from 'react'

import { Icon, Link } from '@ui'

import { contactsData, TEXTS } from './Footer.constants'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
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
