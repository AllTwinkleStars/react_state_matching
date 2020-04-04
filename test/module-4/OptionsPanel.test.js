import React from 'react'

import OptionsPanel from '../../src/components/OptionsPanel'
import Button from '../../src/components/Button'
import TileSelector from '../../src/components/TileSelector'

import { shallow } from 'enzyme'

describe('OptionsPanel', () => {
  const wrapper = shallow(<OptionsPanel handleNumTileChange={() => {}} numTiles={42} playing={true} startGame={() => {}}/>)

  it('Passes props to the TileSelector @pass-hntc-to-tile-selector', () => {
    const tileSelectorProps = wrapper.find(TileSelector).props()

    expect(typeof tileSelectorProps.handleNumTileChange, 'Did you pass the handleNumTileChange prop to TileSelector?').toBe('function')
  })

})


