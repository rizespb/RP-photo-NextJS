import { FC } from 'react'

import { Link } from '@components'

import Navigation from './components/Navigation'
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.types'

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.menu}>
        <Link link="/" className={styles.logo}>
          <span className={styles.title}>Katerina Petrova</span>
          <span className={styles.subtitle}>фотограф</span>
        </Link>

        <Navigation />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
