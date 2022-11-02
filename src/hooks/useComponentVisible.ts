import { MutableRefObject, useEffect, useRef, useState } from 'react'

type Option = {
  contains: (other: Node | null) => boolean
}

interface IUseComponentVisible<T> {
  ref: MutableRefObject<T | null>
  isComponentVisible: boolean
  setIsComponentVisible: (value: boolean) => void
}

export const useComponentVisible = <T extends Option>(
  initialIsVisible: boolean,
  capturingPhase = true,
): IUseComponentVisible<T> => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)

  const ref = useRef<T | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    if (isComponentVisible) {
      document.addEventListener('click', handleClickOutside, capturingPhase)
    }

    if (!isComponentVisible) {
      document.removeEventListener('click', handleClickOutside, capturingPhase)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, capturingPhase)
    }
  }, [isComponentVisible, capturingPhase])

  return { isComponentVisible, ref, setIsComponentVisible }
}
