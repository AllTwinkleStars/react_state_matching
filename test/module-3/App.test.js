import React from 'react'

import App from '../../src/components/App'
import { createTiles } from '../../src/misc/utils'

import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()

  it('Has a handleTileClicked method @crate-handle-tile-clicked', () => {
    expect(typeof instance.handleTileClicked, 'Did you create the handleTileClicked method on App?')
      .toEqual('function')
  })

  it('calls setState @set-the-state', () => {
    const setStateSpy = jest.spyOn(App.prototype, 'setState')
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.handleTileClicked()

    expect(setStateSpy).toHaveBeenCalledWith({ tiles: [], toBeCleared: null})
  })

  it('sets the selected tile as the previous tile if its null @find-the-selected-tile', () => {
    const setStateSpy = jest.spyOn(App.prototype, 'setState')
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.startGame(10)
    
    const tiles = instance.state.tiles
    instance.handleTileClicked(tiles[5].id, tiles[5].color)

    expect(setStateSpy).toHaveBeenCalledWith({ previousTileIndex: 5, tiles, toBeCleared: null})

  })
})
