import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'

import { Layout } from '@components'
import { photosGalleries } from '@constants'
import { CategoryPage, ICategoryPageProps } from '@pageComponents'
import { IParams } from '@types'

const Category: NextPage<ICategoryPageProps> = (props) => (
  <Layout>
    <CategoryPage {...props} />
  </Layout>
)

export const getStaticProps: GetStaticProps<ICategoryPageProps> = ({ params }: GetStaticPropsContext<IParams>) => {
  if (params === undefined) {
    return {
      notFound: true,
    }
  }

  const { category } = params

  const currentCategory = photosGalleries.find(({ alias }) => alias === category)

  if (currentCategory === undefined) {
    return {
      notFound: true,
    }
  }

  const { alias: categoryAlias, description, title } = currentCategory

  const galleryPreviews = currentCategory.children.map((gallery) => {
    const { alias, id, previewPhoto, title } = gallery

    return { id, link: `/portfolio/${categoryAlias}/${alias}`, previewPhoto, title }
  })

  return {
    props: {
      description,
      galleryPreviews,
      title,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths: GetStaticPathsResult['paths'] = photosGalleries.map(({ alias: categoriAlias }) => {
    return {
      params: { category: categoriAlias },
    }
  })

  return {
    fallback: false,
    paths,
  }
}

export default Category
