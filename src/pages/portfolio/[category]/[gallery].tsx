import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import React from 'react'

import { Layout } from '@components'
import { photosGalleries, portfolioPageUrl } from '@constants'
import { GalleryPage, IGalleryPageProps } from '@pageComponents'
import { IParams } from '@types'

const Gallery: NextPage<IGalleryPageProps> = (props) => (
  <Layout>
    <GalleryPage {...props} />
  </Layout>
)

export const getStaticProps: GetStaticProps<IGalleryPageProps> = ({ params }: GetStaticPropsContext<IParams>) => {
  if (params === undefined) {
    return {
      notFound: true,
    }
  }

  const { category, gallery } = params

  const currentCategory = photosGalleries.find(({ alias }) => alias === category)
  const parentCategoryTitle = currentCategory?.title
  const parentCategoryLink = `${portfolioPageUrl}/${currentCategory?.alias}`

  const currentGallery = currentCategory?.children.find(({ alias }) => alias === gallery)

  if (currentCategory === undefined || currentGallery === undefined) {
    return {
      notFound: true,
    }
  }

  const { description, photos, title } = currentGallery

  return {
    props: {
      description,
      parentCategory: {
        link: parentCategoryLink || '',
        title: parentCategoryTitle || '',
      },
      photos,
      title,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths: GetStaticPathsResult['paths'] = photosGalleries.flatMap((category) => {
    const categoriAlias = category.alias

    return category.children.map((gallery) => {
      const galleryAlias = gallery.alias

      return {
        params: { category: categoriAlias, gallery: galleryAlias },
      }
    })
  })

  return {
    fallback: false,
    paths,
  }
}

export default Gallery
