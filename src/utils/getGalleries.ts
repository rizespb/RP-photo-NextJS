import { IGallery, TGalleryPreview, TSubGallery } from '@types'

export const getGalleries = (photosGalleries: IGallery[] | TSubGallery[]): TGalleryPreview[] => {
  const isSubGallary = (gallery: IGallery | TSubGallery): gallery is TSubGallery => 'photos' in gallery

  return photosGalleries.map((gallery) => ({
    id: gallery.id,
    link: isSubGallary(gallery)
      ? `/portfolio/${gallery.parentGallery}/${gallery.alias}`
      : `/portfolio/${gallery.alias}`,
    previewPhoto: gallery.previewPhoto,
    title: gallery.title,
  }))
}
