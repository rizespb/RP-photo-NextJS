import { FC } from 'react'

import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.types'

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.menu}>
        <span className={styles.title}>Katerina Petrova</span>
        <span className={styles.subtitle}>photographer</span>
        <nav className={styles.navigation}>
          <ul>
            <li>Меню 1</li>
            <li>Меню 2</li>
            <li>Меню 3</li>
            <li>Меню 4</li>
            <li>Меню 5</li>
          </ul>
        </nav>
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
