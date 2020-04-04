import React from 'react'
import useHover from '../../src/hooks'

describe('Building a custom hook', () => {

  React.useRef = jest.fn()
  React.useRef.mockReturnValue('ref')
  React.useState = jest.fn()
  React.useState.mockReturnValue(['hovered', 'setHovered'])

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
})
