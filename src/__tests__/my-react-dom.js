import React from 'react'
import {render, screen} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'
test('renders a number import with a label "Favorite Number"', () => {
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
