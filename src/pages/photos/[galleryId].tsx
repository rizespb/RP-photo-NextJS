import type { NextPage } from 'next'

import { Layout } from '@components'
import { GalleryPage } from '@pageComponents'
import { familyGallery0 } from 'constants/galleriesData/family'

const Gallery: NextPage = () => (
  <Layout>
    <GalleryPage photos={familyGallery0.photos} />
  </Layout>
)

export default Gallery
