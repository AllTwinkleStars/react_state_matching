import React from 'react'

import TileSelector from '../../src/components/TileSelector'

import { shallow } from 'enzyme'

describe('TileSelector', () => {
  const wrapper = shallow(<TileSelector numTiles={99} />)
  const instance = wrapper.instance()

  it('Passes the numTiles prop as a child to the tileSelectorDropDown @render-num-tiles', () => {

    const numTiles = wrapper.find('.tileSelectorDropdown').childAt(0).text()
    expect(numTiles, 'Did you pass the numTiles prop to TileSelector?').toEqual('99')
  })

})


