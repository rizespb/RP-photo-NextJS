import { FC } from 'react'

import { GalleriesList, Header } from '@components'

import { IGalleriesListPageProps } from './CategoryPage.types'

const CategoryPage: FC<IGalleriesListPageProps> = (props) => {
  const { description, galleries, title } = props

  return (
    <>
      <Header title={title} description={description} />

      <GalleriesList galleries={galleries} />
    </>
  )
}

export default CategoryPage
