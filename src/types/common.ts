import { ReactElement } from 'react'

export const enum EGalleries {
  Family = 'family',
  Nature = 'nature',
  Portraits = 'portraits',
}

export interface IPhoto {
  id: number
  link: string
}

export type TStringOrElement = string | ReactElement
export interface IGallery {
  alias: EGalleries
  children: ISubGallery[]
}

export interface ISubGallery {
  alias: string
  photos: IPhoto[]
}
