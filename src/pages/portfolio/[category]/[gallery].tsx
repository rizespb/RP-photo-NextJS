import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import React from 'react'

import { Layout } from '@components'
import { photosGalleries } from '@constants'
import { GalleryPage, IGalleryPageProps } from '@pageComponents'
import { IParams } from '@types'

const Gallery: NextPage<IGalleryPageProps> = ({ photos }) => (
  <Layout>
    <GalleryPage photos={photos} />
  </Layout>
)

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext<IParams>) => {
  if (params === undefined) {
    return {
      notFound: true,
    }
  }

  const { category, gallery } = params

  const photos = photosGalleries
    .find(({ alias }) => alias === category)
    ?.children.find(({ alias }) => alias === gallery)?.photos

  if (photos === undefined) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      photos,
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
