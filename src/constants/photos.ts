import { EGalleries, IGallery } from '@types'

import { familyGallery0, familyGallery1, familyGallery2, familyGallery3 } from './galleriesData/family'
import { natureGallery0, natureGallery1, natureGallery2, natureGallery3, natureGallery4 } from './galleriesData/nature'
import { portraitsGallery0, portraitsGallery1, portraitsGallery2 } from './galleriesData/portraits'

export const photosGalleries: IGallery[] = [
  {
    alias: EGalleries.Family,
    children: [familyGallery0, familyGallery1, familyGallery2, familyGallery3],
    description: 'Какое-то описание галлереии Семейные',
    id: 0,
    previewPhoto: '/images/photos/family/gallery0/7.avif',
    title: 'Семейные',
  },
  {
    alias: EGalleries.Nature,
    children: [natureGallery0, natureGallery1, natureGallery2, natureGallery3, natureGallery4],
    description:
      'Какое-то длинное описание галлереии Природа. Какое-то длинное описание галлереии Природа. Какое-то длинное описание галлереии Природа. Какое-то длинное описание галлереии Природа',
    id: 1,
    previewPhoto: '/images/photos/nature/gallery4/7.avif',
    title: 'Природа',
  },
  {
    alias: EGalleries.Portraits,
    children: [portraitsGallery0, portraitsGallery1, portraitsGallery2],
    description: 'Какое-то описание галлереии Портреты',
    id: 2,
    previewPhoto: '/images/photos/portraits/gallery2/7.avif',
    title: 'Портреты',
  },
]
