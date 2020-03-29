import React from 'react'
import './TileSelector.css'

const TileSelector = () => {


  const dropdown = (
        <div className='tileSelectorContent' >
          <div className='number'>4</div>
          <div className='number'>16</div>
          <div className='number'>36</div>
        </div>
  )

 return (
   <div className='tileSelector'>
     <div>Number of Tiles</div>
     <div className='tileSelectorDropdown'>
       {dropdown}
     </div>
   </div>
 )
}

export default TileSelector
