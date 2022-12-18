import { IPhoto } from '@types'

export interface IPhotoGalleryProps {
  photos: IPhoto[]
  onPhotoClick?: (id: number) => void
}
