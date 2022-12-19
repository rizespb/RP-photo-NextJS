import { IPhoto } from '@types'

export interface ISliderProps {
  photos: IPhoto[]
  className?: string
  initialSlideIndex?: number
  slideImageMode: 'contain' | 'cover'
}
