import React from 'react'

describe('Game Context', () => {
  React.createContext = jest.fn()
  const GameContext = require('../../refactor/GameContext')
 
  it('Creates the GameContext @create-game-context', () => {

    expect(React.createContext).toHaveBeenCalled()
  })

  it('Sets default context values @set-default-context', () => {
    
    expect(React.createContext).toHaveBeenCalledWith({
      numTiles: 36,
      playing: false,
      handleNumTileChange: expect.any(Function),
      startPlaying: expect.any(Function)
    })
  })
})
