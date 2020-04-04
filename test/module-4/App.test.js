import React from 'react'

import App from '../../src/components/App'
import OptionsPanel from '../../src/components/OptionsPanel'
import Board from '../../src/components/Board'

import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()


  it('Creates the handNumTileChange method @handle-num-tile-change', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({
      tiles: [1,2],
      playing: true,
      numTiles: 8,
      toBeCleared: [1,2,3],
      previousTileIndex: 6
    })

    const instance = wrapper.instance()

    instance.handleNumTileChange(14)

    expect(instance.state.numTiles, 'Did you set the correct state in handleNumTileChange?').toBe(14)
    expect(instance.state.playing,  'Did you set the correct state in handleNumTileChange?').toBe(false)
    expect(instance.state.tiles,  'Did you set the correct state in handleNumTileChange?').toHaveLength(0)
    
  })

  it('Passes handleNumTileChange to OptionsPanel @pass-handle-num-tile-change', () => {
    const optionsPanelProps = wrapper.find(OptionsPanel).props()

    expect(typeof optionsPanelProps.handleNumTileChange, '').toEqual('function')
  })


})
