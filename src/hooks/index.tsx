import { useState, useEffect } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({
    width: 1200,
    height: 0
  })

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}
