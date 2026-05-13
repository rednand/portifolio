import { renderHook, act } from '@testing-library/react'
import { useWindowSize } from '.'

describe('useWindowSize', () => {
  it('returns default size before mount', () => {
    const { result } = renderHook(() => useWindowSize())
    expect(result.current.width).toBe(window.innerWidth)
    expect(result.current.height).toBe(window.innerHeight)
  })

  it('updates size on window resize', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800
      })
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 600
      })
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(800)
    expect(result.current.height).toBe(600)
  })

  it('removes resize listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useWindowSize())
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    removeSpy.mockRestore()
  })
})
