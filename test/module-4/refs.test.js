import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TileSelector from '../../src/components/TileSelector'


describe('TileSelector', () => {
  const mockHandleClick = jest.fn()

  const container = render(<TileSelector numTiles={99} handleNumTileChange={mockHandleClick} />)


  it('attaches the ref to the div @attach-ref', () => {
    const dd = container.getByText('99')

    expect(container.queryByText('16'), 'Did you return null from the ternary?').toBe(null)

    fireEvent.mouseEnter(dd)

    expect(container.queryByText('16'), 'Did you attach the ref to the right div?').toBeTruthy()

    fireEvent.mouseLeave(dd)

    expect(container.queryByText('16'), 'Did you return null from the ternary?').toBe(null)
    
  })

})

