import React from 'react'
import useHover from '../../src/hooks'

describe('Building a custom hook', () => {

  it('useHover @create-use-hover', () => {
    expect(typeof useHover, 'Did you remember to export useHover?').toBe('function')
  })

})
