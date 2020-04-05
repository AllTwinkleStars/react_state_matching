import React from 'react'
import { shallow } from 'enzyme'
import App from '../../refactor/components/App'

import * as GameContext from '../../refactor/GameContext'
const MockConsumer = () => (<div id="MockConsumer" />)
const MockProvider = () => (<div id="MockProvider" />)

GameContext.default = {
  Consumer: MockConsumer, 
  Provider: MockProvider
}




describe('App', () => {

  const wrapper = shallow(<App />)
  
  it('instantiates context provider @instantiate-context-provider', () => {
    const contextProvider = wrapper.find(MockProvider) 

    expect(contextProvider.exists(), 'Did you instantiate the Game.Provider?').toBeTruthy()
    expect(contextProvider.props().value, 'Did you pass the state object to the provider as value?').toEqual({
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    })
    expect(contextProvider.children(), 'Did you wrap the OptionsPanel and the Board?').toHaveLength(2)
  })
})
