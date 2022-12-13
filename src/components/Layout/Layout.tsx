import classNames from 'classnames'
import { FC } from 'react'

import { Link } from '@components'
import { RIGHT_SIDE_MODAL_DIV_ID } from '@constants'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.types'

const Layout: FC<ILayoutProps> = ({ children, withPaddings = true }) => {
  const rightClasses = classNames({
    [styles.right]: true,
    [styles['right--paddings']]: withPaddings,
  })

  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <Link link="/" className={styles.logo}>
          <span className={styles.title}>Katerina Petrova</span>
          <span className={styles.subtitle}>фотограф</span>
        </Link>

        <Navigation />
      </aside>

      <div className={rightClasses}>
        <main className={styles.content}>{children}</main>

        <Footer />

        <div id={RIGHT_SIDE_MODAL_DIV_ID}></div>
      </div>
    </div>
  )
}

export default Layout
