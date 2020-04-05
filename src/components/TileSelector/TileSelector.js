import React from 'react'
import useHover from '../../hooks'
import './TileSelector.css'

const TileSelector = (props) => {

  const [ref, hovered] = useHover()


  const dropdown = hovered ? (
        <div className='tileSelectorContent' >
          <div className='number' onClick={() => props.handleNumTileChange(4)}>4</div>
          <div className='number' onClick={() => props.handleNumTileChange(16)}>16</div>
          <div className='number' onClick={() => props.handleNumTileChange(36)}>36</div>
        </div>
  ) : null

 return (
   <div className='tileSelector'>
     <div>Number of Tiles</div>
     <div className='tileSelectorDropdown' ref={ref}>
       {props.numTiles}
       {dropdown}
     </div>
   </div>
 )
}

export default TileSelector
