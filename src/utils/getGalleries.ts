import { ICategory, TGallery, TGalleryPreview } from '@types'

export const getGalleries = (photosGalleries: ICategory[] | TGallery[]): TGalleryPreview[] => {
  const isSubGallary = (gallery: ICategory | TGallery): gallery is TGallery => 'photos' in gallery

  return photosGalleries.map((gallery) => ({
    id: gallery.id,
    link: isSubGallary(gallery)
      ? `/portfolio/${gallery.parentGallery}/${gallery.alias}`
      : `/portfolio/${gallery.alias}`,
    previewPhoto: gallery.previewPhoto,
    title: gallery.title,
  }))
}
