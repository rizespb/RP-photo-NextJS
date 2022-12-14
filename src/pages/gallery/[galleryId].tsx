import type { NextPage } from 'next'

import { Layout } from '@components'
import { GalleryPage } from '@pageComponents'
import { IPhoto } from '@types'

const photos: IPhoto[] = [
  { id: 0, link: '/images/gallery/0.jpg' },
  { id: 1, link: '/images/gallery/1.jpg' },
  { id: 2, link: '/images/gallery/2.jpg' },
  { id: 3, link: '/images/gallery/3.jpg' },
  { id: 4, link: '/images/gallery/4.jpg' },
  { id: 5, link: '/images/gallery/5.jpg' },
  { id: 6, link: '/images/gallery/6.jpg' },
  { id: 7, link: '/images/gallery/7.jpg' },
  { id: 8, link: '/images/gallery/8.jpg' },
  { id: 9, link: '/images/gallery/9.jpg' },
  { id: 10, link: '/images/gallery/10.jpg' },
  { id: 11, link: '/images/gallery/11.jpg' },
  { id: 12, link: '/images/gallery/12.jpg' },
  { id: 13, link: '/images/gallery/13.jpg' },
  { id: 14, link: '/images/gallery/14.jpg' },
  { id: 15, link: '/images/gallery/15.jpg' },
]

const Gallery: NextPage = () => (
  <Layout>
    <GalleryPage photos={photos} />
  </Layout>
)

export default Gallery
