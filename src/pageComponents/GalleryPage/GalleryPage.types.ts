import { IPhoto } from '@types'

export interface IGalleryPageProps {
  photos: IPhoto[]
  title: string
  description: string
  parentCategory: {
    title: string
    link: string
  }
}
