import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const dynamicColor = props.selected || props.matched ? {backgroundColor: props.color} : null
  const svg = <props.svg style={{fontSize: '4em', }}/>

  return (
    <div className='Tile' onClick={() => props.handleTileClicked(props.id, props.color)} style={dynamicColor}>
      { props.selected || props.matched ? svg : null }
    </div>
  )
}

export default Tile
