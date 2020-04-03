import React from 'react'

import App from '../../src/components/App'
import { createTiles } from '../../src/misc/utils'

import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()

  it('Has a handleTileClicked method @create-handle-tile-clicked', () => {
    expect(typeof instance.handleTileClicked, 'Did you create the handleTileClicked method on App?')
      .toEqual('function')
  })

  it('calls setState @set-the-state', () => {
    const setStateSpy = jest.spyOn(App.prototype, 'setState')
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.setState({tiles: [{id: 1, color: '#'}]})
    const tiles = instance.state.tiles
    instance.handleTileClicked(tiles[0].id, tiles[0].color)

    expect(setStateSpy.mock.calls[1][0].toBeCleared, 'Did you call setState with the correct values?').toBe(null)
    expect(setStateSpy.mock.calls[1][0].tiles, 'Did you call setState with the correct values?').toEqual(expect.any(Array))
  })

  it('sets the selected tile as the previous tile if its null @find-the-selected-tile', () => {
    const setStateSpy = jest.spyOn(App.prototype, 'setState')
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.startGame(10)
    
    const tiles = instance.state.tiles
    instance.handleTileClicked(tiles[5].id, tiles[5].color)

    expect(setStateSpy, 'Did you set the previousTileIndex to the selectedTileIndex?')
      .toHaveBeenCalledWith({ previousTileIndex: 5, tiles, toBeCleared: null})

  })

  it('handles matched tiles @handle-matched-tile', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.startGame(10)

    let tiles = instance.state.tiles

    const selectedTile = tiles[5]

    const matchingPreviousTileIndex = instance.state.tiles.findIndex((tile) => {
      return tile.color === selectedTile.color && tile.key !== selectedTile.key
    })

    instance.setState({previousTileIndex: matchingPreviousTileIndex})

    instance.handleTileClicked(selectedTile.id, selectedTile.color)


    tiles = instance.state.tiles
    expect(tiles[5].matched, 'Did you set the matched property of the selected tile to true?').toBe(true)
    expect(tiles[matchingPreviousTileIndex].matched, 'Did you set the matched property of the previous tile to true?').toBe(true)
    expect(instance.state.previousTileIndex).toBe(null)
  })

  it('handles mismatched tiles @handle-mismatched-tile', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.startGame(10)

    let tiles = instance.state.tiles


    instance.setState({previousTileIndex: 0})

    instance.handleTileClicked(tiles[5].id, tiles[5].color)


    tiles = instance.state.tiles
    expect(instance.state.toBeCleared, 'Did you add the previous and selected tiles to toBeCleared?')
      .toEqual([0,5])
    expect(instance.state.previousTileIndex, 'Did you set the previousTileIndex to nulll?').toBe(null)

  })

  it('clears mismatched tiles @clear-mismatched-tiles', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.startGame(10)

    instance.setState((state) => {
      const tiles = state.tiles
      tiles[0].selected = true
      tiles[1].selected = true

      const toBeCleared = [0, 1]
      return { tiles, toBeCleared, previousTileIndex: null }
    })

    const tiles = instance.state.tiles
    instance.handleTileClicked(tiles[3].id, tiles[3].color)

    expect(instance.state.toBeCleared, 'Did you set toBeCleared to null?').toBe(null)
    expect(tiles[0].selected, 'Did you remember to set the first tile in toBeSelected selected property to false?')
      .toBe(false)
    expect(tiles[1].selected, 'Did you remember to set the second tile in toBeSelected selected property to false?')
      .toBe(false)
  })

  it('sets the clicked tile to selected @selected-tile', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.startGame(10)

    const tiles = instance.state.tiles
    instance.handleTileClicked(tiles[3].id, tiles[3].color)

    expect(tiles[3].selected, 'Did you set the selected property on the clicked tile?').toBe(true)
  })
    
})
