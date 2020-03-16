import React from 'react'

import Tile from '../../src/components/Tile'
import { createTiles } from '../../src/misc/utils'

import { shallow } from 'enzyme'

describe('Tile', () => {

  it('Uses the default background color when selected and matched are false @dynamic-tile-color', () => {
    const [tile1, tile2] = createTiles(2)
    const wrapper = shallow(<Tile {...tile1} />)

    expect(wrapper.props().style, 'Did you pass an inline style to the tile?').toEqual(null)
  })

  it('Uses the configs background color when selected is true @dynamic-tile-color', () => {
    const [tile1, tile2] = createTiles(2)
    tile1.selected = true
    const wrapper = shallow(<Tile {...tile1} />)
    const style = wrapper.props().style

    expect(typeof style, 'Did you pass an inline style to the tile?').toEqual('object')
    expect(style.backgroundColor, 'Did you set the right property in your style?').toContain('#')
  })

  it('Uses the configs background color when matched is true @dynamic-tile-color', () => {
    const [tile1, tile2] = createTiles(2)
    tile1.matched = true
    const wrapper = shallow(<Tile {...tile1} />)
    const style = wrapper.props().style

    expect(typeof style, 'Did you pass an inline style to the tile?').toEqual('object')
    expect(style.backgroundColor, 'Did you set the right property in your style?').toContain('#')
  })
  // 
  // @conditionally-render-svg
  //
  it('Doesn\'t render the svg when selected or matched are false @conditionally-render-svg', () => {
    const [tile1, tile2] = createTiles(2)
    const wrapper = shallow(<Tile {...tile1} />)
    const svg = wrapper.find(tile1.svg)

    expect(svg, 'Did you pass null as a child to the `tile` `<div>`?').toHaveLength(0)
  })

  it('Renders the svg when selected is true @conditionally-render-svg', () => {
    const [tile1, tile2] = createTiles(2)
    tile1.selected = true
    const wrapper = shallow(<Tile {...tile1} />)
    const svg = wrapper.find(tile1.svg)

    expect(svg, 'Did you instantiate the `<svg />` component inside the `tile` `<div>`?').toHaveLength(1)
  })

  it('Render the svg when matched is true @conditionally-render-svg', () => {
    const [tile1, tile2] = createTiles(2)
    tile1.matched = true
    const wrapper = shallow(<Tile {...tile1} />)
    const svg = wrapper.find(tile1.svg)

    expect(svg, 'Did you instantiate the `<svg />` component inside the `tile` `<div>`?').toHaveLength(1)
  })

})


