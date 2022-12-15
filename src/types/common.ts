import { ReactElement } from 'react'

export const enum EGalleries {
  Family = 'family',
  Nature = 'nature',
  Portraits = 'portraits',
}

export const enum ENavItems {
  Portfolio = 'Портфолио',
  Reviews = 'Отзывы',
  Others = 'Другой пункт',
}

export interface IPhoto {
  id: number
  link: string
}

export type TStringOrElement = string | ReactElement

export interface IGallery {
  alias: EGalleries
  title: string
  description: string
  children: TSubGallery[]
  id: number
  previewPhoto: string
}

export type TSubGallery = Pick<IGallery, 'title' | 'description' | 'previewPhoto' | 'id'> & {
  alias: string
  photos: IPhoto[]
}

export type TGalleryPreview = Pick<IGallery, 'title' | 'previewPhoto' | 'id'> & {
  link: string
}
