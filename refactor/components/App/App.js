import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      tiles: [],
      numTiles: 36,
      playing: false,
      previousTile: null,
    }

  }

  startGame = (numTiles) => {

    this.setState({
      playing: true,
      toBeCleared: null,
      previousTile: null,
      tiles: createTiles(this.state.numTiles, this.handleTileClicked)
    })

  }

  handleNumTileChange  = (num) => {
    this.setState({numTiles: num, playing: false,  tiles: [], })
  }

  handleTileClicked = (id, color) => {

    const tiles = Array.from(this.state.tiles)
    const selectedTile = indexOfSelected(this.state.tiles, id, color)
    let previousTile = this.state.previousTile
    let toBeCleared = this.state.toBeCleared

    if (toBeCleared) {
      tiles[toBeCleared[0]].selected = false
      tiles[toBeCleared[1]].selected = false
    }

    tiles[selectedTile].selected = true

    if (previousTile !== null) {
    
      if (tiles[previousTile].color === color && tiles[previousTile].id !== id) {
        tiles[selectedTile].matched = true  
        tiles[previousTile].matched = true  
        previousTile = null
      } else {
        toBeCleared = [previousTile, selectedTile]
        previousTile = null

      }

    } else {
      previousTile = selectedTile
    }

    this.setState({ previousTile, tiles, toBeCleared })

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles }
          startGame={this.startGame}
          handleNumTileChange={this.handleNumTileChange} />
        <Board
          tiles={this.state.tiles}
          numTiles={this.state.numTiles} />
      }
    </div>
  );

  }
}

export default App;
