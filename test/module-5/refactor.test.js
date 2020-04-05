import React from 'react'

describe('Refactor', () => {
  it('copies the src directory to a new directory called refactor @copy-app', () => {
    expect(require('../../refactor/components/App/App.js'), 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(require('../../refactor/components/Board/Board.js'), 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(require('../../refactor/components/Button/Button.js'), 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(require('../../refactor/components/OptionsPanel/OptionsPanel.js'), 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(require('../../refactor/components/Tile/Tile.js'), 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(require('../../refactor/components/TileSelector/TileSelector.js'), 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
  })
})
