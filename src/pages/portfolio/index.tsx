import type { GetStaticProps, NextPage } from 'next'

import { Layout } from '@components'
import { photosGalleries, portfolioPageUrl } from '@constants'
import { IPortfolioPageProps, PortfolioPage } from '@pageComponents'

const Porfolio: NextPage<IPortfolioPageProps> = ({ categoryPreviews }) => (
  <Layout>
    <PortfolioPage categoryPreviews={categoryPreviews} />
  </Layout>
)

export const getStaticProps: GetStaticProps<IPortfolioPageProps> = () => {
  const categoryPreviews: IPortfolioPageProps['categoryPreviews'] = photosGalleries.map((category) => {
    const { alias, id, previewPhoto, title } = category

    return {
      id,
      link: `${portfolioPageUrl}/${alias}`,
      previewPhoto,
      title,
    }
  })

  return {
    props: {
      categoryPreviews,
    },
  }
}

export default Porfolio
