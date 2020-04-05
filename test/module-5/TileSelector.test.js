import React from 'react'
import { mount, shallow } from 'enzyme'
import TileSelector from '../../refactor/components/TileSelector'
import * as useHover from '../../refactor/hooks'

import * as GameContext from '../../refactor/GameContext'

const mockHandler = jest.fn()
const MockConsumer = (props) => (
  <div id="MockConsumer">{props.children({numTiles: 99, handleNumTileChange: mockHandler})}</div>
)
const MockProvider = () => (<div id="MockProvider" />)

GameContext.default = {
  Consumer: MockConsumer, 
  Provider: MockProvider
}

useHover.default = jest.fn()
useHover.default.mockReturnValue([() => 'ref', true])


describe('TileSelector', () => {

  const wrapper = shallow(<TileSelector />)
  
  it('instantiates context consumer @context-tile-selector', () => {
    const contextConsumer = wrapper.find(MockConsumer) 

    expect(contextConsumer.exists(), 'Did you instantiate the GameContext.Consumer?').toBeTruthy()
    expect(contextConsumer.children(), 'Did you wrap the right content in the Consumer?').toHaveLength(1)

    const newWrapper = mount(<TileSelector />)

    expect(newWrapper.find('.tileSelectorDropdown').text(), 'Did you remember to use the argument instead of props for numTiles?').toContain('99')
     
    newWrapper.find('.number').at(0).props().onClick()
    expect(mockHandler, 'Did you remember to use the argument instead of props for handleNumTileChange?').toHaveBeenCalledWith(4)

    newWrapper.find('.number').at(1).props().onClick()
    expect(mockHandler, 'Did you remember to use the argument instead of props for handleNumTileChange?').toHaveBeenCalledWith(16)

    newWrapper.find('.number').at(2).props().onClick()
    expect(mockHandler, 'Did you remember to use the argument instead of props for handleNumTileChange?').toHaveBeenCalledWith(36)
  })
})
