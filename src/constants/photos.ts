import { EGalleries, IGallery } from '@types'

import { familyGallery0, familyGallery1, familyGallery2, familyGallery3 } from './galleriesData/family'
import { natureGallery0, natureGallery1, natureGallery2, natureGallery3, natureGallery4 } from './galleriesData/nature'
import { portraitsGallery0, portraitsGallery1, portraitsGallery2 } from './galleriesData/nature copy'

export const photosGalleris: IGallery[] = [
  {
    alias: EGalleries.Family,
    children: [familyGallery0, familyGallery1, familyGallery2, familyGallery3],
  },
  {
    alias: EGalleries.Nature,
    children: [natureGallery0, natureGallery1, natureGallery2, natureGallery3, natureGallery4],
  },
  {
    alias: EGalleries.Portraits,
    children: [portraitsGallery0, portraitsGallery1, portraitsGallery2],
  },
]
