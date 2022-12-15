import type { NextPage } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'

import { Layout } from '@components'
import { photosGalleries } from '@constants'
import { GalleriesListPage } from '@pageComponents'
import { EGalleries } from '@types'
import { getGalleries } from '@utils'

const GalleriesList: NextPage = () => {
  const router = useRouter()
  const {
    query: { galleryId },
  } = router

  const isValidGallery = typeof galleryId === 'string' && Object.values(EGalleries).includes(galleryId as EGalleries)

  const currentGallery = photosGalleries.find(({ alias }) => alias === galleryId)

  if (!isValidGallery || !currentGallery) {
    return <Error statusCode={404} />
  }

  const { children, description, title } = currentGallery

  const galleries = getGalleries(children)

  return (
    <Layout>
      <GalleriesListPage title={title} description={description} galleries={galleries} />
    </Layout>
  )
}

export default GalleriesList
