import { IPhoto } from '@types'

export interface IGalleryProps {
  photos: IPhoto[]
  onPhotoClick?: (id: number) => void
}
