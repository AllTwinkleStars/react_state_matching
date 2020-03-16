import React from 'react'

import App from '../../src/components/App'
import OptionsPanel from '../../src/components/OptionsPanel'
import Board from '../../src/components/Board'

import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()

  it('Instantiates the state @instantiate-the-state', () => {
    expect(instance.state, 'Did you instantiate the state?').not.toBeNull()
    expect(instance.state.tiles, 'Did you set tiles on state?').toEqual([])
    expect(instance.state.numTiles,'Did you set numTiles on state?').toEqual(36)
    expect(instance.state.playing, 'Did you set playing on state?').toEqual(false)
    expect(instance.state.previousTile, 'Did you set previousTile on state?').toBeNull()
    expect(instance.state.toBeCleared, 'Did you set toBeCleared on state?').toBeNull()
  })

  it('Passes state to the props on OptionsPanel @pass-state-to-options-panel', () => {
    const optionsPanelProps = wrapper.find(OptionsPanel).props()

    expect(optionsPanelProps.playing, 'Did you pass playing from state as a prop to OptionsPanel?').toEqual(false)
    expect(optionsPanelProps.numTiles, 'Did you pass numTiles from state as a props to OptionsPanel?').toEqual(36)
  })

  it('Passes state to the props on Board @pass-state-to-board', () => {
    const boardProps = wrapper.find(Board).props()

    expect(boardProps.tiles, 'Did you pass tiles from state as a prop to Board?').toEqual([])
    expect(boardProps.numTiles, 'Did you pass numTiles from state as a props to Board?').toEqual(36)
  })

  it('Creates the startGame method @start-game-method', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({
      tiles: [],
      playing: false,
      numTiles: 8,
      toBeCleared: [1,2,3],
      previousTile: 6
    })

    const instance = wrapper.instance()

    instance.startGame()

    expect(instance.state.tiles, 'Did you call the createTiles function?').toHaveLength(8)
    expect(instance.state.playing, 'Did you set playing on state?').toEqual(true)
    expect(instance.state.previousTile, 'Did you set previousTile on state?').toBeNull()
    expect(instance.state.toBeCleared, 'Did you set toBeCleared on state?').toBeNull()
    
  })

  it('Passes startGame to OptionsPanel @pass-start-game-to-options', () => {
    const optionsPanelProps = wrapper.find(OptionsPanel).props()

    expect(typeof optionsPanelProps.startGame, 'Did you pass the startGame method as a prop to OptionsPanel?').toEqual('function')
  })


})
