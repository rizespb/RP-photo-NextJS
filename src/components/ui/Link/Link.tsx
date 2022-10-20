import NextLink from 'next/link'
import { FC } from 'react'

import { ILinkProps } from './Link.types'

const Link: FC<ILinkProps> = (props) => {
  const { children, className = '', isNextLink = true, link, onClick, target } = props

  return !isNextLink ? (
    <a className={className} target={target} rel="noreferrer" href={link} onClick={onClick}>
      {children}
    </a>
  ) : (
    <NextLink href={link}>
      <a className={className} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
