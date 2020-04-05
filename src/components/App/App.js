import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    }
  }

  handleNumTileChange = (num) => {
    this.setState({
      numTiles: num,
      playing: false,
      tiles: []
    })
  }

  handleTileClicked = (id, color) => {
    this.setState((state) => {
      const tiles = state.tiles
      let toBeCleared = state.toBeCleared
      const selectedTileIndex = indexOfSelected(tiles, id, color)
      let previousTileIndex = state.previousTileIndex

      if(toBeCleared !== null) {
        tiles[toBeCleared[0]].selected = false
        tiles[toBeCleared[1]].selected = false
        toBeCleared = null
      }

      tiles[selectedTileIndex].selected = true

      if(previousTileIndex !== null) {
        const previousTile = tiles[previousTileIndex]
        const selectedTile = tiles[selectedTileIndex]

        if(previousTile.id !== selectedTile.id &&  previousTile.color === color) {
          selectedTile.matched = true
          previousTile.matched = true
          previousTileIndex = null
        } else {
          toBeCleared = [previousTileIndex, selectedTileIndex]
          previousTileIndex = null
        }
      } else {
        previousTileIndex = selectedTileIndex
      }

      return {toBeCleared, tiles, previousTileIndex}
    })
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(state.numTiles, this.handleTileClicked)
    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel handleNumTileChange={this.handleNumTileChange} playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame} />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      }
    </div>
  );

  }
}

export default App;
