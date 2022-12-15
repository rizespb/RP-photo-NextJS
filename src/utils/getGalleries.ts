import { IGallery, TGalleryPreview, TSubGallery } from '@types'

export const getGalleries = (photosGalleries: IGallery[] | TSubGallery[]): TGalleryPreview[] =>
  photosGalleries.map((gallery) => ({
    id: gallery.id,
    link: `/portfolio/${gallery.alias}`,
    previewPhoto: gallery.previewPhoto,
    title: gallery.title,
  }))
