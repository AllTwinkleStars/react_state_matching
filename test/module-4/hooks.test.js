import React from 'react'
import useHover from '../../src/hooks'

describe('Building a custom hook', () => {

  React.useRef = jest.fn()
  React.useRef.mockReturnValue('ref')

  it('useHover @create-use-hover', () => {
    expect(typeof useHover, 'Did you remember to export useHover?').toBe('function')
  })

  it('calls useRef @create-a-ref', () => {
    useHover()

    expect(React.useRef).toHaveBeenCalled()
  })
})
