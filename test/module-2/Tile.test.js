import React from 'react'

import Tile from '../../src/components/Tile'
import { createTiles } from '../../src/misc/utils'

import { shallow } from 'enzyme'

describe('Tile', () => {

  it('Dynamically changes the tile color @dynamic-tile-color', () => {
    // Uses the default background color when selected and matched are false 
    const [tile1, tile2] = createTiles(2)
    let wrapper = shallow(<Tile {...tile1} />)

    expect(wrapper.props().style, 'Did you pass an inline style to the tile?').toEqual(null)

    // Uses the configs background color when selected is true 
    const [tile3, tile4] = createTiles(2)
    tile3.selected = true
    wrapper = shallow(<Tile {...tile3} />)
    let style = wrapper.props().style

    expect(typeof style, 'Did you pass an inline style to the tile?').toEqual('object')
    expect(style.backgroundColor, 'Did you set the right property in your style?').toContain('#')

    // Uses the configs background color when matched is true 
    const [tile5, tile6] = createTiles(2)
    tile5.matched = true
    wrapper = shallow(<Tile {...tile5} />)
    style = wrapper.props().style

    expect(typeof style, 'Did you pass an inline style to the tile?').toEqual('object')
    expect(style.backgroundColor, 'Did you set the right property in your style?').toContain('#')
  })

  it('Render the svg when matched is true or selected is true @conditionally-render-svg', () => {
    const [tile1, tile2] = createTiles(2)
    tile1.matched = true
    const wrapper1 = shallow(<Tile {...tile1} />)
    const svg1 = wrapper1.find(tile1.svg)

    expect(svg1, 'Did you instantiate the `<svg />` component inside the `tile` `<div>`?').toHaveLength(1)

    tile2.matched = true
    const wrapper2 = shallow(<Tile {...tile2} />)
    const svg2 = wrapper1.find(tile2.svg)

    expect(svg2, 'Did you instantiate the `<svg />` component inside the `tile` `<div>`?').toHaveLength(1)

    if(svg1.length === 1 && svg2.length === 1) {


      const [tile1, tile2] = createTiles(2)
      const wrapper = shallow(<Tile {...tile1} />)

      return expect(wrapper.children(), 'Did you pass null as a child to the `tile` `<div>`?').toHaveLength(0)
    }
  })

})


