import React from 'react'

import OptionsPanel from '../../src/components/OptionsPanel'
import Button from '../../src/components/Button'
import TileSelector from '../../src/components/TileSelector'

import { shallow } from 'enzyme'

describe('OptionsPanel', () => {
  const wrapper = shallow(<OptionsPanel numTiles={42} playing={true} startGame={() => {}}/>)

  it('Passes props to the TileSelector @pass-props-to-tile-selector', () => {
    const tileSelectorProps = wrapper.find(TileSelector).props()

    expect(tileSelectorProps.numTiles, 'Did you pass the numTiles prop to TileSelector?').toEqual(42)
  })

  it('Passes props to the Button @pass-props-to-button', () => {
    const buttonProps = wrapper.find(Button).props()

    expect(buttonProps.playing, 'Did you pass the playing prop to Board?').toEqual(true)
  })

  it('Passes startGame to the Button @pass-start-game-to-button', () => {
    const buttonProps = wrapper.find(Button).props()

    expect(typeof buttonProps.startGame, 'Did you pass the startGame prop to the Button?').toEqual('function')
  })
})


