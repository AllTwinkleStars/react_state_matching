import colors from './colors'
import svgs from './svgs'

const indexOfSelected = (tiles, id, color) => {
  let tileIndex

  tiles.forEach((tile, index) => {
    if (tile.id === id && tile.color === color) {
      tileIndex = index
    }
  }) 

  return tileIndex
}

const swap = (array, indexA, indexB)  => {
  const temp = array[indexA]
  array[indexA] = array[indexB]
  array[indexB] = temp
}

const randomPosition = (max) => {
  return Math.floor(Math.random() * max)
}

const createTiles = (numTiles, clickCallback) => {
  const numPairs = numTiles / 2
  const colorsCopy = Array.from(colors).slice(0, numPairs)

  return colorsCopy.reduce((accumulator, color, index) => {

    const pair = [{
      color,
      id: 1,
      handleTileClicked: clickCallback,
      key: color + '_A',
      matched: false,
      selected: false,
      svg: svgs[index % 8]
    },{
      color,
      id: 2,
      handleTileClicked: clickCallback,
      key: color + '_B',
      matched: false,
      selected: false,
      svg: svgs[index % 8]
    }]

    accumulator = accumulator.concat(pair)

    return randomizeTiles(accumulator)
  }, [])
}

const randomizeTiles = (tileArray) => {
  tileArray.forEach(_ => swap(tileArray, 0, randomPosition(tileArray.length)))

  return tileArray
}

export { createTiles, indexOfSelected }
