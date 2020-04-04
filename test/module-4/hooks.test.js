import React from 'react'
import useHover from '../../src/hooks'

describe('Building a custom hook', () => {

  const setHovered = jest.fn()
  const mockRef = {
    current: {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }
  }

  React.useRef = jest.fn()
  React.useRef.mockReturnValue(mockRef)
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

    expect(ref).toEqual(mockRef)
    expect(hovered).toEqual('hovered')
  })

  it('calls useEffect @call-use-effect', () => {
    useHover()

    expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function))
  })

  it('returns an anonymous fn @return-anon', () => {
    const [ref, _] = useHover()

    const anon = React.useEffect.mock.calls[0][0]
    const anotherAnon = anon()

    expect(typeof anotherAnon).toBe('function')
    expect(anotherAnon.name).toBe('')
  })

  it('registers a mouseenter event listener @on-mouse-enter', () => {

    expect(mockRef.current.addEventListener).toHaveBeenCalledWith('mouseenter', expect.any(Function))
  })

})
