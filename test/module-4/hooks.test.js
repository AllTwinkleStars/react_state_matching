import React from 'react'
import useHover from '../../src/hooks'

describe('Building a custom hook', () => {

  const setHovered = jest.fn()

  React.useRef = jest.fn()
  React.useRef.mockReturnValue('ref')
  React.useState = jest.fn()
  React.useState.mockReturnValue(['hovered', setHovered])
  React.useEffect = jest.fn()

  it('useHover @create-use-hover', () => {
    expect(typeof useHover, 'Did you remember to export useHover?').toBe('function')
  })

  it('calls useRef @create-a-ref', () => {
    useHover()

    expect(React.useRef).toHaveBeenCalled()
  })

  it('calls useState @use-state-hook', () => {
    useHover()

    expect(React.useState).toHaveBeenCalledWith(false)
  })

  it('returns the ref and hovered state @return-ref', () => {
    const [ref, hovered] = useHover()

    expect(ref).toEqual('ref')
    expect(hovered).toEqual('hovered')
  })

  it('calls useEffect @call-use-effect', () => {
    useHover()

    expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function))
  })
})
