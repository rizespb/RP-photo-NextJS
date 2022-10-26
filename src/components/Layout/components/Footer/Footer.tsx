import { FC } from 'react'

import { Icon, Link } from '@ui'

import { contactsData } from './Footer.constants'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>Фотограф Катерина Петрова</span>

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
