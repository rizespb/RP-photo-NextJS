import { useRouter } from 'next/router'
import { FC } from 'react'

import { GalleriesList, Header } from '@components'
import { EIcons, portfolioPageUrl } from '@constants'

import { TEXTS } from './CategoryPage.constants'
import { ICategoryPageProps } from './CategoryPage.types'

const CategoryPage: FC<ICategoryPageProps> = (props) => {
  const { description, galleryPreviews, title } = props

  const router = useRouter()

  const handleBackButtonClick = (): void => {
    router.push(portfolioPageUrl)
  }

  return (
    <>
      <Header
        title={title}
        description={description}
        buttonText={TEXTS.backButtonText}
        buttonIcon={EIcons.ArrowRight}
        onButtonClick={handleBackButtonClick}
      />

      <GalleriesList galleryPreviews={galleryPreviews} />
    </>
  )
}

export default CategoryPage
