import { ParsedUrlQuery } from 'querystring'

import { ReactElement } from 'react'

export enum EGalleries {
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

export type TStringOrElement = string | ReactElement | (string | ReactElement)[]

export interface ICategory {
  alias: EGalleries
  title: string
  description: string
  children: TGallery[]
  id: number
  previewPhoto: string
}

export type TGallery = Pick<ICategory, 'title' | 'description' | 'previewPhoto' | 'id'> & {
  alias: string
  photos: IPhoto[]
  parentGallery: EGalleries
}

export type TGalleryPreview = Pick<ICategory, 'title' | 'previewPhoto' | 'id'> & {
  link: string
}

export interface IParams extends ParsedUrlQuery {
  category?: string
  gallery?: string
}
