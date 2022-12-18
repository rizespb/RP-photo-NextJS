import { FC } from 'react'

import { GalleriesList, Header } from '@components'

import { TEXTS } from './PortfolioPage.constants'
import { IPortfolioPageProps } from './PortfolioPage.types'

const PortfolioPage: FC<IPortfolioPageProps> = ({ categoryPreviews }) => (
  <>
    <Header title={TEXTS.title} description={TEXTS.description} />

    <GalleriesList galleryPreviews={categoryPreviews} />
  </>
)

export default PortfolioPage
