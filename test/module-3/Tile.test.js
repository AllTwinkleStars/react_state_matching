import React from 'react'

import Tile from '../../src/components/Tile'
import One from '../../src/assets/svgs/1'

import { shallow } from 'enzyme'

describe('Tile', () => {

  const mockFn = jest.fn()

  it('Attaches handleTileClicked to the Tile @tile-on-click', () => {
    const wrapper = shallow(<Tile handleTileClicked={mockFn} id={3} color={'#C0FFEE'} svg={One} />)
    
    wrapper.simulate('click')

    expect(mockFn, 'Did you pass the handleTileClick function to the onClick attribute?').toHaveBeenCalledWith(3, '#C0FFEE')
  })

})


