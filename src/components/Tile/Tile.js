import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const dynamicColor = props.selected || props.matched ? { backgroundColor: props.color} : null
  return (
    <div className='Tile' onClick={() => { props.handleTileClicked(props.id, props.color) }} style={dynamicColor}>
    { props.selected || props.matched ? <props.svg /> : null }
    </div>
  )
}

export default Tile
