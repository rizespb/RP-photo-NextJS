import classNames from 'classnames'
import { FC, useState } from 'react'

import { Link, MenuButton } from '@components'
import { RIGHT_SIDE_MODAL_DIV_ID } from '@constants'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.types'

const Layout: FC<ILayoutProps> = ({ children, withPaddings = true }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleMenuButtonClick = (): void => setIsMenuOpened((prev) => !prev)

  const leftSideClasses = classNames({
    [styles.left]: true,
    [styles['left--opened']]: isMenuOpened,
  })

  const rightClasses = classNames({
    [styles.right]: true,
    [styles['right--paddings']]: withPaddings,
  })

  return (
    <div className={styles.container}>
      <aside className={leftSideClasses}>
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

      <MenuButton className={styles.menuButton} onClick={handleMenuButtonClick} isMenuOpened={isMenuOpened} />
    </div>
  )
}

export default Layout
