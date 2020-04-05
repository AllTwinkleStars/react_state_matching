import React from 'react'

describe('Game Context', () => {
  React.createContext = jest.fn()
  const GameContext = require('../../refactor/GameContext')
 
  it('passes the correct arguments to React.Context @create-game-context', () => {

    expect(React.createContext).toHaveBeenCalled()
  })
})
