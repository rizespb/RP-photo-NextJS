import classNames from 'classnames'
import { FC, useMemo, useState } from 'react'
import { Collapse } from 'react-collapse'

import { Link } from '@components/ui'
import { photosGalleries, portfolioPageUrl } from '@constants'
import { ENavItems } from '@types'

import { navItemsData } from './Navigation.constant'
import styles from './Navigation.module.scss'
import { INavItem, TCollapsableItemProps, TNavItemProps } from './Navigation.types'

const NavItem: FC<TNavItemProps> = (props) => {
  const { link, subItems, title } = props
  const hasSubItems = subItems && subItems.length > 0

  return (
    <>
      {hasSubItems ? (
        <CollapsableItem title={title} subItems={subItems} />
      ) : (
        link && (
          <li className={styles.navItem}>
            <Link link={link} className={styles.navItem__link}>
              {title}
            </Link>
          </li>
        )
      )}
    </>
  )
}

const CollapsableItem: FC<TCollapsableItemProps> = (props) => {
  const { subItems, title } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className={styles.navItem}>
      <span onClick={() => setIsOpen(!isOpen)}>{title}</span>

      <Collapse isOpened={isOpen}>
        <ul className={styles.subNavigation__list}>
          {subItems.map(({ id, link, title }) => (
            <NavItem link={link} title={title} key={id} />
          ))}
        </ul>
      </Collapse>
    </li>
  )
}

const Navigation: FC = () => {
  const navItems = useMemo((): INavItem[] => {
    const portfolioItemIndex = navItemsData.findIndex(({ title }) => title === ENavItems.Portfolio)
    const portfolioItem = navItemsData[portfolioItemIndex]

    const portfolioSubItems: INavItem[] = photosGalleries.map((gallery) => ({
      id: gallery.id,
      link: `${portfolioPageUrl}/${gallery.alias}`,
      title: gallery.title,
    }))

    const newNavItems = [...navItemsData]

    newNavItems[portfolioItemIndex] = { ...portfolioItem, subItems: portfolioSubItems }

    return newNavItems
  }, [])

  return (
    <nav className={styles.navigation}>
      <div className={classNames(styles.shadow, styles.shadow__top)} key="shadow-top" />

      <ul className={styles.navigation__list}>
        {navItems.map((navItem) => (
          <NavItem link={navItem.link} subItems={navItem.subItems} title={navItem.title} key={navItem.id} />
        ))}
      </ul>

      <div className={classNames(styles.shadow, styles.shadow__bottom)} key="shadow-bottom" />
    </nav>
  )
}

export default Navigation
