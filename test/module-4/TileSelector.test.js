import React from 'react'
import * as useHover from '../../src/hooks'
import * as restore from '../../src/hooks'

import TileSelector from '../../src/components/TileSelector'

import { mount, shallow } from 'enzyme'

describe('TileSelector', () => {
  const mockHandleClick = jest.fn()
  const mockRef = jest.fn()
  useHover.default = jest.fn()

  useHover.default.mockReturnValue([() => 'reff' , true])

  const wrapper = mount(<TileSelector numTiles={99} handleNumTileChange={mockHandleClick} />)
  const instance = wrapper.instance()

  it('calls useHover @call-use-hover', () => {
    expect(useHover.default, '').toHaveBeenCalled()
  })

  it('adds onClick attributes to numbers @on-click-dropdown', () => {
    const numbers = wrapper.find('.number')
    numbers.at(0).simulate('click')
    expect(mockHandleClick, 'Did you pass the right number into the handleNumTileChange function?' ).toHaveBeenCalledWith(4)
    numbers.at(1).simulate('click')
    expect(mockHandleClick,'Did you pass the right number into the handleNumTileChange function?'  ).toHaveBeenCalledWith(16)
    numbers.at(2).simulate('click')
    expect(mockHandleClick, 'Did you pass the right number into the handleNumTileChange function?' ).toHaveBeenCalledWith(36)
  })
})

