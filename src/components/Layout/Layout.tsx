import classNames from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Link, MenuButton } from '@components'
import { RIGHT_SIDE_MODAL_DIV_ID } from '@constants'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import UpButton from './components/UpButton'
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.types'

const Layout: FC<ILayoutProps> = ({ children, withPaddings = true }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsMenuOpened(false)
  }, [router])

  const handleMenuButtonClick = (): void => setIsMenuOpened((prev) => !prev)

  const rightClasses = classNames({
    [styles.right]: true,
    [styles['right--paddings']]: withPaddings,
  })

  const navigationWrapperClasses = classNames({
    [styles.navigationWrapper]: true,
    [styles['navigationWrapper--opened']]: isMenuOpened,
  })

  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <Link link="/" className={styles.logo}>
          <span className={styles.title}>Katerina Petrova</span>
          <span className={styles.subtitle}>фотограф</span>
        </Link>

        <span className={styles.menuButtonWrapper}>
          <MenuButton onClick={handleMenuButtonClick} state={isMenuOpened ? 'close' : 'burger'} />
        </span>

        <div className={navigationWrapperClasses}>
          {/* key добавлен, чтобы при закрытии меню происходило размонтирование компонента и при следующем открытии меню было свернуто */}
          <Navigation key={String(isMenuOpened)} />
        </div>
      </aside>

      <div className={rightClasses}>
        <main className={styles.content}>{children}</main>

        <Footer withInnerPaddings={!withPaddings} />

        <div id={RIGHT_SIDE_MODAL_DIV_ID}></div>
      </div>

      <span className={styles.upButtonWrapper}>
        <UpButton />
      </span>
    </div>
  )
}

export default Layout
