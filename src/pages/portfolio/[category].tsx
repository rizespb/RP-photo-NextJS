import type { NextPage } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'

import { Layout } from '@components'
import { photosGalleries } from '@constants'
import { CategoryPage } from '@pageComponents'
import { EGalleries } from '@types'
import { getGalleries } from '@utils'

const Category: NextPage = () => {
  const router = useRouter()
  const {
    query: { category },
  } = router

  const isValidGallery = typeof category === 'string' && Object.values(EGalleries).includes(category as EGalleries)

  const currentGallery = photosGalleries.find(({ alias }) => alias === category)

  if (!isValidGallery || !currentGallery) {
    return <Error statusCode={404} />
  }

  const { children, description, title } = currentGallery

  const galleries = getGalleries(children)

  return (
    <Layout>
      <CategoryPage title={title} description={description} galleries={galleries} />
    </Layout>
  )
}

export default Category
