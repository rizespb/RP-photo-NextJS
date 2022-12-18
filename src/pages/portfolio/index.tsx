import type { NextPage } from 'next'

import { Layout } from '@components'
import { photosGalleries } from '@constants'
import { PortfolioPage } from '@pageComponents'
import { getGalleries } from '@utils'

const Porfolio: NextPage = () => {
  const galleries = getGalleries(photosGalleries)

  return (
    <Layout>
      <PortfolioPage />
    </Layout>
  )
}

export default Porfolio
