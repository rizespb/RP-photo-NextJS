import type { NextPage } from 'next'

import { Layout } from '@components'
import { photosGalleries } from '@constants'
import { GalleriesListPage } from '@pageComponents'
import { getGalleries } from '@utils'

const PorfolioCategory: NextPage = () => {
  const galleries = getGalleries(photosGalleries)

  return (
    <Layout>
      <GalleriesListPage title="Портфолио" description="Какое-то описание" galleries={galleries} />
    </Layout>
  )
}

export default PorfolioCategory
