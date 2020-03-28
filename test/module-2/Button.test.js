import React from 'react'

import Button from '../../src/components/Button'

import { shallow } from 'enzyme'

describe('Button', () => {
  let wrapper = shallow(<Button playing={false} startGame={() => {}}/>)

  it('Registers a click handler to the button @register-start-game-on-click', () => {
    const buttonProps = wrapper.find('button').props()

    expect(buttonProps.onClick, 'Did you pass the startGame prop to the onClick handler?').toBeInstanceOf(Function)
  })

    it('Conditionally renders text @conditionally-render-text', () => {
      let buttonChild = wrapper.find('button').childAt(0).text()

      expect(buttonChild, 'Did you pass the numTiles prop to TileSelector?').toEqual('start')

      wrapper = shallow(<Button playing={true} startGame={() => {}}/>)
      buttonChild = wrapper.find('button').childAt(0).text()

      expect(buttonChild, 'Did you pass the numTiles prop to TileSelector?').toEqual('reset')
    })

})

