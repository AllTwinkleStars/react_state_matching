import React from 'react'

import Board from '../../src/components/Board'
import Tile from '../../src/components/Tile'

import { createTiles } from '../../src/misc/utils'

import { shallow } from 'enzyme'

describe('Board', () => {
  const tiles = createTiles(12)
  const wrapper = shallow(<Board tiles={tiles} />)

  it('Passes props from the board to tiles @pass-board-props-to-tiles', () => {

    const firstTileProps = wrapper.find(Tile).at(0).props()
    const firstTileKey = wrapper.find(Tile).at(0).key()

    expect(firstTileProps.color, 'Did you pass the tile object as props to the <Tile>?').toContain('#')
    expect(firstTileProps.selected, 'Did you pass the tile object as props to the <Tile>?').toEqual(false)
    expect(firstTileProps.matched, 'Did you pass the tile object as props to the <Tile>?').toEqual(false)
    expect(typeof firstTileProps.svg, 'Did you pass the tile object as props to the <Tile>?').toEqual('function')
    expect(typeof firstTileProps.id, 'Did you pass the tile object as props to the <Tile>?').toEqual('number')
    expect(firstTileKey, 'Did you pass the tile object as props to the <Tile>?').toContain('#')

    const lastTileProps = wrapper.find(Tile).at(11).props()
    const lastTileKey = wrapper.find(Tile).at(11).key()

    expect(lastTileProps.color, 'Did you pass the tile object as props to the <Tile>?').toContain('#')
    expect(lastTileProps.selected, 'Did you pass the tile object as props to the <Tile>?').toEqual(false)
    expect(lastTileProps.matched, 'Did you pass the tile object as props to the <Tile>?').toEqual(false)
    expect(typeof lastTileProps.svg, 'Did you pass the tile object as props to the <Tile>?').toEqual('function')
    expect(typeof lastTileProps.id, 'Did you pass the tile object as props to the <Tile>?').toEqual('number')
    expect(lastTileKey, 'Did you pass the tile object as props to the <Tile>?').toContain('#')

    const tileLength = wrapper.find(Tile).length

    expect(tileLength, 'Did you create an array of <Tile /> components?').toEqual(12)
  })

})
