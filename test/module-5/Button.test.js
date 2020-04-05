import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from '../../refactor/components/Button'
import * as GameContext from '../../refactor/GameContext'

const mockHandler = jest.fn()
const MockConsumer = (props) => (
  <div id="MockConsumer">
    {props.children({playing: true, startGame: mockHandler})}
  </div>
)
const MockProvider = () => (<div id="MockProvider" />)

GameContext.default = {
  Consumer: MockConsumer, 
  Provider: MockProvider
}


describe('Button', () => {

  const wrapper = shallow(<Button />)
  
  it('instantiates context consumer @context-button', () => {
    const contextConsumer = wrapper.find(MockConsumer) 
    contextConsumer.debug()

    expect(contextConsumer.exists(), 'Did you instantiate the GameContext.Consumer?').toBeTruthy()
    expect(contextConsumer.children(), 'Did you wrap the button in the Consumer?').toHaveLength(1)

    const newWrapper = mount(<Button />)
    
    expect(newWrapper.text(), 'Did you convert the playing prop to use the context argument?').toContain('reset')

    
    newWrapper.find('button').props().onClick()
    expect(mockHandler, 'Did you convert the startGame prop to use the context argument?').toHaveBeenCalled()
  })
})

