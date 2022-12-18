import { FC } from 'react'

import { GalleriesList, Header } from '@components'

import { ICategoryPageProps } from './CategoryPage.types'

const CategoryPage: FC<ICategoryPageProps> = (props) => {
  const { description, galleryPreviews, title } = props

  return (
    <>
      <Header title={title} description={description} />

      <GalleriesList galleryPreviews={galleryPreviews} />
    </>
  )
}

export default CategoryPage
