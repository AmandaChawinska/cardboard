import { MutableRefObject, useEffect } from 'react'

export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current?.contains(event.target as Element)) {
        return
      }

      handler(event)
    }

    window.addEventListener('click', listener)

    return () => window.removeEventListener('click', listener)
  }, [ref, handler])
}
